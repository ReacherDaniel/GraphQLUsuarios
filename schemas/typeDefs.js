const { gpl, gql } = require("apollo-server");
//const gpl = require("apollo-server").gql;

const typeDefs = gql`
    "Representa a un usuario en el directorio"
    type User{
         "ID único generado automáticamente"
        id: ID!
         "Nombre completo del usuario"
        name: String!
        "Correo electrónico del usuario, debe tener formato válido"
        email: String!
    }

    "Consultas disponibles para obtener usuarios"
    type Query{
        "Devuelve una lista de todos los usuarios registrados"
        getUsers:[User]
        "Busca un usuario específico por su ID" 
        getUser(id: ID!): User
    }
    
    "Mutaciones disponibles para gestionar usuarios"
    type Mutation{
        "Crea un nuevo usuario con nombre y correo electrónico válidos"
        createUser(name:String!, email:String!): User
        "Actualiza el nombre y/o correo de un usuario existente por su ID"
        updateUser(id: ID!, name: String, email: String): User
        "Elimina un usuario por su ID"
        deleteUser(id:ID!):User
    }
`;

module.exports = typeDefs;