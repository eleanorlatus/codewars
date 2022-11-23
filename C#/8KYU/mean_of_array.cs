using System.Linq;
using System.Collections.Generic;
using System;

public class Kata
{
  public static int GetAverage(int[] marks)
  {
    int sum = marks.Sum();
    return sum/marks.Length;
  }
}
