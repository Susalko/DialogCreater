'use strict'

const path = require('path')
const { app, ipcMain } = require('electron');
const electron = require('electron');

const Window = require('./window');


function main() {
    // console.log(teststst);
    let test = electron.screen.getPrimaryDisplay();
    console.log(test.size.height);
    let mainWindow = new Window({
        file: path.join('./render', 'index.html'),
        with: 600,
        height: test.size.height - test.size.height * 0.5
    })
    mainWindow.webContents.openDevTools();
    let addTodoWin;

    // create add todo window
    ipcMain.on('add-window', () => {
        // if addTodoWin does not already exist
        if (!addTodoWin) {
            // create a new add todo window
            addTodoWin = new Window({
                file: path.join('render/windows/save', 'window.save.html'),
                width: 400,
                height: 400,
                frame: true,
                // close with the main window
                parent: mainWindow
            })

            // cleanup
            addTodoWin.on('closed', () => {
                addTodoWin = null
            })
        }
    })

}

app.on('ready', main);

app.on('window-all-closed', function() {
    app.quit();
});