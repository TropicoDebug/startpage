async function defil() : Promise<void>{
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

async function blinkChar() : Promise<void>{
    await sleep(500);
    const questionMark:HTMLInputElement = document.getElementById('blink') as HTMLInputElement;
    if (questionMark != null){
        if (questionMark.style.visibility === 'hidden') {
            questionMark.style.visibility = 'visible';
        } else {
            questionMark.style.visibility = 'hidden';
        }
    }
    setTimeout(blinkChar, randomIntFromInterval(1, 700));
}

function displayTime() : void{
    clock.innerHTML = getTime();
    // update the clock every second
    setTimeout(displayTime, 1000);
}

async function clickSettingsButton() : Promise<void>{
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
            await sleep(100);
            menuButtons.forEach(menuButton => {
                menuButton.style.display = "block";
            });
        } else{
            // close menu
            menuDisplayed = false;
            linksMenu.style.display = "none";
            volumeMenu.style.display = "none";
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
            await sleep(100);
            menuButtons.forEach(menuButton => {
                menuButton.style.display = "block";
            });
        } else{
            // close menu
            menuDisplayed = false;
            linksMenu.style.display = "none";
            volumeMenu.style.display = "none";
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

function mouseEnterSettingsButton() : void{
    if (!menuDisplayed){
        settingsImg.style.opacity = "1";
    }
}

function mouseLeaveSettingsButton() : void{
    if (!menuDisplayed){
        settingsImg.style.opacity = "0.5";
    }
}

function clickClockButton() : void{
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

function clickMain() : void{
    if (menuDisplayed){
        // close the settings menu
        clickSettingsButton();
    }
}

function clickFooter() : void{
    if (menuDisplayed){
        // close the settings menu
        clickSettingsButton();
    }
}

function clickLinkButton() : void{
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

function displayLinksMenu() : void{
    // desktop version
    if (screenWidth > 550){
        linksMenu.style.display = "flex";
    }
}

function hideLinksMenu() : void{
    linksMenu.style.display = "none";
}

async function mouseEnterLinkButton() : Promise<void>{
    isMouseInLinksMenu = true;
    await sleep(500);
    // if the mouse is still on the button after 0.5 second we display the menu
    if (isMouseInLinksMenu){
        displayLinksMenu();
    }
}

async function mouseLeaveLinkButton() : Promise<void>{
    isMouseInLinksMenu = false;
    await sleep(500);
    // if the mouse is out of the button for more than 0.5 second we hide the menu
    if (!isMouseInLinksMenu){
        hideLinksMenu();
    }
}

function mouseEnterLinksMenu() : void{
    isMouseInLinksMenu = true;
}

async function mouseLeaveLinksMenu() : Promise<void>{
    isMouseInLinksMenu = false;
    await sleep(500);
    // if the mouse is out of the menu for more than 0.5 second we hide the menu
    if (!isMouseInLinksMenu){
        hideLinksMenu();
    }
}   

function clickLinksMenuItems() : void{
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

function clickPlayPauseButton() : void{
    if (!isMusicPlaying){
        // play music and change img
        playPauseImg.src = "assets/img/pause.png";
        isMusicPlaying = true;
    } else{
        // pause music and change img
        playPauseImg.src = "assets/img/play.png";
        isMusicPlaying = false;
    }
    changeMusicState();
}

function clickVolumeButton() : void{
    if (isVolumeMuted){
        // unmute the music
        music.volume = volume/20;
        volumeImg.src = `assets/img/${getVolumeImageFromVolumeLevel()}`;
        volumeButton.style.filter = "invert(1)";
        isVolumeMuted = false;
    } else{
        // mute the music
        music.volume = 0;
        volumeImg.src = "assets/img/volume-x.svg";
        volumeButton.style.filter = "invert(0)";
        isVolumeMuted = true;
    }
    setVolumeMutedCookie(isVolumeMuted);
}

function getVolumeImageFromVolumeLevel() : string{
    if (volume == 0) return "volume-0.svg";
    else if (volume < 10) return "volume-1.svg";
    else return "volume-2.svg";
}

function setVolumeImageFromVolumeLevel() : void{
    if (isVolumeMuted) volumeImg.src = "assets/img/volume-x.svg";
    else volumeImg.src = `assets/img/${getVolumeImageFromVolumeLevel()}`;
}

async function mouseEnterVolumeButton() : Promise<void>{
    isMouseInVolumeMenu = true;
    await sleep(500);
    // if the mouse is still on the button after 0.5 second we display the menu
    if (isMouseInVolumeMenu){
        volumeMenu.style.display = "flex";
    }
}

async function mouseLeaveVolumeButton() : Promise<void>{
    isMouseInVolumeMenu = false;
    await sleep(500);
    // if the mouse is out of the button for more than 0.5 second we hide the menu
    if (!isMouseInVolumeMenu){
        volumeMenu.style.display = "none";
    }
}

function mouseEnterVolumeMenu() : void{
    isMouseInVolumeMenu = true;
}

async function mouseLeaveVolumeMenu() : Promise<void>{
    isMouseInVolumeMenu = false;
    await sleep(500);
    // if the mouse is out of the menu for more than 0.5 second we hide the menu
    if (!isMouseInVolumeMenu){
        volumeMenu.style.display = "none";
    }
}

function inputVolumeSlider() : void{
    // update the volume
    volume = parseInt(volumeSlider.value);
    if (!isVolumeMuted) music.volume = volume/20;
    // update the volume img
    setVolumeImageFromVolumeLevel();
    // setup cookies
    setVolumeCookie(volume);
}

function changeMusicState() : void{
    if (isMusicPlaying){
        // play music
        music.volume = volume/20;
        if (isVolumeMuted) music.volume = 0;
        music.play();
    } else{
        // pause music
        music.pause();
    }
}


// main
setup();
// this update the clock value every second
displayTime();
// this call the appearing sentence animation
defil();
// this animate the question mark
blinkChar();