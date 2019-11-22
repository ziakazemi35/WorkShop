<?php
//NUMBER
$bob = 3;

//STRING
$bob = "Bob is great!";

//ARRAY
$bob = [4,5,6];

//BOOLEANS
$bob = true;
$bob = false;

//FUNTIONS
function bob($birthYear){

  $age = 2019 - $birthYear;

  return "Bob is " . $age . " years old";
}
?>

<h1 style="
display: flex;
justify-content: center;
background-color: grey;
    font-size: 72px;
"> <?php echo bob(1943); ?></h1>
