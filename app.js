const express = require('express');
const app = express();
const http = require('http');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const LISTEN_PORT = 8080;

//our routes
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/2D', function (req, res) {
    res.sendFile(__dirname + '/public/2D.html');
});

app.get('/3D', function (req, res) {
    res.sendFile(__dirname + '/public/3D.html');
});

//socket.io stuff
//https://socket.io/docs/v3/emit-cheatsheet/
io.on('connection', (socket) => {
    console.log(socket.id + " connected");

    socket.on('disconnect', () => {
        console.log(socket.id + " disconnected");
    });

    socket.on("red", (data) => {
        console.log("red event received");
        io.emit("color_change", { r: 255, g: 0, b: 0 });         //to all connected clients
        //io.socket.emit("color_change", {r:255, g:0, b:0});  //to everyone but sender
        io.emit("red_door", true);         //to all connected clients
        io.emit("vs_red", true);
    });

    socket.on("blue", (data) => {
        console.log("blue event received");
        io.emit("color_change", { r: 0, g: 0, b: 255 });         //to all connected clients
        io.emit("blue_door", true);
        io.emit("vs_blue", true);
    });

    socket.on("green", (data) => {
        console.log("green event received");
        io.emit("color_change", { r: 0, g: 255, b: 0 });         //to all connected clients
        io.emit("green_door", true);
        io.emit("vs_green", true);
    });

    socket.on("gold", (data) => {
        console.log("gold event received");
        io.emit("color_change", { r: 255, g: 217, b: 0 });
        io.emit("gold_door", true);
    });

    socket.on("letter1Ev", (data) => {
        console.log("letter1 event received");
        io.emit("show_letter_1", true);
    });

    socket.on("letter2Ev", (data) => {
        console.log("letter2 event received");
        io.emit("show_letter_2", true);
    });

    socket.on("letter3Ev", (data) => {
        console.log("letter3 event received");
        io.emit("show_letter_3", true);
    });

    socket.on("letter4Ev", (data) => {
        console.log("letter4 event received");
        io.emit("show_letter_4", true);
    });

    socket.on("letter5Ev", (data) => {
        console.log("letter5 event received");
        io.emit("show_letter_5", true);
    });

    socket.on("victory", (data) => {
        console.log("victory event received");
        io.emit("victoryText", true);
    });

    socket.on("vsOver", (data) => {
        console.log("versus event received");
        io.emit("vsText", true);
    });

    //question 1: how do you continuously update the network, e.g., users position and orientation?
    //question 2: how do you synch clients to current state?
});

app.use(express.static(__dirname + '/public')); //set root path of server ...
server.listen(LISTEN_PORT);
console.log("Listening on port: " + LISTEN_PORT);