document.addEventListener("DOMContentLoaded", () => {
  const qr = new QRCode(document.getElementById("qrcode"));
  const urlInput = document.getElementById("url");
  const generateButton = document.getElementById("generatorButton");

  function makeCode() {
    qr.makeCode(urlInput.value);
  }

  makeCode();
  urlInput.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
      makeCode()
    }
  });
  generateButton.addEventListener("click", () => makeCode());
});
