const { app, BrowserWindow } = require("electron")
const path = require("path")

let win;

const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        hasShadow: true,
        frame: false
    })

    win.loadFile(path.join(__dirname, "app", "index.html"))
}

app.whenReady().then(() => {
	createWindow()
})

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
})

