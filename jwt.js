//Um simples exemplo de API para autenticação de usuários usando o JWT.
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken"); //Necessário instalar o módulo npm install jsonwebtoken --save
const SECRET = "TaskManager-API";
const Users = { id: 1, name: "Alison", email: "alisonreges@gmail.com" };

app.use(express.json());
app.get("/", (req, res) => {
  return res.json({ msg: "hello world" });
});
app.get("/clients", verifyJWT, (req, res) => {
  return res.json({ msg: "usuário autenticado" });
});

app.post("/login", (req, res) => {
  const { email } = req.body;
  const user = Users;
  if (user.email === email) {
    const token = jwt.sign(
      { id: user.id, nome: user.name, email: user.email },
      SECRET,
      { expiresIn: 3600 }
    );
    return res.json({ auth: true, token });
  } else {
    res.status(401).json({ auth: false });
  }
});

function verifyJWT(req, res, next) {
  const token = req.headers["x-access-token"];
  jwt.verify(token, SECRET, (error, decoded) => {
    if (error) {
      return res.status(401).end();
    }

    req.userId = decoded.userId;
    next();
  });
}
app.listen(3000, () => {
  console.log("JWT Teste rodando");
});
