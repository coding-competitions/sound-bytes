# Constant Spectrum Melody (JavaScript, 294 bytes)

> **Listen**:  
<audio controls src="out.ogg">
  <a href="out.ogg" target="_blank">click here</a>
</audio>
> 
> ![Spectrogram](spectrogram.png)

[Constant spectrum melody](https://en.wikipedia.org/wiki/Constant_spectrum_melody) generator for NodeJs.

* Sample rate: 44.1 kHz
* Sample size: 32 bits
* Channels: 1 (monaural)
* Encoding: floating-point

To run this sample, execute one of the following commands:

    # native version
    node . | sox -t raw -r 44100 -b 32 -c 1 -e f - -t ogg out.ogg

    # docker version
    node . | docker run --rm -i sox -t raw -r 44100 -b 32 -c 1 -e f - -t ogg -> out.ogg