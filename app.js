const express = require("express"); // express 모듈을 사용하겠다.
const connect = require("./schemas"); // index.js 는 생략 가능
const app = express(); // express에 객체를 받아 옴.
const port = 3000;

connect();

const goodsRouter = require("./routes/goods");

const requestMiddleware = (req, res, next) => {
    console.log("Request URL:", req.originalUrl, "-", new Date());
    next();
};

app.use(express.json());
app.use(requestMiddleware);
// app.use((req, res, next) => {
//     console.log("미들웨어가 구현됐나?");
//     next(); // next는 다음 미들웨어로 넘어 갈 수 있게 해준다.
// });

app.use("/api", goodsRouter);  

app.get("/", (req, res) =>{
    res.send("Wellcome lojy_mall");
});

app.listen(port, () =>{
    console.log(port, "포트로 서버가 켜졌어요")
});