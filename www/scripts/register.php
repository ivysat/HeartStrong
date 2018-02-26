<?php
require 'connect.php';

$sql = "INSERT INTO Users (Firstname, Lastname, Age, Address) VALUES ('".$_POST["firstname"]."','".$_POST["lastname"]."',".$_POST["age"].",'".$_POST["address"]."')";

$result = mysqli_query($db, $sql);
mysqli_close($db);
?>