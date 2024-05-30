//arreglo
let students = [];

//constructor
function Student(name,age,genero,facultad,correo,psw,Espanol,Matematicas,Geografia){
    this.name = name;
    this.age = age;
    this.genero = genero;
    this.facultad = facultad;
    this.correo = correo;
    this.psw = psw;
    this.Espanol = Espanol;
    this.Matematicas = Matematicas;
    this.Geografia = Geografia;
}
//validación
function isValid(unAlumno){
    let validacion = true;

    if (unAlumno.name.trim() == ""){
        validacion = false;
    }

    if (unAlumno.age.trim() == ""){
        validacion = false;
    }

    if (unAlumno.genero == "---"){
        validacion = false;
    }

    if (unAlumno.facultad == "---"){
        validacion = false;
    }

    if (unAlumno.correo.trim() == ""){
        validacion = false;
    }

    if (unAlumno.psw.trim() == ""){
        validacion = false;
    }

    if (unAlumno.Espanol.trim() == "" || unAlumno.Espanol.trim() > 10){
        validacion = false;
    }

    if (unAlumno.Matematicas.trim() == "" || unAlumno.Matematicas.trim() > 10){
        validacion = false;
    }

    if (unAlumno.Geografia.trim() == "" || unAlumno.Geografia.trim() > 10){
        validacion = false;
    }

    return validacion;
}

//registrar
function registrar() {
    let inputNombre = document.getElementById("txt_Nombre").value;
    let inputEdad = document.getElementById("txt_Edad").value;
    let inputGenero = document.getElementById("ddl_Genero").options[document.getElementById("ddl_Genero").selectedIndex].text;
    let inputFacultad = document.getElementById("ddl_Facultades").options[document.getElementById("ddl_Facultades").selectedIndex].text;
    let inputCorreo = document.getElementById("txt_Correo").value;
    let inputPsw = document.getElementById("txt_Psw").value;
    let inputEspanol = document.getElementById("txt_Esp").value;
    let inputMatematicas = document.getElementById("txt_Mat").value;
    let inputGeografia = document.getElementById("txt_Geo").value;
    let nuevoAlumno = new Student(inputNombre,inputEdad,inputGenero,inputFacultad,inputCorreo,inputPsw,inputEspanol,inputMatematicas,inputGeografia);
    if(isValid(nuevoAlumno)){
        insertToDataBase(nuevoAlumno);
        document.getElementById("txt_Nombre").value = "";
        document.getElementById("txt_Edad").value = "";
        document.getElementById("ddl_Genero").selectedIndex = 0
        document.getElementById("ddl_Facultades").selectedIndex = 0
        document.getElementById("txt_Correo").value = "";
        document.getElementById("txt_Psw").value = "";
        document.getElementById("txt_Esp").value = "";
        document.getElementById("txt_Mat").value = "";
        document.getElementById("txt_Geo").value = "";
    }
        else {
            alert("Por favor completa los campos y/o verifique las calificaciones capturadas (la calificación máxima es 10)");
        }
    }


function insertToDataBase(NewStudent){
    $.ajax({
        url:"./app/register.php",
        method: "POST",
        data: {
            name:NewStudent.name,
            age:NewStudent.age,
            genero:NewStudent.genero,
            facultad:NewStudent.facultad,
            correo:NewStudent.correo,
            psw:NewStudent.psw,
            Espanol:NewStudent.Espanol,
            Matematicas:NewStudent.Matematicas,
            Geografia:NewStudent.Geografia
        },
        dataType:"json",
        success:function(response){
            if(response.success){
                console.log(response);
                setTimeout(function(){
                    location.reload();
                }, 1000);
                alert("Registro agregado correctamente.");
            }else{
                console.log("Error, por favor intente de nuevo")
            }
            
        },
        error:function(xhr,status,error){
            console.log("Error de conexión");
            console.error(error);
        }

    });
}

// function init(){
//     let student1 = new Student("Samuel",19, "Hombre","Facultad de Deportes","samuel@uabc.edu.mx","samu1234",10,7,8);
//     students.push(student1);
//     displayCards();
//     displayTable();
// }

// window.onload = init(); //espera a renderizar el HTML