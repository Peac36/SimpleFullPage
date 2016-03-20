(function($){
	$(document).ready(function(){
		$('.wrapper').sectioanize();
	})


	$.fn.sectioanize = function() {
		$children = $(this).children($('.section'));

		if( $children.length === 0 ) {
			return ;
		}

		init();

		
		function init() {
			$children.each(function(){
				$(this).css({
					'max-width': getWindowWidth(),
					'max-height': getWindowHeight(),
					'height': '100%',
    				'width': '100%',
				})
			})
		}

		function getWindowWidth() {
			return $(document).outerWidth(true);
		}

		function getWindowHeight() {
			return $(window).outerHeight();
		}

		var lastScrollTop = 0;

		$(window).on('resize',init());

		$(window).scroll(function(e){
			var st = $(this).scrollTop();
		   if (st > lastScrollTop){
		       console.log('down')
		   } else {
		      console.log('up');
		   }
		   lastScrollTop = st;
		})

	}
})(jQuery)