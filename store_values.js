// To access these values, simply make a new function and pass them in

function storeValues_nonfixed() {
	// Name of the task, e.g. Assignment
	var name = document.getElementById('name').value;

	// When the task is due by (day)
	var due_date = document.getElementById('due_date').value;

	// When the task is due by (time)
	var due_time = document.getElementById('due_time').value;

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
	xhr.open("POST", '/api', true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify({
		'name': name,
		'due_date': due_date,
		'due_time': due_time,
		'duration': duration,
		'priority': priority
	}));

	window.alert(name + ' has been successfully added');
}

function storeValues_fixed() {
	// Name of the task, e.g. Assignment
	var name = document.getElementById('name').value;

	// When the task is due by (day)
	var date = document.getElementById('date').value;

	// When the task is due by (time)
	var start_time = document.getElementById('start_time').value;

	// How long the task is expected to take in hours
	var prep_duration = document.getElementById('prep_duration').value;

	// How long the task is expected to take in hours
	var duration = document.getElementById('duration').value;

	var xhr = new XMLHttpRequest();
	xhr.open("POST", '/api', true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify({
		'name': name,
		'date': date,
		'start_time': start_time,
		'prep_duration': prep_duration,
		'duration': duration
	}));

	window.alert(name + ' has been successfully added');
}