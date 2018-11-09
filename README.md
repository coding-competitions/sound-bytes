# Musical Code

## Challenge

Write a complete program, in the language of your choice, in **512** bytes or less of source code, the output of which can be interpretted as a raw audio waveform. The output may either be directed to `stdout` a file name specified by command line parameters. Your program must also terminate by itself after approximately 30 seconds worth of raw data has been produced. If your program relies on external data, libraries, or command line arguments or switches (excluding the filename or wave format parameters) in order to produce the appropriate output, these will be counted toward the 512 byte limit.

The program must be accompanied `README.md` which contains the title for the submission, the name of the contestant, the language(s) used, the total number of source bytes, and briefly describes the program. The `README` must specify the sample rate (in Hz or kHz), number of channels, and sample size in bits (either 8, 16, 24, 32, or 64), and encoding type (either signed integer, unsigned integer, or floating-point) of the raw waveform produced by your program. If the output of the program is non-deterministic (e.g. randomly generated), be sure to make note of that as well.

### Utilities

For consistency, is *highly* recommended that you use `sox` or the included docker image, also named `sox` to convert raw data to `ogg`.

### Examples

The following example submissions have been provided:

| Name | Language | Source Bytes |
|-|-|-|
| [Constant Spectrum Melody](examples/js/README.md) | JavaScript | 300 bytes |
| [Crickets from Outer Space](examples/cs/README.md) | C# | 399 bytes |

## Submissions

Start off by forking this repo.

To submit an entry to this competition, you must first create an issue with the same title as that appears in your submission's `README`. Then, create a PR which adds your entry under the `entries` folder in the git repo.

Contestants may submit multiple entries.

A submission may be rejected if it fails to satisfy any of the requirements described above, if the moderators of the competition are unable to compile or run the program, or if the entry appears to be copied from other entries without any significant modification. 

Entries must be submitted as an issue before Friday, Nov 30, 2018.

## Judging

This is a *subjective* competition. The winner will be decided by popular vote.

Anyone who submitted an entry that was accepted is welcome vote on any accepted enter, *including their own*.

Voting is done by adding a ❤️ reaction to the issue in which the enty was submitted. Eligible voters may vote on any number of entries. Reactions added by non-eligible voters will not be considered for the purposes of vote counting. The cut-off date for votes shall be Friday, Dec 7, 2018.

The entry that receives the most votes shall be declared the winner. In the event of a tie, the entry with the fewer source bytes shall be declared the winner.
