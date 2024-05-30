// function displayCards(student){
//     let card = "";

//     // for(let i=0;i<students.length;i++){
//     //     let student=students[i];
//         card+=`
//         <div id='${student.id}' class='student'>
//             <label>Nombre: </label>${student.name}<br/>
//             <label>Edad: </label>${student.age}<br/>
//             <label>Genero: </label>${student.genero}<br/>
//             <label>Facultad: </label>${student.facultad}<br/>
//             <label>Correo: </label>${student.correo}<br/>
//             <label>Contraseña: </label>${student.password}<br/>
//             <label>Español: </label>${student.espanol}<br/>
//             <label>Matemáticas: </label>${student.matematicas}<br/>
//             <label>Geografía: </label>${student.geografia}<br/><br/>
//             <button>Eliminar</button>
//         </div>
//         `;

//     // }
//     document.getElementById("studentList").innerHTML += card;
// }

function searchToDataBase(){
    $.ajax({
        url:"./app/get_students.php",
        type:"GET",
        dataType:"json",
        success:function(response){
            console.log(response);
            if(response.success){
                //aqui se hace el display
                console.log(response.data);
                // response.data.forEach(displayCards);
                response.data.forEach(displayTable);
            }else{
                console.log("Error en la respuesta del servidor")
            }
        },
        error:function(xhr,status,error){
            console.log(error);
        }
    })
}

function init(){
    searchToDataBase();
}

window.onload = init();


function displayTable(student) {
    let table = "";
    table += `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.genero}</td>
            <td>${student.facultad}</td>
            <td>${student.correo}</td>
            <td>${student.password}</td>
            <td>${student.espanol}</td>
            <td>${student.matematicas}</td>
            <td>${student.geografia}</td>
            <td><button class='BotonEditar' onclick='UpdateForm(this.parentNode.parentNode);'>Editar</button><button class='BotonEliminar' onclick='eliminar(this.parentNode.parentNode)'>Eliminar</button></td>
        </tr>
        `;
    document.getElementById("studentTable").innerHTML += table;
}