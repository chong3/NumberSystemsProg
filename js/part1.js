function ConversionPart1() {

    var UnsignedInt = parseInt(document.getElementById("1_UnsignedInt").value);
    var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);



  var outputValue;

  function convertBase(num, base1, base2){
    var num;
    var value;
    var length = num.toString().length;
    //convert to decimal
    if(base1 != 10)
    {
      value = 0;
      for(var i = 0; i < num.toString().length; i++){
        num1 = Math.trunc(num / (Math.pow(10, length)));
        value = (value * base1) + num1;
        num = num - num1;
        length--;
      }
    }
    else{
      value = num;
    }
    var output = "";
    //convert to base
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
    return output;
  }
  outputValue = convertBase(UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo);
  // Show the output on the screen
  FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, outputValue], 1);

}
