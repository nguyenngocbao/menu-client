$(window).load(function () {
    var clickLogo = 0;
  $('#logo').click(function (){
      let url = $(this).data('url');
      if (clickLogo < 2){
          clickLogo++;
      }else{
          location.href = url;
      }
      setTimeout(function() {
          clickLogo = 0;
      }, 5000);

  });
});