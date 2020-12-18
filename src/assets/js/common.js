$(function(){
    //console.log('common');
    menuFn();
    //tabFn();
    downSelFn();
    popMvFn();
});
 

//menu function
function menuFn(){
    var gnb = $('.gnb .menu');
    
    gnb.find('li[class*="item-"] > a').on('mouseover', function(){
        gnb.find('.sub-menu').stop().slideUp();
        $(this).siblings('.sub-menu').stop().slideDown();
    });
    
     gnb.on('mouseleave', function(){
        $(this).find('.sub-menu').stop().slideUp();
        $(this).find('.sub-menu').css({'height' : 'auto'})
    });
}

//tab function
/*function tabFn(){
    var tab = $('.tab-menu li');
    tab.on('click', function(){
        if( $(this).hasClass('on') ){
            //console.log('true')
        }else{
            var liIndex = tab.index(this)+1;
            
            tab.removeClass('on');
            $(this).addClass('on');
            $('section[id^="tabSec"]').css({'display' : 'none'});
            $('#tabSec-'+liIndex).css({'display' : 'block'});
        }
    });
}*/

//like sel function
function downSelFn(){
    var btnSel = $(".btn-sel");
    var likeSelBox = $(".like-sel-box");
    
    btnSel.on("click", function() {
        $(this).next().slideToggle("fast");
    });
  
    likeSelBox.each(function(idx, item) {
        $(item).find(".sel-menu li a").on("click", function() {
            var thTxt = $(this).text();
            $(item).find(".sel-menu li a").removeClass('on');
            $(this).addClass('on').closest(likeSelBox).find(btnSel).html(thTxt);
            $(this).closest(likeSelBox).find(".sel-menu").slideToggle("fast");
            event.preventDefault();
        });
    });
}

//pop Function
function popFn(ths){
    var ths = $(ths);
    
    ths.addClass('on');
    popMvFn();
}

function popMvFn(){
    if( $('.pop-wrap').hasClass('on') ){
        var popId = $('#'+$('.pop-wrap.on').attr('id'));
        var winH = $(window).height();
        var popIdH;
        //console.log($('.pop-wrap').attr('id'));
        
        popId.show();
        $('html, body').scrollTop(0);
        //window보다 크면 scroll / 작으면 auto + 가운데 정렬
        popIdH = popId.find('.pop-container').height();
        if( winH <= popIdH ){
            popId.css({'overflow-y' : 'scroll'});
            popId.find('.pop-container').css({'top' : '0', 'margin-top' : 90+'px'});
        }else{
            //console.log(popIdH)
            popId.css({'overflow-y' : 'auto'});
            popId.find('.pop-container').css({'top' : 50+'%', 'margin-top' : '-'+(popIdH/2)+'px'});
        }
        
        $('html, body').css({'overflow': 'hidden', 'height': '100%'});
        popId.on('scroll', function(event) {
          event.preventDefault();
          event.stopPropagation();
          return;
        });
    
        popId.find('.close').on('click', function(){
            popId.scrollTop(0);
            popId.removeClass('on');
            popId.hide();

            $('html, body').css({'overflow': 'auto', 'height': '100%'});
            popId.off('scroll');
        });
        
    }else{
        //console.log('none');
    }
}


