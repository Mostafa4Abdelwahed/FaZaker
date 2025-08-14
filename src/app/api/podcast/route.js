import cloudinary from "@/lib/cloudinary";
import connectDB from "@/lib/connectDB";
import Podcast from "@/models/Podcast.model";
import { NextResponse } from "next/server";
import { Readable } from "stream";

export async function GET() {
  await connectDB();
  try {
    const podcasts = await Podcast.find()
      .sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, data: podcasts },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  await connectDB();
  try {
    const formData = await req.formData();
    const title = formData.get("title");
    const id = formData.get("id");

    if (!title || !id) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const podcast = await Podcast.create({ title, id });

    return NextResponse.json({ success: true, data: podcast }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
