function ConversionPart2() {

    var SignedDecimalInt = parseInt(document.getElementById("2_SignedInt").value);
    var outputValue = "";
    //Gets signed binary representation
    if(SignedDecimalInt > 0){
      var value = convertBase(SignedDecimalInt, 10, 2);
      outputValue = "0" + value;
    }
    else{
      var value = convertBase(SignedDecimalInt * -1, 10, 2);
      outputValue = "1" + value;
    }
    var outputValueTwosComplement = "";

    //Gets twos complement
    for(var i = 0; i < outputValue.length; i++){
      if(outputValue.charAt(i) == '0'){
        outputValueTwosComplement += "1";
      }
      else{
        outputValueTwosComplement += "0";
      }
    }

    if(outputValueTwosComplement.charAt(outputValueTwosComplement.length - 1) == '0')
    {
      outputValueTwosComplement = outputValueTwosComplement.substring(0, outputValueTwosComplement.length - 1) + "1";
    }
    else{
      for(var i = 0; i < outputValueTwosComplement.length; i++){
        if(outputValueTwosComplement.charAt(i) == '0')
        {
          outputValueTwosComplement = outputValueTwosComplement.substring(0, i) + "1";
          for(var j = i; j < outputValueTwosComplement.length; j++){
            outputValueTwosComplement += "0";
          }
          break;
        }
      }
    }
    // Show the output on the screen
    FormatAndShowOutput([outputValue, outputValueTwosComplement, SignedDecimalInt], 2);
}
