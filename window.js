'use strict'

const { BrowserWindow } = require('electron')
const teststst = require('C:/github/dialogCreater/config/config');
// default window settings
const defaultProps = {
    width: 500,
    height: 600,
    show: false
}

class Window extends BrowserWindow {
    constructor({ file, ...windowSettings }) {
        // calls new BrowserWindow with these props
        super({...defaultProps, ...windowSettings })

        // load the html and open devtools
        this.loadFile(file)
            // this.webContents.openDevTools()

        // gracefully show when ready to prevent flickering
        this.once('ready-to-show', () => {
            console.log(teststst);
            this.show()
        })
    }
}

module.exports = Window