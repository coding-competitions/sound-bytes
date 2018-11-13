using System;
using System.IO;

class Program
{
  static void Main()
  {
    using (var b = new BinaryWriter(Console.OpenStandardOutput()))
    {
      for (int t = 0, u; t < 5292000; t++)
      {
        u = t % 104448 / 1632 + 1;
        b.Write((byte)(((t / 52224 * (t * 4 & t >> 4)) & 128) / 10 + (((t >> 8) * (t >> 4) * (t / 835584 % 2)) & 32) / u + (t * t >> 5 & 32) / u));
      }
    }
  }
}