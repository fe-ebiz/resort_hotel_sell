$(function(){
    //console.log('main');
    mainVtcFn();
});
 
// main-box 안의 내용 세로 정렬
function mainVtcFn(){
    var mainVtcBox = $('.main-area .main-box');
    var manBoxH = mainVtcBox.height();
    
    mainVtcBox.css({'margin-top' : (-(manBoxH/2))+'px'});
}