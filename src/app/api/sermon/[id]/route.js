import connectDB from "@/lib/connectDB";
import Sermon from "@/models/Sermon.model";

export async function GET(req, { params }) {
  try {
    await connectDB();
    const sermon = await Sermon.findById(params.id);
    if (!sermon) {
      return Response.json({ success: false, message: "Sermon not found" }, { status: 404 });
    }
    return Response.json({ success: true, data: sermon });
  } catch (error) {
    return Response.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    await connectDB();
    const body = await req.json();
    const updated = await Sermon.findByIdAndUpdate(params.id, body, { new: true });

    if (!updated) {
      return Response.json({ success: false, message: "Sermon not found" }, { status: 404 });
    }
    return Response.json({ success: true, data: updated });
  } catch (error) {
    return Response.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const deleted = await Sermon.findByIdAndDelete(params.id);

    if (!deleted) {
      return Response.json({ success: false, message: "Sermon not found" }, { status: 404 });
    }
    return Response.json({ success: true, message: "Sermon deleted" });
  } catch (error) {
    return Response.json({ success: false, message: error.message }, { status: 500 });
  }
}