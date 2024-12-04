
import Topic from "../models/temaModel_simulated.js" // Ajusta según la ubicación real

export const getAllTopics = async(req, res) => {
    try {
        const topics = await Topic.getTopics();
        res.render('index', { topics });
    } catch (error) {
        console.error("Error al obtener todos los temas." + error);
    }
};

export const postTopic = async (req, res) => {
    try {
        const { title } = req.body;
        await Topic.createTopic(title);
        res.redirect('/');
    } catch (error) {
        console.error("Error al crear un nuevo tema: " + error);
    }
};

export const voteATopic = async (req, res) => {
    try {
        const { id } = req.params;
        await Topic.voteTopic(id);
        res.redirect('/');
    }  catch(error) {
        console.log("Error al votar por el tema.");
    };
};

export const deleteATopic = async (req, res) => {
    try {
        const { id } = req.params;
        await Topic.deleteTopic(id);
        res.redirect('/');
    } catch (error) {
        console.log("Ocurrió un error al eliminar el tema: " + error);
    }
};

export const renderEditTopic = async (req, res) => {
    try {
        const { id } = req.params;
        const topics = await Topic.getTopics();
        const topic = topics.find(topic => topic.id === parseInt(id));
        if (!topic) {
            return res.status(404).send("Tema no encontrado");
        }
        res.render('edit', { topic }); // Renderiza la vista 'edit'
    } catch (error) {
        console.error("Error al cargar el formulario de edición: " + error);
        res.status(500).send("Error interno del servidor");
    }
};


export const editTopic = async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;
        await Topic.updateTopic(id, title);
        res.redirect('/');
    } catch (error) {
        console.error("Error al editar el tema: " + error);
    }
};

