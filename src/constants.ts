const screenWidth:number = (window.innerWidth > 0) ? window.innerWidth : screen.width;


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


const playPauseButton:HTMLElement = document.getElementById('play-pause-button')!;
const playPauseImg:HTMLImageElement = document.getElementById('play-pause-img')! as HTMLImageElement;


const volumeButton:HTMLElement = document.getElementById('volume-button')!;
const volumeImg:HTMLImageElement = document.getElementById('volume-img')! as HTMLImageElement;
const volumeMenu:HTMLElement = document.getElementById('volume-menu')!;

const main:HTMLElement = document.getElementById('main')!;
const footer:HTMLElement = document.getElementById('footer')!;