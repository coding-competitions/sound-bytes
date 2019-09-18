// Sarah Kim's entry
n = 10, harmon = 10, rate = 44100, df = 0.1;
f = n => Math.pow(2, (n-49)/12)*440;
tetris = [0, 56, 51, 52, 54, 52, 51, 49, 49, 52, 56, 54, 52, 51, 51, 52, 54, 56, 52, 49, 49, 54, 54, 57, 61, 59, 57, 56, 56, 52, 56, 54, 52, 0, 51, 51, 52, 54, 56, 52, 49, 49, 0];
for (i = 0; i < tetris.length; i++) {
    var n = tetris[i], l = Math.round(rate / f(n));
    var arr = new Array(1600);
    if (n > 0) for (var x = 0; x < l; x++){
        arr[x] = Math.random();
    }
    for (t = 0; t < 18000; t++) {
        var y = arr[t % l];
        process.stdout.write(Buffer.from(Float32Array.of(y).buffer));
        arr[t % l] = (arr[t % l] + arr[(t + 1) % l]) / 2 * .998
    }
}