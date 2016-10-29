var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var image = new Image();
var currentImgPath = 'images/5.png';

var textTop = document.getElementById('textTop');
var textBottom = document.getElementById('textBottom');

function resizeCanvas() {
    canvas.width = image.width;
    canvas.height = image.height;
}

function drawText(text, y) {
    context.textAlign = 'center';
    context.font = '30px Impact';
    context.strokeStyle = 'black';
    context.strokeText(text, canvas.width/2, y);
    context.lineWidth = 3;
    context.fillStyle = 'white';
    context.fillText(text, canvas.width/2, y);
    context.textBaseline = 'bottom';

    //console.log('Size text', context.measureText(text).width);
}

function renderImage(path) {
    image.onload = function() {
        resizeCanvas();
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        renderText();
    };
    image.src = path;
}

function renderText() {
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    drawText(textTop.value.toUpperCase(), 50);
    drawText(textBottom.value.toUpperCase(), canvas.height-30);
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function downloadCanvas(link, filename) {
    link.href = canvas.toDataURL();
    link.download = filename;
}

function generateGallery() {
    var html = '';

    for (var i = 0; i <= 20; i++) {
        html += '<img src="images/' + i +'.png" data-id="' + i + '" class="img-gallery">';
    }

    $('#gallery').append(html);
}


renderImage(currentImgPath);
generateGallery();

$('.form-control').on('keyup', renderText);

$('#download').on('click', function () {
    downloadCanvas(this, filenameGenerate());
});

$('#gallery').on('click', '.img-gallery', function () {
    currentImgPath = 'images/' + $(this).data('id') + '.png';
    renderImage(currentImgPath);
});