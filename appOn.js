//Function that turns on the Chrome Extension.
(function() {

    document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";
    
    //Dark mode is not applicable to images and videos on web pages.
    let media = document.querySelectorAll("img, picture, video");

    media.forEach((mediaItem) => {
        mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
    })
}) ();