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
    if (settingsImg === null) return;
    if (settingsButton === null) return;
    if (settingsMenu === null) return;
    if (!menuDisplayed){
        // open menu
        menuDisplayed = true;
        settingsImg.style.transform = "rotate(-120deg)";
        settingsImg.style.opacity = "1";
        settingsButton.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        settingsMenu.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        settingsMenu.style.width = "300px";
    } else{
        // close menu
        menuDisplayed = false;
        settingsImg.style.transform = "rotate(0deg)";
        settingsImg.style.opacity = "0.5";
        settingsButton.style.backgroundColor = "transparent";
        settingsMenu.style.backgroundColor = "transparent";
        settingsMenu.style.width = "40px";
    }
}

function mouseEnterSettingsButton(){
    if (settingsImg === null) return;
    if (!menuDisplayed){
        settingsImg.style.opacity = "1";
    }
}

function mouseLeaveSettingsButton(){
    if (settingsImg === null) return;
    if (!menuDisplayed){
        settingsImg.style.opacity = "0.5";
    }
}

// variables and constants
var menuDisplayed:boolean = false;
const settingsImg = document.getElementById('settings-img');
const settingsButton = document.getElementById('settings-button');
const settingsMenu = document.getElementById('settings-menu');

// event listeners
settingsButton?.addEventListener('click', showSettingsMenu);
settingsButton?.addEventListener('mouseenter', mouseEnterSettingsButton);
settingsButton?.addEventListener('mouseleave', mouseLeaveSettingsButton);

// main
displayTime();
defil();
setInterval(callBlinkChar, 700);
setInterval(displayTime, 1000);