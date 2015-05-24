
// toggle z-index for cards when animate UP ::
slotMachine.visibilityUP = function (currentX, now, $el) {
    // current angle ::
    var viewPoint = parseInt(currentX - now);
    var sinValue = sinDegrees(viewPoint);

    // This slotMachine is a circle, so we can use Math sin to detect where the card is
    // on this circle, at sin(90degree) = 1 // sin(-90degree) = -1
    // also the frames can drop, so we compare with a close value to 1
    if (sinValue >= 0.988 && $el.hasClass('onFront'))          	// if card is at Front SHOW ::
    {
        $el.removeClass('onFront');

    } else if (sinValue <= -0.988 && !$el.hasClass('onFront'))       // if card is Behind HIDE ::
    {
        $el.addClass('onFront');
    }
}

// toggle z-index for cards when animate DOWN ::
slotMachine.visibilityDOWN = function (currentX, now, $el) {
    var viewPoint = parseInt(currentX - now);
    var sinValue = sinDegrees(viewPoint);

    if (sinValue <= -0.988 && $el.hasClass('onFront')) {
        $el.removeClass('onFront');

    } else if (sinValue >= 0.988 && !$el.hasClass('onFront')) {
        $el.addClass('onFront');
    }
}