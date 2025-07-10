import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json({
        message: "Hello, API! 🌟",
        timestamp: new Date().toISOString(),
    })
}
