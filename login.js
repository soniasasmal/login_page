let titleElement = document.getElementsByClassName("title")[0]; 
        let toggleText = document.getElementById('toggleForm');
    
        toggleText.addEventListener('click', function() {
            if (titleElement.innerText === "Login") {
                titleElement.innerText = "Signup"; 
               
                toggleText.innerText = "Already have an account?"; 
            } else {
                titleElement.style.display = '';
                titleElement.innerText = "Login";  
                toggleText.innerText = "Don't have an account yet?"; 
            }
        });
