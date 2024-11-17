//validate dangki
const userName = document.querySelector("#name")
const email = document.querySelector("#email")
const phone= document.querySelector("#phone")
const password = document.querySelector("#password")
const checksignup = document.querySelector("#check-signup")

function showError(input){
    const parent = input.parentElement;
    parent.classList.add("border","border-5" ,"border-danger","rounded-4","error")
}
function clearError(input){
    const parent = input.parentElement;
    parent.classList.remove("border","border-5" ,"border-danger","rounded-4","error")
}
function CheckEmty(input){
    let check = false;
    input.forEach(e => {
        e.value = e.value.trim();
        if(e.value=="" || e.value==null){
            showError(e);
            check = true;
        }
        clearError(e)
    });
    
    return check;
}


function checkName(input){
    if(/^[a-z0-9_-]{3,15}$/.test(input.value)){
        return false;
        clearError(userName)
    }
    showError(input)
    return true;
    
}
function checkEmail(input){
    if(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(input.value)){
        return false;
        clearError(email)
    }
    showError(input)
    return true;
    
}
function checkPhone(input){
    if(/^(09|03)[1-9]{8}$/.test(input.value)){
        return false;
        clearError(phone)
    }
    showError(input)
    return true;
    
}
function checkPassword(input){
    if(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(input.value)){
        return false;
        
    }
    showError(input)
    return true;
    
}
const checkBoxError = document.querySelector("#error");
function checkBox(checkBox){
    if (!checkBox.checked) {
        checkBoxError.textContent = "Bạn phải đồng ý với điều khoản và chính sách của chúng tôi !";
        return true;
    }
    checkBoxError.textContent = "";
    return false;
}



const form = document.querySelector("#form-dangki")

form.addEventListener("submit",e=>{
    
    let isEmty = CheckEmty([userName,email,phone,password]);
    let isName = checkName(userName);
    let isEmail = checkEmail(email);
    let isPhone = checkPhone(phone);
    let isPassword = checkPassword(password);
    let isCheckBox = checkBox(checksignup);
    if(isEmty || isEmail || isName || isPassword || isPhone || isCheckBox){
        e.preventDefault();
    }
    else{
        clearError(userName)
        clearError(email)
        clearError(phone)
        clearError(password)

        var user = {
            userName: userName.value,
            phone:  phone.value,
            email: email.value,
            password: password.value
        }
        var userJSON = JSON.stringify(user)
        localStorage.setItem('user', userJSON);
    }
})

//validate dangnhap

var loginUserJSON = localStorage.getItem('user');
var loginUser = JSON.parse(loginUserJSON);

const nameLogin = document.querySelector("#nameLogin")
const passwordLogin = document.querySelector("#passwordLogin");
const formLogin = document.querySelector("#login");
const messeError = document.querySelector("#error-signin")

function checkLogin(username, password) {
    const trimmedUsername = username.value.trim();
    const trimmedPassword = password.value.trim();
    

    if (trimmedUsername === '' || trimmedPassword === '') {
        messeError.textContent = "Tên tài khoản và mật khẩu không được để trống!";
        return false;
    }

    if (trimmedUsername === loginUser.userName && trimmedPassword === loginUser.password) {
        return true;
    } else {
        messeError.textContent = "Tên tài khoản hoặc mật khẩu không trùng khớp!";
        return false;
    }
}
const loginSignup = document.querySelector(".login-signup")
const logout =document.querySelector("#logout")

formLogin.addEventListener("submit", (e) => {
    if (!checkLogin(nameLogin, passwordLogin)) {
        e.preventDefault();
    } else {
        localStorage.setItem('Login',true)
    }
});

var validateLogin = localStorage.getItem('Login')==='true';
if(validateLogin){
    loginSignup.style.display='none';
    logout.classList.remove("d-none");
}
else{
    loginSignup.style.display='block';
    logout.classList.add("d-none");
}
logout.addEventListener("click",()=>{
    localStorage.setItem('Login',false)
    location.reload()
})
// link tu modal dangnhap sang dangky
const linkdangdy = formLogin.parentElement.querySelector("span");
linkdangdy.style.cursor="pointer"
linkdangdy.addEventListener("click",()=>{
    $("#sign-in").modal("hide")
    $("#sign-up").modal("show")
})