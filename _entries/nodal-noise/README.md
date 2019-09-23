---
layout: entry
title: Nodal Noise
author: pswg
lang: sh + Node.js
score: 43
params:
  r: 4000
  b: 16
  c: 1
  e: un
commands:
  run: /bin/sh run.sh
---

`run.sh`
```sh

{% include_relative run.sh %}

```

Uses Node.js parse errors and sh pipes to generate 'noise' from the pits of hell.  
Contains no actual JavaScript!

# Explanation

`n="node -i"` defines a variable, `$n` with the value `"node -i"`.

`echo $n` returns the value of the variable `$n`.

`|$n` pipes the result of the previous command to the command pointed to by `$n`, that is `node -i`, or the `node` CLI with the `--interactive` flag. This will return the following parse error:

> ```
> > node -i
> ReferenceError: node is not defined
> ```

`|$n` pipes the result of the previous command (the above parse error) to the command pointed to by `$n`. This will result in even more parse errors:

> ```
> > > ReferenceError: node is not defined
> > ReferenceError: node is not defined
> ^
> 
> SyntaxError: Unexpected token >
> 
> > > >
> ^
> 
> SyntaxError: Unexpected token >
> ```

`|$n...` continues this process until enough parse errors are present to be converted to a few seconds of audio.