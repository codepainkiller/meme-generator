var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var image = new Image();
var currentImgPath = 'images/' + randomInt(18) + '.png';

var textTop = document.getElementById('textTop');
var textBottom = document.getElementById('textBottom');

function resizeCanvas()
{
    canvas.width = image.width;
    canvas.height = image.height;
}

function drawText(text, y)
{
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

function drawImage(path)
{
    image.onload = function() {
        resizeCanvas();
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
    image.src = path;
}

function clearCanvas()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function renderText() {
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    drawText(textTop.value.toUpperCase(), 50);
    drawText(textBottom.value.toUpperCase(), canvas.height-30);
}

$('.form-control').on('keyup', renderText);

drawImage(currentImgPath);