// =========================
// PASSWORD TOGGLE
// =========================

function togglePassword() {
    const passwordInput = document.getElementById("password");
    const toggleBtn = document.querySelector(".toggle-password i");
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleBtn.classList.remove("fa-eye");
        toggleBtn.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        toggleBtn.classList.remove("fa-eye-slash");
        toggleBtn.classList.add("fa-eye");
    }
}

// =========================
// LOGIN FORM VALIDATION
// =========================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    
    let isValid = true;
    
    // Reset errors
    emailError.textContent = "";
    passwordError.textContent = "";
    
    // Email validation
    if (!email) {
        emailError.textContent = "Email atau username tidak boleh kosong";
        isValid = false;
    } else if (email.includes("@")) {
        if (!isValidEmail(email)) {
            emailError.textContent = "Format email tidak valid";
            isValid = false;
        }
    }
    
    // Password validation
    if (!password) {
        passwordError.textContent = "Password tidak boleh kosong";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password minimal 6 karakter";
        isValid = false;
    }
    
    if (isValid) {
        // Simulate login success
        showLoginSuccess();
    }
});

// =========================
// EMAIL VALIDATION
// =========================

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// =========================
// LOGIN SUCCESS MESSAGE
// =========================

function showLoginSuccess() {
    const loginBtn = document.querySelector(".login-btn");
    const originalContent = loginBtn.innerHTML;
    
    loginBtn.innerHTML = '<i class="fas fa-check"></i> <span>Login Berhasil</span>';
    loginBtn.style.background = "linear-gradient(135deg, #22c55e, #16a34a)";
    loginBtn.disabled = true;
    
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1500);
}

// =========================
// DARK MODE
// =========================

const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {
    darkBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark");
        
        // Save preference
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
}

// =========================
// LOAD DARK MODE PREFERENCE
// =========================

window.addEventListener("load", function() {
    const darkModePreference = localStorage.getItem("darkMode");
    
    if (darkModePreference === "enabled") {
        document.body.classList.add("dark");
    }
});

// =========================
// REAL-TIME INPUT VALIDATION
// =========================

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

emailInput.addEventListener("blur", function() {
    const email = this.value.trim();
    const emailError = document.getElementById("emailError");
    
    if (!email) {
        emailError.textContent = "Email atau username tidak boleh kosong";
    } else if (email.includes("@") && !isValidEmail(email)) {
        emailError.textContent = "Format email tidak valid";
    } else {
        emailError.textContent = "";
    }
});

passwordInput.addEventListener("blur", function() {
    const password = this.value;
    const passwordError = document.getElementById("passwordError");
    
    if (!password) {
        passwordError.textContent = "Password tidak boleh kosong";
    } else if (password.length < 6) {
        passwordError.textContent = "Password minimal 6 karakter";
    } else {
        passwordError.textContent = "";
    }
});

emailInput.addEventListener("focus", function() {
    document.getElementById("emailError").textContent = "";
});

passwordInput.addEventListener("focus", function() {
    document.getElementById("passwordError").textContent = "";
});

// =========================
// SOCIAL LOGIN
// =========================

const googleBtn = document.querySelector(".google-btn");
const facebookBtn = document.querySelector(".facebook-btn");

if (googleBtn) {
    googleBtn.addEventListener("click", function() {
        alert("Fitur login dengan Google akan segera tersedia!");
    });
}

if (facebookBtn) {
    facebookBtn.addEventListener("click", function() {
        alert("Fitur login dengan Facebook akan segera tersedia!");
    });
}

// =========================
// ENTER KEY TO LOGIN
// =========================

document.getElementById("password").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        loginForm.dispatchEvent(new Event("submit"));
    }
});

// =========================
// FORGOT PASSWORD
// =========================

const forgotPasswordLink = document.querySelector(".forgot-password");

if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener("click", function(e) {
        e.preventDefault();
        alert("Fitur reset password akan segera tersedia!\n\nSilakan hubungi support@topupzone.com");
    });
}

// =========================
// PREVENT FORM RESUBMISSION
// =========================

if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}
