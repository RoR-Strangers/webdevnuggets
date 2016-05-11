/*global $*/
/*global ace*/

$(document).ready(function(){
		//Adding active class to first tab and show
		$('.tabs a:first').addClass('active');
		$('.tabs a:first').show();            
		//Hiding tab contents those are not first element of tabcontainer
		$('.tabcontent').not(':first').hide();
		
		//Click event on tab
		$(document).on('click','.tabs a', function(){
			//Adding active class to clicked tab and removing same class from it's siblings
			$(this).addClass('active').siblings().removeClass('active');
			//Hiding all tab contents
			$('.tabcontent').hide();
			// showing the clicked tab's content
			$($(this).attr('href')).show();
			return false;
		});
  });