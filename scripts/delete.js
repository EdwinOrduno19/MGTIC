function eliminar(row) {
    if (confirm("Está apunto de eliminar el registro con ID " + row.childNodes[1].innerHTML + " de nombre " + row.childNodes[3].innerHTML + " ¿Desea continuar?")) {
        var idBorrar = row.childNodes[1].innerHTML;
        $.ajax({
            url: "./app/delete_student.php",
            method: "POST",
            data: {
                ID: idBorrar
            },
            dataType: "json",
            success: function (response) {
                if (response.success) {
                    console.log(response);
                    setTimeout(function () {
                        location.reload();
                    }, 1000);
                    alert("Registro eliminado correctamente.");
                } else {
                    console.log("Error, por favor intente de nuevo");
                }
            },
            error: function (xhr, status, error) {
                console.log("Error de conexión");
                console.error(error);
            }
        });
    }
}