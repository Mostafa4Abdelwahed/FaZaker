import connectDB from "@/lib/connectDB";
import Category from "@/models/Category.model";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  await connectDB();
  try {
    const category = await Category.findById(params.id);
    if (!category) {
      return NextResponse.json(
        { success: false, message: "Category not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { success: true, data: category },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  await connectDB();
  try {
    const { name } = await req.json();
    const updated = await Category.findByIdAndUpdate(
      params.id,
      { name },
      { new: true }
    );
    if (!updated) {
      return NextResponse.json(
        { success: false, message: "Category not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: updated }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(_, { params }) {
  await connectDB();
  try {
    const deleted = await Category.findByIdAndDelete(params.id);
    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Category not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { success: true, message: "Category deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
