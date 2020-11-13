$(document).ready(function () {

    //Ger subarea-info unika id:n
    $(".subarea-info").each(function(i) {
        $(this).attr("id", "subarea-info" + i);
    });

    //Hover på meny ger border-bottom klass

    $(".rubrik").hover(function() {
        $(this).toggleClass("clicked");
    })

    //Loopar igenom kartan för att ge unikt id

    $(".subarea").each(function (i) {

        //Vid hover på kartan, sänk opacitet
        $(this).attr("id", "subarea" + i).hover(function() {
            $("#subarea" + i).css("opacity", "0.4");
        }, function() {
            $("#subarea" + i).css("opacity", "1");
        })
        //Vid klick på kartan, smooth scroll till vald sektion
        $("#subarea" + i).click(function() {
            // e.preventDefault()
            // $("html, body").stop();
            $('html, body').animate({
                scrollTop: $("#subarea-info" + i).offset().top
            }, 2000);
        });
        $(window).bind("mousewheel", function() {
            $("html, body").stop();
        });

        //Vid mouseenter på län i listan, ändra färg och ge underline
        $("#subarea" + i).mouseenter(function() {
            $("#area_" + i).css({
                "color": "rgba(0, 0, 0, 0.623)", 
                "text-decoration": "underline"});
        })

        //Vid mouseleave på län i listan, ändra färg och ta bort underline
        $("#subarea" + i).mouseleave(function() {
            $("#area_" + i).css({
                "color": "black", 
                "text-decoration": "none"});
        })
    })

    //Loopa igenom län-listan och ge styling på listan samt kartan vid hover
    $(".region_link_list").each(function(i) {
        $("#area_" + i).mouseenter(function() {
            $("#subarea" + i).css("opacity", "0.4"),
            $("#area_" + i).css({
                "color": "rgba(0, 0, 0, 0.623)", 
                "text-decoration": "underline"});
        })
        //Ta bort styling vid mouse-leave
        $("#area_" + i).mouseleave(function() {
            $("#subarea" + i).css("opacity", "1");
            $("#area_" + i).css({
                "color": "black", 
                "text-decoration": "none"});
        })

        $(".subarea-info").each(function(i) {
            //Scroll till sektion vid klick på län-listan
            $("#area_" + i).click(function( ) {
                $("html, body").stop();
                $('html, body').animate({
                    scrollTop: $("#subarea-info" + i).offset().top
                }, 2000);
            });
            $(window).bind("mousewheel", function() {
                $("html, body").stop();
            });
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