//Calendar Algorithm

//Global Vars
var originMonth = 12;
var originYear = -1;
var currentYear = -1;
var leapYearBool = false;
	
function blank_fnc()
{
	//For initial setup of next and prev buttons
}

function clearDays()	//Test function, blank everything.
{
	var calendarDays = ["NULL","day1","day2","day3","day4","day5","day6","day7","day8","day9","day10","day11","day12","day13","day14","day15","day16","day17","day18","day19","day20","day21","day22","day23","day24","day25","day26","day27","day28","day29","day30","day31","day32","day33","day34","day35","day36","day37"];
	for(i = 1; i <= 37; i++)
	{
		document.getElementById(calendarDays[i]).innerHTML = "";
		document.getElementById(calendarDays[i]).style.background = "#eee"
	}
}

function write_cal(nMonth, firstDay, maxDays, isCurrentMonth, todayDate)
{
	//nMonth - Month Parameter
	//firstDay - What day of the week is the first day of the month.
	//maxDays - 31, 30, 29, or 28 day Month.
	//isCurrentMonth - true is sent in if we're working with the current month.
	//todayDate - used to highlight today's date if we're looking at the current month.
	nMonth = parseInt(nMonth);
	firstDay = parseInt(firstDay);
	maxDays = parseInt(maxDays);
	todayDate = parseInt(todayDate);
	
	if(originMonth == nMonth && currentYear == originYear)
	{
		isCurrentMonth = true;
	}
			
	clearDays();
	
	var month = "";
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	month = months[nMonth];
	
	document.getElementById("id_month_offset").innerHTML = month;
	
	var calendarDays = ["NULL","day1","day2","day3","day4","day5","day6","day7","day8","day9","day10","day11","day12","day13","day14","day15","day16","day17","day18","day19","day20","day21","day22","day23","day24","day25","day26","day27","day28","day29","day30","day31","day32","day33","day34","day35","day36","day37"];
      
    var firstDayChecked = false;
	var preDayOffset = 0;
	var postDayOffset = 0;
	var spanCheck;
      
	//Write the dates to days  
	
    if(nMonth == 0 || nMonth == 2 || nMonth == 4 || nMonth == 6 || nMonth == 7 || nMonth == 9 || nMonth == 11)
    {
		for(i = 1; i <= 37; i++)
		{
			if(firstDay == 0 && firstDayChecked == false)
			{
				preDayOffset = 0;
				firstDayChecked = true;	
			}
			else if(firstDay == 1 && firstDayChecked == false)
			{
				preDayOffset = 1;
				i++;
				firstDayChecked = true;
			}
			else if(firstDay == 2 && firstDayChecked == false)
			{
				preDayOffset = 2;
				i += 2;
				firstDayChecked = true;
			}
			else if(firstDay == 3 && firstDayChecked == false)
			{
				preDayOffset = 3;
				i += 3;
				firstDayChecked = true;          
			}
			else if(firstDay == 4 && firstDayChecked == false)
			{
				preDayOffset = 4;
				i += 4;
				firstDayChecked = true;          
			}
			else if(firstDay == 5 && firstDayChecked == false)
			{
				preDayOffset = 5;
				i += 5;
				firstDayChecked = true;          
			}
			else if(firstDay == 6 && firstDayChecked == false)
			{
				preDayOffset = 6;
				i += 6;
				firstDayChecked = true;        
			}
          
			if(i > (maxDays + preDayOffset))
			{
				document.getElementById(calendarDays[i]).innerHTML = "&nbsp";
			}
			else
			{
				postDayOffset = i - preDayOffset;
				document.getElementById(calendarDays[i]).innerHTML = postDayOffset.toString();
				spanCheck = postDayOffset + 1;
				console.log(spanCheck);
				console.log(todayDate);
				if(isCurrentMonth == true)
				{	
					if(todayDate == spanCheck)
					{
						document.getElementById(calendarDays[i]).style.background = "#1abc9c";
					}
				}
			}         
		}
    }
    else if(nMonth == 3 || nMonth == 5 || nMonth == 8 || nMonth == 10)
    {
		for(i = 1; i <= 37; i++)
		{
			if(firstDay == 0 && firstDayChecked == false)
			{
				preDayOffset = 0;
				firstDayChecked = true;	
			}
			else if(firstDay == 1 && firstDayChecked == false)
			{
				preDayOffset = 1;
				i++;
				firstDayChecked = true;
			}
			else if(firstDay == 2 && firstDayChecked == false)
			{
				preDayOffset = 2;
				i += 2;
				firstDayChecked = true;
			}
			else if(firstDay == 3 && firstDayChecked == false)
			{
				preDayOffset = 3;
				i += 3;
				firstDayChecked = true;          
			}
			else if(firstDay == 4 && firstDayChecked == false)
			{
				preDayOffset = 4;
				i += 4;
				firstDayChecked = true;          
			}
			else if(firstDay == 5 && firstDayChecked == false)
			{
				preDayOffset = 5;
				i += 5;
				firstDayChecked = true;          
			}
			else if(firstDay == 6 && firstDayChecked == false)
			{
				preDayOffset = 6;
				i += 6;
				firstDayChecked = true;        
			}
         
			if(i > (maxDays + preDayOffset))
			{
				document.getElementById(calendarDays[i]).innerHTML = "&nbsp";
			}
			else
			{
				postDayOffset = i - preDayOffset;
				document.getElementById(calendarDays[i]).innerHTML = postDayOffset.toString();
				spanCheck = postDayOffset;
				console.log(spanCheck);
				console.log(todayDate);
				if(isCurrentMonth == true)
				{	
					if(todayDate == spanCheck)
					{
						document.getElementById(calendarDays[i]).style.background = "#1abc9c";
					}
				}
			}         
		}
    }
    else if(nMonth == 1)
    {        
		for(i = 1; i <= 37; i++)
		{
			if(firstDay == 0 && firstDayChecked == false)
			{
				preDayOffset = 0;
				firstDayChecked = true;	
			}
			else if(firstDay == 1 && firstDayChecked == false)
			{
				preDayOffset = 1;
				i++;
				firstDayChecked = true;
			}
			else if(firstDay == 2 && firstDayChecked == false)
			{
				preDayOffset = 2;
				i += 2;
				firstDayChecked = true;
			}
			else if(firstDay == 3 && firstDayChecked == false)
			{
				preDayOffset = 3;
				i += 3;
				firstDayChecked = true;          
			}
			else if(firstDay == 4 && firstDayChecked == false)
			{
				preDayOffset = 4;
				i += 4;
				firstDayChecked = true;          
			}
			else if(firstDay == 5 && firstDayChecked == false)
			{
				preDayOffset = 5;
				i += 5;
				firstDayChecked = true;          
			}
			else if(firstDay == 6 && firstDayChecked == false)
			{
				preDayOffset = 6;
				i += 6;
				firstDayChecked = true;        
			}
          
			if(i > (maxDays + preDayOffset))
			{
				document.getElementById(calendarDays[i]).innerHTML = "&nbsp";
			}
			else
			{
				postDayOffset = i - preDayOffset;
				document.getElementById(calendarDays[i]).innerHTML = postDayOffset.toString();
				if(isCurrentMonth == true)
				{	
					if(todayDate == spanCheck)
					{
						document.getElementById(calendarDays[i]).style.background = "#1abc9c";
					}
				}
			}         
		}
	}
	//console.log("Calendar drawn.");
}
  
