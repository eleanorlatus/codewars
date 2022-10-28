public class Kata
{
  public static double SumArray(double[] array)
  {
    var result = 0.0;
      if(array.Length>0){
    foreach(var num in array){
      result += num;
    }
    return result;
      }else{
        return 0;
      }
  }
}

//OR

using System.Linq;

public class Kata
{
  public static double SumArray(double[] array)
  {
    return array.Sum();
  }
}
