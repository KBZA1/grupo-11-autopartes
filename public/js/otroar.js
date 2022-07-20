window.onload = function(){
    if (errors.length > 0) {
                e.preventDefault();
                let ulErrors = document.querySelector('.errores');
                ulErrors.classList.add('alert-warning');
                ulErrors.innerHTML = '';
                for (let i = 0; i < errors.length; i++) {
                    ulErrors.innerHTML += `<li >  ${errors[i]} </li>`;
                };
            }else{
                alert('La validación fué exitosa')
                form.submit();
            }
        }