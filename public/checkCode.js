socket.on('connect', (userData) => {
  document.getElementById("gold").onclick = verifyCode;
})

function verifyCode(){
  var check=document.getElementById("check").value == "LEAVE";
  //check will be true or false
  if (check){ //do something if true}
    console.log('I FOUND!');
    document.getElementById("victoryText").innerHTML = "CODE CORRECT";
    socket.emit('gold');
  }
  if(!check){//do something if false}
    document.getElementById("victoryText").innerHTML = "CODE INCORRECT";
    console.log('I MISSED!');
  }
}

