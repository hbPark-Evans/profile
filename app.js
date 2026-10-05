const express = require("express"); //express 가져오기

const app = express(); //express 사용하여 웹서버 생성
const PORT = 3000;
app.set("view engine", "ejs"); //ejs를 사용하기 위한
app.use(express.static("public")); //css파일이 있는 퍼블릭폴더 사용

//main 페이지
app.get("/", (req, res) => {
    res.render("main");
});

//스케줄 페이지
app.get("/schedule", (req, res) => {
    res.render("schedule");
});

//이력사항 페이지
app.get("/history", (req, res) => {
    res.render("history");
});

//관심사 페이지
app.get("/hobby", (req, res) => {
    res.render("hobby");
});

//관심사 > GRIT601 페이지
app.get("/grit", (req, res) => {
    res.render("grit");
});

//관심사 > jji
app.get("/jji", (req, res) => {
    res.render("jji");
});

//관심사 > nell
app.get("/nell", (req, res) => {
    res.render("nell");
});

app.listen(PORT, () => {
    console.log(`서버 실행 중: http://localhost:${PORT}`);
});

