import connectDB from "@/lib/connectDB";
import Charity from "@/models/Charity.model";

export async function GET(req, { params }) {
  try {
    await connectDB();
    const charity = await Charity.findById(params.id);
    if (!charity) {
      return Response.json({ success: false, message: "Charity not found" }, { status: 404 });
    }
    return Response.json({ success: true, data: charity });
  } catch (error) {
    return Response.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    await connectDB();
    const body = await req.json();
    const charity = await Charity.findByIdAndUpdate(params.id, body, { new: true });
    if (!charity) {
      return Response.json({ success: false, message: "Charity not found" }, { status: 404 });
    }
    return Response.json({ success: true, data: charity });
  } catch (error) {
    return Response.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const charity = await Charity.findByIdAndDelete(params.id);
    if (!charity) {
      return Response.json({ success: false, message: "Charity not found" }, { status: 404 });
    }
    return Response.json({ success: true, message: "Charity deleted" });
  } catch (error) {
    return Response.json({ success: false, message: error.message }, { status: 500 });
  }
}
