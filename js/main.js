"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function setup() {
    setupDisplayClock();
    setupLinksDisplayed();
    setupEventListeners();
}
function setupDisplayClock() {
    var cookie = getCookie('clockDisplayed');
    // if the cookie already exist we set clockDisplayed with the right value
    if (cookie) {
        if (cookie == "true")
            clockDisplayed = true;
        else
            clockDisplayed = false;
    }
    // we renew/create the cookie
    setClockCookie(clockDisplayed);
    if (clockDisplayed) {
        // display clock
        clock.style.display = "inline-block";
        clockButton.style.filter = "invert(1)";
    }
    else {
        // do not display clock
        clock.style.display = "none";
        clockButton.style.filter = "invert(0)";
    }
}
function setupLinksDisplayed() {
    var cookie = getCookie('linksDisplayed');
    // if the cookie already exist we set linksDisplayed with the right value
    if (cookie) {
        if (cookie == "true")
            linksDisplayed = true;
        else
            linksDisplayed = false;
    }
    // we renew/create the cookie
    setLinksCookie(linksDisplayed);
    cookie = getCookie('linksValue');
    if (cookie) {
        // if the cookie existed we give his value to linksValue
        linksValue = cookie;
    }
    // we renew/create the cookie
    setLinksValueCookie(linksValue);
    if (linksDisplayed) {
        var counter = 0;
        // display links with the value of the linksValue cookie
        linkContainers.forEach(linkContainer => {
            var currentCb = document.getElementById(linkContainer.id.replace("-link", ""));
            if (linksValue[counter] == "1") {
                linkContainer.style.display = "block";
                currentCb.checked = true;
            }
            else {
                linkContainer.style.display = "none";
                currentCb.checked = false;
            }
            counter++;
        });
        linkButton.style.filter = "invert(1)";
    }
    else {
        var counter = 0;
        // do not display links
        linkContainers.forEach(linkContainer => {
            var currentCb = document.getElementById(linkContainer.id.replace("-link", ""));
            if (linksValue[counter] == "1") {
                currentCb.checked = true;
            }
            else {
                currentCb.checked = false;
            }
            linkContainer.style.display = "none";
            counter++;
        });
        linkButton.style.filter = "invert(0)";
    }
}
function setupEventListeners() {
    settingsButton.addEventListener('click', clickSettingsButton);
    settingsButton.addEventListener('mouseenter', mouseEnterSettingsButton);
    settingsButton.addEventListener('mouseleave', mouseLeaveSettingsButton);
    linkButton.addEventListener('mouseenter', mouseEnterLinkButton);
    linkButton.addEventListener('mouseleave', mouseLeaveLinkButton);
    linksMenu.addEventListener('mouseenter', mouseEnterLinksMenu);
    linksMenu.addEventListener('mouseleave', mouseLeaveLinksMenu);
    clockButton.addEventListener('click', clickClockButton);
    linkButton.addEventListener('click', clickLinkButton);
    main.addEventListener('click', clickMain);
    footer.addEventListener('click', clickFooter);
    // links menu items event listeners
    linksMenuCheckboxes.forEach(linkCheckbox => {
        linkCheckbox.addEventListener('click', clickLinksMenuItems);
    });
}
function defil() {
    return __awaiter(this, void 0, void 0, function* () {
        var myText = "What are you looking for ";
        var text = "";
        const input = document.getElementById('labelsearch');
        for (let i = 0; i < myText.length; i++) {
            yield sleep(Math.floor(Math.random() * 60) + 1);
            text += myText[i];
            input.innerHTML = text;
        }
        input.innerHTML += "<span id=\"blink\">?</span>";
    });
}
function blinkChar() {
    const questionMark = document.getElementById('blink');
    if (questionMark === null)
        return;
    if (questionMark.style.visibility === 'hidden') {
        questionMark.style.visibility = 'visible';
    }
    else {
        questionMark.style.visibility = 'hidden';
    }
}
function callBlinkChar() {
    return __awaiter(this, void 0, void 0, function* () {
        yield sleep(Math.floor(Math.random() * 500) + 1);
        blinkChar();
    });
}
function displayTime() {
    const currentTime = new Date();
    var hours = currentTime.getHours().toString();
    if (hours.length == 1)
        hours = "0" + hours;
    var minutes = currentTime.getMinutes().toString();
    if (minutes.length == 1)
        minutes = "0" + minutes;
    const timeString = `${hours}:${minutes}`;
    const clock = document.getElementById('clock');
    if (clock === null)
        return;
    clock.innerHTML = timeString;
}
function clickSettingsButton() {
    // desktop version
    if (screenWidth > 550) {
        if (!menuDisplayed) {
            // open menu
            menuDisplayed = true;
            settingsImg.style.transform = "rotate(-120deg)";
            settingsImg.style.opacity = "1";
            settingsButton.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            settingsMenu.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            settingsMenu.style.width = "240px";
            settingsMenu.style.height = "40px";
            menuButtons.forEach(menuButton => {
                menuButton.style.display = "block";
            });
        }
        else {
            // close menu
            menuDisplayed = false;
            linksMenu.style.display = "none";
            settingsImg.style.transform = "rotate(0deg)";
            settingsImg.style.opacity = "0.5";
            settingsButton.style.backgroundColor = "transparent";
            settingsMenu.style.backgroundColor = "transparent";
            settingsMenu.style.width = "40px";
            menuButtons.forEach(menuButton => {
                menuButton.style.display = "none";
            });
        }
        // mobile version
    }
    else {
        if (!menuDisplayed) {
            // open menu
            menuDisplayed = true;
            settingsImg.style.transform = "rotate(-120deg)";
            settingsImg.style.opacity = "1";
            settingsButton.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            settingsMenu.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            settingsMenu.style.width = "120px";
            settingsMenu.style.height = "80px";
            menuButtons.forEach(menuButton => {
                menuButton.style.display = "block";
            });
        }
        else {
            // close menu
            menuDisplayed = false;
            linksMenu.style.display = "none";
            settingsImg.style.transform = "rotate(0deg)";
            settingsImg.style.opacity = "0.5";
            settingsButton.style.backgroundColor = "transparent";
            settingsMenu.style.backgroundColor = "transparent";
            settingsMenu.style.width = "40px";
            settingsMenu.style.height = "40px";
            menuButtons.forEach(menuButton => {
                menuButton.style.display = "none";
            });
        }
    }
}
function mouseEnterSettingsButton() {
    if (!menuDisplayed) {
        settingsImg.style.opacity = "1";
    }
}
function mouseLeaveSettingsButton() {
    if (!menuDisplayed) {
        settingsImg.style.opacity = "0.5";
    }
}
function clickClockButton() {
    if (!clockDisplayed) {
        // display clock
        clock.style.display = "inline-block";
        clockButton.style.filter = "invert(1)";
        clockDisplayed = true;
        setClockCookie(clockDisplayed);
    }
    else {
        // hide clock
        clock.style.display = "none";
        clockButton.style.filter = "invert(0)";
        clockDisplayed = false;
        setClockCookie(clockDisplayed);
    }
}
function clickMain() {
    if (menuDisplayed) {
        // close the settings menu
        clickSettingsButton();
    }
}
function clickFooter() {
    if (menuDisplayed) {
        // close the settings menu
        clickSettingsButton();
    }
}
function clickLinkButton() {
    if (!linksDisplayed) {
        var counter = 0;
        // display links with the value of the linksValue cookie
        linkContainers.forEach(linkContainer => {
            if (linksValue[counter] == "1")
                linkContainer.style.display = "block";
            else
                linkContainer.style.display = "none";
            counter++;
        });
        linkButton.style.filter = "invert(1)";
        linksDisplayed = true;
        setLinksCookie(linksDisplayed);
    }
    else {
        // hide links
        linkContainers.forEach(linkContainer => {
            linkContainer.style.display = "none";
        });
        linkButton.style.filter = "invert(0)";
        linksDisplayed = false;
        setLinksCookie(linksDisplayed);
    }
}
function displayLinksMenu() {
    // desktop version
    if (screenWidth > 550) {
        linksMenu.style.display = "flex";
    }
}
function hideLinksMenu() {
    linksMenu.style.display = "none";
}
function mouseEnterLinkButton() {
    return __awaiter(this, void 0, void 0, function* () {
        isMouseInLinksMenu = true;
        yield sleep(500);
        // if the mouse is still on the button after 0.5 second we display the menu
        if (isMouseInLinksMenu) {
            displayLinksMenu();
        }
    });
}
function mouseLeaveLinkButton() {
    return __awaiter(this, void 0, void 0, function* () {
        isMouseInLinksMenu = false;
        yield sleep(500);
        // if the mouse is out of the button for more than 0.5 second we hide the menu
        if (!isMouseInLinksMenu) {
            hideLinksMenu();
        }
    });
}
function mouseEnterLinksMenu() {
    isMouseInLinksMenu = true;
}
function mouseLeaveLinksMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        isMouseInLinksMenu = false;
        yield sleep(500);
        // if the mouse is out of the button for more than 0.5 second we hide the menu
        if (!isMouseInLinksMenu) {
            hideLinksMenu();
        }
    });
}
function clickLinksMenuItems() {
    var linksValueCookie = "";
    if (linksDisplayed) {
        linksMenuCheckboxes.forEach(cb => {
            if (cb.checked) {
                document.getElementById(cb.id + "-link").style.display = "block";
                linksValueCookie += "1";
            }
            else {
                document.getElementById(cb.id + "-link").style.display = "none";
                linksValueCookie += "0";
            }
        });
    }
    else {
        linksMenuCheckboxes.forEach(cb => {
            if (cb.checked) {
                linksValueCookie += "1";
            }
            else {
                linksValueCookie += "0";
            }
        });
    }
    // setup cookies
    setLinksValueCookie(linksValueCookie);
}
// variables and constants
var menuDisplayed = false;
var clockDisplayed = true;
var linksDisplayed = true;
var linksValue = "111111";
var isMouseInLinksMenu = false;
var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
const settingsImg = document.getElementById('settings-img');
const settingsButton = document.getElementById('settings-button');
const settingsMenu = document.getElementById('settings-menu');
const menuButtons = Array.from(document.getElementsByClassName('menu-button'));
const clockButton = document.getElementById('clock-button');
const clock = document.getElementById('clock');
const linkButton = document.getElementById('link-button');
const linkContainers = Array.from(document.getElementsByClassName('link-container'));
const linksMenu = document.getElementById('links-menu');
const linksMenuCheckboxes = Array.from(document.getElementsByClassName('links-menu-checkboxes'));
const main = document.getElementById('main');
const footer = document.getElementById('footer');
// main
setup();
displayTime();
// this call the appearing sentence animation
defil();
// this animate the question mark
setInterval(callBlinkChar, 700);
// this update the clock
setInterval(displayTime, 1000);
