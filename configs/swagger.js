import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "Academia Blogger",
            version: "1.0.0",
            description: "Este blog servirá como un registro organizado de los trabajos y proyectos de aprendizaje, accesible para cualquier visitante. El objetivo es proporcionar un espacio donde los estudiantes puedan compartir sus conocimientos y experiencias, así como recibir comentarios y sugerencias de otros usuarios. El blog también servirá como una plataforma para que los estudiantes muestren su trabajo y habilidades, lo que les permitirá destacar en el mundo laboral.",
            contact:{
                name: "Emilio Lux",
                email: "elux-2021572@kinal.edu.gt"
            }
        },
        servers:[
            {
                url: "http://localhost:3001/academyBlog/v1"
            }
        ]
    },
    apis:[
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi}