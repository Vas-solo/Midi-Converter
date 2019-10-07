const electron = require('electron');
const url = require('url');
const path = require('path');
var     cmd=require('node-cmd');
//console.log('yolo!');

       //cmd.run('sendmidi dev MIDI Guitar channel 16 on 60 64');

const {app, BrowserWindow} = electron;

let mainWindow;
// Listen for app to be ready
app.on('ready', function(){
    // Create new window
    mainWindow = new BrowserWindow();
    // Load HTML into Window 
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

    //tap();

    // Function to change to Tap mpode

    function tap(){

      // document.getElementById("demo");
        console.log('yolo!');

      cmd.run('sendmidi dev MIDI Guitar channel 16 on 60 64');

   }

});