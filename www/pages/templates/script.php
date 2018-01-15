<script src="../js/jquery-3.2.1.min.js"></script>
<script src="../js/script.js"></script>
<script src="../js/filter.js"></script>
<script src="../js/search.js"></script>
<script>
if(navigator.userAgent.match(/Trident\/7\./)) {
    $('body').on("mousewheel", function () {
        event.preventDefault();

        var wheelDelta = event.wheelDelta;

        var currentScrollPosition = window.pageYOffset;
        window.scrollTo(0, currentScrollPosition - wheelDelta);
    });

    $('html').keydown(function (e) {
        e.preventDefault(); // prevent the default action (scroll / move caret)
        var currentScrollPosition = window.pageYOffset;

        switch (e.which) {

            case 38: // up
                window.scrollTo(0, currentScrollPosition - 120);
                break;

            case 40: // down
                window.scrollTo(0, currentScrollPosition + 120);
                break;

            default: return; // exit this handler for other keys
        } 
    });
}
</script>