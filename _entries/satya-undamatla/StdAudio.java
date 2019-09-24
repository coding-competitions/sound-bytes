public class StdAudio {
 public static final int SAMPLE_RATE = 44100;
 private static final double MAX_16_BIT = 32768;
 public static void main(String[] args)throws Exception {
  int g4 = 47;
  int c4 = 40;
  int ef4 = 43;
  int e4 = 44;
  int f4 = 45;
  int[] steps = {
   g4, g4, c4, c4, ef4, f4,
   g4, g4, c4, c4, ef4, f4,
   g4, g4, c4, c4, ef4, f4,
   g4, g4, c4, c4, ef4, f4,
   g4, g4, c4, c4, e4, f4,
   g4, g4, c4, c4, e4, f4,
   g4, g4, c4, c4, e4, f4,
   g4, g4, c4, c4, e4, f4
  };

  double[] a = new double[SAMPLE_RATE * 30];
  for (int t = 0; t < SAMPLE_RATE * 30; t++)
  {
   int key = steps[(t / 8820) % steps.length];
   double hz = 440.0 * Math.pow(2, (key - 49) / 12.0);
   double sample = 0.5 * Math.sin(2 * Math.PI * t * hz / StdAudio.SAMPLE_RATE);
   short s = (short) (MAX_16_BIT * sample);
   if (sample == 1.0) s = Short.MAX_VALUE;
   System.out.write(new byte[] { (byte)s, (byte) (s >> 8) });
  }
 }
}
