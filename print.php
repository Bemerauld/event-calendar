
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



$sql = "SELECT * FROM `events`";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    
    
while ($row=$result->fetch_assoc())
{/*
$ids[]=$row['id'];
$names[]=$row['name'];
$dates[]=$row['date'];
}
$arr  = array_merge($ids,$names,$dates);
echo json_encode($arr);
*/
$ids[]=$row['id'];
$names[]=$row['name'];
$dates[]=$row['date'];

}

$arr=array('id'=>$ids,'name'=>$names,'date'=>$dates);

echo json_encode($arr);


} else {

    $conn->close();
}



?>
