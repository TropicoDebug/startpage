<?php
ini_set('display_errors', 1); 
ini_set('display_startup_errors', 1); 
error_reporting(E_ALL);

if (isset($_POST['submit'])){
  $search = urlencode($_POST['search']);
  header('Location: https://www.google.com/search?q='.$search);
}

?>
<html>
<head>
<meta name = "viewport" content = "width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no">
<title>Start page</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="bg-image"></div>
  <main>
    <form action="index.php" method="POST">
    <label for="search" id="labelsearch" class="noselect">
      <script>
        function sleep(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        }
        async function Tutor() {
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
        Tutor()
        setInterval(callBlinkChar, 700);
      </script>
      </label><br>
      <input type="text" id="search" name="search" autofocus><br><br>
      <input id="submit" type="submit" value="Submit" name="submit">
    </form> 
    <div id="bottom-container">
      <div class="link-container">
        <a href="https://www.github.com">github</a>
      </div>
      <div class="link-container">
        <a href="https://monkeytype.com">monkeytype</a>
      </div>
      <div class="link-container">
        <a href="https://www.youtube.com">youtube</a>
      </div>
      <div class="link-container">
        <a href="https://twitch.tv">twitch</a>
      </div>
      <div class="link-container">
        <a href="https://chat.openai.com/chat">chatgpt</a>
      </div>
    </div>
  </main>
</body>
</html>
