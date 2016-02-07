<?php
include("db.php");

$id=$_POST['id'];
$InputName=$_POST['InputName'];
$InputTel=$_POST['InputTel'];
$InputSzuletesnap=$_POST['InputSzuletesnap'];
$InputIranyitoszam=$_POST['InputIranyitoszam'];
$InputVaros=$_POST['InputVaros'];
$InputCim=$_POST['InputCim'];


								
$result = mysql_query("UPDATE telefonkonyv  SET 
					tel_nev='".$InputName."',
					tel_szam='".$InputTel."',
					tel_szul_datum='".$InputSzuletesnap."',
					tel_iranyitoszam='".$InputIranyitoszam."',
					tel_varos='".$InputVaros."',
					tel_cim='".$InputCim."' 
					WHERE tel_id='".$id."'");
if($result==1){
	$output="";
}else{
	$output="A módosítás (telszám:".$InputTel.") esetén nem sikerült!";
}


/*$output=iconv("ISO-8859-2", "UTF-8", $output);*/
echo $output;

?>