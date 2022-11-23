import { User } from '../models/dataModel.js';
import { sampleUsers } from '../models/sampleUsers.js';

/*------------------------------*/
// users  tt
/*------------------------------*/

// INITITIATE
const init = async(req, res) => {
    
    try {
        await User.deleteMany({});
        await User.insertMany( sampleUsers )
        console.log(sampleUsers)
        res.status(204).send()
    }catch(e) {
        res.status(500).json({
            message: "저장 실패"
        })
    }
}

//GET
const findAll = async(req, res) => {  
    try{
        const data = await User.find({});     //몽구스 
        res.status(200).send(data);
    }catch(e) {
        res.status(500).json({
            "message": "user 조회 실패"
        })      
    }
}

// POST
const create = async(req, res) => {
    const data = new User(req.body)
    try {
        await data.save()
        res.status(204).send()
    }catch(e) {
        res.status(500).json({
            message: "user 저장 실패"
        })
    }
}

//GET (by id)
const findOne = async(req, res) => {  
    const id = req.params.id
    //const pw = req.params.pw
    try{
        const data = await User.findOne({id: id});      

        if (!data) {
            return res.status(404).send()
        }
        res.status(200).send(data);
    }catch(e) {
        res.status(500).json({
            "message": "user 조회 실패"
        })      
    }
}



// PUT (by id)   
const updateOne = async(req, res) => {  
    const id = req.params.id
    try{
        const data = await User.findOneAndUpdate({id: id}, req.body, {
            new: true,
            runValidators: true
        });     

        if (!data) {
            return res.status(404).send()
        }
        res.status(200).send(data);
    }catch(e) {
        res.status(500).json({
            "message": "user 변경 실패"
        })      
    }
}

// DELETE (by id)
const deleteOne = async(req, res) => {  
    const id = req.params.id
    try{
        const data = await User.findOneAndDelete({id: id});     

        if (!data) {
            return res.status(404).send()
        }
        res.status(200).send(data);
    }catch(e) {
        res.status(500).json({
            "message": "user 삭제 실패"
        })      
    }
}

// // PATCH (by id)  ...PUT 과 중복되서 주석처리
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


// 내보내기
export { init, findAll , create, findOne, updateOne, deleteOne } 