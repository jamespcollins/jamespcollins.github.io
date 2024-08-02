new fullpage('#fullpage', {
    responsiveWidth: 992,

    recordHistory: false,

    // you can also use the HTML attribute data-tooltip on each section instead
    navigation: true,
    navigationTooltips: navTooltips,

    // Navigation for horizontal slides
    slidesNavigation: true,
    slidesNavPosition: 'top', // Default

    controlArrows: true,
    controlArrowsHTML: [
        '<div class="my-arrow">&LeftAngleBracket;</div>',
        '<div class="my-arrow">&RightAngleBracket;</div>'
    ],

    anchors: pageAnchors,

    licenseKey: 'gplv3-license'
});
