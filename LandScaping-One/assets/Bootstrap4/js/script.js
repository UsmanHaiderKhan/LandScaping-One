﻿//console.log("usman");

/*================== Read More Text ==================*/

$(function () {
    var showChar = 162;
    var moretext = "Learn More";
    var lesstext = "Learn Less";
    $('.comments-space').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content +
                '<span class="remaining-contents"><span class=" p-3">' +
                hide_content +
                '</span>' +
                '<div class="text-center mt-27 ml-23 media-ml-30">' +
                '<a href="" class="morelinksss text-center btn btn-more" style="display:block;">' +
                moretext +
                '</a>' + '</div>' + '</span>';;

            $(this).html(html);
        }
    });

    $(".morelinksss").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
$(function () {
    var showChar = 658;
    var moretext = " More &nbsp;";
    var lesstext = " Less &nbsp;";
    $('.comments-spaces').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-contents"><span>' + hide_content + '</span>' +

                '<a href="" class="morelinks btn btn-more mt-35" style="display:block;">' + moretext + '</a>'
                + '</span>';
            $(this).html(html);
        }
    });

    $(".morelinks").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});

/*===================== Smooth Scrolling ======================*/
$(function () {
    $('a').smoothScroll();
});
/*======================= Nav Active Class =======================*/

$(function () {
    $('.nav-item').on('click',
        function () {
            $('.nav-item').removeClass('active');
            $(this).addClass('active');
        });
});

/*===================== Load More Images ======================*/
$(document).ready(function () {

    $('.loadMore').loadMoreResults({
        displayedItems: 6,
        showItems: 3
    });


});


/*===================== Owl Carousel Slider ======================*/


$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        item: 1,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            400: {
                items: 1,
                dots: true,
                nav: false
            },
            600: {
                items: 1,
                dots: true,
                nav: false
            },
            800: {
                items: 1,
                dots: true,
                nav: false
            },
            1000: {
                items: 1,
                dots: true,
                nav: false
            }
        }
    });
});

/*===================== Slick Slider ======================*/


/*===================== Scroll Top Function Script ======================*/
$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("#home nav").addClass("sleep nav-bg-color fixed-top");

        } else {
            $("#home nav").removeClass(" sleep nav-bg-color fixed-top");


        }


    });
});
//$(function () {
//    $(window).scroll(function () {
//        var scroll = $(window).scrollTop();
//        if (scroll >= 100) {
//            $("nav").addClass("fixed-top sleep nav-color");
//            $("nav").css("background-color", "rgba(255, 255, 255,1)");
//            $("nav").css("opacity", "1");

//        } else {
//            $("nav").removeClass("fixed-top sleep nav-color");
//            $("nav").css("background-color", "rgba(255, 255, 255,0.749)");
//            $("nav").css("opacity", "0.749");
//        }
//    });
//});


/*===================== Nav tabs active Function Script ======================*/

/*===================== Another Load More Script ======================*/
$(".no-display").slice(0, 6).show();
$("#load-more").on('click', function (e) {
    e.preventDefault();
    $(".no-display:hidden").slice(0, 3).slideDown();
    if ($(".no-display:hidden").length == 0) {
        $("#load-more").fadeOut('slow');
    }
    $('html,body').animate({
        scrollTop: $(this).offset().center
    }, 1500);
});
/*=====================Active Class Script ======================*/
$(function () {
    $('.form-check-label').on('click',
        function () {
            $('.form-check-label').removeClass('radio-active');
            $(this).addClass('radio-active');
        });
});
/*=====================Timer Function Script ======================*/
/*===================== Donation Script ======================*/
$('input[name="donation"]').change(function (e) {
    var check = $("input[name='donation']:checked").val();
    if (check == "other") {
        $("#radio6").parent().removeClass('display-none');
    } else {
        $("#radio6").parent().addClass('display-none');
    }
});
/*=====================Active Class Script ======================*/
$(function () {
    $('.form-check-label').on('click',
        function () {
            $('.form-check-label').removeClass('radio-active');
            $(this).addClass('radio-active');
        });
});

/*=====================Counter  Script ======================*/
var counters = [];
counters = $(".counter-value");
var countersQuantity = counters.length;
console.log(counters + "," + countersQuantity);
var counter = [];

for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
}
var count = function (start, value, id) {
    var localStart = start;
    setInterval(function () {
        if (localStart < value) {
            localStart++;
            counters[id].innerHTML = localStart;
        }
    }, 1);
}
var cond = true;
requestScrollAnimation((pos) => {
    var elAlert = document.getElementById("counter-strike");
    var isVisible = isScrolledIntoView(elAlert, true);

    if (isVisible) {
        if (cond) {
            for (var j = 0; j < countersQuantity; j++) {
                count(0, counter[j], j);
            }
            cond = false;
        }


    }
});

/*===================== JS Gallery Filter ======================*/
$(document).ready(function () {
    $(".btn-act").on('click', function () {
        $(".btn-act").removeClass("filter-active");
        $(this).addClass("filter-active");
    });
});
filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("no-display");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
