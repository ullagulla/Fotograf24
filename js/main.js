$(document).ready(function () {

    $(".rubrik").hover(function() {
        $(this).toggleClass("clicked");
    })

    $(".footer-links").hover(function() {
        $(this).toggleClass("clicked");
    })

    $(".subarea").each(function (i) {
        $(this).attr("id", "subarea" + i).hover(function() {
            $("#subarea" + i).css("opacity", "0.4");
        }, function() {
            $("#subarea" + i).css("opacity", "1");
        })

        $("#subarea" + i).mouseenter(function() {
            $("#area_" + i).css({
                "color": "rgba(0, 0, 0, 0.623)", 
                "text-decoration": "underline"});
        })

        $("#subarea" + i).mouseleave(function() {
            $("#area_" + i).css({
                "color": "black", 
                "text-decoration": "none"});
        })
    })

    $(".region_link_list").each(function(i) {
        $("#area_" + i).mouseenter(function() {
            $("#subarea" + i).css("opacity", "0.4"),
            $("#area_" + i).css({
                "color": "rgba(0, 0, 0, 0.623)", 
                "text-decoration": "underline"});
        })

        $("#area_" + i).mouseleave(function() {
            $("#subarea" + i).css("opacity", "1");
            $("#area_" + i).css({
                "color": "black", 
                "text-decoration": "none"});
        })

        $(".subarea-info").each(function(i) {
            $(this).attr("id", "subarea-info" + i);
        });
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 900) {
            $(".scroll-button").fadeIn("slow");
        } else {
            $(".scroll-button").fadeOut("slow");
        }
    });
    $(".scroll-button").click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });

});