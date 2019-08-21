$(document).ready(function(){
  var coverHeight = $('.cover-view').height()

  $(window).scroll(function(){
    var sct = $(this).scrollTop();

    if(sct > coverHeight){
      //메뉴 나오기
      $('.gnb').css('position','fixed').addClass('sub-design')
    }else if(sct < coverHeight){
      //메뉴 들어가기
      $('.gnb').css('position','absolute').removeClass('sub-design')
    }
  })
})
