import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-gbv6qhj-shard-00-00.fxcnai2.mongodb.net:27017,ac-gbv6qhj-shard-00-01.fxcnai2.mongodb.net:27017,ac-gbv6qhj-shard-00-02.fxcnai2.mongodb.net:27017/?ssl=true&replicaSet=atlas-g49ayo-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;