/*global $*/
/*global ace*/
$(document).ready(setup_solution);
$(document).on('page:load', setup_solution); 

function setup_solution() {
  document.getElementById("solution").addEventListener("click", show_solution);

  function show_solution() {
    if (confirm('Are you sure you want to show the solution? All your code will be replaced')) {
        insert_code("html");
        insert_code("css");
        insert_code("javascript");
    }
  }
  
  function insert_code(format) {
    var editor = ace.edit(format);
    var content = $('#insert').data(format);
    editor.setValue("");
    editor.insert(content);
  }
}