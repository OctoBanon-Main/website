export const dynamic = "force-static";

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Unsupported Browser</title>

  <style>
    @font-face {
      font-family: "Adwaita Sans";
      src: url("/fonts/AdwaitaSans-Regular.ttf") format("truetype");
      font-style: normal;
      font-weight: 400;
    }

    html,
    body {
      width: 100%;
      height: 100%;
    }

    body {
      margin: 0;
      background: #222226;
      color: #fff;
      font-family: "Adwaita Sans", Arial, Helvetica, sans-serif;
    }

    .page {
      display: table;
      width: 100%;
      height: 100%;
    }

    .content {
      display: table-cell;
      padding: 24px;
      text-align: center;
      vertical-align: middle;
    }

    .error-image {
      display: block;
      width: 200px;
      height: 200px;
      margin: 0 auto 20px;
    }

    h1 {
      margin: 0 0 20px;
      font-size: 30px;
      line-height: 36px;
    }

    p {
      max-width: 520px;
      margin: 0 auto 20px;
      font-size: 14px;
      font-weight: bold;
      line-height: 20px;
    }

    a {
      display: inline-block;
      padding: 12px 20px;
      border-radius: 999px;
      background: #39393c;
      color: #fff;
      font-weight: bold;
      text-decoration: none;
    }

    a:hover,
    a:focus {
      background: #434346;
    }
  </style>
</head>

<body>
  <div class="page">
    <div class="content">
      <img
        class="error-image"
        src="/error.png"
        alt="Error"
        width="200"
        height="200"
      >

      <h1>Oh.</h1>

      <p>
        It looks like your browser isn't supported. Please update it or use a modern browser to continue.
      </p>

      <a href="https://browsehappy.com/">
        Choose a Browser
      </a>
    </div>
  </div>
</body>
</html>`;

export function GET() {
  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-UA-Compatible": "IE=edge",
      "Cache-Control": "public, max-age=86400",
    },
  });
}