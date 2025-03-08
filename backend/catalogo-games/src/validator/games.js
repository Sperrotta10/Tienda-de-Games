const zod = require('zod');

// Definir el esquema de validación con Zod
const gameSchemaZod = zod.object({
    titulo: zod.string().min(1, "El título es requerido"),
    genero: zod.string().min(1, "El género es requerido"),
    desarrollador: zod.string().min(1, "El desarrollador es requerido"),
    editor: zod.string().min(1, "El editor es requerido"),
    fecha_lanzamiento: zod.string().regex(/^\d{4}-\d{2}-\d{2}$/, "La fecha debe estar en formato YYYY-MM-DD"),
    precio: zod.number().min(0, "El precio no puede ser negativo"),
    plataformas: zod.array(zod.string().min(1, "Cada plataforma debe ser un string no vacío")),
    descripcion: zod.string().min(1, "La descripción es requerida"),
    requisitos_sistema: zod.object({
        minimos: zod.object({
            sistema_operativo: zod.string().min(1, "El sistema operativo es requerido"),
            procesador: zod.string().min(1, "El procesador es requerido"),
            memoria: zod.string().min(1, "La memoria es requerida"),
            graficos: zod.string().min(1, "Los gráficos son requeridos"),
            almacenamiento: zod.string().min(1, "El almacenamiento es requerido"),
        }),
        recomendados: zod.object({
            sistema_operativo: zod.string().min(1, "El sistema operativo es requerido"),
            procesador: zod.string().min(1, "El procesador es requerido"),
            memoria: zod.string().min(1, "La memoria es requerida"),
            graficos: zod.string().min(1, "Los gráficos son requeridos"),
            almacenamiento: zod.string().min(1, "El almacenamiento es requerido"),
        }),
    }),
    idiomas_disponibles: zod.array(zod.string().min(1, "Cada idioma debe ser un string no vacío")),
    clasificacion_edad: zod.string().min(1, "La clasificación de edad es requerida"),
    multijugador: zod.boolean(),
    cooperativo: zod.boolean(),
    enlace_trailer: zod.string().url("El enlace del trailer debe ser una URL válida"),
    portada: zod.string().url("La portada debe ser una URL válida"),
});

// funcion para validar lo datos cuando queremos crear un juego
function validationGames(game) {
        
    const dataValidate = gameSchemaZod.parse(game);

    return dataValidate;
}

// funcion para validar los datos cunado queremos actualizar juegos
function validationGamesUpdate(game) {

    const dataValidate = gameSchemaZod.partial().parse(game);

    return dataValidate;
}

module.exports = {validationGames, validationGamesUpdate}