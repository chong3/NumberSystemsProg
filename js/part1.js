function ConversionPart1() {

    var UnsignedInt = parseInt(document.getElementById("1_UnsignedInt").value);
    var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);
    var outputValue;
    outputValue = convertBase(UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo);
    // Show the output on the screen
    FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, outputValue], 1);
  }

  function convertBase(num, base1, base2){
    var value;
    //convert to decimal
    var stringNum = num.toString();
    var length = num.toString().length;
    var num1 = 0;
    if(base1 != 10)
    {
      value = Number(0);
      for(var i = 0; i < length; i++){
        if(stringNum.charAt(0) == 'A')
        {
          num1 = 10;
        }
        else if(stringNum.charAt(0) == 'B')
        {
          num1 = 11;
        }
        else if(stringNum.charAt(0) == 'C')
        {
          num1 = 12;
        }
        else if(stringNum.charAt(0) == 'D')
        {
          num1 = 13;
        }else if(stringNum.charAt(0) == 'E')
        {
          num1 = 14;
        }
        else if(stringNum.charAt(0) == 'F')
        {
          num1 = 15;
        }
        else {
          num1 = parseInt(stringNum.substring(0,1));
        }

        value = (value * base1) + num1;
        stringNum = stringNum.substring(1);
      }
    }
    else{
      value = num;
    }
    var output = "";
    //convert to base
    if(base2 != 10)
    {
      while(value != 0)
      {
        var nextDigit = value % base2;
        if(nextDigit >= 10){
          if(nextDigit == 10)
            nextDigit = "A";
          else if(nextDigit == 11)
            nextDigit = "B";
          else if(nextDigit == 12)
            nextDigit = "C";
          else if(nextDigit == 13)
            nextDigit = "D";
          else if(nextDigit == 14)
            nextDigit = "E";
          else if(nextDigit == 15)
            nextDigit = "F";
        }
        else{
          nextDigit = nextDigit.toString();
        }
        output = nextDigit + output.substring(0);
        value = Math.trunc(value / base2);
      }
    }
    else{
      output = value.toString();
    }
    return output;
  }
