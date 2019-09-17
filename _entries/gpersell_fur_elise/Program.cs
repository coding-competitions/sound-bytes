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
            {for (int t=0;t<54000*30;t++) {b.Write((ushort)Enumerable.Range(1,8).Sum(i=>8e3/i/i*Math.Sin(t*1.424e-4*Math.Pow(2,(new[]{16,15,16,15,16,11,14,12,9,9,9,0,5,9,11,11,11,4,7,11,12,12,12}[(int)Math.Abs((t/20000)%23)]-9)/12.0)*440*i)*(1-Math.Pow(2*(t/2e4%1)-1,4))));}}
        }
    }
}
