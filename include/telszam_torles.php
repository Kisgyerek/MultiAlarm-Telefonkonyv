<?php
include("db.php");

$id=$_POST['id'];
$telefonszam=$_POST['telefonszam'];


								
$result = mysql_query("DELETE FROM telefonkonyv WHERE tel_id='".$id."'");
if($result==1){
	$output="";
}else{
	$output="A törlés (telszám:".$telefonszam.") esetén nem sikerült!";
}


echo $output;

?>