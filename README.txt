# e5hupTheme2014
-----
Created on Mon Jan 13 11:53:53 EST 2014

Author: Ian Clarke
 
## Description
This is the theme for HUP (Home Use Program) webstores in e5. It has a javacript file (hup.js) a css file (hup.css) and 2 images (hup-banner.jpg, ms-hup-logo.jpg) that make up the theme. The javascript is used to switch the order of the top right hand navigations.

The image hup-banner.jpg is to be used as the banner to be applied to all new stores. I belive this was how the DSP theme was set up as well.


-----

## Tasks for Implementation by Development Team

1. Swap out all images references to *git.onthehub.com* with *Static* equivilant in hup.css
2. Ensure JS file is laoded on all pages of the webstore.
3. Ensure CSS file is loaded on all pages of the webstore.
4. If the webstore has no banner attached use the file hup-banner.jpg as the default.

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



### STEP 3 - Upload banner ###
1. Click on 'Attachments'
2. If there is already a banner, make sure to delete it
3. Upload your new banner my clicking 'New'