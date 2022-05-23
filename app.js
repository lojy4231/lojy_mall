const express = require("express"); // express 모듈을 사용하겠다.
const app = express(); // express에 객체를 받아 옴.
const port = 3000;

app.use((req, res, next) => {
    console.log("미들웨어가 구현됐나?");
    next(); // next는 다음 미들웨어로 넘어 갈 수 있게 해준다.
});

app.get("/", (req, res) =>{
    res.send("Hello World");
});

app.listen(port, () =>{
    console.log(port, "포트로 서버가 켜졌어요")
});