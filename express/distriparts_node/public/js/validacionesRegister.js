window.onload = function(){

    const nombreApellido = document.getElementById("nombre-apellido")
    const email = document.getElementById("mail-r")
    const pass = document.getElementById("contra")
    const imagen = document.getElementById("fotito")

    
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const imageExtension = [".jpg", ".jpeg", ".png", ".gif"];


window.addEventListener("submit", function (event){
    let errores = [];
    //VALIDACION: NOMBRE-APELLIDO
    if (nombreApellido.value == ""){
            errores.push("El campo nombre y apellido es obligatorio");
        } else if (nombreApellido.value.length < 2){
        //errores.pop();
        errores.push("El campo debe tener al menos 2 caracteres");
    }

    //VALIDACION: EMAIL
    if (email.value == ""){
            errores.push("El campo email es obligatorio");
        } else if (!emailValidation.test(email.value)){
        //errores.pop();
        errores.push("El email no posee un formato valido")
    }

    //VALIDACION: PASSWORD
    if (pass.value == ""){
        errores.push("El campo contraseña es obligatorio")
    } else if (!passValidation.test(pass.value)){
        //errores.pop();
        errores.push("El campo contraseña debe tener al menos 8 caracteres, con una letra mayúscula, una minúscula, un número y un caracter especial")
    }

    //VALIDACION: IMAGEN.
    if (imagen.value !== "") {
        const extension = imagen.value
          .substring(imagen.value.lastIndexOf("."))
          .toLowerCase();
    
    if (!imageExtension.includes(extension)){
        errores.push("Las extensiones de imagenes permitidas son Jpg, Png, Gif y Jpeg")
    }
}
    if(errores.length > 0){ 
         event.preventDefault()
         const errores1 = document.querySelector('.errores')
         errores1.innerHTML =""
    
    for (let index = 0; index < errores.length; index++) {
       errores1.innerHTML += "<li>" + errores[index] + "</li>"  
       console.log(errores)
    }
}

})
}