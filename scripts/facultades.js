//arreglo
let facultades = [];

//constructor
function Facultad(name,campus){
    this.name = name;
    this.campus = campus;
}

//validación
function isValid(unaFacultad){
    let validacion = true;

    if (unaFacultad.name == ""){
        validacion = false;
    }

    if (unaFacultad.campus == "---"){
        validacion = false;
    }
    return validacion;
}

//registrar
function registrarFacultad() {
    let inputFacultad = document.getElementById("txt_Facultad").value;
    let inputCampus = document.getElementById("ddl_Campus").options[document.getElementById("ddl_Campus").selectedIndex].text;
    let nuevaFacultad = new Facultad(inputFacultad,inputCampus);
    if(isValid(nuevaFacultad)){
        saveItems(nuevaFacultad);
    }
        else {
            alert("Por favor completa los campos");
        }
    }