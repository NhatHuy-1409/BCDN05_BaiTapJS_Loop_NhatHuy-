/**
 * Bài-1: Tìm số chẵn - lẻ nhỏ hơn 100
 * 
 * Khối-1:Input
 * khối-2:
 * B1/Khai báo biến 
 * soChan
 * soLe
 * B2/Cho i chạy từ 0 đến 100
 * B3/Nếu i%2=0 => soChan += " " + i;
 * B4/Ngược lại => soLer += " " + i
 * B5/ Xuất kết quả
 * Khối-3:Output
 * Xuất ra các số chẵn-lẻ nhỏ hơn 100
 */
// Cách 1: Dùng for
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
// Cách 2: Dùng While
document.getElementById("btnTimSo2").onclick = function () {
    var soChan = "";
    var soLe = "";
    var i = 0;
    while (i < 100) {
        if (i % 2 == 0) {
            soChan += " " + i;
        } else {
            soLe += " " + i;
        }
        i++;
    }
    document.getElementById("txtTimSo2").innerHTML = "SỐ CHẴN: " + soChan + "<br>SỐ LẺ: " + soLe;
}

/** 
 * Bài-2: Đếm số chia hết cho 3 
 * 
 * Khối-1:Input
 * khối-2:
 * B1/Khai báo biến 
 * ketQua
 * B2/Cho i chạy từ 0 đến 100
 * B3/Nếu i%3=0 => ketQua++
 * B4/ Xuất kết quả
 * Khối-3:Output
 * Xuất ra số lượng số chia hết cho 3
 */
// Cách 1: Dùng for
document.getElementById("btnDemSo").onclick = function () {
    var ketQua = 0;
    for (var i = 0; i < 1000; i++) {
        if (i % 3 == 0) {
            ketQua++;
        }
    }
    document.getElementById("txtDemSo").innerHTML = "Số lượng các số chia hết cho 3 nhỏ hơn 1000 là: " + ketQua;
}
// Cách 2: Dùng While
document.getElementById("btnDemSo2").onclick = function () {
    var ketQua = 0;
    var i = 0;
    while (i < 1000) {
        if (i % 3 == 0) {
            ketQua++;
        }
        i++;
    }
    document.getElementById("txtDemSo2").innerHTML = "Số lượng các số chia hết cho 3 nhỏ hơn 1000 là: " + ketQua;
}
/** 
 * Bài-3: Tìm số nguyên dương nhỏ nhất
 * 
 * Khối-1:Input
 * khối-2:
 * B1/Khai báo biến 
 * tong
 * B2/Cho i chạy từ 0 đến 10000
 * B3/Nếu tong < 10000 => tong += i;
 * B4/Khi tong >= 10000 => lưu biến đếm i=i-1  và thoát vòng lặp
 * B5/ Xuất kết quả: i
 * Khối-3:Output
 * Xuất số nguyên dương nhỏ nhất
 */
document.getElementById("btnTimSoNguyen").onclick = function () {
    var tong = 0;
    for (var i = 0; i < 10000; i++) {

        if (tong < 10000) {
            tong += i;
        } else {
            i -= 1;
            break;
        }
    }
    document.getElementById("txtTimSoNguyen").innerHTML = "Số nguyên dương nhỏ nhất: " + i;
}

/** 
 * Bài-4: Tính tổng
 * 
 * Khối-1:Input
 * x,n
 * khối-2:
 * B1/Khai báo biến và lấy giá trị từ form
 * sum
 * x
 * n
 * B2/Cho i chạy từ 0 đến n
 * B3/sum += Math.pow(x, i);
 * B5/ Xuất kết quả: sum
 * Khối-3:Output
 * Xuất ra tổng
 */

document.getElementById("btnTinhTong").onclick = function () {
    var sum = 0;
    var x = Number(document.getElementById("inpX").value);
    var n = Number(document.getElementById("inpN").value);
    for (var i = 1; i <= n; i++) {
        sum += Math.pow(x, i);
    }
    document.getElementById("txtTinhTong").innerHTML = "Tổng: " + sum;
}

/** 
 * Bài-5: Tính giai thừa
 * 
 * Khối-1:Input
 * n
 * khối-2:
 * B1/Khai báo biến và lấy giá trị từ form
 * ketQua
 * n
 * B2/Cho i chạy từ 0 đến n
 * B3/ketQua *= i;
 * B5/ Xuất kết quả: ketQua
 * Khối-3:Output
 * Xuất ra kết quả phép giai thừa
 */

document.getElementById("btnTinhGiaiThua").onclick = function () {
    var ketQua = 1;
    var n = Number(document.getElementById("inpSoN").value);
    for (var i = 1; i <= n; i++) {
        ketQua *= i;
    }
    document.getElementById("txtTinhGiaiThua").innerHTML = "Kết quả: " + ketQua;
}

/** 
 * Bài-6: Tạo thẻ div chẵn-lẻ
 * 
 * Khối-1:Input
 * khối-2:
 * B1/Khai báo biến 
 * content
 * B2/Cho i chạy từ 0 đến 10
 * B3/Nếu i%2=0 => div chẵn
 * B4/Ngược lại => div lẻ
 * B5/ Xuất kết quả: ketQua
 * Khối-3:Output
 * Xuất ra 10 thẻ div chẵn-lẻ
 * 
 */

document.getElementById("btnTaoThe").onclick = function () {
    var content = "";

    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            content += "<div style='background-color: red;color:#3fff00;margin-bottom:0;'>Div chẵn</div>";
        } else {
            content += "<div style='background-color: blue;color:#3fff00;margin-bottom:0;'>Div lẻ</div>";
        }
    }
    document.getElementById("txtTaoThe").innerHTML = content;

}

/** 
 * Bài-7: In số nguyên tố
 * 
 * Khối-1: Input
 * số n
 * Khối-2:
 * Bước-1/ Khai báo biến và lấy giá trị n từ form
 * Bước-2/ Xét trường hợp:
 * + Nếu n<2 => Không có số nguyên tố
 * + Nếu n>=2 :
 * --- Cho i chạy 2 -> n 
 * ---kiểm tra từng giá trị i :
 * B1/ Cho j chạy từ 2 đến sqrt(i) 
 * B2/ Nếu i%j = 0 => count++
 * B3/ Nếu count = 0 => số i là số nguyên tố => ketQua += " " + i;
 * B4/ Xét lại count =0;
 * Khối-3: Output
 * Chuỗi số nguyên tố
 * 
 */
document.getElementById("btnInSo").onclick = function () {
    var n = document.getElementById("inpSoNto").value;
    var ketQua = "";
    var count = 0;
    if (n < 2) {
        ketQua = "Không có"
    }
    else {
        for (var i = 2; i <= n; i++) {
            for (var j = 2; j <= Math.sqrt(i); j++) {
                if (i % j == 0) {
                    count++;
                }
            }
            if (count == 0) {
                ketQua += " " + i;
            }
            count = 0;
        }
    }
    document.getElementById("txtInSo").innerHTML = "Chuỗi số nguyên tố: " + ketQua;
}