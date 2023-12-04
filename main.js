document.addEventListener("DOMContentLoaded", () => {
  const qr = new QRCode(document.getElementById("qrcode"));
  const urlInput = document.getElementById("url");
  const generateButton = document.getElementById("generatorButton");

  const r = /^(ftp|http|https):\/\/[^ "]+$/;

  function makeCode() {
    r.test(urlInput.value)
      ? qr.makeCode(urlInput.value)
      : alert("Invalid URL! Add http:// or https:// before the domain name");
  }

  makeCode();

  urlInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      makeCode();
    }
  });
  generateButton.addEventListener("click", () => makeCode());
});
