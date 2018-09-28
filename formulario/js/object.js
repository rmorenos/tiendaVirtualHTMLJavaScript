let json = {
    "nombre": "",
    "apellido_paterno": "",
    "apellido_materno": "",
    "correo": "",
    "razon": [],
 
}

function rescatarFormulario(){
    let poppup = document.getElementById("json");
    
    poppup.classList.remove("hide");
    
    
    json.nombre = document.getElementById("nombre").value;
    json.apellido_paterno = document.getElementById("apellido_paterno").value;
    json.apellido_materno = document.getElementById("apellido_materno").value;
    json.correo = document.getElementById("correo").value;
    json.razon = document.getElementById("razon").value;

    //poppup.innerHTML = JSON.stringify(json);
    letras="abcdefghijklnopqrstuvwxyz";
    
    if (json.nombre === "" ){
        poppup.innerHTML = "El compo nombre no puede estar vacio";
    
       
    } else{
        if (json.apellido_paterno === "") {
            poppup.innerHTML = "El compo apellido paterno no puede estar vacio";
        }

        else{
            if (json.correo === "") {
                poppup.innerHTML = "El compo correo no puede estar vacio";
                } else{
                
                if(json.razon === "."){
                    poppup.innerHTML = "El compo razon no puede estar vacio";
                   

                } else{
                    poppup.innerHTML = JSON.stringify(json);
                    let text = document.getElementById("text");
                    text.classList.remove("hide");
                    
                }
                
                
            }
            
            

         }
    }
}   

