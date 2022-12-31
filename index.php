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
<script type="text/javascript" src="script.js"></script>
</head>
<body>
  <div id="bg-image"></div>
  <main>
    <form action="index.php" method="POST">
    <label for="search" id="labelsearch" class="noselect">
      <script>
        Tutor()
        setInterval(callBlinkChar, 700);
      </script>
      </label>
      <input type="text" id="search" name="search" autofocus autocomplete="off">
      <input id="submit" type="submit" value="Submit" name="submit">
    </form> 
    <div id="bottom-container" class="noselect">
      <div class="link-container">
        <a href="https://www.github.com">github</a>
      </div>
      <div class="link-container" class="noselect">
        <a href="https://monkeytype.com">monkeytype</a>
      </div>
      <div class="link-container" class="noselect">
        <a href="https://www.youtube.com">youtube</a>
      </div>
      <div class="link-container" class="noselect">
        <a href="https://twitch.tv">twitch</a>
      </div>
      <div class="link-container" class="noselect">
        <a href="https://chat.openai.com/chat">chatgpt</a>
      </div>
    </div>
  </main>
</body>
</html>
