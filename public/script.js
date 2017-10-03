!function () {
    var href = location.href;
    var pgurl = href.substr(href.lastIndexOf('/') + 1);
    $('a[href="/' + pgurl + '"]').addClass('active');
 }();
