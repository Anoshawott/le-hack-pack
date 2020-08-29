// To access these values, simply make a new function and pass them in

function storeValues_nonfixed() {
	var input_correct = true;

	// Name of the task, e.g. Assignment
	var name = document.getElementById('name').value;

	// How long the task is expected to take in hours
	var duration = document.getElementById('duration').value;

	if (duration.charAt(2) != ':') {
		window.alert('Please input the duration in HH:MM');
		input_correct = false;
	}

	// The priority - high, medium, low
	var priorities = document.getElementsByName('priority');

	for (var i=0, len=priorities.length; i<len; i++) {
		if (priorities[i].checked) {
			priority = priorities[i].value;
			break;
		}
	}

	if (
	console.log(xhr.responseText)
	input_correct == true) {
		var xhr = new XMLHttpRequest();
		xhr.open("POST", '/api/priority', true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify({
			'name': name,
			'duration': duration,
			'priority': priority
		}));

		window.alert(name + ' has been successfully added');
	}
}

function storeValues_fixed() {
	var input_correct = true;

	// Name of the task, e.g. Assignment
	var name = document.getElementById('name').value;

	// When the task is done (day)
	var day = document.getElementById('days').value;
	day = parseInt(day);

	var start_time = document.getElementById('start_time').value;

	// How long the task is expected to take in hours
	var prep_duration = document.getElementById('prep_duration').value;

	// How long the task is expected to take in hours
	var duration = document.getElementById('duration').value;

	if (duration.charAt(2) != ':' || prep_duration.charAt(2) != ':') {
		window.alert('Please input the duration in HH:MM');
		input_correct = false;
	}

	if (input_correct == true) {
		var xhr = new XMLHttpRequest();
		xhr.open("POST", '/api/fixed', true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify({
			'name': name,
			'day': day,
			'start_time': start_time,
			'prep_duration': prep_duration,
			'duration': duration
		}));

		window.alert(name + ' has been successfully added');
	}	
}