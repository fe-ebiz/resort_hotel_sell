$(function() {
	// Pager
	$("#pagenation a").on("click", function () {
		var idx = $(this).index();
		var lastIdx = $(this).closest("div").find("a").length;
		lastIdx--;
		//console.log(lastIdx);
		if (idx != 0 && idx != lastIdx) {
			$(this).addClass("on").siblings().removeClass("on");
		}
		event.preventDefault();
	});
    
    //FAQ answer
    // $('.faq-sec .table-col .t-icon-arrow');
    $('.faq-sec .table-col td > a').on('click', function(){
        let asBox = $(this).parents('tr').next('.answer');
        let iconArrow = $(this).parents().next('.t-icon-arrow');
        let openTitle = $(this).parent().parent();
        console.log(openTitle);
        if( asBox.css('display') == 'none' ){
            //console.log('click');
            //$('.faq-sec .table-col .answer').not(asBox).stop().hide();
            $('.faq-sec .table-col .answer').stop().hide();
            iconArrow.find('.icon-arrow-down').hide();
            iconArrow.find('.icon-arrow-up').show();
            openTitle.siblings().removeClass('tr-active');
            openTitle.addClass('tr-active');
            asBox.stop().show();
        }else{
            iconArrow.find('.icon-arrow-up').hide();
            iconArrow.find('.icon-arrow-down').show();
            openTitle.removeClass('tr-active');
            asBox.stop().hide();
        }
    })
});
                                            