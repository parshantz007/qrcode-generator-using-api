let imgBox = document.getElementById("imgBox");

let qrImg = document.getElementById("qrImage");

let qrText = document.getElementById("qrText");

function generateQr() {
  if (qrText.value.length > 0) {
    qrImg.src = "https://quickchart.io/qr?text=" + qrText.value;
    imgBox.classList.add("show-img");
  }
}
