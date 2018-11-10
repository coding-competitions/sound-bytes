# Constant Spectrum Melody (JavaScript, 294 bytes)

[Constant Spectrum Melody](https://en.wikipedia.org/wiki/Constant_spectrum_melody) Generator for NodeJs.

* Sample rate: 44.1 kHz
* Sample size: 32 bits
* Channels: 1 (monaural)
* Encoding: floating-point

To run this sample, execute one of the following commands:

    # native version
    node . | sox -t raw -r 44100 -b 32 -c 1 -e f - -t ogg out.ogg

    # docker version
    node . | docker run --rm -i sox -t raw -r 44100 -b 32 -c 1 -e f - -t ogg -> out.ogg