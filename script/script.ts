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
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const timeString = `${hours}:${minutes}`;
    const clock = document.getElementById('clock');
    if (clock === null) return;
    clock.innerHTML = timeString;
}

defil();
setInterval(callBlinkChar, 700);
setInterval(displayTime, 1000);