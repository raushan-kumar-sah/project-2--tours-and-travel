$(".nepal .tour .click ul.menu li a").click(function(){
    $(".nepal .tour .click ul.menu li  a").removeClass("active");
    $(this).addClass("active");
    $(".nepal .tour .click .common").removeClass("visible");
    $("." + $(this).attr("data")).addClass("visible");
});
$(".open").click(function(){
    $(".side").addClass("active");
  });
  $(".side").click(function(){
    $(".side").removeClass("active");
  });