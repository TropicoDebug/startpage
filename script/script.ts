function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function sleep(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

async function defil() {
    var myText:string = "What are you looking for ";
    var text:string = "";
    const input:HTMLInputElement = document.getElementById('labelsearch') as HTMLInputElement;

    for (let i = 0; i < myText.length ; i++) {
      await sleep(Math.floor(Math.random() * 60) + 1);
      text += myText[i];
      input.innerHTML = text;
    }
    input.innerHTML += "<span id=\"blink\">?</span>";
}

function blinkChar() {
    const questionMark:HTMLInputElement = document.getElementById('blink') as HTMLInputElement;
    if (questionMark === null) return;
    if (questionMark.style.visibility === 'hidden') {
        questionMark.style.visibility = 'visible';
    } else {
        questionMark.style.visibility = 'hidden';
    }
}

async function callBlinkChar(){
    await sleep(Math.floor(Math.random() * 500) + 1);
    blinkChar();
}

function displayTime(){
    const currentTime:Date = new Date();
    var hours:string = currentTime.getHours().toString();
    if (hours.length == 1) hours = "0" + hours;
    
    var minutes:string = currentTime.getMinutes().toString();
    if (minutes.length == 1) minutes = "0" + minutes;
    
    const timeString:string = `${hours}:${minutes}`;
    const clock = document.getElementById('clock');
    if (clock === null) return;
    clock.innerHTML = timeString;
}

async function showSettingsMenu(){
    // desktop version
    if (screenWidth > 550){
        if (!menuDisplayed){
            // open menu
            menuDisplayed = true;
            settingsImg.style.transform = "rotate(-120deg)";
            settingsImg.style.opacity = "1";
            settingsButton.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            settingsMenu.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            settingsMenu.style.width = "240px";
            settingsMenu.style.height = "40px";
            menuButtons.forEach(menuButton => {
                // we check if the filter is at 0 or 1 so we only keep the filter value
                if (menuButton.getAttribute('style')?.includes('0')) var attr:string = "filter: invert(0);"
                else if (menuButton.getAttribute('style')?.includes('1')) var attr:string = "filter: invert(1);"
                else var attr:string = "";
                // then we add the display:block value
                attr += "display: block;";
                menuButton.setAttribute('style', attr);
            });
        } else{
            // close menu
            menuDisplayed = false;
            settingsImg.style.transform = "rotate(0deg)";
            settingsImg.style.opacity = "0.5";
            settingsButton.style.backgroundColor = "transparent";
            settingsMenu.style.backgroundColor = "transparent";
            settingsMenu.style.width = "40px";
            menuButtons.forEach(menuButton => {
                // we check if the filter is at 0 or 1 so we only keep the filter value
                if (menuButton.getAttribute('style')?.includes('0')) var attr:string = "filter: invert(0);"
                else if (menuButton.getAttribute('style')?.includes('1')) var attr:string = "filter: invert(1);"
                else var attr:string = "";
                // then we add the display:none value
                attr += "display: none;";
                menuButton.setAttribute('style', attr);
            });
        }
    // mobile version
    } else{
        if (!menuDisplayed){
            // open menu
            menuDisplayed = true;
            settingsImg.style.transform = "rotate(-120deg)";
            settingsImg.style.opacity = "1";
            settingsButton.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            settingsMenu.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            settingsMenu.style.width = "120px";
            settingsMenu.style.height = "80px";
            menuButtons.forEach(menuButton => {
                // we check if the filter is at 0 or 1 so we only keep the filter value
                if (menuButton.getAttribute('style')?.includes('0')) var attr:string = "filter: invert(0);"
                else if (menuButton.getAttribute('style')?.includes('1')) var attr:string = "filter: invert(1);"
                else var attr:string = "";
                // then we add the display:block value
                attr += "display: block;";
                menuButton.setAttribute('style', attr);
            });
        } else{
            // close menu
            menuDisplayed = false;
            settingsImg.style.transform = "rotate(0deg)";
            settingsImg.style.opacity = "0.5";
            settingsButton.style.backgroundColor = "transparent";
            settingsMenu.style.backgroundColor = "transparent";
            settingsMenu.style.width = "40px";
            settingsMenu.style.height = "40px";
            menuButtons.forEach(menuButton => {
                // we check if the filter is at 0 or 1 so we only keep the filter value
                if (menuButton.getAttribute('style')?.includes('0')) var attr:string = "filter: invert(0);"
                else if (menuButton.getAttribute('style')?.includes('1')) var attr:string = "filter: invert(1);"
                else var attr:string = "";
                // then we add the display:none value
                attr += "display: none;";
                menuButton.setAttribute('style', attr);
            });
        }
    }
}

function mouseEnterSettingsButton(){
    if (!menuDisplayed){
        settingsImg.style.opacity = "1";
    }
}

function mouseLeaveSettingsButton(){
    if (!menuDisplayed){
        settingsImg.style.opacity = "0.5";
    }
}

function setDisplayClockAtStartup(){
    var cookie = getCookie('clockDisplayed');
    // if the cookie already exist we set clockDisplayed with the right value
    if (cookie){
        if (cookie == "true") clockDisplayed = true;
        else clockDisplayed = false;
        // we may or may not renew the cookie
        cookieRenewRoulette();
    // if the cookie doesn't exist we create it
    } else setCookie("clockDisplayed", "true", 7);
    if (clockDisplayed){
        // display clock
        clock.style.display = "inline-block";
        clockButton.style.filter = "invert(1)";
    } else{
        // do not display clock
        clock.style.display = "none";
        clockButton.style.filter = "invert(0)";
    }
}

function clickClockButton(){
    if (!clockDisplayed){
        // display clock
        clock.style.display = "inline-block";
        clockButton.style.filter = "invert(1)";
        clockDisplayed = true;
        setCookie("clockDisplayed", "true", 7)
    } else{
        // hide clock
        clock.style.display = "none";
        clockButton.style.filter = "invert(0)";
        clockDisplayed = false;
        setCookie("clockDisplayed", "false", 7)
    }
}

function cookieRenewRoulette(){
    // if you are lucky enough your cookie get renewed for another week!
    if (Math.floor(Math.random() * 10) == 0) setCookie("clockDisplayed", clockDisplayed.toString(), 7);
}

function clickMain(){
    if (menuDisplayed){
        // close the settings menu
        showSettingsMenu();
    }
}

function clickFooter(){
    if (menuDisplayed){
        // close the settings menu
        showSettingsMenu();
    }
}


// variables and constants
var menuDisplayed:boolean = false;
var clockDisplayed:boolean = true;

var screenWidth:number = (window.innerWidth > 0) ? window.innerWidth : screen.width;

const settingsImg:HTMLElement = document.getElementById('settings-img')!;
const settingsButton:HTMLElement = document.getElementById('settings-button')!;
const settingsMenu:HTMLElement = document.getElementById('settings-menu')!;
const menuButtons = Array.from(document.getElementsByClassName('menu-button'))!;

const clockButton:HTMLElement = document.getElementById('clock-button')!;
const clock:HTMLElement = document.getElementById('clock')!;

const main:HTMLElement = document.getElementById('main')!;
const footer:HTMLElement = document.getElementById('footer')!;


// event listeners
settingsButton?.addEventListener('click', showSettingsMenu);
settingsButton?.addEventListener('mouseenter', mouseEnterSettingsButton);
settingsButton?.addEventListener('mouseleave', mouseLeaveSettingsButton);
clockButton?.addEventListener('click', clickClockButton);
main?.addEventListener('click', clickMain);
footer?.addEventListener('click', clickFooter);


// main
setDisplayClockAtStartup();
displayTime();
// this call the appearing sentence animation
defil();
// this animate the question mark
setInterval(callBlinkChar, 700);
// this update the clock
setInterval(displayTime, 1000);