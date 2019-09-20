// Good Eats entry
n = 10, rate = 44100;
f = n => Math.pow(2, (n-49)/12)*440;
song = [49,53,54,52,51,50,49,49,49];
for (i = 0; i < song.length; i++) {
    var n = song[i], l = Math.round(rate / f(n));
    var arr = new Array(1600);
    if (n > 0) for (var x = 0; x < l; x++){
        arr[x] = Math.random();
    }
    for (t = 0; t < 20000; t++) {
        var y = arr[t % l];
        process.stdout.write(Buffer.from(Float32Array.of(y).buffer));
        arr[t % l] = (arr[t % l] + arr[(t + 1) % l]) / 2 * .998
    }
}