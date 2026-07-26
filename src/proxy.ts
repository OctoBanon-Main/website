import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
    const ua = req.headers.get("user-agent") ?? "";

    const chrome = ua.match(/Chrome\/(\d+)/);
    const firefox = ua.match(/Firefox\/(\d+)/);
    const safari = ua.match(/Version\/(\d+).+Safari/);
    const edge = ua.match(/Edg\/(\d+)/);

    let supported = false;

    if (chrome) supported = Number(chrome[1]) >= 120;
    else if (firefox) supported = Number(firefox[1]) >= 120;
    else if (edge) supported = Number(edge[1]) >= 120;
    else if (safari) supported = Number(safari[1]) >= 17;

    if (!supported) {
    return NextResponse.redirect(new URL("/unsupported-browser", req.url));
    }
}