
slotMachine.animeUp = function () {
    // When animating hide play button ::
    $('#spin3D').hide();

    $('.slot').each(function () {
        // this DOM element from .slot CLASS ::
        var $el = $(this);
        // rotateX deg for current this el ::
        var currentX = $el.data('rotateX');
        // animate ::
        $el.delay($el.data('delay')).animate(
		{
		    animateDuration: slotMachine.anime.upUnits
		},
		{
		    // each frame of animation ::
		    step: function (now, fx) {

		        $(this).css({
		            '-webkit-transform': 'rotateX(' + (currentX + now) + 'deg) translateZ(' + slotMachine.translateZ + 'px)',
		            'transform': 'rotateX(' + (currentX + now) + 'deg) translateZ(' + slotMachine.translateZ + 'px)'
		        });
		        // check angles ::
		        slotMachine.visibilityUP(currentX, now, $el);

		    },
		    duration: slotMachine.anime.upTime,
		    easing: "linear",
		    complete: function () {
		        
                $(this).data('rotateX', currentX + slotMachine.anime.upUnits)
		        
                // call funnction with this jQuery object ::
		        slotMachine.resetAnimate.call(this);
		        slotMachine.animeDown.call(this);
		    }
		});
    });
}

slotMachine.animeDown = function () {
    // this DOM element from .slot CLASS ::
    var $el = $(this);
    // rotateX deg for current this el ::
    var currentX = $el.data('rotateX');
    // animate ::
    $el.animate(
    {
        animateDuration: slotMachine.anime.downUnits
    },
    {
        // each frame of animation ::
        step: function (now, fx) {

            $(this).css({
                '-webkit-transform': 'rotateX(' + (currentX - now) + 'deg) translateZ(' + slotMachine.translateZ + 'px)',
                'transform': 'rotateX(' + (currentX - now) + 'deg) translateZ(' + slotMachine.translateZ + 'px)'
            });
            // check angles ::
            slotMachine.visibilityDOWN(currentX, now, $el);
        },
        duration: slotMachine.anime.downTime,
        //easing: "linear",
        complete: function () {
            // reset to initial values ::
            $(this).data('rotateX', currentX - slotMachine.anime.upUnits)
            
            // call funnction with this jQuery object ::	
            slotMachine.resetAnimate.call(this);

            // When animate is complete show the play button ::
            $('#spin3D').show();
        }
    });
}

// Reset Jquery Animate Step function to null values ::
slotMachine.resetAnimate = function () {
    $(this)
		.animate({
		    animateDuration: 0
		},
		{
		    step: null,
		    duration: 0
		});
}