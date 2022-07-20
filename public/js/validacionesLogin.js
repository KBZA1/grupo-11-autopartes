window.addEventListener("load", function(){
    
    const form = document.querySelector('form')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const button = document.getElementById('ingresar')
    
    window.addEventListener("submit", (event)=>{
        let errors = [];
        if (password.value == ""){
            //password.innerText = "Por favor, introduzca su contraseña"
            errors.push("El campo de contraseña no puede estar vacio")
        }
        if (email.value == ""){
            //password.innerText = "Por favor, introduzca su contraseña"
            errors.push("El campo de email no puede estar vacio")
        }
        if(errors.length > 0){ 
            event.preventDefault()
            
            for (let index = 0; index < errors.length; index++) {
                const errores = document.querySelector('.errors')
                errores.innerHTML += "<li>" + errors[index] + "</li>"  
            }
        }
    })
})





   