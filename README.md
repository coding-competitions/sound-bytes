<div class="ghp-hide">
  <em>NOTE:</em> Due to limitations of GitHub's markdown rendering, it is 
  highly recommended that you view this page 
  <a href="https://coding-competitions.github.io/sound-bytes/">here</a>.
</div>

[View Entries](Entries.md)

# Sound Bytes

You just started work at Goofletronics™, a company that makes electronic toys and 
gadgets. The project you're working is very late in development, but you've just 
received a new feature request:

>  When the device powers on, it should play an interesting sound or music.

Unfortunately, almost all the available ROM on chip is currently devoted to 
other features, so you won't be able to just store a static WAV file to play. 
You're going to have get more creative. Maybe you can generate sound with just 
a few lines of code…

## Challenge

Write a complete program, in the language of your choice, the output of which
will be interpreted as a raw audio waveform. The output may either be directed
to `stdout` or a file. Your program must terminate by itself after no less than
5 seconds and no more than 30 seconds worth of sound data has been produced.

Your program may contain no more than **1024** bytes of source code, (referred
as its 'golf score'). If the file name is specified in a command line
parameter, the length of the file name will not be counted toward the golf
score. For additional guidelines on scoring, see [Golfing](Golfing.md).

The program must be accompanied by a `README.md` file which contains the 
information required to interpret the waveform, in the following format:

    ---
    layout: entry
    title: { title }
    author: { github username }
    lang: { language }
    score: { total golf score in bytes }
    params:
      r: { sample rate in Hz }
      b: { sample size in bits }
      c: { number of channels: 1 = mono, 2 = stereo }
      e: { encoding, e.g. (si)gned-integer, (un)signed-integer, (fl)oating-point }
      { ... other options, if necessary }
    commands:
      build: { command needed to build the program (if needed) }
      run: { command needed to run the program }
    ---

    { description of the entry in markdown }

Note, the parameters described here correlate to the `--rate`, `--bits`,
`--channels`, and `--encoding` options used by the [SoX utility][SoX]. Other
options may be used, but will contribute to the total golf score.

If the output of the program is non-deterministic (e.g. randomly generated), 
be sure to make note of that in the description. Refer to the examples below 
for more information.

### Utilities

For consistency, all entries will be evaluated with the 
[SoX utility][SoX]. This may be installed locally on 
most systems, *or* if you prefer not to install it locally, you can use the 
provided [Docker image](util/sox/README.md).

### Examples

The following example submissions have been provided:

{% include entries_table.html entries=site.examples %}

## Submissions

To submit an entry to this competition, start off by forking this repo. Create 
a new subdirectory under `_entries/` to house your entry, and develop your 
code under there. Write a `README.md` file which includes the relevant 
information as described in the [Challenge](#Challenge). Once you're satisfied 
with the results, submit a pull request to have your entry merged in with the 
others.

Contestants may submit multiple entries.

Contestants may modify their own entries after they've been accepted or
rejected

Entries must be submitted as a pull request on or before
**Wednesday, September 25, 2019**.

## Judging

A submission may be rejected if it fails to satisfy any of the requirements 
described above, if the moderators of the competition are unable to compile or 
run the program, or if the entry appears to be copied from other entries 
without any significant modification. For additional guidelines, see 
[Judging](Judging.md).

This is a **subjective** competition, meaning the winner will be decided by 
popular vote. Votes will be cast via an online poll. A link to the poll will be
provided when the voting session begins. Any eligible voter is welcome vote on
any accepted entry, *including their own*.

The final vote count shall be taken on **Friday, September 27, 2019**. Votes
submitted after this date shall not be counted.

The entry that receives the most votes shall be declared the winner. In the 
event of a tie, the entry with the lower golf score shall be declared the 
winner.

## Awards

The contestant that submitted the winning entry shall receive bragging rights
and a prize (TBD).

 [SoX]: http://sox.sourceforge.net/
