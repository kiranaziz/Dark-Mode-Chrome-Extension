//Function that turns off the Chrome Extension.
(function () {

    document.querySelector("html").style.filter = "invert(0) hue-rotate(0deg)";
   
    //Dark mode is not applicable to images and videos on web pages.
    let media = document.querySelectorAll("img, picture, video");

    media.forEach((mediaItem) => {
        mediaItem.style.filter = "invert(0) hue-rotate(0deg)";
    })
}) ();