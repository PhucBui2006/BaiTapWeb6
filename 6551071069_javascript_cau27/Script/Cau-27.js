function xoaDong(button) {
    var row = button.parentNode.parentNode; // tìm đến <tr> chứa nút bấm
    row.parentNode.removeChild(row);        // xóa dòng đó khỏi bảng
}
