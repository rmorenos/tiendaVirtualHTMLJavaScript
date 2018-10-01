let json = {
    "title": "",
    "precio": "",
    "valor": "",
}

function traerPrecio() {
   // popup = document.getElementsByClassName()
    let popup = document.getElementById("json");

    json.precio = document.getElementsByClassName("precio");
    json.title = document.getElementsByClassName("title_costo");
    json.valor = document.getElementsByName("productos");

    for (let i = 0; i < json.precio.length; i++){
        if(json.valor[i].getAttribute("value") == 1){

            document.getElementById("div_comprar_title").innerHTML = json.title[i].innerHTML;
            let valors =  document.getElementById("div_comprar_precio").innerHTML = json.precio[i].innerHTML;

            let input = document.createElement('input');
            input.style.width="40px";
            input.style.height="40px";
            input.type = "number";
            input.name = "lalala";
            input.value = "2";
            document.getElementById('div_comprar_cantidad').appendChild(input);
            let cantItem = document.getElementsByName("lalala")[0].valueAsNumber;
            let cantPrecioItem = valors * cantItem;
            document.getElementById("div_comprar_precio_item").innerHTML = cantPrecioItem;









        }

    }



    /**  for(var i = 0; i < json.precio.length; i++){
        console.log(json.title[i].innerHTML);
        console.log(json.precio[i].innerHTML);

    } **/
    
}