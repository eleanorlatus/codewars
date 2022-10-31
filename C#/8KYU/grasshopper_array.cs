using System;

public class GrassHopper 
    {
        public static int FindAverage(int[] nums)
        {
          int sum = 0;
             for(int i = 0; i < nums.Length; i++)
               {
               sum+=nums[i];
             }
          return sum / nums.Length;
        }
    }
    
    
    // OR
    
    using System;

public class GrassHopper 
    {
        public static int FindAverage(int[] nums)
        {
          int sum = 0;          
          foreach (int num in nums)
            {
            sum+=num;
          }
          return sum / nums.Length;
        }
    }

//OR

using System.Linq;

public class GrassHopper 
    {
        public static int FindAverage(int[] nums)
        {
            return (int)nums.Average();
        }
    }
