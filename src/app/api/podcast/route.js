import connectDB from "@/lib/connectDB";
import Podcast from "@/models/Podcast.model";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  try {
    const podcasts = await Podcast.find()
      .populate("category", "name") 
      .sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: podcasts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  await connectDB();
  try {
    const { title, image, category, video } = await req.json();

    if (!title || !image || !category || !video) {
      return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 });
    }

    const podcast = await Podcast.create({ title, image, category, video });

    return NextResponse.json({ success: true, data: podcast }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}