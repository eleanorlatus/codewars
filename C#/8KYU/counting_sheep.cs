using System;

public static class Kata
{
  public static int CountSheeps(bool[] sheeps)
  {
    int count = 0;
    for( int i = 0; i < sheeps.Length; i++){
      if(sheeps[i]){
        count++;
      }
    }
    return count;
  }
}

//OR

using System;
using System.Linq;

public static class Kata
{
  public static int CountSheeps(bool[] sheeps)
  {
    return sheeps.Count(s => s);
  }
}
