<?php

$Username = $_POST['username'];
$UserEmail = $_POST['email'];
$Useraddress = $_POST['address'];
$Usercomment = $_POST['comment'];


//Create a connection
$conn = new mysqli('localhost','root','','sunny');

//Check connnection 

if($conn-> connect_error){
die("Connection failed:".$conn->connect_error);


}
$sql ="INSERT INTO sunnytable(Username,Email,address,comment) VALUES('$Username','$UserEmail','$Useraddress','$Usercomment')";

if($conn->query($sql)===TRUE){
echo 'New record created successfully';
}else{
echo 'Error:'.$sql.'<br>'.$conn->error;
}
$conn->close();





?>