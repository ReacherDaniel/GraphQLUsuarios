# API GraphQL con Firebase – Gestión de Usuarios

Este proyecto es una API GraphQL que permite realizar operaciones CRUD sobre un directorio de usuarios. Cada usuario tiene un nombre y un correo electrónico, el cual se valida para asegurar que tenga el formato correcto. Los datos se almacenan en **Firebase Firestore**.

> Proyecto desarrollado como parte de la materia *Desarrollo de Servicios Web*, siguiendo la guía del profesor.

---

##  Funcionalidades

- Obtener todos los usuarios
- Buscar un usuario por ID
- Crear un nuevo usuario con validación de email
- Actualizar nombre o email de un usuario
- Eliminar un usuario

---

## 🔧 Tecnologías utilizadas

- Node.js
- GraphQL (Apollo Server)
- Firebase Admin SDK (Firestore)
- Dotenv
