/*global $*/
/*global ace*/
$(document).ready(function() {
  var create_editor, update_output, input_content;
  
  create_editor = function (format) {
    var editor = ace.edit(format);
    editor.setTheme("ace/theme/twilight");
    editor.getSession().setMode("ace/mode/" + format);
    return false;
  };
  
  create_editor("html");
  create_editor("sass");
  create_editor("javascript");
  
  input_content = function (format, iframe) {
    var editor = ace.edit(format);
    var content = editor.getValue();
    iframe.document.write(content);
    return false;
  };
  
  update_output = function() {
  	var iframe = document.getElementById('targetCode');
  	iframe = iframe.contentWindow;
  	iframe.document.open();
  	input_content("html", iframe);
  	iframe.document.write("<style>");
  	input_content("sass", iframe);
  	iframe.document.write("</style>");
    iframe.document.write("<script>");
  	input_content("javascript", iframe);
    iframe.document.write("</script>");
  	iframe.document.close();
  	return false;
  };

  $(".editor").keyup(function() {
     update_output();
  });
});