<?php 
// Permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Origin: *");
// Permitir métodos HTTP GET, POST, y OPTIONS
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// Permitir los encabezados Content-Type y Authorization en las solicitudes CORS
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include("connection.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["ID"])) {
        $ID = $_POST["ID"];
        
        $stmt_delete_Usuario = $conn->prepare("DELETE FROM estudiantes WHERE id = ?");
        $stmt_delete_Usuario->bind_param("i", $ID);
        $stmt_delete_Usuario->execute();

        echo json_encode(array("success" =>true));
        $stmt_delete_Usuario->close();

    $conn->close();
    exit();
    }
}
?>