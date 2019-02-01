'use strict'

const { ipcRenderer } = require('electron');

const deleteDialog = (e) => {
    ipcRenderer.send('delete-dialog', e.target.textContent);
  }

document.getElementById('createTButton').addEventListener('click', () => {
  ipcRenderer.send('add-window');
})