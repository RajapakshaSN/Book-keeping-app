const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect('mongodb+srv://shash:jfHGWu6OT003x8TI@shash.4ojvk.mongodb.net/book-keeping-app',{
    userFindAndModify: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    }).then(() => console.log('Db Connected'))
      .catch(err => console.log(err));

}


module.exports = dbConnect;