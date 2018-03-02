$(document).ready(function() {
// slick
    $('.on-service-loop').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        nextArrow: '<button type="button" class="slick-next-ori">Next</button>',
        prevArrow: '<button type="button" class="slick-prev-ori">Previous</button>'
    });
    $('.slide-loop').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        asNavFor: '.slide-nav',
        centerMode: true,
        draggable: true,
        variableWidth: true
    });
    $('.slide-nav').slick({
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        lazyLoad: 'progressive',
        asNavFor: '.slide-loop',
        focusOnSelect: true,
        variableWidth: true
    });
    $('.recommend-loop').slick({
        infinite: true,
        slidesToShow: 4,
        lazyLoad: 'progressive',
        slidesToScroll: 1
    });
    $('.item-recommend-loop').slick({
        infinite: true,
        slidesToShow: 6,
        lazyLoad: 'progressive',
        slidesToScroll: 1
    });
    $('.ranking-loop').slick({
        infinite: false,
        slidesToShow: 1,
        lazyLoad: 'progressive',
        slidesToScroll: 1
    });
    $('.brands-loop').slick({
        dots: true,
        slidesToShow: 6,
        lazyLoad: 'progressive',
        slidesToScroll: 6
    });
    $('.partners-loop').slick({
        dots: true,
        slidesToShow: 6,
        lazyLoad: 'progressive',
        slidesToScroll: 6
    });
    $('.products-loop').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        nextArrow: '<button type="button" class="slick-next-pad">Next</button>',
        prevArrow: '<button type="button" class="slick-prev-pad">Previous</button>'
    });
// page event
    $(".cart").hover(function() {
        $(".cart-hover").toggle();
    }, function() {
        $(".cart-hover").mouseleave(function() {
            $(".cart-hover").hide();
        });
    });
    $(".Bnr-close").click(function() {
        $(".adBnr").css({'display': 'none'}, 500);
    });
    $(".alert-close").click(function() {
        $(".alert-addToList").css({'display': 'none'}, 300);
    });
    $(".addToList").click(function() {
        $(".alert-addToList").css({'display': 'block'}, 300);
    });
    $(".invoice").click(function() {
        $(".invoice-select").toggle();
    });
    $(".toggle_nav-hor").toggle( function() {
        $(".nav-hor-sub").css({ 'display' : 'block'});
        $(".ico-add").css({ 'background-position' : '-624px -20px'});
    }, function () {
        $(".nav-hor-sub").css({ 'display' : 'none'});
        $(".ico-add").css({ 'background-position' : '-624px -4px'});
    });
    $(".pay_method").toggle( function() {
        $(".pay_method .nav-hor-sub").css({ 'display' : 'block'});
        $(".pay_method .ico-add").css({ 'background-position' : '-624px -20px'});
    }, function () {
        $(".pay_method .nav-hor-sub").css({ 'display' : 'none'});
        $(".pay_method .ico-add").css({ 'background-position' : '-624px -4px'});
    });
    $(".delivery_method").toggle( function() {
        $(".delivery_method .nav-hor-sub").css({ 'display' : 'block'});
        $(".delivery_method .ico-add").css({ 'background-position' : '-624px -20px'});
    }, function () {
        $(".delivery_method .nav-hor-sub").css({ 'display' : 'none'});
        $(".delivery_method .ico-add").css({ 'background-position' : '-624px -4px'});
    });
    $(".form-forgot-show").click( function() {
        $(".login-form-1").animate({left: '-500px'}, "slow");
        $(".login-form-2").css({'display': 'block'});
        $(".login-form-2").animate({left: '0px', opacity: '1'}, "slow");
    });
    $(".form-submit-show").click( function() {
        $(".login-form-2").animate({left: '-500px'}, "slow");
        $(".login-form-3").css({'display': 'block'});
        $(".login-form-3").animate({left: '0px', opacity: '1'}, "slow");
    });
    $(".form-login-show").click( function() {
        $(".login-form-2").animate({right: '500px'}, "slow");
        $(".login-form-1").css({'display': 'block'});
        $(".login-form-1").animate({left: '0px', opacity: '1'}, "slow");
    });
    $(".form-login-showagain").click( function() {
        $(".login-form-3").animate({right: '500px'}, "slow");
        $(".login-form-1").css({'display': 'block'});
        $(".login-form-1").animate({left: '0px', opacity: '1'}, "slow");
    });
    $(".form-add-show").click( function() {
        $(".shopping-form-1").animate({left: '-500px'}, "slow");
        $(".shopping-form-2").css({'display': 'block'});
        $(".shopping-form-2").animate({left: '0px', opacity: '1'}, "slow");
    });
    $(".form-login-sendagain").click( function() {
        $(".shopping-form-2").animate({right: '500px'}, "slow");
        $(".shopping-form-1").css({'display': 'block'});
        $(".shopping-form-1").animate({left: '0px', opacity: '1'}, "slow");
    });
    $(".show_line").hover(function() {
        $(".osc-line").toggle();
    });
    $(".show_wechat").hover(function() {
        $(".osc-wechat").toggle();
    });

});

// JSTarget
var JSTarget = {
    init: function(att, val, warning) {
        if (document.getElementById && document.createElement && document.appendChild) {
            var strAtt = ((typeof att == 'undefined') || (att == null)) ? 'class' : att;
            var strVal = ((typeof val == 'undefined') || (val == null)) ? 'non-html' : val;
            var strWarning = ((typeof warning == 'undefined') || (warning == null)) ? ' (opens in a new window)' : warning;
            var oWarning;
            var arrLinks = document.getElementsByTagName('a');
            var oLink;
            var oRegExp = new RegExp("(^|\\s)" + strVal + "(\\s|$)");
            for (var i = 0; i < arrLinks.length; i++) {
                oLink = arrLinks[i];
                if ((strAtt == 'class') && (oRegExp.test(oLink.className)) || (oRegExp.test(oLink.getAttribute(strAtt)))) {
                    oWarning = document.createElement("em");
                    oWarning.appendChild(document.createTextNode(strWarning));
                    oLink.appendChild(oWarning);
                    oLink.onclick = JSTarget.openWin;
                }
            }
            oWarning = null;
        }
    },
    openWin: function(e) {
        var event = (!e) ? window.event : e;
        if (event.shiftKey || event.altKey || event.ctrlKey || event.metaKey) return true;
        else {
            var oWin = window.open(this.getAttribute('href'), '_blank');
            if (oWin) {
                if (oWin.focus) oWin.focus();
                return false;
            }
            oWin = null;
            return true;
        }
    },
    /*
  addEvent function from http://www.quirksmode.org/blog/archives/2005/10/_and_the_winner_1.html
  */
    addEvent: function(obj, type, fn) {
        if (obj.addEventListener) obj.addEventListener(type, fn, false);
        else if (obj.attachEvent) {
            obj["e" + type + fn] = fn;
            obj[type + fn] = function() {
                obj["e" + type + fn](window.event);
            }
            obj.attachEvent("on" + type, obj[type + fn]);
        }
    }
};
JSTarget.addEvent(window, 'load', function() {
    JSTarget.init("rel", "external", "");
});

// go to top
$(function() {
    $('.scroll-top').click(function() {
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({scrollTop: 0}, 600);
        return false;
    });
});
