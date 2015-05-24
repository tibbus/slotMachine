
var slotMachine =
{
    perspective: '3D',
    anime:
	{
	    upTime: 500,
	    downTime: 2000,
	    upUnits: 50,
	    downUnits: 770,
	    delay:
		{
		    initial: 0,
		    difference: 90
		},
	    innards:
		{
		    duration: 1000,
		    units: -300,
		    initial: 75,
		    direction: 1
		}
	},
    angle: 30,
    translateZ: 190
};

slotMachine.create = function () {
    // number of ROWS :: 
    for (var k = 0; k < 6; k++) {
        // * number of LINES ::
        for (var i = 0; i < 12; i++) {
            $('<div>')
				.appendTo('machineContainer')
				.attr('id', 'slot' + i + '_' + k)
				.addClass('slot')
				.css({
				    '-webkit-transform': 'rotateX(' + (slotMachine.angle * i) + 'deg) translateZ(' + slotMachine.translateZ + 'px)',
				    '-ms-transform': 'rotateX(' + (slotMachine.angle * i) + 'deg) translateZ(' + slotMachine.translateZ + 'px)',
				    'transform': 'rotateX(' + (slotMachine.angle * i) + 'deg) translateZ(' + slotMachine.translateZ + 'px)',
				    left: k * 100 + 'px',
				    top: 180,
				    'background-position': '100px ' + randomImg() + 'px'
				})
				.data({
				    rotateX: slotMachine.angle * i,
				    delay: slotMachine.anime.delay.initial + slotMachine.anime.delay.difference * k,
				});
            if ((i <= 2 || i >= 9)) {
                $('#slot' + i + '_' + k)
					.addClass('onFront')
            }
        }
    }
}