<?php
	
	ini_set('display_errors', 'Off');	//ne írja ki a php hibákat
    error_reporting(0);					//ne írja ki a php hibákat
    
?>
<!DOCTYPE html>
<html lang="hu">
<head>
  <title>Telefonkönyv</title>
  <meta charset="utf-8">
  <meta http-equiv="cache-control" content="no-cache">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <link rel="stylesheet" href="/css/bootstrap.css">
  
  
  <link rel="stylesheet" href="/css/jquery-ui.css">
  <link rel="stylesheet" href="/css/telefonkonyv.css">
  
  <script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
  <script src="/js/bootstrap.js"></script>
  <script src="/js/jquery-ui.js"></script>
  
  <script src="/js/jquery.scrollTo.js"></script>
  <script src="/js/jquery.scrollTo.min.js"></script>
  
  <script type="text/javascript" src="/js/telefonkonyv.js"></script>
  
  

</head>
<body>
<div id='google_map_div' class="col-md-12 col-lg-12 col-xs-12">
	<p>
    	<a id='google_map_close'></a>
    </p>
    <div id="map"></div>    
    <!--<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBT6ei-6s9YiYIAqLm4eRX7VL9HOsfBLxE&signed_in=true&callback=initMap"
        async defer></script>-->
        <script src="http://maps.google.com/maps/api/js?sensor=false"></script>
</div>
<div id="felsotarto" class="container">	
	<div id="header" class="row">
        <div id="header_logo" class="col-md-2 col-lg-2 col-xs-4">
        	<img src="design_images/phone_icon.png"/>
        </div> 
        <div id="header_cim" class="col-md-10 col-lg-10 col-xs-8">
            <h2 align="center">Telefonkönyv</h2>
        </div> 
    	
    </div>
    <div class='hiba'>
    </div>
    <div class='success'>
    </div>
    <div id="beviteli_felulet" class="row">
    	<form>
    	<div class="col-md-6 col-lg-6 col-xs-6">
        	<div class='form-group'>
            <label for='InputName'>Név:</label>
            <input type='text' class='form-control' id='InputName' placeholder='Teljes név'>
          </div>
          
          <div class='form-group'>
            <label for='InputTel'>Telefonszám:</label>
            <input type='tel' class='form-control' id='InputTel' placeholder='pl.:+36-20-555-4455'>
          </div>
          
          <div class='form-group'>
            <label for='InputSzuletesnap' class="control-label">Születésnap <span class="glyphicon glyphicon-calendar">:</span></label>
            <input type='text' class='form-control' id='InputSzuletesnap' placeholder='Születésnap' style="position: relative; z-index: 100000;">
          </div>
          
          <a id='telefonkonyv_felvitel_btn' class='btn btn-default btn-small active' role='button'>Felvitel</a>
            
        </div> 
        <div class="col-md-6 col-lg-6 col-xs-6">
        	<div class='form-group'>
            <label for='InputIranyitoszam'>Irányítószám:</label>
            <input type='text' class='form-control' id='InputIranyitoszam' placeholder='Irányítószám'>
          </div>
           <div class='form-group'>
            <label for='InputVaros'>Város:</label>
            <input type='text' class='form-control' id='InputVaros' placeholder='Város'>
          </div>
          
          <div class='form-group'>
            <label for='InputCim'>Cím:</label>
            <input type='text' class='form-control' id='InputCim' placeholder='Lakcím'>
          </div>
           
        </div> 
        </form>
    </div>
    <div id="also_resz" class="row">
        <h4 align="left">Elérhető telefonszámok:</h4>
        <div id="tablazat" class="row">
        
            <script type="text/javascript">
                tablazat_frissites();
            </script>
        </div>
    </div>
</div>  
</body>
</html>

	