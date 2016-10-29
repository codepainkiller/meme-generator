function randomInt(limit) {
    return Math.floor(Math.random() * (limit+1));
}

function filenameGenerate() {
    return 'mem-' + (new Date()).valueOf().toString() + '.png';
}
