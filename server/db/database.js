const mongoose = require('mongoose');
mongoose.set('strictQuery',false);

const connectDatabase = async()=>{
    try {
      const conn = await mongoose.connect(process.env.MONGODB_URL);
      console.log(`Database connected ${conn.connection.host}`);
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDatabase;