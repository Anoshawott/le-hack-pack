// To access these values, simply make a new function and pass them in

function storeValues_nonfixed() {
	// Name of the task, e.g. Assignment
	var name = document.getElementById('name').value;

	// How long the task is expected to take in hours
	var duration = document.getElementById('duration').value;

	// The priority - high, medium, low
	var priorities = document.getElementsByName('priority');

	for (var i=0, len=priorities.length; i<len; i++) {
		if (priorities[i].checked) {
			priority = priorities[i].value;
			break;
		}
	}

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

function storeValues_fixed() {
	// Name of the task, e.g. Assignment
	var name = document.getElementById('name').value;

	// When the task is done (day)
	var day = document.getElementById('days').value;

	// How long the task is expected to take in hours
	var prep_duration = document.getElementById('prep_duration').value;

	// How long the task is expected to take in hours
	var duration = document.getElementById('duration').value;

	var xhr = new XMLHttpRequest();
	xhr.open("POST", '/api/fixed', true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify({
		'name': name,
		'day': day,
		'prep_duration': prep_duration,
		'duration': duration
	}));

	window.alert(name + ' has been successfully added');
}