// 25th April/1May -271821 - 13 September 275760 

$(document).ready(function(){
	

var days = ['S','M','T','W','T','F','S'],
	months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var thisDate = new Date(),
	today = thisDate.getDate(),
	thisMonth = thisDate.getMonth(),
	thisYear = thisDate.getFullYear();



var currentMonth = thisMonth;
var currentYear = thisYear;




function printCalendar(month, year){

	$('h3').html(months[month]+", "+year);

	var start = new Date(year,month,1).getDay(); 
	var flag = false;
	var counter = 0;


	$('table').html(''); 


	$('table').append('<tr>');
	for(var i=0; i<days.length; i++){
		$('tr').append('<th>'+days[i]+'</th>');
	}
	$('table').append('</tr>');

	$('table').append('<tr>');

	for(var i=1 ; i <= 42; i++){


		$('tr:last').append('<td>' + new Date(year, month, i - start ).getDate() + '</td>'); 
		
		if($('td:last').text() == 1 && flag == false){
			flag = true;
		} else if ($('td:last').text() == 1 && flag == true) {
			flag = false;
		}

		if(!flag) {
			$('td:last').addClass('gray');
		}


		if ($('td:last').text() == today && flag && currentMonth == thisMonth && currentYear == thisYear ) {
			$('td:last').addClass('highlight');
		}

		counter++;
		
		if(counter>6){
			$('table').append('</tr>'); 
			$('table').append('<tr>'); 
			counter = 0; 
		}

	}

	
}



function previousMonth(){
	

	currentMonth--;
	
	if (currentMonth < 0){
			currentMonth = 11;
			currentYear -= 1;
}
	
	printCalendar(currentMonth, currentYear);
	
}


function nextMonth(){
	
	currentMonth++;
	
	if(currentMonth == 12){
		currentMonth = 0;
		currentYear += 1;
	}					
	
	printCalendar(currentMonth, currentYear);
	
}

function TimeToEvent(day,month,year,eventName){					

	var flag = 0;
		amountDays=0,
		amountMonths=0,
		amountYears=0;
		i=thisMonth,
		k=today,
		j=thisYear,
		eventDate = new Date(year,month,day);

		
	while(new Date(j,i,k).getTime() !== new Date(year,i,k).getTime()){

		j++;

		if(new Date(j,i,k) > eventDate) {
			j=thisYear+amountYears;
			break;
		}

		
		amountYears++;
		
	}

	while(new Date(j,i,k).getTime() !== new Date(year,month,k).getTime()){
												// year>j
		

		

		i++;

		if(new Date(j,i,k) > eventDate){
			i=thisMonth+amountMonths;
			break;
		}

		
		amountMonths++;
		
		
	}
	while(new Date(j,i,k).getDate() !== new Date(year,month,day).getDate()){
													//j i > year , month
		k++;
		
		
		
		amountDays++;
		
	}


	var message ='';
		

	message += YearMonthDay(amountYears,'year');
	message += YearMonthDay(amountMonths,'month');
	message += YearMonthDay(amountDays,'day');	

	message = message.slice(0,message.length-2);

	if(thisDate > eventDate){
		alert(`${eventName} has already passed.`);
		return;
	}
	else{
		$('#events ul').append(`<div class="eks">✖</div> <li><div class='li-name'>Event: ${eventName}</div><div>Date: ${day} ${months[month]} ${year}</div><div>Up in: ${message}</div></li>`);
}// ^ added ul

	$('div.eks:last').on('click', function(){

		var str = $(this).next().children('.li-name').html().substring(7);
		$.post('ex.php',{del: str});
		setTimeout(function(){
				$("#events ul").html("");
				printEvents();
		},50);
		

	});

	$('li:last').on('click', function(){

		currentMonth = Number(month); 
		currentYear = Number(year);
		printCalendar(month,year);

		$('td').each(function(){

		if($(this).text() == 1 && flag == false){
			flag = true;
		} else if ($(this).text() == 1 && flag == true) {
			flag = false;
		}

		if(flag && $(this).text() == day) {
			$(this).addClass('highlightEvent');
		}

		});


	});


	



}


function YearMonthDay(amount,type){

	var text = '';

	switch(amount){
		case 0: 
			text = '';
			break;
		case 1: 
			text = `1 ${type}, `;
			break;
		default: 
			text = `${amount} ${type}s, `;
		
	}
	return text;
}



	$('#header').append("<button type='button' id='previous'>&#8249;</button><h3></h3><button type='button' id='next'>&#8250;</button>");


	$('h3').on('mouseover', function(){

		$(this).addClass('pointer');

	});

	$('button').on('mouseover', function(){

		$(this).addClass('pointer');
	});






	$('#previous').on('click', function(){
		previousMonth();
	});
	$('#next').on('click',function(){

		nextMonth();
	});
	
	printCalendar(thisMonth,thisYear);
	
	
	

	

	

function printEvents(){
	var a,
		t_day,
		t_month,
		t_year,
		t_name;


	$.get('print.php', function(data, success){
		 a =  JSON.parse(data); 
		 
		for(var i=0;i<a['id'].length;i++){
			t_name = a['name'][i];
			t_day = Number(a['date'][i].substring(8));
			t_month = a['date'][i].substring(5,7)-1;
			t_year = a['date'][i].substring(0,4);
			TimeToEvent(t_day,t_month,t_year, t_name);
		}

		
	});


	
}


printEvents();


	

	$('h3').on('click', function(){

		$('.background').css('display','block');
		$('#window-content').css('display','block');

	});

	$("#addEvent").on('click', function(){
		$('.background').css('display','block');
		$('#window-content-2').css('display','block');

		

	});
	
	
$('#window-content #cancel').on('click', function(){
		
		$('.background').css('display','none');
		$('#window-content').css('display','none');
		$('#window-content-2').css('display','none');
	});

$('#window-content-2 #cancel').on('click', function(){
		
		$('.background').css('display','none');
		$('#window-content').css('display','none');
		$('#window-content-2').css('display','none');
	
});




	$("#okay").on('click',function(){

		var requestedMonth = $('select').val();
		var requestedYear = $('#year-input input').val();
		
			currentMonth=Number(monthToNum(requestedMonth));
			currentYear=Number(requestedYear);

			printCalendar(currentMonth,currentYear);
			$('.background').css('display','none');
			$('#window-content').css('display','none');
			$('#window-content-2').css('display','none');
			
	});

	function monthToNum(x){


		switch(x){

			case 'January':
				x = 0;
				break;

			case 'February':
				x = 1;
				break;

			case 'March':
				x = 2;
				break;

			case 'April':
				x = 3;
				break;

			case 'May':
				x = 4;
				break;

			case 'June':
				x = 5;
				break;

			case 'July':
				x = 6;
				break;

			case 'August':
				x = 7;
				break;

			case 'September':
				x = 8;
				break;

			case 'October':
				x = 9;
				break;

			case 'November':
				x = 10;
				break;

			case 'December':
				x = 11;
				break;
			default: break;
				

		}
		
		return x;

	}

		
	$('#year-input input').change(function(){
		if($('#year-input input').val() !== ''){
			$('#okay').removeAttr("disabled");
		}else{

			$('#okay').attr("disabled","disabled");
		}
	}).keyup(function(){
		
		if($('#year-input input').val() !== ''){
			$('#okay').removeAttr("disabled");
		}else{

			$('#okay').attr("disabled","disabled");
		}
	});

//11022019

	$('#jump').on('click', function(){

		currentMonth = thisMonth;
		currentYear = thisYear;
		printCalendar(currentMonth, currentYear);

	});



$('#window-content-2 #submitinput').on("click", function(){ // add event

	var input_month, input_year, input_day, input_event;
	input_month = $('#window-content-2 #input-wrap select').val();
	input_year = $('#input-year').val();
	input_event = $('#input-event').val();
	input_day = $('#input-day').val();


	


	input_month = monthToNum(input_month)+1;

	var obje = {

		m : input_month,
		d : input_day,
		y : input_year,
		e : input_event
	};
   
	$.post('add.php', obje); 

	setTimeout(function(){
		$("#events ul").html("");
		printEvents();
		},333);

    $('.background').css('display','none');
	$('#window-content').css('display','none');
	$('#window-content-2').css('display','none');
});



// delete event
	
	



	


});