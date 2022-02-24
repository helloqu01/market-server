var express = require("express");
var cors = require("cors");
const app = express();
const port = 8008;


app.use(express.json());//json 파일을 사용하겠다.
app.use(cors());//모든 브라우저에서 사용가능하게 하겠다.

// app.get("/products", (req, res) => {
//     res.send("업로드 된 상품들입니다.");
// });//get요청이 왔을때 실행 되는 코드

app.get('/products', async (req, res) => {
	const query =req.query;
	console.log("쿼리:", query);
    res.send({    
			"products" : [
		      {
		          "id" : 1,
		        "name": "농구공",
		        "price": 100000,
		        "seller": "조던",
		        "imageUrl": "images/products/basketball1.jpeg"
		      },
		      {
		          "id": 2,
		        "name": "축구공",
		        "price": 50000,
		        "seller": "메시",
		        "imageUrl": "images/products/soccerball1.jpg"
		      },
		      {
		          "id" : 3,
		        "name": "키보드",
		        "price": 10000,
		        "seller": "그랩",
		        "imageUrl": "images/products/keyboard1.jpg"
		      }
	    ]
		});
})


app.post("/products", (req, res) => {
    // res.send("상품이 등록되었습니다.");
	const body = req.body;
	res.send({
		body,
	});
});//post 왔을때 실행 되는 코드


app.get("/products/:id", (req, res) => {
	// const params =  req.params;
	// res.send(`id는 ${params.id}입니다.`);

	const {id} =  req.params;
	res.send(`id는 ${id}입니다.`);
});//post 왔을때 실행 되는 코드


app.listen(port, () => {
    console.log("쇼핑몰 서버가 돌아가고 있습니다.");
});