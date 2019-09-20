// Song of Time entry
n = 10, rate = 44100;
f = n => Math.pow(2, (n-49)/12)*440;
song =  [61,61,54,54,54,54,57,57,61,61,54,54,54,54,57,57,61,64,63,63,59,59,57,59,61,61,54,54,52,56,54,54,54,54,54,54,54,54,54,54];
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