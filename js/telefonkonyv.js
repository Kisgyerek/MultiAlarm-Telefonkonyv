$(document).ready(function(){
	$('#InputSzuletesnap').datepicker({
		showOn: "focus",           
		buttonImageOnly: true,
		changeMonth: true,
		changeYear: true,
		yearRange: "1920:2016",
		dateFormat:	'yy-mm-dd', 
		showAnim:	'blind',
		monthNames: ['Január','Február','Március','Április','Május','Június', 'Július','Augusztus','Szeptember','Október','November','December'],
		monthNamesShort: ['Jan', 'Feb', 'Már', 'Ápr', 'Máj', 'Jún', 'Júl', 'Aug', 'Szep', 'Okt', 'Nov', 'Dec'],
		dayNamesShort: ['Va', 'Hé', 'Ke', 'Sze', 'Csü', 'Pé', 'Szo'],
		dayNamesMin: ['Va', 'Hé', 'Ke', 'Sze', 'Csü', 'Pé', 'Szo'],
		firstDay: 1
	});
});

function tablazat_frissites(){
		$.post('/include/table_refresh.php',{},
		function(output){
				$('#tablazat').html(''+output+'');
				$('.datum').datepicker({
					showOn: "focus",           
					buttonImageOnly: true,
					changeMonth: true,
					changeYear: true,
					yearRange: "1920:2016",
					dateFormat:	'yy-mm-dd', 
					showAnim:	'blind',
					monthNames: ['Január','Február','Március','Április','Május','Június', 'Július','Augusztus','Szeptember','Október','November','December'],
					monthNamesShort: ['Jan', 'Feb', 'Már', 'Ápr', 'Máj', 'Jún', 'Júl', 'Aug', 'Szep', 'Okt', 'Nov', 'Dec'],
					dayNamesShort: ['Va', 'Hé', 'Ke', 'Sze', 'Csü', 'Pé', 'Szo'],
					dayNamesMin: ['Va', 'Hé', 'Ke', 'Sze', 'Csü', 'Pé', 'Szo'],
					firstDay: 1
				});
			});
	
}
$( document ).on( "click", "#telefonkonyv_felvitel_btn", function() { 	
	$('.hiba').css('display','none');
	$('.hiba').html("");
	var hiba=0;
	var hibaszoveg='HIBA:<br/>';
	
	var InputName=$('#InputName').val();
	var InputTel=$('#InputTel').val();
	var InputSzuletesnap=$('#InputSzuletesnap').val();
	var InputIranyitoszam=$('#InputIranyitoszam').val();
	var InputVaros=$('#InputVaros').val();
	var InputCim=$('#InputCim').val();
	var cim=""+InputIranyitoszam+InputVaros+InputCim;
	var mod=0;	//új felvitele van
	
	//nev
		var regex_nev = /[^[0-9a-zA-Z\íéáűőúöüóÍÉÁŐŰÚÖÜÓ\+\-\/\(\)\"\.\,\ ]/m;
		var nevmegfelelo=0;
		if( regex_nev.test(InputName) ) {
			var nevmegfelelo=1;
		}
		
		if(InputName=='' || InputName=='Teljes név' || InputName.length<5 || nevmegfelelo!=0 || InputName.length>45){
			hiba=1;
			hibaszoveg+="Nem megfelelő Név (5-45 karakter; a-Z, magyar ékezet és betűk valamint:()+-/\". speciális karakterek!)<br/>";
		}
	//telefonszám
		var regexe_telefon = /[+][0-9]{2}[\-][0-9]{2}[\-][0-9]{3}[\-][0-9]{3,5}$/m;
		var telefonmegfelelo=0;
		if(!(regexe_telefon.test(InputTel)) ) {
				var telefonmegfelelo=1;
			}
		
		if(telefonmegfelelo!=0 || InputTel=='pl.:+36-20-555-4455'){
				hiba=1;					
				hibaszoveg+="Nem megfelelő telefonszám(pl.:+36-XX-XXX-XXXX)!<br/>";
		}
	//születésnap
		var regexe_szuletesnap = /[0-9]{4}[\-][0-9]{2}[\-][0-9]{2}$/m;
		var szuletesnapnmegfelelo=0;
		if(!(regexe_szuletesnap.test(InputSzuletesnap)) ) {
				var szuletesnapnmegfelelo=1;
			}
		
		if(szuletesnapnmegfelelo!=0 || InputSzuletesnap=='Születésnap'){
			hiba=1;					
			hibaszoveg+="Nem megfelelő születésnap(pl.:1982-10-15)!<br/>";
		}
	//irányítószám
		var regex_iranyitoszam = /[^[0-9]/m;
		var iranyitoszammegfelelo=0;
		if( regex_iranyitoszam.test(InputIranyitoszam) ) {
			var iranyitoszammegfelelo=1;
		}
		if(InputIranyitoszam=='' || InputIranyitoszam=='Irányítószám' || InputIranyitoszam.length<=3 || InputIranyitoszam.length>=5 || iranyitoszammegfelelo!=0){
			hiba=1;
			hibaszoveg+="Irányítószám csak szám lehet!<br/>";
		}
	//város
		var regex_varos = /[^[a-zA-Z\íéáűőúöüóÍÉÁŐŰÚÖÜÓ\-\ ]/m;
		var varosmegfelelo=0;
		if( regex_varos.test(InputVaros) ) {
			var varosmegfelelo=1;
		}
		if(InputVaros=='' || InputVaros=='Város' || InputVaros.length<=2 || InputVaros.length>60 || varosmegfelelo!=0){
			hiba=1;
			hibaszoveg+="A Város nem megfelelő!<br/>";
		}
	//cím
		var regex_cim = /[^[0-9a-zA-Z\íéáűőúöüóÍÉÁŐŰÚÖÜÓ\+\-\/\(\)\"\.\,\ ]/m;
		var cimmegfelelo=0;
		if( regex_cim.test(InputCim) ) {
			var cimmegfelelo=1;
		}
		if(InputCim=='' || InputCim=='Lakcím' || InputCim.length<=5 || InputCim.length>60 || cimmegfelelo!=0){
			hiba=1;
			hibaszoveg+="Nem megfelelő cím(utca, házszám és max. 60 karakter)!<br/>";
		}
	if(hiba==0){
		cimellenorzes(cim,mod,"0",InputName,InputTel,InputSzuletesnap,InputIranyitoszam,InputVaros,InputCim);
	}else{
		$('.hiba').html(""+hibaszoveg+"");
		$('.hiba').css('display','block');
		$(window).scrollTo('#container', 450);
	}
});

function telefonkonybejegyzes_felvitel(InputName,InputTel,InputSzuletesnap,InputIranyitoszam,InputVaros,InputCim){	
	$.post('/include/telszam_felvitele.php',{
							InputName:InputName,
							InputTel:InputTel,
							InputSzuletesnap:InputSzuletesnap,
							InputIranyitoszam:InputIranyitoszam,
							InputVaros:InputVaros,
							InputCim:InputCim
						},
		function(output){
				if(output==''){
					$('.success').html("Felvitel sikerült!").fadeIn( "fast", function() { }).delay( 500 ).fadeOut( "fast", function() {$('#success').html("");tablazat_frissites();});
					$(window).scrollTo('#container', 250);
				}else{
					$('.hiba').html(output);
					$('.hiba').css('display','block');
					$(window).scrollTo('#container', 350);
				}
				
			});
	
};

$( document ).on( "click", ".tel_mod_btn", function() { 
	$('.hiba').css('display','none');
	$('.hiba').html("");
	var hiba=0;
	var hibaszoveg='HIBA:<br/>';
	
	var id_tomb=$(this).attr('name').split("mod_");
	var id=id_tomb[1];
	
	var InputName=$('#item-'+id+'-nev').val();
	var InputTel=$('#item-'+id+'-szam').val();
	var InputSzuletesnap=$('#item-'+id+'-datum').val();
	var InputIranyitoszam=$('#item-'+id+'-iranyitoszam').val();
	var InputVaros=$('#item-'+id+'-varos').val();
	var InputCim=$('#item-'+id+'-cim').val();
	var cim=""+InputIranyitoszam+InputVaros+InputCim;
	var mod=1;	//modosítás van
	
	//nev
		var regex_nev = /[^[0-9a-zA-Z\íéáűőúöüóÍÉÁŐŰÚÖÜÓ\+\-\/\(\)\"\.\,\ ]/m;
		var nevmegfelelo=0;
		if( regex_nev.test(InputName) ) {
			var nevmegfelelo=1;
		}
		
		if(InputName=='' || InputName=='Teljes név' || InputName.length<5 || nevmegfelelo!=0 || InputName.length>45){
			hiba=1;
			hibaszoveg+="Nem megfelelő Név (5-45 karakter; a-Z, magyar ékezet és betűk valamint:()+-/\". speciális karakterek!)<br/>";
		}
	//telefonszám
		var regexe_telefon = /[+][0-9]{2}[\-][0-9]{2}[\-][0-9]{3}[\-][0-9]{3,5}$/m;
		var telefonmegfelelo=0;
		if(!(regexe_telefon.test(InputTel)) ) {
				var telefonmegfelelo=1;
			}
		
		if(telefonmegfelelo!=0 || InputTel=='pl.:+36-20-555-4455'){
				hiba=1;					
				hibaszoveg+="Nem megfelelő telefonszám(pl.:+36-XX-XXX-XXXX)!<br/>";
		}
	//születésnap
		var regexe_szuletesnap = /[0-9]{4}[\-][0-9]{2}[\-][0-9]{2}$/m;
		var szuletesnapnmegfelelo=0;
		if(!(regexe_szuletesnap.test(InputSzuletesnap)) ) {
				var szuletesnapnmegfelelo=1;
			}
		
		if(szuletesnapnmegfelelo!=0 || InputSzuletesnap=='Születésnap'){
			hiba=1;					
			hibaszoveg+="Nem megfelelő születésnap(pl.:1982-10-15)!<br/>";
		}
	//irányítószám
		var regex_iranyitoszam = /[^[0-9]/m;
		var iranyitoszammegfelelo=0;
		if( regex_iranyitoszam.test(InputIranyitoszam) ) {
			var iranyitoszammegfelelo=1;
		}
		if(InputIranyitoszam=='' || InputIranyitoszam=='Irányítószám' || InputIranyitoszam.length<=3 || InputIranyitoszam.length>=5 || iranyitoszammegfelelo!=0){
			hiba=1;
			hibaszoveg+="Irányítószám csak szám lehet!<br/>";
		}
	//város
		var regex_varos = /[^[a-zA-Z\íéáűőúöüóÍÉÁŐŰÚÖÜÓ\-\ ]/m;
		var varosmegfelelo=0;
		if( regex_varos.test(InputVaros) ) {
			var varosmegfelelo=1;
		}
		if(InputVaros=='' || InputVaros=='Város' || InputVaros.length<=2 || InputVaros.length>60 || varosmegfelelo!=0){
			hiba=1;
			hibaszoveg+="A Város nem megfelelő!<br/>";
		}
	//cím
		var regex_cim = /[^[0-9a-zA-Z\íéáűőúöüóÍÉÁŐŰÚÖÜÓ\+\-\/\(\)\"\.\,\ ]/m;
		var cimmegfelelo=0;
		if( regex_cim.test(InputCim) ) {
			var cimmegfelelo=1;
		}
		if(InputCim=='' || InputCim=='Lakcím' || InputCim.length<=5 || InputCim.length>60 || cimmegfelelo!=0){
			hiba=1;
			hibaszoveg+="Nem megfelelő cím(utca, házszám és max. 60 karakter)!<br/>";
		}
		
	
	if(hiba==0){
		cimellenorzes(cim,mod,id,InputName,InputTel,InputSzuletesnap,InputIranyitoszam,InputVaros,InputCim);
	}else{
		$('.hiba').html(""+hibaszoveg+"");
		$('.hiba').css('display','block');
		$(window).scrollTo('#container', 450);
	}
});

function telefonkonybejegyzes_modositasa(id,InputName,InputTel,InputSzuletesnap,InputIranyitoszam,InputVaros,InputCim){	
	$.post('/include/telszam_mod.php',{
							id:id,
							InputName:InputName,
							InputTel:InputTel,
							InputSzuletesnap:InputSzuletesnap,
							InputIranyitoszam:InputIranyitoszam,
							InputVaros:InputVaros,
							InputCim:InputCim
						},
		function(output){
				if(output==''){
					$('.success').html("Módosítás sikerült!").fadeIn( "fast", function() { }).delay( 500 ).fadeOut( "fast", function() {$('#success').html("");tablazat_frissites();});
					$(window).scrollTo('#container', 250);
				}else{
					$('.hiba').html(output);
					$('.hiba').css('display','block');
					$(window).scrollTo('#container', 350);
				}
				
			});

};

function cimellenorzes_hiba(geo_hiba,mod,id,InputName,InputTel,InputSzuletesnap,InputIranyitoszam,InputVaros,InputCim){
	if(geo_hiba=="true"){
		if(mod==1){
			telefonkonybejegyzes_modositasa(id,InputName,InputTel,InputSzuletesnap,InputIranyitoszam,InputVaros,InputCim);
		}
		if(mod==0){
			telefonkonybejegyzes_felvitel(InputName,InputTel,InputSzuletesnap,InputIranyitoszam,InputVaros,InputCim);
		}
	}else{
		$('.hiba').html("A megadott lakcím nem valós létező cím!");
		$('.hiba').css('display','block');
		$(window).scrollTo('#container', 450);
	}
}
function cimellenorzes(cim,mod,id,InputName,InputTel,InputSzuletesnap,InputIranyitoszam,InputVaros,InputCim) {
	var geocoder;	
	var map;	
	geocoder = new google.maps.Geocoder();	
	 var address = cim;	
	 geocoder.geocode({
		 'address': address
	}, function (results, status) {

		 if (status == google.maps.GeocoderStatus.OK) {	
			cimellenorzes_hiba("true",mod,id,InputName,InputTel,InputSzuletesnap,InputIranyitoszam,InputVaros,InputCim);
		 }else{
			cimellenorzes_hiba("false",mod,id,InputName,InputTel,InputSzuletesnap,InputIranyitoszam,InputVaros,InputCim);			
		}
	});
}
		 
$( document ).on( "click", ".tel_torles_btn", function() {	
	var id_tomb=$(this).attr('name').split("torles_");
	var id=id_tomb[1];
	var telefonszam=$('#item-'+id+'-szam').val();
	 
	var answer = confirm("Valóban törölni szeretné a következő telefonszámot:\n\r\n\r"+telefonszam+"\n\r\n\r ?");

	if(answer){
		
			$.post('/include/telszam_torles.php',{
										id:id,
										telefonszam:telefonszam
											},
			function(output){
					if(output==''){
						$('.success').html("Törlés sikeres!").fadeIn( "fast", function() { }).delay( 500 ).fadeOut( "fast", function() {$('#success').html("");tablazat_frissites();});
						$(window).scrollTo('#container', 350);
					}else{
						$('.hiba').html(output);
						$('.hiba').css('display','block');
						$(window).scrollTo('#container', 350);
					}
					
				});
	}else{
		
	}
});

$(document).on( "click", ".tel_map_btn", function() {
	var id_tomb=$(this).attr('name').split("map_");
	var id=id_tomb[1];
	var iranyitoszam=$('#item-'+id+'-iranyitoszam').val();
	var varos=$('#item-'+id+'-varos').val();
	var cim=$('#item-'+id+'-cim').val();
	

	$('#google_map_div').css('display','block');
		
	var geocoder;	
	var map;	
	function initialize() {	
		 geocoder = new google.maps.Geocoder();	
		 var address = ""+iranyitoszam+varos+cim;	
		 geocoder.geocode({
			 'address': address
		 }, function (results, status) {
	
			 if (status == google.maps.GeocoderStatus.OK) {	
				 var latitude = results[0].geometry.location.lat();	
				 var longitude = results[0].geometry.location.lng();	
	
				 var latlng = new google.maps.LatLng(latitude, longitude);	
				 var mapOptions = {	
					 zoom: 17,	
					 center: latlng,	
					 mapTypeId: google.maps.MapTypeId.ROADMAP	
				 }
	
				 map = new google.maps.Map(document.getElementById('map'), mapOptions);	
				 var latlng = new google.maps.LatLng(latitude, longitude);
				 map.setCenter(latlng);
	
				 var marker = new google.maps.Marker({	
					 map: map,	
					 position: latlng	
				 });
			 }else{
				 $('#map').html("A cím nem jeleníthető meg, mert nem létezik!");
			}	
		 });
	 }
 	google.maps.event.addDomListener(window, 'load', initialize);
	initialize();
});	
$(document).on( "click", "#google_map_close", function() {
	$('#google_map_div').css('display','none');
});





