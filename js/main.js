/**
 * Bài-1: Tìm số chẵn - lẻ nhỏ hơn 100
 */
document.getElementById("btnTimSo").onclick = function () {
    var soChan = "";
    var soLe = "";
    for (var i = 0; i < 100; i++) {
        if (i % 2 == 0) {
            soChan += " " + i;
        } else {
            soLe += " " + i;
        }
    }
    document.getElementById("txtTimSo").innerHTML = "SỐ CHẴN: " + soChan + "<br>SỐ LẺ: " + soLe;
}

/** 
 * Bài-2: Đếm số chia hết cho 3 
 */
document.getElementById("btnDemSo").onclick = function () {
    var ketQua = 0;
    for (var i = 0; i < 1000; i++) {
        if (i % 3 == 0) {
            ketQua++;
        }
    }
    document.getElementById("txtDemSo").innerHTML = "Số lượng các số chia hết cho 3 nhỏ hơn 1000 là: " + ketQua;
}

/** 
 * Bài-3: Tìm số nguyên dương nhỏ nhất
 */
document.getElementById("timSoNguyen").onclick = function () {
    var tong = 0;
    for (var i = 0; i < 10000; i++) {

        if (tong < 10000) {
            tong += i;
        } else {
            i -= 1;
            // break;
        }
    }
    document.getElementById("txtTimSoNguyen").innerHTML = i;
}