document.querySelectorAll("nav button").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        gsap.to(window, {duration: 0.5, scrollTo:{y:"#section" + (index + 1), offsetY:10}});
    });
});

jQuery(function () {
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 970) {
            $("#secondNav").css('opacity', '0.7'); 
            $("#secondNav").css('transition', '0.5s'); 
        } else {
            $("#secondNav").css('opacity', '0'); 
        }
    });
});