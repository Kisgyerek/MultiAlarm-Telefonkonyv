<?php
include("db.php");

$InputName=$_POST['InputName'];
$InputTel=$_POST['InputTel'];
$InputSzuletesnap=$_POST['InputSzuletesnap'];
$InputIranyitoszam=$_POST['InputIranyitoszam'];
$InputVaros=$_POST['InputVaros'];
$InputCim=$_POST['InputCim'];

//megnézzük van e már ilyen telefonszám
$result = mysql_query("SELECT * FROM telefonkonyv WHERE tel_szam='".$InputTel."'");
$num_rows = mysql_num_rows($result);

if($num_rows==0){
	$result2 = mysql_query("SELECT MAX(tel_id) FROM telefonkonyv");
	$row = mysql_fetch_array( $result2 );
	
	$id=intval($row['MAX(tel_id)'])+1;
									
	$result3 = mysql_query("INSERT INTO telefonkonyv (tel_id,tel_nev,tel_szam,tel_szul_datum,tel_iranyitoszam,tel_varos,tel_cim)VALUES('".$id."','".$InputName."','".$InputTel."','".$InputSzuletesnap."','".$InputIranyitoszam."','".$InputVaros."','".$InputCim."')");
	if($result3==1){
		$output="";
	}else{
		$output="A Felvitel nem sikerült!";
	}
	
}else{
	$output="A megadott telefonszám már létezik!";
}


/*$output=iconv("ISO-8859-2", "UTF-8", $output);*/
echo $output;

?>