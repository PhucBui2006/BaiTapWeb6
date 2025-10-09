function getFormvalue() {
    let firstName = document.forms["form1"]["fname"].value;
    let lastName = document.forms["form1"]["lname"].value;
    alert("Họ và tên là: " + firstName + " " + lastName);
    return false;
}