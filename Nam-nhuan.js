function NamNhuan() {
    let a = +prompt("Nhập vào năm cần kiểm tra");
    let b = a % 4;
    let c = a % 100;
    let d = a % 400;
    if(a <= 0 || isNaN(a)) {
        result = "Dữ liệu nhập vào không hợp lệ";
    }else{
        if(b == 0 && c > 0 || d == 0) {
            result = "Đây là năm nhuận";
    }else {
        result = "Đây không phải là năm nhuận";
    }
    
    alert(result);
}
}
NamNhuan();