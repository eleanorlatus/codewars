public static class Kata
{
  public static int Solution(int value)
  {
    int sum = 0;
    for(int i = 0; i < value; i++){
      if(i % 3 == 0 || i % 5 == 0) sum +=i;
    }
    return sum;
  }
}


// OR

using System.Linq;
public static class Kata
{
  public static int Solution(int n)
  {
   return Enumerable.Range(0, n).Where(e => e % 3 == 0 || e % 5 == 0).Sum();
   }
   }
