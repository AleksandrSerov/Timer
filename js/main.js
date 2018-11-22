let day = document.getElementsByClassName('day'),
 hour = document.getElementsByClassName('hour'),
 minute = document.getElementsByClassName('minute'),
 second = document.getElementsByClassName('second'),
 wrap = document.getElementsByClassName('wrap')[0],
	timeInterval = setInterval(updateTimer, 1000),
	prom = prompt('Set deadline.Format: MM/DD/YYYY','11/23/2018'),
 deadline = new Date('11/23/2018');


let getLeftTime = (arg) => {
	let timeLeft = Date.parse(arg) - Date.parse(new Date()),
	daysLeft = Math.floor( (timeLeft) / (1000*60*60*24)),
	hoursLeft = Math.floor( ((timeLeft) / (1000*60*60)) % 24),
	minutesLeft = Math.floor( ((timeLeft) / (1000/60)) % 60),
	secondsLeft = Math.floor( ((timeLeft) / (1000)) % 60);
	return {
		'total': timeLeft,
		'days': daysLeft,
		'hours': hoursLeft,
		'minutes': minutesLeft,
		'seconds': secondsLeft
	}
}

function updateTimer()  {
	let t = getLeftTime(deadline);
	second[1].innerHTML = t.seconds % 10;
	second[0].innerHTML = Math.floor(t.seconds / 10);
	minute[1].innerHTML = t.minutes % 10;
	minute[0].innerHTML = Math.floor(t.minutes / 10);
	hour[1].innerHTML = t.hours % 10;
	hour[0].innerHTML = Math.floor(t.hours / 10);
	day[1].innerHTML = t.days % 10;
	day[0].innerHTML = Math.floor(t.days / 10);
	if (t.total < 0) {
		for (i = 0; i < 2; i++) {
			second[i].innerHTML = 0;
			minute[i].innerHTML = 0;
			hour[i].innerHTML = 0;
			day[i].innerHTML = 0;
		} 
		clearInterval(timeInterval);
	}
}
updateTimer();
