<?php
include("db.php");

$result = mysql_query("SELECT * FROM telefonkonyv ORDER BY tel_nev ASC");
	$output="
		<div class='table-responsive table-condensed'>          
  		<table class='table' width='100%' cellpadding='0' cellspacing='0'>
			<thead>
			  <tr>
			  	<th></th>
				<th class='text-center'>Név</th>
				<th class='text-center'>Telefonszám</th>
				<th class='text-center'>Szül.nap</th>
				<th class='text-center'>Irányítószám</th>
				<th class='text-center'>Város</th>
				<th class='text-center'>Cím</th>
				<th></th>
				<th></th>
			  </tr>
			</thead>
			<tbody>
	"; 
	while($row = mysql_fetch_array( $result)) {
			$output.="				
			  <tr class='tr_over'>
			  	<td ><a class='tel_map_btn' name='map_".$row['tel_id']."' title='Megjelenítés térképen'></a></td>
				<td><input id='item-".$row['tel_id']."-nev' class='table_input_nev' value='".$row['tel_nev']."'></td>
				<td><input id='item-".$row['tel_id']."-szam' value='".$row['tel_szam']."' class='table_input_tel' size='15' maxlength='15'></td>
				<td><input class='datum' id='item-".$row['tel_id']."-datum' value='".$row['tel_szul_datum']."'  class='table_input_datum' size='10' maxlength='10'></td>
				<td class='text-center'><input id='item-".$row['tel_id']."-iranyitoszam' value='".$row['tel_iranyitoszam']."'  class='table_input_iranyitoszam' size='4' maxlength='4'></td>
				<td class='text-center'><input id='item-".$row['tel_id']."-varos' value='".$row['tel_varos']."' class='table_input_varos'></td>
				<td class='text-center'><input id='item-".$row['tel_id']."-cim' value='".$row['tel_cim']."' class='table_input_cim'></td>
				<td class='table_mod_icons'><a class='tel_mod_btn' name='mod_".$row['tel_id']."' title='Módosítás'></a></td>
				<td class='table_torles_icons'><a class='tel_torles_btn' name='torles_".$row['tel_id']."' title='Törlés'></a></td>
			  </tr>
			";
	}
$output.="
		</tbody>
	</table>
	</div>	
"; 

/*$output=iconv("ISO-8859-2", "UTF-8", $output);*/
echo $output;

?>