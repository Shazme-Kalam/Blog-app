// db.js
import mongoose from 'mongoose';

// MongoDB connection string
const uri = 'mongodb+srv://missshazmekalam66_db_user:iJ3CZn0cpIMySlMp@cluster0.hsg3hfn.mongodb.net/';

// Connect to MongoDB
mongoose.connect(uri, {
    useNewUrlParser: true,   // URL ko correctly parse karne ke liye
    useUnifiedTopology: true // Server discovery & monitoring ke liye
})
.then(() => {
    console.log('MongoDB connected successfully!');
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Optional: export mongoose if you want to use it elsewhere
export default mongoose;
