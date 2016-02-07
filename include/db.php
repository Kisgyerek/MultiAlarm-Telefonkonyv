<?php
// Levelezési adatok //
$cimzett="visnyeiandras@gmail.com";
$targy="MultiAlarmTelefonkönyv";
$from="info@telefonkonyv.hu";

// Adatbázis adatok //
define(DBHOSTNAME,"");
define(DBUSERNAME,"");
define(DBPASSWORD,"");
define(DBNAME,"");


if (!$kapcsolat=mysql_connect(DBHOSTNAME,DBUSERNAME,DBPASSWORD)) // Csatlakozás az SQL szerverhez //
{
	@mail($cimzett,$targy,"".$targy." - Sikertelen kapcsolódás az SQL szerverhez!","From:$from\nx-Priority: 1 (Highest)");
};
if (!mysql_select_db(DBNAME,$kapcsolat)) // Adatbázis kiválasztása //
{
	@mail($cimzett,$targy,"".$targy." - Adatbázis választás sikertelen!","From:$from\nx-Priority: 1 (Highest)");
};

if (!mysql_query('SET CHARACTER SET utf8')) // Karakterkészlet beállítása //
{
	@mail($cimzett,$targy,"".$targy." - Karakterkészlet választás sikertelen!","From:$from\nx-Priority: 1 (Highest)");
};


?>