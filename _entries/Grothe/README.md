---
layout: entry
title: Channel Surfing in the Apocalypse
author: Grothe
lang: C# (console)
score: 186
params:
  r: 8200
  b: 16
  c: 1
  e: un
commands:
  run: dotnet run > out.raw
  docker run -i --rm pswg/sox -t raw -r 8200 -c 1 -b 16 -e un - -t ogg - < out.raw > out.ogg
  Play out.ogg somewhere
---

Enjoy, but not loudly.
