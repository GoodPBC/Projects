 var todoCount = 0;  	//holds the count for our todo list  items

 $('#addTodo').on("click", function() {
		var todoTask = $('#todo').val().trim().toUpperCase();		//grabs value from text input
		var todoItem = $('<p>'); 	//jquery create <p> element
		todoItem.css('font-weight', '700');
		todoItem.attr("id", "item-" + todoCount); 	//add ID of "item-" and concat todoCount to it.
		todoItem.append(" " + "--" + " " + todoTask); 	//appends todoTask to todoItem 


		var closeTodo = $('<button class="btn-danger">'); 	//create button for todo's
		closeTodo.attr('data-todo', todoCount); 	//add data attribute to correlate with counter
		closeTodo.addClass('checkbox');		//add class to button
		closeTodo.prepend('X');		//add button text
		closeTodo.css('display', 'inline');

		todoItem = todoItem.prepend(closeTodo);  //append button to each <p> element

		$('#todos').append(todoItem);		//add each todoItem to page

		$('#todo').val("");		//clear text box after each user input

		todoCount++;		//increment counter

		return false;		//prevent page refresh on submit
 });


 $(document).on('click', '.checkbox', function(){		//creat dynamic event listener
 		var todoNumber = $(this).data('todo'); 	//get data from todo & store in var
 		$('#item-' + todoNumber).remove();		//use the data from todo to remove content on button click
 });