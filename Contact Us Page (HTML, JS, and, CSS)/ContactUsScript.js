var name, email, phone, preferred, message
function checkemail(email) {
    var cek1 = 0
    var cek2 = 0
    for(let i=0;i<email.length;i++) {
        if(email[i]=='@') {
            cek1++
        } else if(email[i]!=='.') {
            cek2++
        }
    }
    if(cek1==1 && cek2>=1) {
        return true;
    } else {
        return false;
    }
}

function validating() {
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    preferred1 = document.getElementById("preferred1")
    preferred2 = document.getElementById("preferred2")
    message = document.getElementById("message").value;

    if(name.length<3) {
        alert("Your name length must at least be 3 characters")
    } else if(checkemail(email)==false) {
        alert("Email must contain one '@' and '.' character")
    } else if(phone.length<7) {
        alert("Phone number must at least be 7 characters")
    } else if(!preferred1.checked && !preferred2.checked) {
        alert("Please choose your preferred contact method")
    } else if(message.length<10) {
        alert("The length of the message can't be less than 10 characters")
    } else if(message.length>500) {
        alert("The length of the message can't be more than 500 characters")
    } else {
        window.location.href = "ContactUsSuccess.html"
    }
}