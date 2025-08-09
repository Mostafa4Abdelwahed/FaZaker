import connectDB from "@/lib/connectDB";
import cloudinary from "@/lib/cloudinary";
import Sermon from "@/models/Sermon.model";
import { Readable } from "stream";

async function uploadToCloudinary(file, folder) {
  const buffer = Buffer.from(await file.arrayBuffer());

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder, resource_type: "auto" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result.secure_url);
      }
    );

    const readableStream = new Readable();
    readableStream.push(buffer);
    readableStream.push(null);
    readableStream.pipe(uploadStream);
  });
}

export async function GET() {
  try {
    await connectDB();
    const sermons = await Sermon.find().sort({ createdAt: -1 });
    return Response.json({ success: true, data: sermons });
  } catch (error) {
    return Response.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const formData = await req.formData();

    const text = formData.get("text");
    const sheikh = formData.get("sheikh");
    const voiceFile = formData.get("voice");
    const videoUrl = formData.get("video");

    if (!text || !sheikh || !voiceFile || !videoUrl) {
      return Response.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const voiceUrl = await uploadToCloudinary(voiceFile, "Sermons/Voice");

    const sermon = await Sermon.create({
      text,
      sheikh,
      voice: voiceUrl,
      video: videoUrl,
    });

    return Response.json({ success: true, data: sermon }, { status: 201 });
  } catch (error) {
    return Response.json({ success: false, message: error.message }, { status: 500 });
  }
}