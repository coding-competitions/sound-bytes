using System;
using System.IO;
using System.Linq;
namespace gpersell_fur_elise
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var b = new BinaryWriter(Console.OpenStandardOutput()))
            {for (int t=0;t<4000*30;t++) {b.Write((byte)(t>>4&t*4));}}
        }
    }
}
