
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


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";




if(isset($_POST['del'])){
$d = htmlspecialchars($_POST['del'], ENT_QUOTES);
$sql = "DELETE FROM `events` WHERE name='$d'";
$conn->query($sql); 
} else {
    $conn->close();
}



?>
