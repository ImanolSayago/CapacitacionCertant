# 🚀 Puesta en Marcha Rápida
Para que esta aplicación funcione correctamente, necesitarás tener su backend en ejecución.

# 1.Inicia el Backend
Asegúrate de que el repositorio backendRepoCap (que se encuentra en mis otros repositorios) esté clonado y su servidor esté corriendo. Este frontend se comunicará con él.

# 2.Crea un Usuario Administrador
Aunque la aplicación permite registrar nuevos usuarios, para empezar a gestionar contenido necesitarás un usuario con rol de administrador. Por ahora, esto se realiza directamente a través de Postman (o cualquier cliente HTTP):

Método: POST

URL: http://localhost:8080/api/usuario/crear

Cuerpo (JSON):

JSON=>
{
  "usuario": "user1",
  "password": "123456",
  "tipo": "ADMIN"
}
Nota: Puedes cambiar user1 y 123456 por el nombre de usuario y contraseña que prefieras.

# 3.No implementado
Todavia no esta implementado el cargar imagenes en el backend, asi que no mostrara imagen cada disco.

