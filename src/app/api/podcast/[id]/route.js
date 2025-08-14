import connectDB from "@/lib/connectDB";
import Podcast from "@/models/Podcast.model";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  await connectDB();
  try {
    const podcast = await Podcast.findById(params.id)
    if (!podcast) {
      return NextResponse.json({ success: false, message: "Podcast not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: podcast }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  await connectDB();
  try {
    const { title, id } = await req.json();

    const updated = await Podcast.findByIdAndUpdate(
      params.id,
      { title, id },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return NextResponse.json({ success: false, message: "Podcast not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updated }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function DELETE(_, { params }) {
  await connectDB();
  try {
    const deleted = await Podcast.findByIdAndDelete(params.id);
    if (!deleted) {
      return NextResponse.json({ success: false, message: "Podcast not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: "Podcast deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}