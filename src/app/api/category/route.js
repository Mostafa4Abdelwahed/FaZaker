import connectDB from "@/lib/connectDB";
import Category from "@/models/Category.model";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: categories }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  await connectDB();
  try {
    const { name } = await req.json();

    if (!name) {
      return NextResponse.json({ success: false, message: "Name is required" }, { status: 400 });
    }

    const exists = await Category.findOne({ name });
    if (exists) {
      return NextResponse.json({ success: false, message: "Category already exists" }, { status: 400 });
    }

    const category = await Category.create({ name });
    return NextResponse.json({ success: true, data: category }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
