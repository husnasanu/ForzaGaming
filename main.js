const login = () => {
    const username = usernameInput.value;
    const password = passwordInput.value;
    const isGmail = username.endsWith('@gmail.com');
    const isPasswordValid = password.length >= 5;

    if (isGmail && isPasswordValid) {
        alert("Successfully logged in...");
        window.location.href = "about.html";
    } else {
        alert("Invalid username or password. Ensure your username ends with '@gmail.com' and your password is at least 5 characters long.");
    }
};

const store = ()=>{
     window.location.href = "https://www.microsoft.com/en-in/store/collections/forzacollection"
   
}
const logout = ()=>{
    window.location.href = "index.html"
}
const forzabtn = ()=>{
    window.location.href = "https://forza.net/myforza"
  
}


function danceH1() {
    const h1 = document.querySelector('h1.text-danger');

    h1.style.position = 'relative';
    let direction = 1;
    let position = 0;
    
    setInterval(() => {
        position += direction * 2; 
        if (position > 20 || position < -20) {
            direction *= -1; 
        }
        h1.style.left = position + 'px';
    }, 30); 
}


document.addEventListener('DOMContentLoaded', danceH1);



