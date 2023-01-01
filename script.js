function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function defil() {
    var myText = "What are you looking for ";
    var text = "";
    for (let i = 0; i < myText.length ; i++) {
      await sleep(Math.floor(Math.random() * 60) + 1);
      text += myText[i];
      document.getElementById('labelsearch').innerHTML = text;
    }
    document.getElementById('labelsearch').innerHTML = text + "<span id=\"blink\">?</span>";
}

function blinkChar() {
    var elem = document.getElementById('blink');
    if (elem.style.visibility === 'hidden') {
      elem.style.visibility = 'visible';
    } else {
      elem.style.visibility = 'hidden';
    }
}

async function callBlinkChar(){
    await sleep(Math.floor(Math.random() * 500) + 1);
    blinkChar();
}
