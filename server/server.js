import express from 'express';
import cors from 'cors';
import users from './user.js';

const app = express();


// Middleware
app.use(cors()); // allows requests from frontend
app.use(express.json()); // parse JSON request bodies

app.get('/',(req,res)=>{
    res.send('API is running..');
})
// Routes
app.get("/api/user", (req, res) => {
res.send(users);
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
