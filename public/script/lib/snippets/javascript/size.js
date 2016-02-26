//not necessarily a catch all, just something I use for my own sanity
function screenSize(mobile, smallDesktop, medDesktop)
{
    var mobileSize = mobile == undefined ? 980 : mobile;
    var desktopSmall = smallDesktop == undefined ? 1000 : smallDesktop;
    var desktopMed = medDesktop == undefined ? 1500 : medDesktop;
    //sizes that correspond to what I need them too, mobile is probably what should be adjusted more often
    //TODO:Add breakpoints for common mobile devices, specify type to device
    var size = "", type = "";
    var body = document.getElementsByTagName('body')[0];
    //used to do this by ID, but asking people to add IDs to their body is just dumb
    var width = body.offsetWidth;
    //offsetWidth gives a generally accurate view, certainly good enough for just CSS
    if(width <= mobileSize) type = "mobile";
    else
    {
        type = "desktop";
        if(width < desktopMed)
        {
            if(width < desktopSmall) size = "small-screen";
            else size = "med-screen";
        }
        else size = "large-screen";
    }
    body.className = body.className + " " + type + " " + size;
    //preserves already set classnames!
}