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
            {for (int t=0;t<41000*30;t++) {b.Write((ushort)Enumerable.Range(1,8).Sum(i=>8e3/i/i*Math.Sin(t*1.424e-4*Math.Pow(2,(new[]{4,4,4,1,1,1,1,1,3,3,3,0,0,0,0,0,4,4,4,1,8,8,8,4,13,13,13,8,8,8,8,8}[(int)Math.Abs((t/20000)%32)]-14)/12.0)*440*i)*(1-Math.Pow(2*(t/2e4%1)-1,4))));}}
        }
    }
}