function getMonth(pMonth, maxDays, pDay)
{
	//pMonth - Month Parameter, what month are we looking at?
	//pDate - Date being passed in. -dont need
	//pDay - Day of the week pDay is.
	//maxDays - number of days in the month.
	//The first time it's called (body onload): all three will be 0, then the current day will be calculated. The originMonth will be saved globally so
	//if we return to the original month, today's date will be highlighted.
	
	// Create new Date Object
    // Object will have the date info when created
	//console.log("getMonth()");
	//console.log(pDay);
	var isCurrentMonth = false;
	var nMonth = -1;
	var subDate = 0;
	var firstDay = 0;
		
	if((originMonth == 12 || originMonth == pMonth) && (originYear == currentYear))	//First time request setup or a return to the original month.
	{
		date = new Date();
		var subDay = date.getDay();
		subDate = date.getDate();
		originYear = date.getYear();
		originYear += 1900;
		currentYear = originYear;
		document.getElementById("year").innerHTML = currentYear.toString();
      
		var tSubDate = subDate;
		//var firstDay;
	
		nMonth = date.getMonth();
	
		//Moves backwards from current day to first of month to find the day the first falls on
		while(tSubDate > 1)
		{
			tSubDate--;
			if(subDay != 0)
			{
				subDay--;
			}		
			else
			{
			subDay = 6;
			}
		}
		firstDay = subDay;
	
		//getCurrentMonth(nMonth, subDate, firstDay, nMonth);
		originMonth = nMonth;
		pMonth = nMonth;
		
		//Get end of month date	
		if(pMonth == 0 || pMonth == 2 || pMonth == 4 || pMonth == 6 || pMonth == 7 || pMonth == 9 || pMonth == 11)
		{
			maxDays = 31;
		}
		else if(pMonth == 3 || pMonth == 5 || pMonth == 8 || pMonth == 10)
		{
			maxDays = 30;
		}
		else if(pMonth == 1)
		{
			var leapYearCheck;
			leapYearCheck = date.getYear();
       
			if(leapYearCheck % 4 == 0)
			{
				maxDays = 29;	
			}
			else
			{
				maxDays = 28;
			}
		}
		
		if(pMonth == originMonth)
		{
			isCurrentMonth = true;
		}
		//isCurrentMonth = true;
		
		pDay = subDay;
		delete date;
	}
	else if(originMonth != pMonth) 
	{
		subDate = 1;
		firstDay = pDay;
	}
	else if(originMonth == pMonth && originYear != currentYear)
	{
		subDate = 1;
		firstDay = pDay;
	}
	
	
	/*var isCurrentMonth = false;
	
	if(pMonth == originMonth)
	{
		isCurrentMonth = true;
	}*/
	console.log(pMonth);
	console.log(firstDay);
	console.log(maxDays);
	console.log(isCurrentMonth);
	console.log(subDate);
	write_cal(pMonth, firstDay, maxDays, isCurrentMonth, subDate);
	
	//Get end of month date (for next month calls)
	//old leap year check location
	//write_cal(pMonth, pDay, maxDays, isCurrentMonth, pDate);
	
	//Setup next month and previous month.
	//From month x's date of 1's day to next month's 1st (I.e. 4/1 on a Monday, 5/1 will be on a Wednesday)
	//30 Day Month -> Any Month:
	//30 -> x: +2 Days
	//31 -> x: +3 Days
	//28 -> x: +0 Days
	//29 -> x: +1 Days
	//
	//Going from any month backwards to a 28/29/30/31 day month:
	//30 <- x: -2 Days
	//31 <- x: -3 Days
	//28 <- x: -0 Days
	//29 <- x: -1 Days
	//
	//First day of the month is on x day, then the last day is on day y, depending on days of month:
	//30 Day: y = x + 1
	//31 Day: y = x + 2
	//28 Day: y = x - 1
	//29 Day y = x
	//
	//next functions to code and call: setNextMonth(currentMonth, ?), setPrevMonth(currentMonth, ?)
	//getMonth always called first, then sends data to setNextMonth(), based on above patterns should be able to interpret it.
	
	//to use the onclick change, we need to concat strings to make "setNextMonth(whatevermonth, whateverfirstday);"
	var stringSetNextCall = "setNextMonth(";
	var stringSetPrevCall = "setPrevMonth(";
	
	var sMonth = nMonth;
	var sFirstDay = firstDay;
	
	//var stringSetFirstParameter = sMonth.toString();
	//var stringSetSecondParameter = sFirstDay.toString();
	
	var stringSetFirstParameter = "" + sMonth;
	var stringSetSecondParameter = "" + sFirstDay;
	
	var stringSetNextConcat = stringSetNextCall + stringSetFirstParameter + "," + stringSetSecondParameter + ");";
	var stringSetPrevConcat = stringSetPrevCall + stringSetFirstParameter + "," + stringSetSecondParameter + ");";

	
	//document.getElementById("nxt").onclick = stringSetNextConcat;
	document.getElementById("nxt").onclick = function() {setNextMonth(pMonth, firstDay);};
	//setNextMonth(pMonth, firstDay);
	{
		//document.getElementById("pre").onclick = stringSetNextConcat;
		document.getElementById("pre").onclick = function() {setPrevMonth(pMonth, firstDay);};
		//setPrevMonth(pMonth, firstDay);
	}
}

