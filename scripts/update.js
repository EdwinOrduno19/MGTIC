//constructor
function StudentUpdate(ID,name,age,genero,facultad,correo,psw,Espanol,Matematicas,Geografia){
    this.ID = ID;
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

function UpdateForm(row){
    document.getElementById("txt_IdU").value = row.childNodes[1].innerHTML;
    document.getElementById("txt_NombreU").value = row.childNodes[3].innerHTML;
    document.getElementById("txt_EdadU").value = row.childNodes[5].innerHTML;
    var listGenero = document.getElementById("ddl_GeneroU");
    var opcionesGenero = listGenero.options.length;
    var listUA = document.getElementById("ddl_FacultadesU");
    var opcionesUA = listUA.options.length;

    for(let i=0;i<=opcionesGenero;i++){
        document.getElementById("ddl_GeneroU").value = i;
        var ddlGenero = document.getElementById("ddl_GeneroU");
        var textGenero = ddlGenero.options[ddlGenero.selectedIndex].text;
        if (textGenero == row.childNodes[7].innerHTML){
            break;
        }
    }

    for(let i=0;i<=opcionesUA;i++){
        document.getElementById("ddl_FacultadesU").value = i;
        var ddlUA = document.getElementById("ddl_FacultadesU");
        var textUA = ddlUA.options[ddlUA.selectedIndex].text;
        if (textUA == row.childNodes[9].innerHTML){
            break;
        }
    }
    document.getElementById("txt_CorreoU").value = row.childNodes[11].innerHTML;
    document.getElementById("txt_PswU").value = row.childNodes[13].innerHTML;
    document.getElementById("txt_EspU").value = row.childNodes[15].innerHTML;
    document.getElementById("txt_MatU").value = row.childNodes[17].innerHTML;
    document.getElementById("txt_GeoU").value = row.childNodes[19].innerHTML; 
    window.ModalEditar.showModal();
}

function ActualizaRegistro(){  
    var idU = document.getElementById("txt_IdU").value;
    var nombreU = document.getElementById("txt_NombreU").value;
    var edadU = document.getElementById("txt_EdadU").value;
    var generoU = document.getElementById("ddl_GeneroU").options[document.getElementById("ddl_GeneroU").selectedIndex].text; 
    var facultadU = document.getElementById("ddl_FacultadesU").options[document.getElementById("ddl_FacultadesU").selectedIndex].text; 
    var correoU = document.getElementById("txt_CorreoU").value;
    var pswU = document.getElementById("txt_PswU").value;
    var espanolU = document.getElementById("txt_EspU").value;
    var matematicasU = document.getElementById("txt_MatU").value;
    var geografiaU = document.getElementById("txt_GeoU").value;
    let AlumnoModificado = new StudentUpdate(idU,nombreU,edadU,generoU,facultadU,correoU,pswU,espanolU,matematicasU,geografiaU);

    
    if(isValid(AlumnoModificado)){
        UpdateToDataBase(AlumnoModificado);
    }
        else {
            alert("Por favor completa los campos y/o verifique las calificaciones capturadas (la calificación máxima es 10)");
        }
    }


function UpdateToDataBase(UpdateStudent){
    $.ajax({
        url:"./app/update_student.php",
        method: "POST",
        data: {
            ID:UpdateStudent.ID,
            name:UpdateStudent.name,
            age:UpdateStudent.age,
            genero:UpdateStudent.genero,
            facultad:UpdateStudent.facultad,
            correo:UpdateStudent.correo,
            psw:UpdateStudent.psw,
            Espanol:UpdateStudent.Espanol,
            Matematicas:UpdateStudent.Matematicas,
            Geografia:UpdateStudent.Geografia,
        },
        dataType:"json",
        success:function(response){
            if(response.success){
                console.log(response);
                setTimeout(function(){
                    location.reload();
                }, 1000);
                alert("Registro modificado correctamente.");
            }else{
                console.log("Error, por favor intente de nuevo");
            }
            
        },
        error:function(xhr,status,error){
            console.log("Error de conexión");
            console.error(error);
        }

    });
}