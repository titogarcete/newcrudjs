
// Simulación de una base de datos con un diccionario
const topicsDB = [
    { id: 1, title: 'Tema 1', votes: 5 },
    { id: 2, title: 'Tema 2', votes: 3 },
    { id: 3, title: 'Tema 3', votes: 8 },
];

class Topic {
    static async getTopics() {
        return topicsDB.sort((a, b) => b.votes - a.votes); // Ordenar por votos descendente
    }

    static async createTopic(title) {
        const newTopic = {
            id: topicsDB.length ? topicsDB[topicsDB.length - 1].id + 1 : 1,
            title: title,
            votes: 0
        };
        topicsDB.push(newTopic);
    }

    static async updateTopic(id, newTitle) {
        const topic = topicsDB.find(topic => topic.id === parseInt(id));
        if (topic) {
            topic.title = newTitle;
        }
    }
    
    
    static async voteTopic(id) {
        const topic = topicsDB.find(topic => topic.id === parseInt(id));
        if (topic) topic.votes += 1;
    }

    static async deleteTopic(id) {
        const index = topicsDB.findIndex(topic => topic.id === parseInt(id));
        if (index !== -1) topicsDB.splice(index, 1);
    }
}

export default Topic;
