import { Market } from '../models/dataModel.js';
import { sampleMarkets } from '../models/sampleMarkets.js';
import {v4 as uuidv4} from 'uuid';

/*------------------------------*/
// markets
/*------------------------------*/

// INITITIATE
const init = async(req, res) => {
    
    try {
        await Market.deleteMany({});
        await Market.insertMany( sampleMarkets )
        console.log(sampleMarkets)
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
        const data = await Market.find({});     
        const documents = { documents: data }
        res.status(200).send(documents);
    }catch(e) {
        res.status(500).json({
            "message": "조회 실패"
        })      
    }
}

// POST      *******오류******
const create = async(req, res) => {
    
    //const data = new Market({_id: uuidv4(), ...req.body})
    try {
        await Market.create({_id: uuidv4(), ...req.body})
        //await data.save()
        res.status(204).send()
    }catch(e) {
        res.status(500).json({
            message: "저장 실패"
        })
    }
}

//GET (by category)
const findSome = async(req, res) => {  
    const param = req.params.category
    try{
        const data = await Market.find({ category: param});      
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


// 내보내기
export { init, findAll, create, findSome }