import mongoose from 'mongoose';

export default (host, port) => {
  mongoose.connect(`mongodb://${host}:${port}/spider`, { useNewUrlParser: true });
  const mongo = mongoose.connection;

  mongo.on('error', console.error.bind(console, 'connection error:'));
  mongo.once('open', function () {
    console.log('connection success');
  });
};
