
// reset ::
slotMachine.resetInnards = function () {
    $(this)
		.animate({
		    innardsDuration: 0
		},
		{
		    step: null,
		    duration: 0
		});
}

slotMachine.innards = function () {
    var $el = $('machineContainer'),
		init = slotMachine.anime.innards.initial,
		direction = slotMachine.anime.innards.direction,
		units = slotMachine.anime.innards.units

    $el.animate(
		{
		    innardsDuration: units
		},
		{
		    step: function (now, fx) {
		        $(this).css({
		            '-webkit-perspective-origin': (init + now * direction) + '% 0%',
		            '-ms-perspective-origin': (init + now * direction) + '% 0%',
		            'perspective-origin': (init + now * direction) + '% 0%',
		        });
		    },
		    duration: slotMachine.anime.innards.duration,
		    complete: function () {
		        // set the current initial value to innards rotation and set the new direction ::
		        slotMachine.anime.innards.initial += units * direction;
		        slotMachine.resetInnards.call(this);
		        slotMachine.anime.innards.direction *= -1;

		    },
		    queue: false
		});
    // check to show or hide the innards ::
    if (direction == 1) {

        $('.slot').animate(
		{
		    opacity: 0.7
		},
		{
		    duration: slotMachine.anime.innards.duration,
		    queue: false
		}
		)
    } else {
        $('.slot').animate(
		{
		    opacity: 1
		},
		{
		    duration: slotMachine.anime.innards.duration,
		    queue: false
		}
		)
    }
}