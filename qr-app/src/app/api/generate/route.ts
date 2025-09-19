import { NextResponse } from "next/server"; 
import QRCode from "qrcode";

export async function POST(req: Request) {
    const { url } = await req.json();

    try {
        const qr = await QRCode.toDataURL(url);
        return NextResponse.json({ qr });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to generate QR code" }, 
            { status: 500 }
        );
    }
}
