/* =========================================================
   ELP LEGAL NEWSLETTER
   JAVASCRIPT
========================================================= */


/* =========================================================
   FACEBOOK SHARE
========================================================= */

function shareFacebook() {

    const currentPage = encodeURIComponent(window.location.href);

    const facebookURL =
        "https://www.facebook.com/sharer/sharer.php?u=" + currentPage;

    window.open(
        facebookURL,
        "_blank",
        "width=700,height=500"
    );
}


/* =========================================================
   TWITTER / X SHARE
========================================================= */

function shareTwitter() {

    const currentPage = encodeURIComponent(window.location.href);

    const pageTitle =
        encodeURIComponent(document.title);

    const twitterURL =
        "https://twitter.com/intent/tweet?url=" +
        currentPage +
        "&text=" +
        pageTitle;

    window.open(
        twitterURL,
        "_blank",
        "width=700,height=500"
    );
}


/* =========================================================
   READ MORE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const readMoreButtons =
        document.querySelectorAll(".read-more");

    readMoreButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            alert(
                "سيتم فتح المقال كاملًا قريبًا."
            );

        });

    });

});
