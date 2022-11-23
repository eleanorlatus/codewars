using System;
using System.Linq;

public class Kata
{
  public static int[] MergeArrays(int[] arr1, int[] arr2)
{
    int[] result = arr1.Union(arr2).ToArray();
    Array.Sort(result);
    return result;
  }
}
