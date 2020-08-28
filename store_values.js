// To access these values, simply make a new function and pass them in

function storeValues() {
	// Name of the task, e.g. Assignment
	var name = document.getElementById('name').value;

	// Name of the subtask, e.g. Do research
	var subtask = document.getElementById('subtask').value;

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