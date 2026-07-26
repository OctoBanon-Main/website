export const dynamic = "force-static";

export default function UnsupportedBrowserPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        background: "#222226",
        color: "#FFFFFF",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div style={{ maxWidth: 520 }}>
        <h1 style={{ margin: "0 0 16px" }}>
          Unsupported Browser
        </h1>

        <p style={{ lineHeight: 1.6 }}>
          Your browser is too old to run this website correctly. Please update
          your browser to continue.
        </p>

        <ul style={{ lineHeight: 1.8, paddingLeft: "20px" }}>
          <li>
            <a
              href="https://www.google.com/chrome/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://www.microsoft.com/edge"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Edge
            </a>
          </li>
          <li>
            <a
              href="https://www.mozilla.org/firefox/new/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mozilla Firefox
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}