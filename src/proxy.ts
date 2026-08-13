import { type NextRequest, NextResponse, userAgent } from "next/server";

const MIN_BROWSER_VERSIONS: Readonly<Record<string, number>> = {
  Chrome: 120,
  Firefox: 120,
  Edge: 120,
  Safari: 17,
  YaBrowser: 24
};

const UNSUPPORTED_BROWSER_PATH = "/unsupported-browser";

export function proxy(request: NextRequest) {
  const { browser, isBot } = userAgent(request);

  if (isBot) {
    return NextResponse.next();
  }

  const ua = request.headers.get("user-agent") ?? "";
  const yandexMatch = ua.match(/YaBrowser\/(\d+)/i);

  const browserName = yandexMatch ? "YaBrowser" : browser.name;

  if (!browserName) {
    return NextResponse.redirect(
      new URL(UNSUPPORTED_BROWSER_PATH, request.url),
    );
  }

  const browserVersion = yandexMatch
    ? Number.parseInt(yandexMatch[1], 10)
    : Number.parseInt(browser.major ?? "", 10);

  const minimumVersion = MIN_BROWSER_VERSIONS[browserName];

  const isSupported =
    minimumVersion !== undefined &&
    Number.isFinite(browserVersion) &&
    browserVersion >= minimumVersion;

  if (isSupported) {
    return NextResponse.next();
  }

  return NextResponse.redirect(
    new URL(UNSUPPORTED_BROWSER_PATH, request.url),
  );
}

export const config = {
  matcher: [
    "/((?!unsupported-browser|_next/static|_next/image|favicon.ico|error.png).*)",
  ],
};