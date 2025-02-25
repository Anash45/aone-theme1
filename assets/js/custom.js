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
});