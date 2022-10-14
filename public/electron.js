const path = require("path");
const {app, dialog, BrowserWindow,ipcMain} = require("electron");
const {autoUpdater} = require("electron-updater");
const isDev = require("electron-is-dev");
const fs = require("fs");
 function createSplashWindow() {
    const splash = new BrowserWindow({
        width: 500,
        height: 280,
        frame: false,
        skipTaskbar: true,
        resizable: false,
        alwaysOnTop: true,
        transparent: true,
    });
    const url = `file://${path.join(__dirname, '../assets/splash.html')}`;
    splash.loadURL(url);
    return splash;
}
ipcMain.on("saveData", (sender, data) => {
    console.log(data);
    let sData = JSON.stringify(data);
    fs.writeFileSync("data/data.json", sData);
    console.log("Data Saved");
});


const createWindow = () => {
    // Create the browser window.
    let splash;
    splash = createSplashWindow();
    splash.on('closed', () => (splash = undefined));

    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            preload: path.join(__dirname, "../src/main/mainPreload.js"),
        },
    });

    win.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    );

    win.webContents.on("did-finish-load", () => {
        splash && !splash.isDestroyed() && splash.close();
        // win.maximize();
        win.focus();
    })
    // Open the DevTools.
    if (isDev) {
        // win.webContents.openDevTools({mode: "detach"});
        // require('react-devtools-electron');
    }
    ;

    if (!isDev) {
        autoUpdater.checkForUpdates();
    }
    ;

    //Read the data
    let res = fs.existsSync("data/data.json");
    console.log(res);
    if (res) {
        let dt = fs.readFileSync("data/data.json");
        let data = JSON.parse(dt);
        console.log(data);
    }
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
// app.on("ready",()=>{
// 	let splash;
// 	splash = createSplashWindow();
// 	splash.on('closed', () => (splash = undefined));
// 	// windowOptions.show = false;
// })
app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

autoUpdater.on("update-available", (_event, releaseNotes, releaseName) => {
    const dialogOpts = {
        type: 'info',
        buttons: ['Ok'],
        title: 'Application Update',
        message: process.platform === 'win32' ? releaseNotes : releaseName,
        detail: 'A new version is being downloaded.'
    }
    dialog.showMessageBox(dialogOpts, (response) => {

    });
})

autoUpdater.on("update-downloaded", (_event, releaseNotes, releaseName) => {
    const dialogOpts = {
        type: 'info',
        buttons: ['Restart', 'Later'],
        title: 'Application Update',
        message: process.platform === 'win32' ? releaseNotes : releaseName,
        detail: 'A new version has been downloaded. Restart the application to apply the updates.'
    };
    dialog.showMessageBox(dialogOpts).then((returnValue) => {
        if (returnValue.response === 0) autoUpdater.quitAndInstall()
    })
});
