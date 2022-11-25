import * as dotenv from 'dotenv';  //환경변수
dotenv.config();

import mongoose from "mongoose";
import { db_server, db_name } from "./config/db_config.js";
import express from 'express';
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}));
const port = process.env.port || 3000
app.listen(port, ()=>{
    console.log(`동작중... please, open your browser at http://localhost:${port} `)
});
mongoose.connect( db_server
, {
     dbName: db_name
}
)
.then( () => {
    console.log("mongoDB connected...")
})
.catch( (error) => {
    console.log(error)
})

// 여기까지가 통신 연결 코드



// <CRUD>
import * as users from './controllers/usersController.js';
import * as businessusers from './controllers/businessusersController.js';
import * as markets from './controllers/marketsController.js';
import * as sellers from './controllers/sellersController.js';

app.get('/', (req,res) =>{
    res.json({"message": "안녕하세요."});
});

/*------------------------------*/
// users
/*------------------------------*/
app.post("/users-init", users.init); 
app.get("/users", users.findAll);
app.post("/users", users.create);
app.get("/users/:id", users.findOne);
app.put("/users/:id", users.updateOne);    //X
app.delete("/users/:id", users.deleteOne);

/*------------------------------*/
// businessusers
/*------------------------------*/
app.get("/businessusers", businessusers.findAll);
app.post("/businessusers", businessusers.create);
app.get("/businessusers/:id", businessusers.findOne);

/*------------------------------*/
// markets
/*------------------------------*/
app.post("/markets-init", markets.init); 
app.get("/markets", markets.findAll);
app.post("/markets", markets.create);             
app.get("/markets/:category", markets.findSome);  
// 장날보기
// 모집중
app.get("/markets-undergathering", markets.findUnderGathering); 
// 지도좌표

/*------------------------------*/
// sellers
/*------------------------------*/
app.get("/sellers", sellers.findAll);
app.post("/sellers", sellers.create);



















/*------------------------------*/
// users
/*------------------------------*/

// //GET
// app.get("/users", async(req, res) => {  
//     try{
//         const data = await User.find({});     //몽구스 
//         res.status(200).send(data);
//     }catch(e) {
//         res.status(500).json({
//             "message": "user 조회 실패"
//         })      
//     }
// });

// // POST
// app.post("/users", async(req, res) => {
    
//     const data = new User(req.body)
//     try {
//         await data.save()
//         res.status(204).send()
//     }catch(e) {
//         res.status(500).json({
//             message: "user 저장 실패"
//         })
//     }
// })

// //GET (by id)
// app.get("/users/:id", async(req, res) => {  
//     const id = req.params.id
//     try{
//         const data = await User.findOne({id: id});      

//         if (!data) {
//             return res.status(404).send()
//         }
//         res.status(200).send(data);
//     }catch(e) {
//         res.status(500).json({
//             "message": "user 조회 실패"
//         })      
//     }
// });

// // PATCH (by id)
// app.patch("/users/:id", async(req, res) => {  
//     const id = req.params.id
//     try{
//         const data = await User.findOneAndUpdate({id: id}, req.body, {
//             new: true,
//             runValidators: true
//         });     

//         if (!data) {
//             return res.status(404).send()
//         }
//         res.status(200).send(data);
//     }catch(e) {
//         res.status(500).json({
//             "message": "user 변경 실패"
//         })      
//     }
// });

// // PUT (by id)   ...위랑 같네...?
// app.put("/users/:id", async(req, res) => {  
//     const id = req.params.id
//     try{
//         const data = await User.findOneAndUpdate({id: id}, req.body, {
//             new: true,
//             runValidators: true
//         });     

//         if (!data) {
//             return res.status(404).send()
//         }
//         res.status(200).send(data);
//     }catch(e) {
//         res.status(500).json({
//             "message": "user 변경 실패"
//         })      
//     }
// });

// // DELETE (by id)
// app.delete("/users/:id", async(req, res) => {  
//     const id = req.params.id
//     try{
//         const data = await User.findOneAndDelete({id: id});     

//         if (!data) {
//             return res.status(404).send()
//         }
//         res.status(200).send(data);
//     }catch(e) {
//         res.status(500).json({
//             "message": "user 삭제 실패"
//         })      
//     }
// });



