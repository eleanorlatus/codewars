using System;

public static class Kata
{
  public static string Solution(string str) 
  {
    char[] arr = str.ToCharArray();
    Array.Reverse(arr);
    return new string(arr);
  }
}

//OR

// return new string(str.ToArray().Reverse().ToArray());
