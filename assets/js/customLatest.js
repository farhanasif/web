$(document).ready(function(){
    $('#navToggle').click(function(){
        $(this).toggleClass('open');
        $(this).parents('nav').find('.mainNav').slideToggle();
    });

    $('header .searchBox .searchIcon').click(function(){
        $(this).parents('header').find('.searchBox-Wrapper').slideToggle();
    });

    $('header .searchBox-main .closeSearch').click(function(){
        $(this).parents('header').find('.searchBox-Wrapper').slideUp();
    });

    $(window).scroll(function(){
        if( $(window).scrollTop() > 10 ){
            $('header').addClass('shrink');
        }else{
            $('header').removeClass('shrink');
        }
    });
	
	//
	$('.ratingEmojiGray .terrible').hover(function(){
		$(this).parents('.ratingEmojiGray').find('.ratingEmojiYellow').stop().animate({left:'0px'}).addClass('terribleHover').removeClass('badHover okayHover goodHover greatHover');
	});

	$('.ratingEmojiGray .bad').hover(function(){
		$(this).parents('.ratingEmojiGray').find('.ratingEmojiYellow').stop().animate({left:'74px'}).addClass('badHover').removeClass('terribleHover okayHover goodHover greatHover');
	});

	$('.ratingEmojiGray .okay').hover(function(){
		$(this).parents('.ratingEmojiGray').find('.ratingEmojiYellow').stop().animate({left:'148px'}).addClass('okayHover').removeClass('terribleHover badHover goodHover greatHover');
	});

	$('.ratingEmojiGray .good').hover(function(){
		$(this).parents('.ratingEmojiGray').find('.ratingEmojiYellow').stop().animate({left:'212px'}).addClass('goodHover').removeClass('terribleHover badHover okayHover greatHover');
	});

	$('.ratingEmojiGray .great').hover(function(){
		$(this).parents('.ratingEmojiGray').find('.ratingEmojiYellow').stop().animate({left:'284px'}).addClass('greatHover').removeClass('terribleHover badHover okayHover goodHover');
	});

	//
	$('.ratingEmojiGray').mouseleave(function(){
		$(this).find('.ratingEmojiYellow').animate({left:'-100px'},'fast').pause(10).removeClass('terribleHover badHover okayHover goodHover greatHover');
	});
	$(".ratingEmojiGray").click(function(){
		 $(this).off("mouseleave");
	});

	//
	$('.ratingEmojiGray .terrible').click(function(){
		$(this).parents('.ratingEmojiGray').find('.ratingEmojiYellow').addClass('terribleHover').css({left:'0px'});
	});
	$('.ratingEmojiGray .bad').click(function(){
		$(this).parents('.ratingEmojiGray').find('.ratingEmojiYellow').addClass('badHover').css({left:'74px'});
	});
	$('.ratingEmojiGray .okay').click(function(){
		$(this).parents('.ratingEmojiGray').find('.ratingEmojiYellow').addClass('okayHover').css({left:'148px'});
	});
	$('.ratingEmojiGray .good').click(function(){
		$(this).parents('.ratingEmojiGray').find('.ratingEmojiYellow').addClass('goodHover').css({left:'212px'});
	});
	$('.ratingEmojiGray .great').click(function(){
		$(this).parents('.ratingEmojiGray').find('.ratingEmojiYellow').addClass('greatHover').css({left:'284px'});
	});
	//
	function hidden(a){
		$(a).removeClass('selected');
		$(a).parent().find('ul:first').slideUp();
	}
	function visible(b){
		$(b).parent().siblings().find('a').removeClass('selected');
		$(b).parent().parent().find('li ul:visible').slideUp();
		$(b).addClass('selected');
		$(b).parent().find('ul:first').slideDown();
	}
	function check(c){
		if($(c).parent().find('ul:first').is(':hidden')) {
		   visible(c);
		}else{
		   hidden(c);
		}
	}
	$(function(){
		$(".accordian li:has(ul) > a").click(function(){
		   check($(this));
		   return false;
		});
	});
});
function sleep(time) {
	setTimeout(function(){ 
		window.location.href = $("#websites").val();
	}, time);
}