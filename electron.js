const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;

const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

// require("update-electron-app")({
// 	repo: "kitze/react-electron-example",
// 	updateInterval: "1 hour",
// });

const isMac = process.platform === "darwin";

const template = [
	// { role: 'appMenu' }
	...(isMac
		? [
				{
					label: "Junior School Plus", //app.name,
					submenu: [
						{ role: "about" },
						{ type: "separator" },
						{ role: "services" },
						{ type: "separator" },
						{ role: "hide" },
						{ role: "hideothers" },
						{ role: "unhide" },
						{ type: "separator" },
						{ role: "quit" },
					],
				},
		  ]
		: []),
	// { role: 'fileMenu' }
	{
		label: "File",
		submenu: [isMac ? { role: "close" } : { role: "quit" }],
	},
	// { role: 'editMenu' }
	{
		label: "Edit",
		submenu: [
			{ role: "undo" },
			{ role: "redo" },
			{ type: "separator" },
			{ role: "cut" },
			{ role: "copy" },
			{ role: "paste" },
			...(isMac
				? [
						{ role: "pasteAndMatchStyle" },
						{ role: "delete" },
						{ role: "selectAll" },
						{ type: "separator" },
						{
							label: "Speech",
							submenu: [
								{ role: "startspeaking" },
								{ role: "stopspeaking" },
							],
						},
				  ]
				: [
						{ role: "delete" },
						{ type: "separator" },
						{ role: "selectAll" },
				  ]),
		],
	},
	// { role: 'viewMenu' }
	{
		label: "View",
		submenu: [
			{ role: "reload" },
			{ role: "forcereload" },
			{ role: "toggledevtools" },
			{ type: "separator" },
			{ role: "resetzoom" },
			{ role: "zoomin" },
			{ role: "zoomout" },
			{ type: "separator" },
			{ role: "togglefullscreen" },
		],
	},
	// { role: 'windowMenu' }
	{
		label: "Window",
		submenu: [
			{ role: "minimize" },
			{ role: "zoom" },
			...(isMac
				? [
						{ type: "separator" },
						{ role: "front" },
						{ type: "separator" },
						{ role: "window" },
				  ]
				: [{ role: "close" }]),
		],
	},
	{
		role: "help",
		submenu: [
			{
				label: "Learn More - Support",
				click: async () => {
					const { shell } = require("electron");
					await shell.openExternal("http://www.sivanandhaschool.com");
				},
			},
		],
	},
];

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 900,
		height: 680,
		webPreferences: { nodeIntegration: true },
	});
	mainWindow.loadURL(
		isDev
			? "http://localhost:3000"
			: `file://${path.join(__dirname, "../build/index.html")}`
	);
	mainWindow.on("closed", () => (mainWindow = null));
}

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (mainWindow === null) {
		createWindow();
	}
});
