/* =========================================================
   ELP LEGAL NEWSLETTER
   SHARE FUNCTIONS
========================================================= */


/* =========================
   GET CURRENT PAGE
========================= */

const pageUrl = window.location.href;


/* =========================
   FACEBOOK SHARE
========================= */

function shareFacebook() {

    const facebookUrl =
        "https://www.facebook.com/sharer/sharer.php?u=" +
        encodeURIComponent(pageUrl);

    window.open(
        facebookUrl,
        "facebook-share",
        "width=650,height=500,noopener,noreferrer"
    );
}


/* =========================
   TWITTER / X SHARE
========================= */

function shareTwitter() {

    const text =
        "النشرة القانونية العربية - العدد الثالث والثمانون | البوابة القانونية للتشريعات المصرية";

    const twitterUrl =
        "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent(text) +
        "&url=" +
        encodeURIComponent(pageUrl);

    window.open(
        twitterUrl,
        "twitter-share",
        "width=650,height=500,noopener,noreferrer"
    );
}


/* =========================
   READ MORE
========================= */

const readMoreButton = document.querySelector(".read-more");

if (readMoreButton) {

    readMoreButton.addEventListener("click", function () {

        alert("سيتم فتح المقال كاملًا من النشرة القانونية.");

    });

}
