function parallaxIt(e, target, movement) {
    var $this = $("#container");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement });

}

$("#container").mousemove(function (e) {
    parallaxIt(e, "img", -30);
    parallaxIt(e, ".one", -100);
    parallaxIt(e, ".two", -130);
    //parallaxIt(e, "img", -30);
});