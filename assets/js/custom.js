jQuery(document).ready(function () {
    jQuery('#ft-search-btn').click(function (event) {
        event.stopPropagation(); // Prevent immediate hiding when clicking the button
        jQuery('#ft-search-box').toggle();
    });

    jQuery(document).click(function (event) {
        if (!jQuery(event.target).closest('#ft-search-box, #ft-search-btn').length) {
            jQuery('#ft-search-box').hide();
        }
    });
    let ft_datepicker = $(".ft-hbi-date").datepicker({
        dateFormat: "dd-mm-yy", // Indian date format
        changeMonth: true,
        changeYear: true,
        yearRange: "1900:+10" // Allow selection from 1900 to 10 years in future
    });

    // Open datepicker when clicking on the icon
    $(".ft-hb-date-icon").each(function () {
        $(this).on('click', function () {
            $(this).prev(".ft-hbi-date").datepicker("show");
        });
    });
});

/* Image Reveal Animation */
if ($('.ft-reveal').length) {
    gsap.registerPlugin(ScrollTrigger);
    let revealContainers = document.querySelectorAll(".ft-reveal");
    revealContainers.forEach((container) => {
        let image = container.querySelector("img");
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                toggleActions: "play none none none"
            }
        });
        tl.set(container, {
            autoAlpha: 1
        });
        tl.from(container, 1, {
            xPercent: -100,
            ease: Power2.out
        });
        tl.from(image, 1, {
            xPercent: 100,
            scale: 1,
            delay: -1,
            ease: Power2.out
        });
    });
}

// Title animations
let des_anim_item_one = document.querySelectorAll(".ft-title_split_anim");
des_anim_item_one.forEach((des_anim_item) => {
    let data_duration = des_anim_item.getAttribute("data-duration") || 0.80;
    let data_delay = des_anim_item.getAttribute("data-delay") || 0.2;
    let translateX_value = des_anim_item.getAttribute("data-translateX") || 0;
    let translateY_value = des_anim_item.getAttribute("data-translateY") || 0;
    let onscroll_value = des_anim_item.getAttribute("data-on-scroll") || 1;
    let stagger_value = des_anim_item.getAttribute("data-stagger") || 0.06;
    let split_word = new SplitText(des_anim_item, { type: "chars, words" });
    let gsapConfig = {
        duration: data_duration,
        delay: data_delay,
        x: translateX_value || 20,
        y: translateY_value,
        autoAlpha: 0,
        stagger: stagger_value
    };
    if (onscroll_value == 1) {
        gsapConfig.scrollTrigger = {
            trigger: des_anim_item,
            start: 'top 90%'
        };
    }
    gsap.from(split_word.words, gsapConfig);
});
let des_anim_item = document.querySelectorAll(".ft-title_split_anim");
des_anim_item.forEach((des_anim_item) => {
    let stagger_value = des_anim_item.getAttribute("data-stagger") || 0.04;
    let translateX_value = des_anim_item.getAttribute("data-translateX") || 0;
    let translateY_value = des_anim_item.getAttribute("data-translateY") || 0;
    let onscroll_value = des_anim_item.getAttribute("data-on-scroll") || 1;
    let data_delay = des_anim_item.getAttribute("data-delay") || 0.1;
    let data_duration = des_anim_item.getAttribute("data-duration") || 0.75;
    let split_word = new SplitText(des_anim_item, { type: "chars, words" });
    let gsapConfig = {
        duration: data_duration,
        delay: data_delay,
        x: translateX_value || 20,
        y: translateY_value,
        autoAlpha: 0,
        stagger: stagger_value
    };
    if (onscroll_value == 1) {
        gsapConfig.scrollTrigger = {
            trigger: des_anim_item,
            start: 'top 90%'
        };
    }
    gsap.from(split_word.words, gsapConfig);
});

// Initialize Hero Carousel

$(document).ready(function () {
    let prevArrow = $(`<button type="button" class="slick-prev">
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.33333 4.66665L6 7.99998L9.33333 11.3333" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>`);
    let nextArrow = $(`<button type="button" class="slick-next">
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66667 4.66665L10 7.99998L6.66667 11.3333" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>`);

    $(".ft-hc-arrows").append(prevArrow, nextArrow); // Append arrows inside .ft-hc-arrows

    $(".ft-hero-carousel").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        infinite: true,
        prevArrow: prevArrow,
        nextArrow: nextArrow
    });
});

function calculateHeroHeight() {

    let windowWidth = $(window).width();
    if(windowWidth <= 992){
        $('.ft-header .navbar-collapse').addClass('container');
    }else{
        $('.ft-header .navbar-collapse').removeClass('container');
    }

    let heroCarouselHeight = $(".ft-hero-carousel").outerHeight(); // Get height including padding
    $('.ft-header').height(heroCarouselHeight);
}

$(document).ready(function () {
    calculateHeroHeight(); // Call on page load

    $(window).resize(function () {
        calculateHeroHeight(); // Call on window resize
    });
    $(".ft-vid-play").on("click", function () {
        let video = $(".ft-video")[0]; // Get the video element
        $(".ft-vid-thumb").hide(); // Hide the thumbnail
        video.play(); // Start playing the video
    });
});

// THEME 2


$(document).ready(function () {
    let prevArrow = $(`<button type="button" class="slick-prev">
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.33333 4.66665L6 7.99998L9.33333 11.3333" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>`);
    let nextArrow = $(`<button type="button" class="slick-next">
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66667 4.66665L10 7.99998L6.66667 11.3333" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>`);

    $(".ft-str-arrows").append(prevArrow, nextArrow); // Append arrows inside .ft-str-arrows

    $(".ft-str-carousel").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        infinite: true,
        prevArrow: prevArrow,
        nextArrow: nextArrow
    });

    $(".ft-sci-date").datepicker({
        dateFormat: "dd-mm-yy", // Indian date format
        changeMonth: true,
        changeYear: true,
        yearRange: "1900:+10" // Allow selection from 1900 to 10 years in future
    });
});