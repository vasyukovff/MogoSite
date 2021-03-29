$(function()
{
    var header = $("#header"),
    scrollOffset = 0;


    checkScroll();

    $(window).on("scroll", function()
    {
        checkScroll();

        checkActiveMenu();
    });


    function checkScroll()
    {
        scrollOffset = $(this).scrollTop();
        introH = $("#intro").innerHeight();

        if(scrollOffset >= introH)
        {
            header.addClass("fixed");
        }
        else
        {
            header.removeClass("fixed");
        }

        
    }

    function checkActiveMenu()
    {/*
        /* service blog work footer
        var aboutH = $("#about").innerHeight(),
        serviceH = $("#service").innerHeight(),
        blogH = $("#blog").innerHeight(),
        workH = $("#work").innerHeight(),
        footerH = $("#footer").innerHeight();

        if(scrollOffset >= workH)
        {
            var 
            $("#work").addClass("active");
        }

            console.clear();
        console.log("offset: " + scrollOffset);
        console.log("intro: " + workH);*/
    }



    /*Smooth scroll*/
    $("[data-scroll]").on("click", function(event)
    {
        event.preventDefault();

        var blockId = $(this).data("scroll");


        $("#nav a").removeClass("active");
        $(this).addClass("active");

        $("html, body").animate({
            scrollTop: $(blockId).offset().top
        });
    });


    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event)
    {
        event.preventDefault();

        $("#nav").toggleClass("active");
        $(this).toggleClass("active");
    });

    $("#nav a").on("click", function(event)
    {
        event.preventDefault();

        $("#nav").toggleClass("active");
        $("#nav_toggle").toggleClass("active");
    });


    $("[data-collapse]").on("click", function(event)
    {
        event.preventDefault();

        var wedoItem = $(this).data("collapse");


        $("#wedo_1").removeClass("active");
        $("#wedo_2").removeClass("active");
        $("#wedo_3").removeClass("active");

        $(wedoItem).addClass("active");
    });


    /*$("[data-slider]").slick({
        Infinity: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });*/

    $("#reviews_1").slick({
        Infinity: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });

      $("#reviews_2").slick({
        Infinity: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
});