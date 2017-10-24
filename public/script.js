$(function() {
    markActiveNav();
  });
  
//Add active to current navbar page
function markActiveNav() {
    var href = location.href;
    var pgurl = href.substr(href.lastIndexOf('/') + 1);
    $('nav ul a[href="/' + pgurl + '"]').addClass('active');
};
