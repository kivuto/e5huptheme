# e5hupTheme2014
-----
Created on Mon Jan 13 11:53:53 EST 2014
 
### Description
This is the theme for HUP (Home Use Program) wenstores in e5. It has a javacript file (hup.js) a css file (hup.css) and 3 images that make up the theme. The javascript is used to switch the order of the top right hand navigations as well as... *ian please complete*


-----

## Steps for Implementation by Development Team

*Ian Please filll this out with the line numbers of images to chage as well as anything else you see fit*

1. Line 99 : swap out image path with newly uploaded static location
2. make sure JS file is laoded on all pages of the webstore.
3. make sure CSS file is loaded... ect ect

----- 

## Theme Development Steps

### STEP 1 - Setting up the JavaScripts
1. Go to Miscellaneous, and select 'Web Site Scripts'
2. Hit 'New'.
3. Name it 'hupthemejs' with the default values, and hit 'Save'.
4. Navigate to the properties tab once you have saved it 
5. Click on 'Add Properties' 
6. Check off 'Content' and 'Pages' and click OK
7. Click on 'New' under Content
8. Name it 'hupthemejs' 
9. Copy and paste this code into the 'Content' window and
click OK
`<script type="text/javascript"> $(function () { // Dependency on a newer version
of jQuery than is loaded by e5 presently:
$.getScript('//ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.1.min.js', function ()
{ var jquery_1_7_1 = \$.noConflict(true); jquery_1_7_1('#ctl00_tblHeader \>
tbody \>
tr').first().addClass('socialHere').parent().prepend(jquery_1_7_1('#ctl00_tblHeader
\> tbody \> tr + tr').first()); var dspLogo = "<div
class='utilnav-img'>&nbsp;</div>'";
jquery_1_7_1(dspLogo).insertBefore('.HeaderText:eq(1)');
jquery_1_7_1('.twitter-share-button.twitter-count-horizontal,.socialHere td div
*, ul.HeaderText li:odd, .socialHere td:first-child *').css('display', 'none');
}); }); </script>`


10. Then click on 'Select' under pages and select ALL of the pages and click OK
    (This takes some time as you can't navigate to the next page of pages
    without losing your selection)
11. Make sure to change it from a draft to
    testing, and then testing to public!

### STEP 2 - Selecting the theme 
1. Click on 'WebStore'
2. Click on 'Properties'
3. Under theme, click on the name displayed
and paste the URL of your stylesheet it  	(In this case:
http://git.onthehub.com/e5hupTheme2014/theme-files/hup.css)
