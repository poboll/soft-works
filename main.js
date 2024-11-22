const { app, BrowserWindow, dialog, ipcMain, shell, Tray } = require("electron");
const path = require('path');  // 用于处理路径

let win;
let tray; // 托盘图标

function createWindow() {
    // 设置应用程序图标路径，根据不同平台选择图标文件
    const iconPath = process.platform === 'win32'
        ? path.join(__dirname, 'assets/icon.ico')  // Windows下使用 .ico 格式
        : process.platform === 'darwin'
        ? path.join(__dirname, 'assets/icon.icns')  // macOS下使用 .icns 格式
        : path.join(__dirname, 'assets/icon.png');  // Linux下使用 .png 格式

    // 创建主窗口
    win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: iconPath,  // 设置窗口图标
        webPreferences: {
            nodeIntegration: true, // 允许渲染进程使用 Node.js API
        },
        autoHideMenuBar: true, // 自动隐藏菜单栏
    });

    // 加载 HTML 文件
    win.loadFile('index.html');

    // 监听外部链接点击
    win.webContents.on('new-window', (event, url) => {
        event.preventDefault();  // 阻止默认的外部链接行为
        shell.openExternal(url);  // 在外部浏览器中打开链接
    });

    // 禁用默认菜单
    win.setMenu(null);

    // 设置托盘图标
    tray = new Tray(iconPath);  // 托盘图标
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// 打开选择代码根目录对话框
ipcMain.on("open-dialog-selectrootdir", function(event) {
    dialog.showOpenDialog({
        title: "选择项目代码根目录",
        properties: ["openDirectory"]
    }).then(function(result) {
        if (!result.canceled && result.filePaths) {
            event.sender.send("rec-selectrootdir", result.filePaths[0]);
        }
    });
});

// 保存导出合并代码文件对话框
ipcMain.on("save-dialog-exportpath", function(event) {
    dialog.showSaveDialog({
        title: "保存合并代码文件（注意：会替换同名文件！）",
        defaultPath: "./codes.txt"
    }).then(function(result) {
        if (!result.canceled && result.filePath) {
            event.sender.send("rec-exportpath", result.filePath);
        }
    });
});
