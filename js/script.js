function generateQRCodes() {
    var text = document.getElementById('textArea').value;
    var lines = text.split('\n');
    var qrCodeContainer = document.getElementById('qrCodeContainer');
    qrCodeContainer.innerHTML = '';

    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim(); // Eliminar espacios en blanco al inicio y final de la línea

        if (line !== '') {
            // Verificar si la línea no está vacía
            var qrCodeWrapper = document.createElement('div');
            qrCodeWrapper.classList.add('qrCodeWrapper');
            qrCodeContainer.appendChild(qrCodeWrapper);

            var qrCodeDiv = document.createElement('div');
            qrCodeDiv.classList.add('qrCodeContainer');
            qrCodeWrapper.appendChild(qrCodeDiv);

            var qrCode = new QRCode(qrCodeDiv, {
                text: line,
                width: 128,
                height: 128,
            });

            var qrCodeText = document.createElement('p');
            qrCodeText.textContent = line;
            qrCodeWrapper.appendChild(qrCodeText);
        }
    }
}
