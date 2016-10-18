// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {
    // Use $.get to read in your `data/students.csv` dataset: remember, you must be running a local server
    $.get("../data/students.csv", function(data, error) {
        // Parse the data using Papa.parse
        var parsedData = Papa.parse(data, {
        	header: true
        }).data;
        // Use jQuery to create a table, and store that in a variable
        var tab = $("<table>");
        tab.addClass("table");

        // Append a table header for each key in your first observation
       
 		var headers = Object.keys(parsedData[0]);
 		headers.forEach(function(d) {
	    	var newHeader = $("<th>").text(d);
	    	tab.append(newHeader);
     	});
        // Iterate through your array and create a new table row for each element in your array
        parsedData.forEach(function(d) {
        	var data = Object.keys(d);
        	var tabRow = $("<tr>");
        	
            // Add a cell (<td>) for each key/value pair in your object
            data.forEach(function(dd){
        		var tabCell = $("<td>").text(d[dd]);
        		tabRow.append(tabCell);
        	});
        	tab.append(tabRow);
        });
        // Select your `sandbox` section, and append your table to it
		$("#sandbox").append(tab);
    });
});
