$(document).ready(function () {
    slotMachine.create();

    // 50 fps ::
    jQuery.fx.interval = 20;

    // start animation ::
    $('#spin3D').click(function () {
        slotMachine.animeUp();
    })

    // show innards ::
    $('#innards').change(function () {
        if ($('machineContainer').is(':not(:animated)')) {
            slotMachine.innards();
        }
    });

    // show innards ::
    $('#flat').change(function () {
        if (slotMachine.perspective == '3D') {
            slotMachine.perspective = 'flat';
            $('machineContainer').css({
                '-webkit-perspective': 'none',
                'perspective': 'none',
                '-ms-perspective': 'none'
            })
        } else {
            slotMachine.perspective = '3D';
            $('machineContainer').css({
                '-webkit-perspective': '2000px',
                'perspective': '2000px',
                '-ms-perspective': '2000px'
            })
        }
    });
});

// random number 100-700 to select a random image from sprite ::
var randomImg = function () {
    return Math.floor((Math.random() * 7) + 1) * 100;
}

var sinDegrees = function (number) {
    return Math.sin(number / 180 * Math.PI);
}

