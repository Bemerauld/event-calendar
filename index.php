<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Calendar</title>
	 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	 <script type="text/javascript" src='script.js'></script>
	 <link rel="stylesheet" type="text/css" href="css.css">
	   
</head>
<body>
	<div class="background">
		<div id="window">
			<div id="window-content">
				<div id="input-wrap">
 				 	<select>
			    		<option>January</option>
    					<option>February</option>
    					<option>March</option>
    					<option>April</option>
    					<option>May</option>
    					<option>June</option>
    					<option>July</option>
    					<option>August</option>
    					<option>September</option>
    					<option>October</option>
    					<option>November</option>
    					<option>December</option>
  					</select>			

					<div id='year-input'>
						<input type="number" placeholder="Year">
					</div>

                    <div id="btnwrap">
				        <button type="button" id="okay" disabled='disabled'>Okay</button>
                        <button type="button" id="cancel">Cancel</button>
				    </div>

				</div>
				
			</div>

			<div id="window-content-2">
				<div id="input-wrap">

						<input type="number" id="input-day" placeholder="Day">


 				 	<select>
			    		<option>January</option>
    					<option>February</option>
    					<option>March</option>
    					<option>April</option>
    					<option>May</option>
    					<option>June</option>
    					<option>July</option>
    					<option>August</option>
    					<option>September</option>
    					<option>October</option>
    					<option>November</option>
    					<option>December</option>
  					</select>			

					
						<input type="number" id="input-year" placeholder="Year">
						<input type="text" id="input-event" name="" placeholder="Name of event">

                        <div id="btnwrap">
                            <button type="button" id="submitinput">Okay</button>
				            <button type="button" id="cancel">Cancel</button>
				        </div>
				</div>
				
			</div>

		</div>
	</div>
<div style="clear:both;"></div>


<div></div>

<div id='wrap'>

	<div id='header'>
		
	</div>

	<table></table>



</div>

<div id="wrap-right">

<button type='button' id='addEvent'>Add Event</button>
<p id='jump'> Jump to today's date </p>

<div id="events"><ul>

					 
				



				</ul></div>
</div>
<div style="clear:both;"></div>


</body>
</html>