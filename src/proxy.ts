import { type NextRequest, NextResponse, userAgent } from "next/server";

const MIN_BROWSER_VERSIONS: Readonly<Record<string, number>> = {
  Chrome: 120,
  Firefox: 120,
  Edge: 120,
  Safari: 17,
  YaBrowser: 24,
  Opera: 106,
};

const UNSUPPORTED_BROWSER_PATH = "/unsupported-browser";

export function proxy(request: NextRequest) {
  const { browser, isBot } = userAgent(request);

  if (isBot) {
    return NextResponse.next();
  }

  const name = browser.name ?? "";
  const normalizedName =
    name === "Mobile Safari"
      ? "Safari"
      : name.includes("Chrome")
        ? "Chrome"
        : name.includes("Firefox")
          ? "Firefox"
          : name.includes("Edge")
            ? "Edge"
            : name.includes("Opera")
              ? "Opera"
              : name.includes("Samsung")
                ? "Chrome"
                : name;

  const browserName = name === "YaBrowser" ? "YaBrowser" : normalizedName;
  const browserVersion = Number.parseInt(browser.version ?? "", 10);
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