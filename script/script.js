var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
function defil() {
    return __awaiter(this, void 0, void 0, function () {
        var myText, text, input, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    myText = "What are you looking for ";
                    text = "";
                    input = document.getElementById('labelsearch');
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < myText.length)) return [3 /*break*/, 4];
                    return [4 /*yield*/, sleep(Math.floor(Math.random() * 60) + 1)];
                case 2:
                    _a.sent();
                    text += myText[i];
                    input.innerHTML = text;
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    input.innerHTML += "<span id=\"blink\">?</span>";
                    return [2 /*return*/];
            }
        });
    });
}
function blinkChar() {
    var questionMark = document.getElementById('blink');
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
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sleep(Math.floor(Math.random() * 500) + 1)];
                case 1:
                    _a.sent();
                    blinkChar();
                    return [2 /*return*/];
            }
        });
    });
}
function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours().toString();
    if (hours.length == 1)
        hours = "0" + hours;
    var minutes = currentTime.getMinutes().toString();
    if (minutes.length == 1)
        minutes = "0" + minutes;
    var timeString = "".concat(hours, ":").concat(minutes);
    var clock = document.getElementById('clock');
    if (clock === null)
        return;
    clock.innerHTML = timeString;
}
function showSettingsMenu() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (settingsImg === null)
                return [2 /*return*/];
            if (settingsButton === null)
                return [2 /*return*/];
            if (settingsMenu === null)
                return [2 /*return*/];
            if (menuButtons === null)
                return [2 /*return*/];
            if (clockButton === null)
                return [2 /*return*/];
            if (clockDisplayed === null)
                return [2 /*return*/];
            if (!menuDisplayed) {
                // open menu
                menuDisplayed = true;
                settingsImg.style.transform = "rotate(-120deg)";
                settingsImg.style.opacity = "1";
                settingsButton.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                settingsMenu.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                settingsMenu.style.width = "300px";
                menuButtons.forEach(function (menuButton) {
                    // we retreive the old style attribute values of the menu buttons
                    var attr = '';
                    attr += menuButton.getAttribute('style');
                    // then we add the display:block to the old ones
                    if (attr != null)
                        attr += 'display: block;';
                    menuButton.setAttribute('style', attr);
                });
            }
            else {
                // close menu
                menuDisplayed = false;
                settingsImg.style.transform = "rotate(0deg)";
                settingsImg.style.opacity = "0.5";
                settingsButton.style.backgroundColor = "transparent";
                settingsMenu.style.backgroundColor = "transparent";
                settingsMenu.style.width = "40px";
                menuButtons.forEach(function (menuButton) {
                    // we retreive the old style attribute values of the menu buttons
                    var attr = '';
                    attr += menuButton.getAttribute('style');
                    // then we add the display:none value to the old ones
                    if (attr != null)
                        attr += 'display: none;';
                    menuButton.setAttribute('style', attr);
                });
            }
            return [2 /*return*/];
        });
    });
}
function mouseEnterSettingsButton() {
    if (settingsImg === null)
        return;
    if (!menuDisplayed) {
        settingsImg.style.opacity = "1";
    }
}
function mouseLeaveSettingsButton() {
    if (settingsImg === null)
        return;
    if (!menuDisplayed) {
        settingsImg.style.opacity = "0.5";
    }
}
function setDisplayClockAtStartup() {
    if (clockButton === null)
        return;
    if (clock === null)
        return;
    var cookie = getCookie('clockDisplayed');
    // if the cookie already exist we set clockDisplayed with the right value
    if (cookie) {
        if (cookie == "true")
            clockDisplayed = true;
        else
            clockDisplayed = false;
        // we may or may not renew the cookie
        cookieRenewRoulette();
        // if the cookie doesn't exist we create it
    }
    else
        setCookie("clockDisplayed", "true", 7);
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
function clickClockButton() {
    if (clockButton === null)
        return;
    if (clock === null)
        return;
    if (!clockDisplayed) {
        // display clock
        clock.style.display = "inline-block";
        clockButton.style.filter = "invert(1)";
        clockDisplayed = true;
        setCookie("clockDisplayed", "true", 7);
    }
    else {
        // hide clock
        clock.style.display = "none";
        clockButton.style.filter = "invert(0)";
        clockDisplayed = false;
        setCookie("clockDisplayed", "false", 7);
    }
}
function cookieRenewRoulette() {
    if (clockDisplayed === null)
        return;
    // if you are lucky enough your cookie get renewed for another week!
    if (Math.floor(Math.random() * 10) == 0)
        setCookie("clockDisplayed", clockDisplayed.toString(), 7);
}
// variables and constants
var menuDisplayed = false;
var clockDisplayed = true;
var settingsImg = document.getElementById('settings-img');
var settingsButton = document.getElementById('settings-button');
var settingsMenu = document.getElementById('settings-menu');
var menuButtons = Array.from(document.getElementsByClassName('menu-button'));
var clockButton = document.getElementById('clock-button');
var clock = document.getElementById('clock');
// event listeners
settingsButton === null || settingsButton === void 0 ? void 0 : settingsButton.addEventListener('click', showSettingsMenu);
settingsButton === null || settingsButton === void 0 ? void 0 : settingsButton.addEventListener('mouseenter', mouseEnterSettingsButton);
settingsButton === null || settingsButton === void 0 ? void 0 : settingsButton.addEventListener('mouseleave', mouseLeaveSettingsButton);
clockButton === null || clockButton === void 0 ? void 0 : clockButton.addEventListener('click', clickClockButton);
// main
setDisplayClockAtStartup();
displayTime();
// this call the appearing sentence animation
defil();
// this animate the question mark
setInterval(callBlinkChar, 700);
// this update the clock
setInterval(displayTime, 1000);
