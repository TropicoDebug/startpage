"use strict";
const screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
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
const playPauseButton = document.getElementById('play-pause-button');
const playPauseImg = document.getElementById('play-pause-img');
const volumeButton = document.getElementById('volume-button');
const volumeImg = document.getElementById('volume-img');
const volumeMenu = document.getElementById('volume-menu');
const volumeSlider = document.getElementById('volume-slider');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
