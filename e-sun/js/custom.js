(function() {
    var isMobileW = false;
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    var _orgTop = $("#header").offset().top,
        _headHeight = $(".s0").height(),
        _navHeight = $(".sNav").height(),
        _top = _orgTop + _navHeight + _headHeight;
    var scrollMenuHeight = 0,
        scrollTop = null,
        lastScrollTop = 0;
    var navHtml = "";
    $("#content>section").each(function() {
        if (navHtml == "") {
            var list = '<li class="has-menu"><a class="linkto" href="#' + $(this).attr("id") + '">' + $(this).attr("data-title") + '</a></li>';
        } else {
            var list = '<li class="has-menu"><a class="linkto" href="#' + $(this).attr("id") + '">' + $(this).attr("data-title") + '</a></li>';
        }
        navHtml += list;
    });
    $(".sNav ul").html(navHtml);

    $('.sNav a').click(function(event) {
        var _gotop = $($(this).attr("href")).offset().top + 65;
        if (isMobileW) {
            $('.mobileNavBtn').click();
        } else {
            $('body,html').animate({
                scrollTop: _gotop
            }, 300);
        }
        return false;
    });
    var $NAV = $('.sNav');
    $('.mobileNavBtn').click(function() {
        $NAV.toggle();
        $(".sNav").toggleClass('active');
        $(this).toggleClass('active');
        $('body,html').animate({
            scrollTop: _gotop
        }, 300);
        return false;
    });

    $(window).scroll(function() {
        if (scrollTop != null) {
            $(window).scrollTop(scrollTop);
        }
        var st = $(this).scrollTop();
        isMobileW =($(this).width() < 1220)?true:false; 
        if($(this).width() > 990) {
            if (st >= _top) {
                $(".sNav").addClass("fixed");
            } else {
                $(".sNav").removeClass("fixed");
            }
        } else {
            // scrollUp & scrollDown
            if (st > lastScrollTop) {
                $("#header").removeClass('fixed');
            } else {
                $("#header").addClass('fixed');
            }
            lastScrollTop = st;
            if (st < _top) {
                $("#header").removeClass("fixed");
            }
        }
    });

    var arrlist = [".s2",".s3",".s4",".s5",".s6",".s7"];
    arrlist.forEach(function(item) {
        $(item + " .btn-warning").click(function() {
            $("#lightbox, " + item + " #lightbox-panel").fadeIn(300);
        });
        $(item + " #lightbox-panel").click(function() {
            $("#lightbox, " + item + " #lightbox-panel").fadeOut(300);
        });
    });
    
    $('.icon-social').on('click',function(e){
      $('.social-container ul').toggleClass('active')
    });
    var windowlocation = location.href;

    // $(".icon-google").parent("a").attr("href", "https://plus.google.com/share?url=" + windowlocation),
    $(".icon-line").parent("a").attr("href", "http://line.me/R/msg/text/?" + windowlocation),
    $(".icon-facebook").parent("a").attr("href", "http://www.facebook.com/share.php?u=" + windowlocation)
    var l = 
    {
        text: function() {
            return windowlocation
        }
    };
})();