window.addEventListener("load", function(){
    const form = document.querySelector('#formRegistro')
    const nombreApellido = document.getElementById('nombre-apellido')
    const email = document.getElementById('mail-r')
    const pass = document.getElementById('contra')
    const imagen = document.getElementById('fotito')
    console.log("prueba1");

    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    const imageExtension = [".jpg", ".jpeg", ".png", ".gif"]


    window.addEventListener("submit", (event)=>{
        let errors = [];
        //VALIDACION: NOMBRE-APELLIDO
        if (nombreApellido.value == ""){
            errors.push("El campo nombre y apellido es obligatorio");
        }

        if (nombreApellido.value.length < 2){
        //errors.pop();
        errors.push("El campo debe tener al menos 2 caracteres");
        }

        //VALIDACION: EMAIL
        if (email.value = ""){
            errors.push("El campo email es obligatorio");
        } 
        if (!emailValidation.test(email.value)){
        //errors.pop();
        errors.push("El email no posee un formato valido")
        }

        //VALIDACION: PASSWORD
        if (pass.value == ""){
        errors.push("El campo contraseña es obligatorio")
        }
        if (!passValidation.test(pass.value)){
        //errors.pop();
        errors.push("El campo contraseña debe tener al menos 8 caracteres, con una letra mayúscula, una minúscula, un número y un caracter especial")
        }

        //VALIDACION: IMAGEN.
        if (imagen.value != "") {
        const extension = imagen.value
          .substring(imagen.value.lastIndexOf("."))
          .toLowerCase();
    
        if (!imageExtension.includes(extension)){
        errors.push("Las extensiones de imagenes permitidas son Jpg, Png, Gif y Jpeg")
        }
        };

        if(errors.length > 0){ 
         event.preventDefault()
    
            for (let index = 0; index < errors.length; index++) {
            const errores = document.querySelector('.errores')
            errores.innerHTML += "<li>" + errors[index] + "</li>"  
            }
        }
    
    });
console.log("imprimi algooooooo")
})