function setNextMonth(currentMonth, currentFirstDay)
{
	//From month x's date of 1's day to next month's 1st (I.e. 4/1 on a Monday, 5/1 will be on a Wednesday)
	//30 Day Month -> Any Month:
	//30 -> x: +2 Days
	//31 -> x: +3 Days
	//28 -> x: +0 Days
	//29 -> x: +1 Days
	
	console.log("setNextMonth() called, currentMonth:");
	console.log(currentMonth);
	
	var nextMaxDays = 0;
	//var leapYearBool = false;
	var nextMonth = 0;
	var nextFirstDay = 0;
	date = new Date();
		
	//Next Month Adjustments
	if(currentMonth == 11)	//If next month is jan
	{
		nextMonth = 0;
		//maxDays = 31;
		currentYear++;
		document.getElementById("year").innerHTML = currentYear.toString();
	}
	else
	{
		nextMonth = currentMonth + 1;
	}
	
	//MaxDays adjust (use the next month's maxDays)
	if(currentMonth == 0)
	{
		//leapYearCheck = date.getYear();
		
		if(currentYear % 4 == 0)
		{
			//console.log("First Leap Year Check: currentMonth == 0 and leapYearBool == true");
			nextMaxDays = 29;
			leapYearBool = true;
		}
		else
		{
			//console.log("First Leap Year Check: currentMonth == 0 and leapYearBool == false");
			nextMaxDays = 28;
			leapYearBool = false;
		}
	}
	else if(currentMonth == 1 || currentMonth == 3 || currentMonth == 5 || currentMonth == 6 || currentMonth == 8 || currentMonth == 10 || currentMonth == 11)
	{
		//console.log("nextMaxDays set to 31");
		nextMaxDays = 31;
	}
	else if(currentMonth == 2 || currentMonth == 4 || currentMonth == 7 || currentMonth == 9)
	{
		nextMaxDays = 30;
	}
	
	
	//Determine next month's first day
	if(currentMonth == 3 || currentMonth == 5 || currentMonth == 8 || currentMonth == 10)	//30 Day Months
	{
		if(currentFirstDay <= 4)
		{
			//console.log("setNext: 30 Day Month first if");
			nextFirstDay = currentFirstDay + 2;
		}
		else if(currentFirstDay == 5)
		{
			//console.log("setNext: 30 Day Month second if");
			nextFirstDay = 0;
		}
		else if(currentFirstDay == 6)
		{
			//console.log("setNext: 30 Day Month third if");
			nextFirstDay = 1;
		}
	}
	else if(currentMonth == 0 || currentMonth == 2 || currentMonth == 4 || currentMonth == 6 || currentMonth == 7 || currentMonth == 9 || currentMonth == 11)	//31 Day Months
	{
		if(currentFirstDay <= 3)
		{
			//console.log("setNext: 31 Day Month first if");
			nextFirstDay = currentFirstDay + 3;
		}
		else if(currentFirstDay == 4)
		{
			//console.log("setNext: 31 Day Month second if");
			nextFirstDay = 0;
		}
		else if(currentFirstDay == 5)
		{
			//console.log("setNext: 31 Day Month third if");
			nextFirstDay = 1;
		}
		else if(currentFirstDay == 6)
		{
			//console.log("setNext: 31 Day Month fourth if");
			nextFirstDay = 2;
		}
	}
	else if(currentMonth == 1)
	{
		//console.log("setNext: nextFirstDay Logic: currentMonth == 1");
		//console.log(leapYearBool);
		if(leapYearBool == true)
		{
			//console.log("currentMonth == 1 and leapYearBool == true");
			if(currentFirstDay < 6)
			{
				nextFirstDay = currentFirstDay + 1;
			}
			else if(currentFirstDay == 6)
			{
				nextFirstDay = 0;
			}
		}
		else if(leapYearBool == false)
		{	
			//console.log("currentMonth == 1 and leapYearBool == false");
			nextFirstDay = currentFirstDay;
		}
	}
	/*console.log("Params:");
	console.log(nextMaxDays);
	console.log(nextFirstDay);
	console.log("\n");*/
	getMonth(nextMonth, nextMaxDays, nextFirstDay);

	delete date;
}

