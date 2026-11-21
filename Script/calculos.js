function calcular(){
    // Variables del formulario
    let CT = parseFloat(document.getElementById("CT").value);
    let position = parseFloat(document.getElementById("Pos").value);
    let plastico = document.getElementById("opcionResina").value;

    // Variables para los datos obtenidos
    let rango = 0.2;
    let ctIdeal;
    let ctNew = document.getElementById("newCT");
    let pos01 = document.getElementById("newPos01");
    let pos02 = document.getElementById("newPos02");
    let pos03 = document.getElementById("newPos03");

    if (CT === 0 || position === 0) {
        alert("Campos vacios, ingresar datos.");
    }
    else{
        switch(plastico){
            case "42L":
                ctIdeal = 6.5;

                while (CT > (ctIdeal + rango)) {
                    CT -= 0.3;
                    position += 0.01;
                }
                
                while (CT < (ctIdeal - rango)) {
                    CT += 0.3;
                    position -= 0.01;
                }

                ctNew.textContent = CT.toFixed(1);
                pos01.textContent = position.toFixed(3);
                pos02.textContent = (position + 0.1).toFixed(3);
                pos03.textContent = (position + 0.2).toFixed(3);

                break;
            
            case "43L":
                ctIdeal = 6.0;

                while (CT > (ctIdeal + rango)) {
                    CT -= 0.3;
                    position += 0.01;
                }
                
                while (CT < (ctIdeal - rango)) {
                    CT += 0.3;
                    position -= 0.01;
                }

                ctNew.textContent = CT.toFixed(1);
                pos01.textContent = position.toFixed(3);
                pos02.textContent = (position + 0.1).toFixed(3);
                pos03.textContent = (position + 0.2).toFixed(3);

                break;
        }
    }
}