
	jQuery.fn.sectioanize = function() {
		$parent = $(this)
		$children = $(this).children($('.section'));
		$currentChild = 0;

		if( $children.length === 0 ) {
			return ;
		}

		$(this).addClass('fullpagejs');
		init();

		$(window).on('resize',function(){
			init()
			setTimeout(function(){
				moveWindow($currentChild);
			}, 500)
		});
		
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


		$(window).bind('mousewheel', function(event) {
			console.log(1);
			if (event.originalEvent.wheelDelta >= 0) {
			  $next_section = --$currentChild;
			}
			else {
			  $next_section = ++$currentChild;
			}

			if( $next_section >= $children.length || $next_section < 0) {
				return ;
			}
			
			moveWindow($next_section);

		})


		function getWindowWidth() {
			return $(window).outerWidth(true);
		}

		function getWindowHeight() {
			return $(window).outerHeight();
		}

		function moveWindow() {
			$children.eq(0).animate({
				'margin-top' : '-' + $next_section * getWindowHeight(),
			});
		}

	}
