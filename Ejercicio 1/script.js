function Relink() { 
    let msj = confirm("Desea ingresar al portal del diario \"El País\"");
    if(msj){
        window.location.href = "https://www.elpais.com.co";
    } else {
        alert("No se pudo ingresar al portal!");
    }
}