socket.on('connect', (userData) => {
})

//listen to event from server
if (document.getElementById("victoryText")){
    socket.on('victoryText', (data) => {
        if (data == true)
        {
            document.getElementById("victoryText").innerHTML = "YOU WIN";
        }
        console.log('VICTORYTEXT 2D');
      });
}

if(document.querySelector("#victoryPopup")){
        socket.on('victoryText', (data) => {
            if (data == true)
            {
                console.log('Im here 3D');
                document.querySelector("#victoryPopup").setAttribute("text", "value:YOU WIN;");
                console.log('Im done 3D');
            }
            console.log('VICTORYTEXT 3D');
          });
    }