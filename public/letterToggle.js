// AFRAME.registerComponent('toggle1',{
//     init : function(){
//         const L1 = this;
//         L1.letter1 = document.querySelector('#letter1')
//         $letter.toggle();

//         if(showletter1)
//             $letter.toggle();
//     }
// })

socket.on('connect', (userData) => {
  })

 //listen to event from server
 socket.on('show_letter_1', (data) => {
    if (data == true)
    {
        document.getElementById("letter1").innerHTML = "    L   ";
    }
    console.log('letter1: L');
});
//listen to event from server
socket.on('show_letter_2', (data) => {
    if (data == true)
        {
            document.getElementById("letter2").innerHTML = "    E   ";
        }
    console.log('letter2: E');
});
//listen to event from server
socket.on('show_letter_3', (data) => {
    if (data == true)
        {
            document.getElementById("letter3").innerHTML = "    A   ";
        }
    console.log('letter3:: A');
});
//listen to event from server
socket.on('show_letter_4', (data) => {
    if (data == true)
        {
            document.getElementById("letter4").innerHTML = "    V   ";
        }
    console.log('letter4:: V');
});
//listen to event from server
socket.on('show_letter_5', (data) => {
    if (data == true)
        {
            document.getElementById("letter5").innerHTML = "    E   ";
        }
    console.log('letter5:: E');
});