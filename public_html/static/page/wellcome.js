$(window).load(function () {
$('#nfc').click(function (){
    writeNFC("abc");
});
});
async function writeNFC(text) {

    try {
        await ndef.scan();
        console.log('Đã bật NFC thành công');
    } catch(error) {
        console.log('Lỗi khi bật NFC: ', error);
    }

    // Kiểm tra hỗ trợ
    if (!('NDEFWriter' in window)) {
        alert('Web NFC API không được hỗ trợ');
        return;
    }

    const writer = new NDEFWriter();
    await writer.write(text);

    alert('Đã ghi thành công văn bản: ', text);
}