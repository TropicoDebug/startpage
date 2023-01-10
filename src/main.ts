function setup(){
    setupEventListeners();
    setupDisplayClock();
    setupDisplayLinks();
}

function setupEventListeners(){
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

function setupDisplayClock(){
    var cookie = getCookie('clockDisplayed');
    // if the cookie already exist we set clockDisplayed with the right value
    if (cookie){
        if (cookie == "true") clockDisplayed = true;
        else clockDisplayed = false;
    }
    // we renew/create the cookie
    setClockCookie(clockDisplayed);
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

function setupDisplayLinks(){
    var cookie = getCookie('linksDisplayed');
    // if the cookie already exist we set linksDisplayed with the right value
    if (cookie){
        if (cookie == "true") linksDisplayed = true;
        else linksDisplayed = false;
    }
    // we renew/create the cookie
    setLinksCookie(linksDisplayed);

    cookie = getCookie('linksValue');
    if (cookie){
        // if the cookie existed we give his value to linksValue
        linksValue = cookie;
    }
    // we renew/create the cookie
    setLinksValueCookie(linksValue);

    if (linksDisplayed){
        // display links with the value of the linksValue cookie
        var counter:number = 0;
        linksMenuCheckboxes.forEach(cb => {
            if (linksValue[counter] == "1"){
                document.getElementById(cb.id + "-link")!.style.display = "block";
                cb.checked = true;
            } else{
                document.getElementById(cb.id + "-link")!.style.display = "none";
                cb.checked = false;
            }
            counter++;
        });
        linkButton.style.filter = "invert(1)";
    } else{
        // we don't display links but we setup the links checkboxes
        var counter:number = 0;
        linksMenuCheckboxes.forEach(cb => {
            if (linksValue[counter] == "1"){
                cb.checked = true;
            } else{
                cb.checked = false;   
            }
            counter++;
        });
        linkButton.style.filter = "invert(0)";
    }
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

function clickSettingsButton(){
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
                menuButton.style.display = "block";
            });
        } else{
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
                menuButton.style.display = "block";
            });
        } else{
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

function clickClockButton(){
    if (!clockDisplayed){
        // display clock
        clock.style.display = "inline-block";
        clockButton.style.filter = "invert(1)";
        clockDisplayed = true;
        setClockCookie(clockDisplayed);
    } else{
        // hide clock
        clock.style.display = "none";
        clockButton.style.filter = "invert(0)";
        clockDisplayed = false;
        setClockCookie(clockDisplayed);
    }
}

function clickMain(){
    if (menuDisplayed){
        // close the settings menu
        clickSettingsButton();
    }
}

function clickFooter(){
    if (menuDisplayed){
        // close the settings menu
        clickSettingsButton();
    }
}

function clickLinkButton(){
    if (!linksDisplayed){
        var counter:number = 0;
        // display links using linksValue
        linkContainers.forEach(linkContainer => {
            if (linksValue[counter] == "1") linkContainer.style.display = "block";
            else linkContainer.style.display = "none";
            counter++;
        });
        linkButton.style.filter = "invert(1)";
        linksDisplayed = true;
        setLinksCookie(linksDisplayed);
    } else{
        // hide links
        linkContainers.forEach(linkContainer => {
            linkContainer.style.display = "none";
        });
        linkButton.style.filter = "invert(0)";
        linksDisplayed = false;
        setLinksCookie(linksDisplayed);
    }
}

function displayLinksMenu(){
    // desktop version
    if (screenWidth > 550){
        linksMenu.style.display = "flex";
    }
}

function hideLinksMenu(){
    linksMenu.style.display = "none";
}

async function mouseEnterLinkButton(){
    isMouseInLinksMenu = true;
    await sleep(500);
    // if the mouse is still on the button after 0.5 second we display the menu
    if (isMouseInLinksMenu){
        displayLinksMenu();
    }
}

async function mouseLeaveLinkButton(){
    isMouseInLinksMenu = false;
    await sleep(500);
    // if the mouse is out of the button for more than 0.5 second we hide the menu
    if (!isMouseInLinksMenu){
        hideLinksMenu();
    }
}

function mouseEnterLinksMenu(){
    isMouseInLinksMenu = true;
}

async function mouseLeaveLinksMenu(){
    isMouseInLinksMenu = false;
    await sleep(500);
    // if the mouse is out of the menu for more than 0.5 second we hide the menu
    if (!isMouseInLinksMenu){
        hideLinksMenu();
    }
}   

function clickLinksMenuItems(){
    var newLinksValue:string = "";
    if (linksDisplayed){
        // update the displayed links and linksValue
        linksMenuCheckboxes.forEach(cb => {
            if (cb.checked){
                document.getElementById(cb.id + "-link")!.style.display = "block";
                newLinksValue += "1";
            } else{
                document.getElementById(cb.id + "-link")!.style.display = "none";
                newLinksValue += "0";
            }
        });
    } else{
        // update linksValue
        linksMenuCheckboxes.forEach(cb => {
            if (cb.checked){
                newLinksValue += "1";
            } else{
                newLinksValue += "0";
            }
        });
    }
    linksValue = newLinksValue;
    // setup cookies
    setLinksValueCookie(newLinksValue);
}


// variables and constants
var menuDisplayed:boolean = false;
var clockDisplayed:boolean = true;
var linksDisplayed:boolean = true;
var linksValue:string = "111111";
var isMouseInLinksMenu:boolean = false;

var screenWidth:number = (window.innerWidth > 0) ? window.innerWidth : screen.width;

const settingsImg:HTMLElement = document.getElementById('settings-img')!;
const settingsButton:HTMLElement = document.getElementById('settings-button')!;
const settingsMenu:HTMLElement = document.getElementById('settings-menu')!;
const menuButtons:HTMLElement[] = Array.from(document.getElementsByClassName('menu-button') as HTMLCollectionOf<HTMLElement>);

const clockButton:HTMLElement = document.getElementById('clock-button')!;
const clock:HTMLElement = document.getElementById('clock')!;

const linkButton:HTMLElement = document.getElementById('link-button')!;
const linkContainers:HTMLElement[] = Array.from(document.getElementsByClassName('link-container') as HTMLCollectionOf<HTMLElement>);
const linksMenu:HTMLElement = document.getElementById('links-menu')!;
const linksMenuCheckboxes:HTMLInputElement[] = Array.from(document.getElementsByClassName('links-menu-checkboxes') as HTMLCollectionOf<HTMLInputElement>);


const main:HTMLElement = document.getElementById('main')!;
const footer:HTMLElement = document.getElementById('footer')!;


// main
setup();
displayTime();
// this call the appearing sentence animation
defil();
// this animate the question mark
setInterval(callBlinkChar, 700);
// this update the clock
setInterval(displayTime, 1000);