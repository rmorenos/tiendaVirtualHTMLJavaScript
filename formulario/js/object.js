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

    poppup.innerHTML = JSON.stringify(json);
}   