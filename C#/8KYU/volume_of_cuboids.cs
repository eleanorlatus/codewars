using System;

public class Kata
{
  public static int FindDifference(int[] a, int[] b)
  {
    int sumA = 1;
    int sumB = 1;
    for(int i = 0; i < a.Length; i++){
      sumA*= a[i];
    }
    for(int i = 0; i < b.Length; i++){
      sumB*= b[i];
    }
    return Math.Abs(sumA-sumB);
  }
}

// OR

using System;
using System.Linq;

public class Kata
{
  public static int FindDifference(int[] a, int[] b)
  {
    int sumA = a.Aggregate(1, (a, b) => a * b);
    int sumB = b.Aggregate(1, (a, b) => a * b);
    return Math.Abs(sumA-sumB);
  }
}
