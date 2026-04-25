class Browser {

    // Param constructor (arguments)
    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log(name + " launched")
    }

    openBrowser() {
        console.log(this.name + " Browser is opened")
    }

    closeBrowser() {
        console.log(this.name + " Browser is closed")
    }

}

let chrome = new Browser("Chrome");
let firefox = new Browser("Firefox");


chrome.openBrowser();
chrome.closeBrowser();
console.log(chrome.isOpen);