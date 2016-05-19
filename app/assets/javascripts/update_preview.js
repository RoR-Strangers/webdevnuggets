/*global $*/
/*global ace*/
var ready = function() {
  update_preview();
};

$(document).ready(ready); // to load when going to page directly
$(document).on('page:load', ready); // to load when coming from link_to

function update_preview() {
  var create_editor, update_output, input_content;
  
  create_editor = function (format) {
    var editor = ace.edit(format);
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/" + format);
    editor.getSession().on('change', function(e) {
        update_output();
    });
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
  	iframe.document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>');
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
}
