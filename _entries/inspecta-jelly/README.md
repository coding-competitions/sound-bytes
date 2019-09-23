---
layout: entry
title: Inspecta Jelly
author: pswg
lang: Jelly
score: 148
params:
  r: 44100
  b: 32
  c: 1
  e: fl
commands:
  run: jelly f inspecta.jelly # or jelly fu inspecta.utf8
---

A crude attempt to write music in [Jelly](https://github.com/DennisMitchell/jellylanguage). 
Kinda like nailing jelly to a wall.

`inspecta.jelly` (UTF-8 version)
```
{% include_relative inspecta.utf8 %}
```

## Explanation

Jelly is a ['tacit' programming language](https://en.wikipedia.org/wiki/Tacit_programming), meaning
programs mostly consist of a sequence of operators that chain together to make more complicated
operators, called 'chains' which can further be grouped together into 'links'.

The program is composed of four 'links' that are used to generate a complete song.

 1. The first link is responsible for formatting binary output:
    
    `“¡ZP#QṢsẸ'ƒñ1Ị⁸¶6¦⁸G"ḥṇ[Œy!ðĠ=|-Ṅ⁺Kẋ~»;;⁾))` takes a single argument, let's call it `z`, and returns a string formatted like this:

    ```py
    import os,struct
    os.write(1,struct.pack("f",{z}))
    ```

    `ŒV` evaluates the previous result as Python code.

 2. The second link defines a method for computing the audio frequency of a given piano key. This is the main tool for interpreting the melody that will be defined later.

    `_49` subtract 49 from the argument passed to this link.

    `÷12` divide the previous result by `12` (using floating-point division).

    `2*` raise 2 to the previous result.

    `×440` multiply the previous result by `440`
    
    In all, this is equivalent to the Python code:
    ```py
    def freq(z) = math.pow(2, (z - 49) / 12.0) * 440
    ```

    This equation was taken straight from [Wikipedia](https://en.wikipedia.org/wiki/Piano_key_frequencies).

 3. The third link defines a method for generating a sine wave of a specific duration at a given frequency. This is the 'synthesizer' that will convert the given note to recognizable sound, although a sine wave is just about as simple as a synthesizer can get.

    `⁽þE` is the constant value `8820`. This is the chosen length of a quarter note; at a sample rate of 44.1kHz, this equates to 200ms or ¹⁄₅ seconds.

    `Ḷ` creates a sequence from zero up to the previous result - 1, i.e. `range(0, 8820)`. Note, because this is a sequence, all of the following operators automatically apply to every element of this sequence.

    `÷122.` divides the previous result by `122.5`
    
    `×Çµ` applies the second link to the argument then multiplies the previous result by this value.
    
    `°` multiplies the previous result sequence by `pi / 180` (converting degrees to radians).

    `ÆS` returns the sine of the previous result.

    In all, this is roughly equivalent to the Python code:

    ```py
    def synth = [math.sin(x / 122.5 * freq(z) * math.pi / 180) for x in range(8820)]
    ```

 4. The last link is the main entry point of the program.
    
    `“')*,..**--)),,**')*,..**22222222')*,..**--)),,**3210////¡¡..3333‘` creates a specific sequence of integers. This defines the 'melody' in terms of piano keys like so:
    ```py
    melody = [39, 41, 42, 44, 46, 46, 42, 42, 45, 45, 41, 41, 44, 44, 42, 42, 39, 41, 42, 44, 46, 46, 42, 42, 50, 50, 50, 50, 50, 50, 50, 50, 39, 41, 42, 44, 46, 46, 42, 42, 45, 45, 41, 41, 44, 44, 42, 42, 51, 50, 49, 48, 47, 47, 47, 47, 0, 0, 46, 46, 51, 51, 51, 51]
    ```
    
    `Ç€` applies the third link to each element of the previous result, i.e. it creates an array of arrays representing sine waves for each note.
    
    `F` flattens the previous result, into a single array.
    
    `1Ŀ€` applies the first link to each element of the previous result, i.e. it writes each value to stdout as binary.
    
    In all, this is equivalent to the python code:

    ```py
    for x in melody:
      for y in synth(x)
        output(y)
    ```

The rhythmic 'popping' noise is partially because each 'note' starts a brand new sine wave with no consideration of where the previous sine wave left off. This could be alleviated by having one single range for the whole melody instead of generating a separate range per note. It could also be reduced by multiplying the sine wave near the beginning or end of a note to fade the sound in or out more smoothly.
