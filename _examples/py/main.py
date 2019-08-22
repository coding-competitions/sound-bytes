import math, os, random, struct
rate = 44100
for k in range(9, 89):
  f = int(rate / (math.pow(2, (k - 49) / 12.0) * 440))
  a = [.9 * math.sin(2 * math.pi * x / rate) + .1 * random.random() for x in range(0, f)]
  for t in range(0, rate // 4):
    os.write(1, struct.pack("f", a[t % f]))
    a[t % f] = (a[t % f] + a[(t + 1) % f]) / 2 * 0.998