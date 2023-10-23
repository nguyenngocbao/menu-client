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
async function writeNFC(text) {

    // Kiểm tra hỗ trợ
    if (!('NDEFWriter' in window)) {
        alert('Web NFC API không được hỗ trợ');
        return;
    }

    const writer = new NDEFWriter();
    await writer.write(text);

    alert('Đã ghi thành công văn bản: ', text);
}