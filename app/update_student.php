<?php 
// Permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Origin: *");
// Permitir métodos HTTP GET, POST, y OPTIONS
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// Permitir los encabezados Content-Type y Authorization en las solicitudes CORS
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include("connection.php");

if($_SERVER["REQUEST_METHOD"] == "POST"){

    if(isset($_POST["ID"], $_POST["name"], $_POST["age"], $_POST["genero"], $_POST["facultad"], $_POST["correo"], $_POST["psw"], $_POST["Espanol"], $_POST["Matematicas"], $_POST["Geografia"])){
        $ID = $_POST["ID"];
        $nombre = $_POST["name"];
        $edad = $_POST["age"];
        $genero = $_POST["genero"];
        $facultad = $_POST["facultad"];
        $correo = $_POST["correo"];
        $psw = $_POST["psw"];
        $Espanol = $_POST["Espanol"];
        $Matematicas = $_POST["Matematicas"];
        $Geografia = $_POST["Geografia"];
               
        $stmt_update_Usuarios =$conn->prepare("UPDATE estudiantes set name=?, age=?, genero=?, facultad=?, correo=?, password=?, espanol=?, matematicas=?, geografia=? WHERE id=?");
        $stmt_update_Usuarios->bind_param("sissssiiii", $nombre,$edad,$genero,$facultad,$correo,$psw,$Espanol,$Matematicas,$Geografia,$ID); //sissssiii, es el tipo de dato por variable, s=string, i=integer
        $stmt_update_Usuarios->execute();

        echo json_encode(array("success" =>true));
        $stmt_update_Usuarios->close();
    }
    $conn->close();
    exit();
}

?>