"use strict";
function setup() {
    setupEventListeners();
    setupDisplayClock();
    setupDisplayLinks();
    setupVolume();
    setupVolumeMuted();
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
    volumeButton.addEventListener('mouseenter', mouseEnterVolumeButton);
    volumeButton.addEventListener('mouseleave', mouseLeaveVolumeButton);
    volumeMenu.addEventListener('mouseenter', mouseEnterVolumeMenu);
    volumeMenu.addEventListener('mouseleave', mouseLeaveVolumeMenu);
    volumeSlider.addEventListener('input', inputVolumeSlider);
    volumeSlider.addEventListener('change', inputVolumeSlider);
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
function setupVolume() {
    var cookie = getCookie('volume');
    if (cookie) {
        volume = parseInt(cookie);
    }
    setVolumeCookie(volume);
    volumeSlider.value = volume.toString();
}
function setupVolumeMuted() {
    var cookie = getCookie('isVolumeMuted');
    if (cookie) {
        if (cookie == "true")
            isVolumeMuted = false;
        else
            isVolumeMuted = true;
    }
    setVolumeMutedCookie(isVolumeMuted);
    clickVolumeButton();
}
