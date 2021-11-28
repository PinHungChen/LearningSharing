 //WRD側邊欄縮放
 $(".menuIcon").click(function(){
    $(".asideNav").animate({right:"0px"},100);
  });

  $(".navClose").click(function(){
    $(".asideNav").animate({right:"-100%"},100);
  });


  //跳轉weeklytarget
  $(".memberCard").click(function(){
    $(window).attr('location','/WeeklyTarget.html');
  });