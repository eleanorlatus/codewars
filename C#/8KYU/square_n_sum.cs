using System.Linq;

public static class Kata
{
  public static int SquareSum(int[] n)
  { 
    return n.Sum(x => x*x);
  }
}
