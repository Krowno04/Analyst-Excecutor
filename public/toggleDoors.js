socket.on('connect', (userData) => {
})
AFRAME.registerComponent('toggle1', {
    init: function () {
        //listen to event from server
        socket.on('red', (data) => {
            if (data == true) {
                document.querySelector("red_doors").setAttribute('visible', true);
                document.querySelector("green_doors").setAttribute('visible', false);
                document.querySelector("blue_doors").setAttribute('visible', false);
            }
            console.log('Red Toggled');
        });
        //listen to event from server
        socket.on('green', (data) => {
            if (data == true) {
                document.querySelector("red_doors").setAttribute('visible', false);
                document.querySelector("green_doors").setAttribute('visible', true);
                document.querySelector("blue_doors").setAttribute('visible', false);
            }
            console.log('Green Toggled');
        });
        //listen to event from server
        socket.on('blue', (data) => {
            if (data == true) {
                document.querySelector("red_doors").setAttribute('visible', false);
                document.querySelector("green_doors").setAttribute('visible', false);
                document.querySelector("blue_doors").setAttribute('visible', true);
            }
            console.log('Blue Toggled');
        });
    }
})