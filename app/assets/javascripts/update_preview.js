/*global $*/
/*global ace*/
$(document).ready(update_preview); // to load when going to page directly
$(document).on('page:load', update_preview); // to load when coming from link_to

function update_preview() {
  var create_editor, update_output, input_content,
      build_webpage, select_screen, load_function_previews;
  
  create_editor = function (format) {
    var editor = ace.edit(format);
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/" + format);
    editor.getSession().setTabSize(2);
    editor.getSession().on('change', function(e) {
      update_output();
    });
    return false;
  };
  
  load_function_previews = function() {
    $('.lesson-preview').each(function() {
      var title = $(this).data('title'),
          html = $(this).data('html'),
          css = $(this).data('css'),
          javascript = $(this).data('javascript'),
          iframe =  document.querySelector("[id=" + title + "]");
        
      iframe = iframe.contentWindow;
      iframe.document.open();
    	iframe.document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>');
    	iframe.document.write(html);
    	iframe.document.write("<style>");
    	iframe.document.write(css);
    	iframe.document.write("</style>");
      iframe.document.write("<script>");
    	iframe.document.write(javascript);
      iframe.document.write("</script>");
    	iframe.document.close();
    });
  };
  
  load_function_previews();
  
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
  
  $('#loadModal').click(function() {
    var modalIframe = document.getElementById('modalIframe');
    build_webpage(modalIframe);
  });
    
  $('.screen_selector').click(function() {
    var targetWidth = $(this).data('width');
    var targetHeight = $(this).data('height');
    select_screen(targetWidth, targetHeight);
  });
  
  select_screen = function(targetWidth, targetHeight) {
    $('#resizable').animate({width: targetWidth});
    $('#resizable').animate({height: targetHeight});
    $('.modal-content').animate({width: targetWidth});
    $('.modal-content').animate({height: targetHeight});
  };
  
  $('.modal-content').resizable({
    alsoResize: "#resizable",
    minWidth: 400
    });
  $('.modal-dialog').draggable();
}
