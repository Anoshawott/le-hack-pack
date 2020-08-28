function storeValues() {
	var name = document.getElementById('name').value;
	var subtask = document.getElementById('subtask').value;
	var due_date = document.getElementById('due_date').value;
	var due_time = document.getElementById('due_time').value;
	var duration = document.getElementById('duration').value;
	var priorities = document.getElementsByName('priority');

	for (var i=0, len=priorities.length; i<len; i++) {
		if (priorities[i].checked) {
			priority = priorities[i].value;
			break;
		}
	}
	window.alert(name + ' has been successfully added');
}