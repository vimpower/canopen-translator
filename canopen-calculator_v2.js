// Run function on enter
$.fn.enterKey = function (fnc) {

    return this.each(function () {
        $(this).keypress(function (ev) {

            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
            if (keycode == '13') {

                fnc.call(this, ev);
                  ev.preventDefault();

            }
        })
    })
}


function convertNumber(n, fromBase, toBase) {
  if (fromBase === void 0) {
    fromBase = 10;
  }
  if (toBase === void 0) {
    toBase = 10;
  }
  return parseInt(n.toString(), fromBase).toString(toBase);
}

//Run function upon enter key hit
$("#entervalue").enterKey(function () {


  //take the value entered and convert it to lowercase
  var test = document.getElementById("entervalue").value.toLowerCase();

  //Switch between padding a 0 in front of the bits
  var test_bin = convertNumber(test,16,2);

  while(test_bin.length < 11){
    test_bin = '0' + test_bin;
  }

  if (test_bin.length != 11) {
  document.getElementById("comment").innerHTML =  'Note: The entered ID does not appear to be a valid 11 bit CANopen ID'
  $("#tebl").hide();	//show content table if valid CANopen ID

}else if(convertNumber(test,16,10) < 0) {

  document.getElementById("comment").innerHTML =  'Note: The entered ID is not valid (negative)'
  $("#tebl").hide();	//show content table if valid CANopen ID

  }
  else if(test_bin.length == 11){
    $("#tebl").show();	//show content table if valid CANopen ID
    document.getElementById("comment").innerHTML =  ''

  }


  //Update output table with values
    document.getElementById("cob-id-dec").innerHTML =  convertNumber(test,16,10);
    document.getElementById("cob-id-bin").innerHTML =  test_bin;
    document.getElementById("no-bits").innerHTML =  test_bin.length;
    document.getElementById("function-code").innerHTML =  test_bin.substr(0,4)
    document.getElementById("node-id-bin").innerHTML =  test_bin.substr(4,10)
    document.getElementById("node-id-hex").innerHTML =  convertNumber(test_bin.substr(4,10),2,16)
    document.getElementById("node-id-dec").innerHTML =  convertNumber(test_bin.substr(4,10),2,10)


    //For the communication object, a switch is used:
    var x = convertNumber(test,16,10);
    switch (true) {
        case (x < 0):
        document.getElementById("communication-object").innerHTML =  'Invalid entry'
          break;
        case (x < 1):
        document.getElementById("communication-object").innerHTML =  'NMT'
            break;
        case (x < 128):
        document.getElementById("communication-object").innerHTML =  'Not mapped (for future use)'
            break;
        case (x < 129):
        document.getElementById("communication-object").innerHTML =  'SYNC'
            break;
        case (x < 256):
        document.getElementById("communication-object").innerHTML =  'EMCY'
            break;
        case (x < 257):
        document.getElementById("communication-object").innerHTML =  'TIME'
            break;
        case (x < 385):
        document.getElementById("communication-object").innerHTML =  'Not mapped (for future use)'
            break;
        case (x < 512):
        document.getElementById("communication-object").innerHTML =  'Transmit PDO 1'
            break;
        case (x < 513):
        document.getElementById("communication-object").innerHTML =  'Not mapped (for future use)'
            break;
        case (x < 640):
        document.getElementById("communication-object").innerHTML =  'Receive PDO 1'
            break;
        case (x < 641):
        document.getElementById("communication-object").innerHTML =  'Not mapped (for future use)'
            break;
        case (x < 768):
        document.getElementById("communication-object").innerHTML =  'Transmit PDO 2'
            break;
        case (x < 769):
        document.getElementById("communication-object").innerHTML =  'Not mapped (for future use)'
            break;

        case (x < 896):
        document.getElementById("communication-object").innerHTML =  'Receive PDO 2'
            break;
        case (x < 897):
        document.getElementById("communication-object").innerHTML =  'Not mapped (for future use)'
            break;
        case (x < 1024):
        document.getElementById("communication-object").innerHTML =  'Transmit PDO 3'
            break;
        case (x < 1025):
        document.getElementById("communication-object").innerHTML =  'Not mapped (for future use)'
            break;
        case (x < 1152):
        document.getElementById("communication-object").innerHTML =  'Receive PDO 3'
            break;
        case (x < 1153):
        document.getElementById("communication-object").innerHTML =  'Not mapped (for future use)'
            break;


        case (x < 1280):
        document.getElementById("communication-object").innerHTML =  'Transmit PDO 4'
            break;
        case (x < 1281):
        document.getElementById("communication-object").innerHTML =  'Not mapped (for future use)'
            break;
        case (x < 1408):
        document.getElementById("communication-object").innerHTML =  'Receive PDO 4'
            break;
        case (x < 1409):
        document.getElementById("communication-object").innerHTML =  'Not mapped (for future use)'
            break;
        case (x < 1536):
        document.getElementById("communication-object").innerHTML =  'Transmit SDO'
            break;
        case (x < 1537):
        document.getElementById("communication-object").innerHTML =  'Not mapped (for future use)'
            break;
        case (x < 1694):
        document.getElementById("communication-object").innerHTML =  'Receive SDO'
            break;
        case (x < 1793):
        document.getElementById("communication-object").innerHTML =  'Not mapped (for future use)'
            break;
        case (x < 1920):
        document.getElementById("communication-object").innerHTML =  'HEARTBEAT'
            break;

        default:
        document.getElementById("communication-object").innerHTML =  'Not mapped'
        break;
    }
});

