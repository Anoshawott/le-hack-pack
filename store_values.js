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

	window.alert(name + ' has been successfully added');
}