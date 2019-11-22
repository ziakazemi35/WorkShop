<?php
$title = "This is my dynamic title !";
$content = "This is my new content"
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo $title ?></title>
</head>
<body>
  <h1 style="background-color: gray; display: flex; justify-content: center; font-size: 48px;"><?php echo $title ?></h1>
  <p style="background-color: yellow; display: flex; justify-content: center; font-size: 24px;"><?php echo $content ?></p>
  <footer style="background-color: red; display: flex; justify-content: center; font-size: 24px;">&copy; <?php echo date ("Y"); ?> by Zia </footer>
</body>
</html>