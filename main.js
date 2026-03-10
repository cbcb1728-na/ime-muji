const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    alwaysOnTop: true, // 他のウィンドウより常に手前に表示
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.setMenuBarVisibility(false); // メニューバーを隠す
  win.loadFile('index.html');      // 先ほどのHTMLを読み込む
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});