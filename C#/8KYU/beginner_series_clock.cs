  using System;
  public static class Clock
  {
    public static int Past(int h, int m, int s)
    {
      int hour = h * 3600000;
      int min = m * 60000;
      int sec = s*1000;
      return hour + min + sec;
    }
  }

//OR

//return ((h * 60 + m) * 60 + s) * 1000;
