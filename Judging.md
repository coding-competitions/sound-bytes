# Judging

This competition is curated, which means that judges shall review entries
before approving or rejecting them. Entries will be rejected if they do not
meet the criteria specified in the [challenge][1]. Even if an entry does
satisfy the original requirements, it may still be rejected based on the
judge's discretion, or the judge may request modifications be made to the
entry before accepting it.

## Forbidden Loopholes

While creative interpretation of the rules is generally encouraged, there are
a handful of common 'loopholes' that are not particularly interesting or
violate the general spirit of the challenge. Unless otherwise noted, entries
that attempt to exploit any of the following loopholes may be rejected.

- Interpreting a challenge too literally. E.g. if the challenge is to, "write
  a program that, given a number *n*, outputs the *n*-th prime", the following
  program falls under this category.
  
      function($n) {
          return "the $n-th prime";
      }

- Using a language designed specifically designed to solve the exact challenge.
  E.g. If the challenge is to write a program that prints `"Hello, world!"`, 
  submitting a single-byte entry written in HQ9+ is simply uninteresting.

- Copying another answer from elsewhere without making any effort to improve or
  substantially alter it.

- Requiring highly specific environmental conditions. E.g. a program that only
  works correctly on machines with a certain processor, or a program that must
  be executed precisely at midnight.

- Non-deterministic or pseudo-random solutions that only occasionally produce
  correct output. E.g. if the challenge is to write a program that computes the
  sum of two integers, a program that outputs a pseudo-random integer is not
  valid even if on some runs it happens to pass all verification checks.

- Using languages or platforms that are not generally available. E.g. a program
  written in MATLAB can only be evaluated if one has purchased a license. In
  this case, however, the entry may be rewritten for Octave and resubmitted. 

 [1]: README#Challenge
