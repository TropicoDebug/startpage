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
<meta user-scalable=no>
<title>Start page</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
    <form action="index.php" method="POST">
    <label for="search">What are you looking for ? :</label><br>
    <input type="text" id="search" name="search"><br><br>
    <input type="submit" value="Submit" name="submit">
  </form> 
</body>
</html>
