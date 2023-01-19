function setup() : void{
    setupEventListeners();
    setupDisplayClock();
    setupDisplayLinks();
    setupVolume();
    setupVolumeMuted();
}

function setupEventListeners() : void{
    settingsButton.addEventListener('click', clickSettingsButton);
    settingsButton.addEventListener('mouseenter', mouseEnterSettingsButton);
    settingsButton.addEventListener('mouseleave', mouseLeaveSettingsButton);
    linkButton.addEventListener('mouseenter', mouseEnterLinkButton);
    linkButton.addEventListener('mouseleave', mouseLeaveLinkButton);
    linksMenu.addEventListener('mouseenter', mouseEnterLinksMenu);
    linksMenu.addEventListener('mouseleave', mouseLeaveLinksMenu);

    clockButton.addEventListener('click', clickClockButton);
    linkButton.addEventListener('click', clickLinkButton);

    // links menu items event listeners
    linksMenuCheckboxes.forEach(linkCheckbox => {
        linkCheckbox.addEventListener('click', clickLinksMenuItems);
    });

    playPauseButton.addEventListener('click', clickPlayPauseButton);
    volumeButton.addEventListener('click', clickVolumeButton);
    volumeButton.addEventListener('mouseenter', mouseEnterVolumeButton);
    volumeButton.addEventListener('mouseleave', mouseLeaveVolumeButton);
    volumeMenu.addEventListener('mouseenter', mouseEnterVolumeMenu);
    volumeMenu.addEventListener('mouseleave', mouseLeaveVolumeMenu);
    volumeSlider.addEventListener('input', inputVolumeSlider);
    volumeSlider.addEventListener('change', inputVolumeSlider);
    
    main.addEventListener('click', clickMain);
    footer.addEventListener('click', clickFooter);
}

function setupDisplayClock() : void{
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

function setupDisplayLinks() : void{
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

function setupVolume() : void{
    var cookie = getCookie('volume');
    // if the cookie already exist we set volume with the right value
    if (cookie){
        volume = parseInt(cookie);
    }
    // we renew/create the cookie
    setVolumeCookie(volume);
    volumeSlider.value = volume.toString();
}

function setupVolumeMuted() : void{
    var cookie = getCookie('isVolumeMuted');
    // if the cookie already exist we set isVolumeMuted with the right value
    if (cookie){
        // we give the opposite value because we are going to call clickVolumeButton() after
        // and this will invert the value of isVolumeMuted
        if (cookie == "true") isVolumeMuted = false;
        else isVolumeMuted = true;
    }
    // we renew/create the cookie
    setVolumeMutedCookie(isVolumeMuted);
    // Call the function to update the volume icon
    clickVolumeButton();
}