import mongoose from 'mongoose';

 const connect=async () => {
    await mongoose.connect('mongodb://localhost/twitter_dev');
    console.log("database connect success");

}
export default connect;