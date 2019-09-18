---
layout: entry
title: Experimental
author: pswg
lang: C
score: 126
params:
  r: 8000
  b: 8
  c: 1
  e: un
  v: .5
commands:
  build: gcc ./main.c -o a.out
  run: ./a.out
---

Modified, de-golfed version of [Viznut's original](http://countercomplex.blogspot.com/2011/10/algorithmic-symphonies-from-one-line-of.html) 64-byte original.

This is an example submission written in C.

> Scoring Note: 122 bytes code + 4 bytes flags = 126 total score

`main.c`
```cs

{% include_relative main.c %}

```
