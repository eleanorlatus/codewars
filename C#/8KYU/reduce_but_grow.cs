public class Kata
{
  public static int Grow(int[] x)
  {
    int prod = 1;
    for(int i = 0; i < x.Length; i++)
      {
      prod *= x[i];
    }
    return prod;
  }
}
