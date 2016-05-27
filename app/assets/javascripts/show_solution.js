/*global $*/
/*global ace*/
/*global swal*/
$(document).ready(setup_solution);
$(document).on('page:load', setup_solution);

function insert_code(format) {
  var editor = ace.edit(format);
  var content = $('#insert').data(format);
  editor.setValue("");
  editor.insert(content);
}

function setup_solution() {
  document.getElementById("solution").addEventListener("click", show_solution);

  function show_solution() {
    swal({
        title: "Are you sure?",
        text: "You might feel like a cheater if you do!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, cheat!',
        cancelButtonText: "No, I want to figure it out!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {

        if (isConfirm) {
          swal("Cheater!", "Code successfully inserted!", "success");
          insert_code("html");
          insert_code("css");
          insert_code("javascript");

        }
        else {
          swal("Cancelled", "You got this! :)", "error");
        }
      });
  }
}
