import cloudinary from "@/lib/cloudinary";
import connectDB from "@/lib/connectDB";
import Charity from "@/models/Charity.model";
import { Readable } from "stream";

export async function GET() {
  try {
    await connectDB();
    const charities = await Charity.find().sort({ createdAt: -1 });
    return Response.json({ success: true, data: charities });
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const formData = await req.formData();
    const number = formData.get("number");
    const imageFile = formData.get("logo");

    if ((!number, !imageFile)) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await imageFile.arrayBuffer());

    const image = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "Chairty-Images" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );

      const readableStream = new Readable();
      readableStream.push(buffer);
      readableStream.push(null);
      readableStream.pipe(uploadStream);
    });

    const charity = await Charity.create({ number, logo: image.secure_url });
    return Response.json({ success: true, data: charity }, { status: 201 });
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
