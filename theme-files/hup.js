$(function () {
    // Dependency on a newer version of jQuery than is loaded by e5 presently:
    $.getScript('//ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.1.min.js', function () {
        var jquery_1_7_1 = $.noConflict(true);
        jquery_1_7_1('#ctl00_tblHeader > tbody > tr').first().addClass('socialHere').parent().prepend(jquery_1_7_1('#ctl00_tblHeader > tbody > tr + tr').first());
        var dspLogo = "<div class='utilnav-img'>&nbsp;</div>'";
        jquery_1_7_1(dspLogo).insertBefore('.HeaderText:eq(1)');
        jquery_1_7_1('.twitter-share-button.twitter-count-horizontal,.socialHere td div *, ul.HeaderText li:odd, .socialHere td:first-child *').css('display', 'none');
    });
});
