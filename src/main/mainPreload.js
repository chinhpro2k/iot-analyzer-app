const { contextBridge, ipcMain, ipcRenderer } = require("electron");

let saveData = (data) => {
    console.log(data);
    ipcRenderer.send("saveData", data);
};

let bridge = {
    saveData,
};

contextBridge.exposeInMainWorld("Bridge", bridge);
