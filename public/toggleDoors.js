socket.on('connect', (userData) => {
    document.querySelector("#gold_door").setAttribute('visible', true);
    document.querySelector("#red_doors").setAttribute('visible', true);
    document.querySelector("#green_doors").setAttribute('visible', true);
    document.querySelector("#blue_doors").setAttribute('visible', true);
    console.log("I LIVE")
})
//listen to event from server
socket.on('red_door', (data) => {

    document.querySelector("#red_doors").setAttribute('visible', false);
    document.querySelector("#green_doors").setAttribute('visible', true);
    document.querySelector("#blue_doors").setAttribute('visible', true);
    console.log('Red Toggled');
});
//listen to event from server
socket.on('green_door', (data) => {
    document.querySelector("#red_doors").setAttribute('visible', true);
    document.querySelector("#green_doors").setAttribute('visible', false);
    document.querySelector("#blue_doors").setAttribute('visible', true);
    console.log('Green Toggled');
});
//listen to event from server
socket.on('blue_door', (data) => {

    document.querySelector("#red_doors").setAttribute('visible', true);
    document.querySelector("#green_doors").setAttribute('visible', true);
    document.querySelector("#blue_doors").setAttribute('visible', false);
    console.log('Blue Toggled');
});
socket.on('gold_door', (data) => {

    document.querySelector("#red_doors").setAttribute('visible', false);
    document.querySelector("#green_doors").setAttribute('visible', false);
    document.querySelector("#blue_doors").setAttribute('visible', false);
    document.querySelector("#gold_door").setAttribute('visible', false);
    console.log('GOLD Toggled');
});