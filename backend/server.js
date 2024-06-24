const doGet = () =>
  HtmlService.createTemplateFromFile("frontend/Index")
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag(
      "viewport",
      'width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1"'
    )
    .setTitle("INTELSI SAC")
    .setFaviconUrl("https://favicon.io/favicon.ico");

const include = (ruta) =>
  HtmlService.createHtmlOutputFromFile(ruta).getContent();