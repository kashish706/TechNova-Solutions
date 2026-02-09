function showAuth(){
    document.getElementById("welcomeBox").style.display="none";
    document.getElementById("authBox").style.display="block";
}

function showRegister(){
    document.getElementById("loginBox").style.display="none";
    document.getElementById("registerBox").style.display="block";
}

function showLogin(){
    document.getElementById("registerBox").style.display="none";
    document.getElementById("loginBox").style.display="block";
}

/* PASSWORD STRENGTH */
function checkStrength(){
    const pwd = document.getElementById("password").value;
    const strength = document.getElementById("strength");

    if(pwd.length < 6){
        strength.textContent = "Weak password";
        strength.style.color = "red";
    }
    else if(/[A-Z]/.test(pwd) && /\d/.test(pwd)){
        strength.textContent = "Strong password";
        strength.style.color = "green";
    }
    else{
        strength.textContent = "Medium strength";
        strength.style.color = "orange";
    }
}

/* REGISTER */
function register(){
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirm = document.getElementById("confirm").value.trim();
    const error = document.getElementById("registerError");

    if(name === "" || email === "" || password === "" || confirm === ""){
        error.textContent = "All fields are required";
        return;
    }

    if(password !== confirm){
        error.textContent = "Passwords do not match";
        return;
    }

    localStorage.setItem("techUser", name);
    localStorage.setItem("techEmail", email);
    localStorage.setItem("techPass", password);

    window.location.href = "../index.html";
}

/* LOGIN */
function login(){
    const email = document.getElementById("loginEmail").value.trim();
    const pass = document.getElementById("loginPassword").value.trim();
    const error = document.getElementById("loginError");

    if(email !== localStorage.getItem("techEmail") ||
       pass !== localStorage.getItem("techPass")){
        error.textContent = "Invalid login credentials";
        return;
    }

    window.location.href = "../index.html";
}