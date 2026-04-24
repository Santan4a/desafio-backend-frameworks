const express = require('express');
const app = express();


app.use(express.json());


const userRoutes = require('./routes/UserRoutes');
app.use('/users', userRoutes);


app.get('/', (req, res) => {
  res.send('API Node rodando 🚀');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});