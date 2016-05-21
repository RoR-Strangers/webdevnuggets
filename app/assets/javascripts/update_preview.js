/*global $*/
/*global ace*/
$(document).ready(update_preview); // to load when going to page directly
$(document).on('page:load', update_preview); // to load when coming from link_to

function update_preview() {
  var create_editor, update_output, input_content, update_modal, build_webpage;
  
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
  create_editor("css");
  create_editor("javascript");
  
  input_content = function (format, iframe) {
    var editor = ace.edit(format);
    var content = editor.getValue();
    iframe.document.write(content);
    return false;
  };
  
  update_output = function() {
  	var iframe = document.getElementById('targetCode');
  	build_webpage(iframe);
  };
  
  build_webpage = function(iframe) {
    iframe = iframe.contentWindow;
  	iframe.document.open();
  	iframe.document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>');
  	input_content("html", iframe);
  	iframe.document.write("<style>");
  	input_content("css", iframe);
  	iframe.document.write("</style>");
    iframe.document.write("<script>");
  	input_content("javascript", iframe);
    iframe.document.write("</script>");
  	iframe.document.close();
  	return false;
  };
  
  update_modal = function() {
    var modalIframe = document.getElementById('modalIframe');
    build_webpage(modalIframe);
  };
    
  document.getElementById("loadModal").addEventListener("click", update_modal);
  
  $('.modal-content').resizable({
    alsoResize: "#resizable",
    minHeight: 200,
    minWidth: 200
    });
  $('.modal-dialog').draggable();
}
