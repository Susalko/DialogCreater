'use strict'

const path = require('path')
const { app, ipcMain } = require('electron');

const Window = require('./window');

function main (){
  let mainWindow = new Window({
    file: path.join('./render', 'index.html')
  })

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
      frame: false,
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

app.on('window-all-closed', function(){
  app.quit();
});