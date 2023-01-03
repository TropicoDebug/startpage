<?php
if (isset($_POST['submit'])){
  $search = urlencode($_POST['search']);
  header('Location: https://www.google.com/search?q='.$search);
}
?>
<!DOCTYPE HTML>
<html>
<head>
<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Start page</title>
<link rel="stylesheet" href="style.css">
<link rel="icon" type="image/shrek" href="img/favicon.ico">
</head>
<body>
  <div id="bg-image"></div>
  <main>
    <div id="top-container" class="noselect">
      <div id="clock-container">
        <span id="clock"></span>
      </div>
      <div id="settings-menu">
        <button id="settings-button" tabindex=-1>
          <img src="img/settings.png" id="settings-img" draggable="false">
        </button>
        <button class="menu-button" id="clock-button" tabindex=-1>
          <img src="img/clock.png" class="menu-img">
        </button>
      </div>
    </div>
    <form action="index.php" method="POST">
      <label for="search" id="labelsearch" class="noselect"></label>
      <input type="text" id="search" name="search" autofocus autocomplete="off" spellcheck="false">
      <input id="submit" type="submit" value="Submit" name="submit">
    </form> 
    <footer id="bottom-container">
      <div class="link-container">
        <a href="https://www.github.com" class="noselect">github</a>
      </div>
      <div class="link-container">
        <a href="https://monkeytype.com" class="noselect">monkeytype</a>
      </div>
      <div class="link-container">
        <a href="https://www.youtube.com" class="noselect">youtube</a>
      </div>
      <div class="link-container">
        <a href="https://twitch.tv" class="noselect">twitch</a>
      </div>
      <div class="link-container">
        <a href="https://chat.openai.com/chat" class="noselect">chatgpt</a>
      </div>
      <div class="link-container">
        <a href="https://speedtest.net" class="noselect">speedtest</a>
      </div>
    </footer>
  </main>
<script type="text/javascript" src="script/script.js"></script>
</body>
</html>