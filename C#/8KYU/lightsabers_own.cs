using System;

public class Kata
{
  public static int HowManyLightsabersDoYouOwn(string name)
  {
    if(name=="Zach") return 18;
      return 0;
  }
}

// OR

using System;

public class Kata
{
  public static int HowManyLightsabersDoYouOwn(string name) => name == "Zach" ? 18 : 0;
}
