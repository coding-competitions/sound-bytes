n = 10, harmon = 10, rate = 44100, df = 0.1;
for (t = 1; t <= 30 * rate; t++) {
  for (i = 0, y = 0; i <= n; i++)
    for (j = 1; j <= harmon; j++) 
      y += Math.sin(2 * Math.PI * (55 + i * df) * j * t / rate) / (n * harmon);
  process.stdout.write(Buffer.from(Float32Array.of(y).buffer));
}