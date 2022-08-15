window.addEventListener("load", function(){

    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const emailIsValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    window.addEventListener("submit", (event)=>{
        let errors = [];
        if (email.value == ""){
            //email.innerText = "Por favor, introduzca su email"
            errors.push("El campo de email no puede estar vacio");
        } else if (!emailIsValid.test(email.value)){
            //document.getElementById("email").innerText = "El email no posee un formato valido"
            errors.push("El email no posee un formato valido")
        } else {
            errors = [];
        }

        if (password.value == ""){
            //password.innerText = "Por favor, introduzca su contraseña"
            errors.push("El campo de contraseña no puede estar vacio"); 
        };
        
        if(errors.length > 0){ 
            event.preventDefault()
            const errores = document.querySelector('.errors')
            errores.innerHTML = ""
            
            for (let index = 0; index < errors.length; index++) {
                
                errores.innerHTML += "<li>" + errors[index] + "</li>"  
            }
        }
    })
})   