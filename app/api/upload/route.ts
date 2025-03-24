import { cloudinary } from "@/lib/cloudinary";

export async function POST(req: Request) {
  try {
    const fileStr = req.body.data;
    console.log(fileStr);
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      folder: "qr-moment",
      overwrite: true,
      invalidate: true,
    });

    return Response.json(uploadedResponse, { status: 200 });
    return Response.json("ok", { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
