var entity = document.querySelector('#doors_Sound');

// On connection events, showing all doors
socket.on('connect', (userData) => {
    document.querySelector("#gold_door").setAttribute('visible', true);
    document.querySelector("#red_doors").setAttribute('visible', true);
    document.querySelector("#green_doors").setAttribute('visible', true);
    document.querySelector("#blue_doors").setAttribute('visible', true);
    console.log("I LIVE")
})
//Door toggle: Red
socket.on('red_door', (data) => {

    document.querySelector("#red_doors").setAttribute('visible', false);
    document.querySelector("#green_doors").setAttribute('visible', true);
    document.querySelector("#blue_doors").setAttribute('visible', true);
    entity.components.sound.playSound();
    console.log('Red Toggled');
});
//Door toggle: Green
socket.on('green_door', (data) => {
    document.querySelector("#red_doors").setAttribute('visible', true);
    document.querySelector("#green_doors").setAttribute('visible', false);
    document.querySelector("#blue_doors").setAttribute('visible', true);
    entity.components.sound.playSound();
    console.log('Green Toggled');
});
//Door toggle: Blue
socket.on('blue_door', (data) => {

    document.querySelector("#red_doors").setAttribute('visible', true);
    document.querySelector("#green_doors").setAttribute('visible', true);
    document.querySelector("#blue_doors").setAttribute('visible', false);
    entity.components.sound.playSound();
    console.log('Blue Toggled');
});
//Door toggle: Gold
socket.on('gold_door', (data) => {
    entity.components.sound.playSound();
    document.querySelector("#red_doors").setAttribute('visible', false);
    document.querySelector("#green_doors").setAttribute('visible', false);
    document.querySelector("#blue_doors").setAttribute('visible', false);
    document.querySelector("#gold_door").setAttribute('visible', false);
    document.querySelector("#gold_door_text").setAttribute('visible', false);
    console.log('GOLD Toggled');
});

//Door toggle: Red VS
socket.on('vs_red', (data) => {

    document.querySelector("#VS_red_doors").setAttribute('visible', true);
    document.querySelector("#VS_green_doors").setAttribute('visible', false);
    document.querySelector("#VS_blue_doors").setAttribute('visible', false);
    entity.components.sound.playSound();
    console.log('Red VS Toggled');
});
//Door toggle: Green VS
socket.on('vs_green', (data) => {
    document.querySelector("#VS_red_doors").setAttribute('visible', false);
    document.querySelector("#VS_green_doors").setAttribute('visible', true);
    document.querySelector("#VS_blue_doors").setAttribute('visible', false);
    entity.components.sound.playSound();
    console.log('Green VS Toggled');
});
//Door toggle: Blue VS
socket.on('vs_blue', (data) => {
    document.querySelector("#VS_red_doors").setAttribute('visible', false);
    document.querySelector("#VS_green_doors").setAttribute('visible', false);
    document.querySelector("#VS_blue_doors").setAttribute('visible', true);
    entity.components.sound.playSound();
    console.log('Blue VS Toggled');
});