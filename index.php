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
<title>shrek.tech</title>
<link rel="stylesheet" href="style.css">
<link rel="icon" type="image/ico" href="assets/img/favicon.ico">
</head>
<body>
  <div id="bg-image"></div>
  <div id="real-body">
    <header id="header" class="noselect">
      <div id="clock-container">
        <span id="clock"></span>
      </div>
      <div id="settings-menu">
        <button id="settings-button" tabindex=-1>
          <img src="assets/img/settings.png" id="settings-img" draggable="false">
        </button>
        <button class="menu-button" id="clock-button" tabindex=-1>
          <img src="assets/img/clock.png" class="menu-img" draggable="false">
        </button>
        <button class="menu-button" id="link-button" tabindex=-1>
          <img src="assets/img/link.png" class="menu-img" draggable="false">
        </button>
      </div>
    </header>
    <main id="main" class="noselect">
      <form action="index.php" method="POST">
        <label for="search" id="labelsearch" class="noselect"></label>
        <input type="text" id="search" name="search" autofocus autocomplete="off" spellcheck="false">
        <input id="submit" type="submit" value="Submit" name="submit">
      </form>
    </main>
    <footer id="footer" class="noselect">
      <div class="link-container" id="github-link">
        <a href="https://www.github.com" class="noselect">github</a>
      </div>
      <div class="link-container" id="monkeytype-link">
        <a href="https://monkeytype.com" class="noselect">monkeytype</a>
      </div>
      <div class="link-container" id="youtube-link">
        <a href="https://www.youtube.com" class="noselect">youtube</a>
      </div>
      <div class="link-container" id="twitch-link">
        <a href="https://twitch.tv" class="noselect">twitch</a>
      </div>
      <div class="link-container" id="chatgpt-link">
        <a href="https://chat.openai.com/chat" class="noselect">chatgpt</a>
      </div>
      <div class="link-container" id="speedtest-link">
        <a href="https://speedtest.net" class="noselect">speedtest</a>
      </div>
    </footer>
  </div>
<div id="links-menu" class="noselect">
  <div class="links-menu-row" id="first-links-menu-row">
    <span>github</span>
    <label class="toggler-wrapper style-1">
      <input type="checkbox" class="links-menu-checkboxes" id="github" checked>
      <div class="toggler-slider">
        <div class="toggler-knob"></div>
      </div>
    </label>
  </div>
  <div class="links-menu-row">
    <span>monkeytype</span>
    <label class="toggler-wrapper style-1">
      <input type="checkbox" class="links-menu-checkboxes" id="monkeytype" checked>
      <div class="toggler-slider">
        <div class="toggler-knob"></div>
      </div>
    </label>
  </div>
  <div class="links-menu-row">
    <span>youtube</span>
    <label class="toggler-wrapper style-1">
      <input type="checkbox" class="links-menu-checkboxes" id="youtube" checked>
      <div class="toggler-slider">
        <div class="toggler-knob"></div>
      </div>
    </label>
  </div>
  <div class="links-menu-row">
    <span>twitch</span>
    <label class="toggler-wrapper style-1">
      <input type="checkbox" class="links-menu-checkboxes" id="twitch" checked>
      <div class="toggler-slider">
        <div class="toggler-knob"></div>
      </div>
    </label>
  </div>
  <div class="links-menu-row">
    <span>chatgpt</span>
    <label class="toggler-wrapper style-1">
      <input type="checkbox" class="links-menu-checkboxes" id="chatgpt" checked>
      <div class="toggler-slider">
        <div class="toggler-knob"></div>
      </div>
    </label>
  </div>
  <div class="links-menu-row" id="last-links-menu-row">
    <span>speedtest</span>
    <label class="toggler-wrapper style-1">
      <input type="checkbox" class="links-menu-checkboxes" id="speedtest" checked>
      <div class="toggler-slider">
        <div class="toggler-knob"></div>
      </div>
    </label>
  </div>
</div>
<script>var exports = {};</script>
<script type="text/javascript" src="js/constants.js"></script>
<script type="text/javascript" src="js/globalData.js"></script>
<script type="text/javascript" src="js/utils.js"></script>
<script type="text/javascript" src="js/cookies.js"></script>
<script type="text/javascript" src="js/main.js"></script>
</body>
</html>

<!-- https://github.com/ctside/startpage -->