function setPrevMonth(currentMonth, currentFirstDay)
{	
	var prevMaxDays;
	var prevMonth;
	var prevFirstDay;
	date = new Date();
	
	if(currentMonth == 0)	//If next month is jan
	{
		prevMonth = 11;
		//maxDays = 31;
		currentYear--;
		document.getElementById("year").innerHTML = currentYear.toString();
	}
	else
	{
		prevMonth = currentMonth - 1;
	}
	
	if(currentMonth == 2)
	{
		
		if(currentYear % 4 == 0)
		{
			prevMaxDays = 29;
			leapYearBool = true;
		}
		else
		{
			prevMaxDays = 28;
			leapYearBool = false;
		}
	}
	else if(currentMonth == 0 || currentMonth == 1 || currentMonth == 3 || currentMonth == 5 || currentMonth == 7 || currentMonth == 8 || currentMonth == 10)
	{
		prevMaxDays = 31;
	}
	else if(currentMonth == 4 || currentMonth == 6 || currentMonth == 9 || currentMonth == 11)
	{
		prevMaxDays = 30;
	}
	
	//Determine prev month's first day
	//Need to check destination, as opposed to source month as in setNextMonth
	//Going from any month backwards to a 28/29/30/31 day month:
	//x = currentMonth
	//30 <- x: -2 Days
	//31 <- x: -3 Days
	//28 <- x: -0 Days
	//29 <- x: -1 Days
	if(currentMonth == 0 || currentMonth == 3 || currentMonth == 5 || currentMonth == 7 || currentMonth == 8 || currentMonth == 10) //31 <- x
	{
		if(currentFirstDay >= 3)
		{
			prevFirstDay = currentFirstDay - 3;
		}
		else if(currentFirstDay == 2)
		{
			prevFirstDay = 6;
		}
		else if(currentFirstDay == 1)
		{
			prevFirstDay = 5;
		}
		else if(currentFirstDay == 0)
		{
			prevFirstDay = 4;
		}
	}
	else if(currentMonth == 4 || currentMonth == 6 || currentMonth == 9 || currentMonth == 11) //30 <- x
	{
		if(currentFirstDay >= 2)
		{
			prevFirstDay = currentFirstDay - 2;
		}
		else if(currentFirstDay == 1)
		{
			prevFirstDay = 6;
		}
		else if(currentFirstDay == 0)
		{
			prevFirstDay = 5;
		}
	}
	else if(currentMonth == 2)	//March (29/28 <- x)
	{
		if(leapYearBool == true)
		{
			if(currentFirstDay > 0)
			{
				prevFirstDay = currentFirstDay - 1;
			}
			else if(currentFirstDay == 0)
			{
				prevFirstDay = 6;
			}
		}
		else if(leapYearBool == false)
		{
			prevFirstDay = currentFirstDay;
		}
	}
	
	getMonth(prevMonth, prevMaxDays, prevFirstDay);

	delete date;
}