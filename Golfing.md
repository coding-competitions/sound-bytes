# Scoring in Code Golf

This challenge involves [code golf][2], i.e. the ability to achieve a goal
using the smallest possible program. This puts an upper limit on the total
complexity of a solution, but also frequently pushes the contestants to
find more interesting solutions that are not obvious if byte count were not
a concern.

Generally, the code golf score of a program is measured by adding the total
number bytes in the source code of the program. However, depending on the
program, there are a number of additional factors to consider when evaluating
this score. The following guidelines should help contestants to comply with
code golf conventions.

## External Data or Libraries

It is valid to use your program to make use of external data files or
non-standard libraries. However, any external data files or libraries that are
used by your program and not explicitly included as part of the challenge
**must** be specified as part of your entry and shall count toward the
total source byte count.

For example, if your `program.js` file is only 128 bytes but reads data from a
`data.txt` file that's 256 bytes, the total score shall be 384 bytes.

As another example, if your `program.js` file is only 128 bytes long but makes
use of several non-standard or 3rd party npm packages, the total source byte
count shall be 128 bytes, plus the total number of bytes in the source code of
the non-standard packages, plus the total number of bytes in all the
dependencies of those packages, and so on. This often makes 3rd party or 
non-standard libraries unfeasible to even properly score.

Note that what constitutes a 'standard' library may be different for every
language or platform. At the judge's discretion, a library may be deemed
permissible, even if not generally considered standard. For example, if your
`program.js` only makes use of Lodash, a popular non-standard npm package,
your entry might be permitted with a note that the language used is 
`JavaScript + Lodash`, rather than just `JavaScript`.

## Command Line Arguments, Switches, or Pipes

It is valid to have command-line arguments, compiler switches, or bash-style
pipes as part of your program. However, any additional command line options
beyond most basic, default options **must** be specified as part of your entry
to the competition and shall count toward the total source byte count.

For example, if your `program.js` file is only 128 bytes but in order to run
correctly in current Node requires the `--experimental-modules` flag, as in
the command

    node --experimental-modules program.js

The total score shall be 151 bytes (128 bytes for code + 22 bytes for flags).

As another example, if your `program.js` file is only 128 bytes but reads data
from `stdin`, and that data is stored in a file named `data.txt` that's 256
bytes, such that in order to run correctly it requires the command

    node program.js < data.txt

The total score shall be 385 bytes (128 bytes for code, plus 256 bytes for
data, plus 1 byte for the `<` metacharacter). In this case, the name of the
data file is irrelevant to the execution of the program, so the 8 characters
in the file name are *not* included in the total score.

## Using Filenames to Store Data

It is valid to use filenames to store key data for your program. However, if
your program requires sources files to have a specific name in order to run
correctly, this fact as well as required name **must** be specified as part of
your entry to the competition and the full filename shall count toward the
total source byte count.

For example, if your source code file must named `Hello World\!` and contains
bash script `echo $0`, the total score shall be 20 (7 bytes for code, plus 13
bytes for required file names).

 [1]: https://esolangs.org/wiki/HQ9+
 [2]: https://en.wikipedia.org/wiki/Code_golf
