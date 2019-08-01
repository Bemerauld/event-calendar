<?php

/*
$servername = 'localhost';
$username = 'id7052000_db1';
$password = 'qweqwe';
$db = 'id7052000_db1';
*/
$servername = 'sql311.epizy.com';
$username = 'epiz_24237517';
$password = 'xvI7g4vM0BeJ';
$db = 'epiz_24237517_Calendar';

//$conn = new mysqli($servername, $username, $password, $db);
$conn = new mysqli($servername, $username, $password,  $db);

/*
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";
*/

if(isset($_POST['m']) && isset($_POST['d']) && isset($_POST['y']) && isset($_POST['e'])){

$m = $_POST['m'];
$d = $_POST['d'];
$y = $_POST['y'];
$e = $_POST['e'];
$e = htmlspecialchars($e, ENT_QUOTES);

if($y > 9999 || $d == 0) $conn->close();

$sql = "INSERT INTO `events` (`id`, `name`, `date`) VALUES (NULL, '$e', '$y"."-"."$m"."-"."$d')";
$conn->query($sql);

echo $sql;

} else {
	$conn->close();
}



?>

