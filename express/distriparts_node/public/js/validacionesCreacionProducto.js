window.addEventListener("load", function(){
    const descripcion = document.getElementById("descripcioncita");
    const nombre = document.getElementById("nombrecito");
    const imagen = document.getElementById("forma"); 
    
    const imagenExtension = [".jpg", ".jpeg", ".png", ".gif" , ".webp"];


    window.addEventListener("submit", function (event){
        let avisos = [];

        // VALIDACION NOMBRE
        if (nombre.value =="") {
            avisos.push ("El campo nombre es obligatorio")
        } else if (nombre.value.length < 2){
            avisos.push ("El campo nombre debe tener al menos 2 caracteres")
        }
        
        // VALIDACION DESCRIPCION
        if (descripcion.value.length < 20){
            avisos.push ("El campo descripcion debe tener al menos 20 caracteres")
        }
        

        // VALIDACION IMAGEN
        if (imagen.value !== "") {
            const extension = imagen.value
              .substring(imagen.value.lastIndexOf("."))
              .toLowerCase();
        
        if (!imagenExtension.includes(extension)){
            avisos.push("Las extensiones de imagenes permitidas son Jpg, Png, Gif y Jpeg")
        }
    }

    // LOS ESPACIOS TE MATARAN
        if (avisos.length > 0) {
            event.preventDefault()
            const aviso = document.querySelector('.avisos')
            aviso.innerHTML =""
            for (let index = 0; index < avisos.length; index++) {
                aviso.innerHTML += "<li>" + avisos[index] + "</li>"  
                
            }
        }
})
})