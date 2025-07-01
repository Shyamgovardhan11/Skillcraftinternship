let html5QrCode;
let isScanning = false;

function startScan() {
  if (isScanning) return;

  const qrRegionId = "reader";
  html5QrCode = new Html5Qrcode(qrRegionId);

  Html5Qrcode.getCameras().then(devices => {
    if (devices && devices.length) {
      html5QrCode.start(
        { facingMode: "environment" }, // or devices[0].id
        {
          fps: 10,
          qrbox: 250
        },
        qrCodeMessage => {
          document.getElementById("result-text").textContent = qrCodeMessage;
          stopScan(); // Stop automatically after one scan
        },
        error => {
          // console.log(`Scan error: ${error}`);
        }
      );
      isScanning = true;
    }
  }).catch(err => {
    alert("Camera access denied or not supported.");
  });
}

function stopScan() {
  if (html5QrCode && isScanning) {
    html5QrCode.stop().then(() => {
      html5QrCode.clear();
      isScanning = false;
    }).catch(err => {
      console.error("Stop error:", err);
    });
  }
}

function generateQR() {
  const qrContainer = document.getElementById("qrcode");
  const input = document.getElementById("qr-input").value.trim();
  qrContainer.innerHTML = "";

  if (!input) {
    alert("Please enter some text to generate a QR code.");
    return;
  }

  new QRCode(qrContainer, {
    text: input,
    width: 200,
    height: 200
  });
}
