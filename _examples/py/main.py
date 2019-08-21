from math import sin, pi, pow
from os import write
from random import random
from struct import pack

rate = 44100
for k in range(9, 89):
  f = int(rate / (pow(2, (k - 49) / 12.0) * 440))
  a = [.9 * sin(2 * pi * x / rate) + .1 * random() for x in range(0, f)]
  for t in range(0, rate // 4):
    write(1, pack("f", a[t % f]))
    a[t % f] = (a[t % f] + a[(t + 1) % f]) / 2 * 0.998