/*------------------------------*/
// businessusers
/*------------------------------*/

// //GET
// app.get("/businessusers", async(req, res) => {  
//     try{
//         const data = await Businessuser.find({});     
//         res.status(200).send(data);
//     }catch(e) {
//         res.status(500).json({
//             "message": "조회 실패"
//         })      
//     }
// });

// // POST
// app.post("/businessusers", async(req, res) => {
    
//     const data = new Businessuser(req.body)
//     try {
//         await data.save()
//         res.status(204).send()
//     }catch(e) {
//         res.status(500).json({
//             message: "저장 실패"
//         })
//     }
// })


/*------------------------------*/
// markets
/*------------------------------*/

// const sampleMarkets = [
//     {
//         _id            : uuidv4(),
//         businessusersId: "iseoulu",
//         name           : "한강달빛야시장",
//         category       : "야시장",
//         place          : "반포",
//         //placeId: $카카오placeID,
//         coordinates: {
//             latitude : 37.5103503,
//             longitude: 126.9059344
//         },
//         startdate     : "2022-10-22",
//         enddate       : "2022-10-30",
//         //site: "http://www.bamdokkaebi.org/",
//         description   : "(구)밤도깨비야시장 으로 놀러오세요",
//         isPromotional : true,
//         needSupporters: true,
//         supportersForm: {
//             supportersCount: 20,
//             deadline       : "2022-10-03 18:00",
//             needCategory   : ["ALL"], //[“음식”, “의류”, “소품”, “수제”]
//             charge         : "30000",
//             description    : "셀러모집합니다!"
//         }
//     },
//     {
//         _id            : uuidv4(),
//         businessusersId: "ssg",
//         name           : "국민 플리마켓",
//         category       : "플리마켓",
//         place          : "뚝섬한강공원",
//         //placeId: $카카오placeID,
//         coordinates: {
//             latitude : 37.5292974433415,
//             longitude: 127.06892112991
//         },
//         startdate     : "2022-11-19",
//         enddate       : "2022-11-19",
//         site          : "",
//         description   : "ssg과 함께하는 플리마켓",
//         isPromotional : true,
//         needSupporters: false,
//         supportersForm: {
//         }
//     },
// ]
// // INITITIATE
// app.post("/markets-init", async(req, res) => {
//     const test = sampleMarkets[0]
//     console.log(test)
//     const data = new Market(test)
//     try {
//         await data.save()
//         res.status(204).send()
//     }catch(e) {
//         res.status(500).json({
//             message: "저장 실패"
//         })
//     }
// })

// //GET
// app.get("/markets", async(req, res) => {  
//     try{
//         const data = await Market.find({});     
//         res.status(200).send(data);
//     }catch(e) {
//         res.status(500).json({
//             "message": "조회 실패"
//         })      
//     }
// });

// // POST      *******오류******
// app.post("/markets", async(req, res) => {
    
//     const data = new Market({_id: uuidv4(), ...req.body})
//     try {
//         await data.save()
//         res.status(204).send()
//     }catch(e) {
//         res.status(500).json({
//             message: "저장 실패"
//         })
//     }
// })

// //GET (by id)
// app.get("/markets/:category", async(req, res) => {  
//     const id = req.params.category
//     try{
//         const data = await UsMarketer.find({ category: "" });      

//         if (!data) {
//             return res.status(404).send()
//         }
//         res.status(200).send(data);
//     }catch(e) {
//         res.status(500).json({
//             "message": "user 조회 실패"
//         })      
//     }
// });

/*------------------------------*/
// sellers
/*------------------------------*/

// //GET
// app.get("/sellers", async(req, res) => {  
//     try{
//         const data = await Seller.find({});     
//         res.status(200).send(data);
//     }catch(e) {
//         res.status(500).json({
//             "message": "조회 실패"
//         })      
//     }
// });

// // POST
// app.post("/sellers", async(req, res) => {
    
//     const data = new Seller({_id: uuidv4(), ...req.body})
//     try {
//         await data.save()
//         res.status(204).send()
//     }catch(e) {
//         res.status(500).json({
//             message: "저장 실패"
//         })
//     }
// })

//