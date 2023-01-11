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
    setupEventListeners();
    setupDisplayClock();
    setupDisplayLinks();
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
    linksMenuCheckboxes.forEach(linkCheckbox => {
        linkCheckbox.addEventListener('click', clickLinksMenuItems);
    });
    playPauseButton.addEventListener('click', clickPlayPauseButton);
    volumeButton.addEventListener('click', clickVolumeButton);
    main.addEventListener('click', clickMain);
    footer.addEventListener('click', clickFooter);
}
function setupDisplayClock() {
    var cookie = getCookie('clockDisplayed');
    if (cookie) {
        if (cookie == "true")
            clockDisplayed = true;
        else
            clockDisplayed = false;
    }
    setClockCookie(clockDisplayed);
    if (clockDisplayed) {
        clock.style.display = "inline-block";
        clockButton.style.filter = "invert(1)";
    }
    else {
        clock.style.display = "none";
        clockButton.style.filter = "invert(0)";
    }
}
function setupDisplayLinks() {
    var cookie = getCookie('linksDisplayed');
    if (cookie) {
        if (cookie == "true")
            linksDisplayed = true;
        else
            linksDisplayed = false;
    }
    setLinksCookie(linksDisplayed);
    cookie = getCookie('linksValue');
    if (cookie) {
        linksValue = cookie;
    }
    setLinksValueCookie(linksValue);
    if (linksDisplayed) {
        var counter = 0;
        linksMenuCheckboxes.forEach(cb => {
            if (linksValue[counter] == "1") {
                document.getElementById(cb.id + "-link").style.display = "block";
                cb.checked = true;
            }
            else {
                document.getElementById(cb.id + "-link").style.display = "none";
                cb.checked = false;
            }
            counter++;
        });
        linkButton.style.filter = "invert(1)";
    }
    else {
        var counter = 0;
        linksMenuCheckboxes.forEach(cb => {
            if (linksValue[counter] == "1") {
                cb.checked = true;
            }
            else {
                cb.checked = false;
            }
            counter++;
        });
        linkButton.style.filter = "invert(0)";
    }
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
    return __awaiter(this, void 0, void 0, function* () {
        yield sleep(500);
        const questionMark = document.getElementById('blink');
        if (questionMark != null) {
            if (questionMark.style.visibility === 'hidden') {
                questionMark.style.visibility = 'visible';
            }
            else {
                questionMark.style.visibility = 'hidden';
            }
        }
        setTimeout(blinkChar, randomIntFromInterval(1, 700));
    });
}
function displayTime() {
    clock.innerHTML = getTime();
    setTimeout(displayTime, 1000);
}
function clickSettingsButton() {
    return __awaiter(this, void 0, void 0, function* () {
        if (screenWidth > 550) {
            if (!menuDisplayed) {
                menuDisplayed = true;
                settingsImg.style.transform = "rotate(-120deg)";
                settingsImg.style.opacity = "1";
                settingsButton.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                settingsMenu.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                settingsMenu.style.width = "240px";
                settingsMenu.style.height = "40px";
                yield sleep(100);
                menuButtons.forEach(menuButton => {
                    menuButton.style.display = "block";
                });
            }
            else {
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
        }
        else {
            if (!menuDisplayed) {
                menuDisplayed = true;
                settingsImg.style.transform = "rotate(-120deg)";
                settingsImg.style.opacity = "1";
                settingsButton.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                settingsMenu.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                settingsMenu.style.width = "120px";
                settingsMenu.style.height = "80px";
                yield sleep(100);
                menuButtons.forEach(menuButton => {
                    menuButton.style.display = "block";
                });
            }
            else {
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
    });
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
        clock.style.display = "inline-block";
        clockButton.style.filter = "invert(1)";
        clockDisplayed = true;
        setClockCookie(clockDisplayed);
    }
    else {
        clock.style.display = "none";
        clockButton.style.filter = "invert(0)";
        clockDisplayed = false;
        setClockCookie(clockDisplayed);
    }
}
function clickMain() {
    if (menuDisplayed) {
        clickSettingsButton();
    }
}
function clickFooter() {
    if (menuDisplayed) {
        clickSettingsButton();
    }
}
function clickLinkButton() {
    if (!linksDisplayed) {
        var counter = 0;
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
        linkContainers.forEach(linkContainer => {
            linkContainer.style.display = "none";
        });
        linkButton.style.filter = "invert(0)";
        linksDisplayed = false;
        setLinksCookie(linksDisplayed);
    }
}
function displayLinksMenu() {
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
        if (isMouseInLinksMenu) {
            displayLinksMenu();
        }
    });
}
function mouseLeaveLinkButton() {
    return __awaiter(this, void 0, void 0, function* () {
        isMouseInLinksMenu = false;
        yield sleep(500);
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
        if (!isMouseInLinksMenu) {
            hideLinksMenu();
        }
    });
}
function clickLinksMenuItems() {
    var newLinksValue = "";
    if (linksDisplayed) {
        linksMenuCheckboxes.forEach(cb => {
            if (cb.checked) {
                document.getElementById(cb.id + "-link").style.display = "block";
                newLinksValue += "1";
            }
            else {
                document.getElementById(cb.id + "-link").style.display = "none";
                newLinksValue += "0";
            }
        });
    }
    else {
        linksMenuCheckboxes.forEach(cb => {
            if (cb.checked) {
                newLinksValue += "1";
            }
            else {
                newLinksValue += "0";
            }
        });
    }
    linksValue = newLinksValue;
    setLinksValueCookie(newLinksValue);
}
function clickPlayPauseButton() {
    if (!isMusicPlaying) {
        playPauseImg.src = "assets/img/pause.png";
        isMusicPlaying = true;
    }
    else {
        playPauseImg.src = "assets/img/play.png";
        isMusicPlaying = false;
    }
}
function clickVolumeButton() {
    if (isVolumeMuted) {
        volumeImg.src = `assets/img/${getVolumeImageFromVolumeLevel()}`;
        volumeButton.style.filter = "invert(1)";
        isVolumeMuted = false;
    }
    else {
        volumeImg.src = "assets/img/volume-x.svg";
        volumeButton.style.filter = "invert(0)";
        isVolumeMuted = true;
    }
}
function getVolumeImageFromVolumeLevel() {
    if (volume == 0)
        return "volume-0.svg";
    else if (volume < 10)
        return "volume-1.svg";
    else
        return "volume-2.svg";
}
setup();
displayTime();
defil();
blinkChar();
