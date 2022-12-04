import { Seller } from '../models/dataModel.js';
import {v4 as uuidv4} from 'uuid';

/*------------------------------*/
// sellers
/*------------------------------*/

//GET
const findAll = async(req, res) => {  
    try{
        const data = await Seller.find({});     
        res.status(200).send(data);
    }catch(e) {
        res.status(500).json({
            "message": "조회 실패"
        })      
    }
}

// POST
const create = async(req, res) => {
    
    const data = new Seller({_id: uuidv4(), ...req.body})
    try {
        await data.save()
        res.status(204).send()
    }catch(e) {
        res.status(500).json({
            message: "저장 실패"
        })
    }
}

//GET (by userId)
const findByUser = async(req, res) => {  
    const param = req.params.userId
    try{
        const data = await Seller.find({ userId: param });    
        const documents = { documents: data }  
        if (!data) {
            return res.status(404).send()  
        }
        res.status(200).send(documents);
    }catch(e) {
        res.status(500).json({
            "message": "조회 실패"
        })      
    }
}

//GET (by marketId)
const findByMarket = async(req, res) => {  
    const param = req.params.marketId
    try{
        const data = await Seller.find({ marketId: param });    
        const documents = { documents: data }  
        if (!data) {
            return res.status(404).send()  
        }
        res.status(200).send(documents);
    }catch(e) {
        res.status(500).json({
            "message": "조회 실패"
        })      
    }
}


// 내보내기
export {findAll, create, findByUser, findByMarket}