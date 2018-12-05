const {app, BrowserWindow} = require("electron");

var mainWindow = null;

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    height: 800,
    resizable: true,
    title: 'j5/electron template',
    width: 320,
  frame: true
  });

  mainWindow.loadURL('file://' + __dirname + '/app/index.html');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});
