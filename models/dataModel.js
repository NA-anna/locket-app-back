import mongoose from "mongoose";
import validator from "validator";  // ex 이메일주소

/*------------------------------*/
// "users" 스키마 생성  
/*------------------------------*/
const UserSchema = new mongoose.Schema({
    id     : String,
    loginPw : String,
    name    : String,
    tel     : String,
    email   : String,
    favorites: { 
        fav_fleamarkets: [ 
            {
                market_id: String,
                location : {
                    type       : {type: String, default: "Point"},
                    coordinates: [Number]
                }
            } 
        ],
        fav_fivemarkets: [ 
            {
                market_name: String,
                location : {
                    type       : {type: String, default: "Point"},
                    coordinates: [Number]
                }
            } 
        ]
    }
})

const User = mongoose.model("users", UserSchema) 

/*------------------------------*/
// "businessusers" 스키마 생성
/*------------------------------*/
const BusinessuserSchema = new mongoose.Schema({
    id        : String,
    loginPw   : String,
    name      : String,
    businessNo: String,
    tel       : String,
})

const Businessuser = mongoose.model("businessusers", BusinessuserSchema) 


/*------------------------------*/
// "markets" 스키마 생성
/*------------------------------*/
const MarketSchema = new mongoose.Schema({
    _id            : String,
    businessusersId: String,
    name           : String,
    category       : String,
    place          : String,
    //placeId: $카카오placeID,
    location : {
        type       : {type: String, default: "Point"},
        coordinates: [Number]
    },
    startdate     : String,
    enddate       : String,
    site          : { type: String, validate(value){ 
                                        if(!validator.isURL(value)){
                                            throw new Error("URL is invalid")
                                        } 
                                    } 
                    },
    description   : String,
    isPromotional : Boolean,
    needSellers: Boolean,
    sellersForm: {
        sellersCount   : Number,
        deadline       : String,
        needCategory   : {
            type: [String],
            default: undefined, // default: () => { return null },
          },      //[“음식”, “의류”, “소품”, “수제”]
        charge         : String,
        description    : String
    }
})
MarketSchema.index({ location: "2dsphere" })

const Market = mongoose.model("markets", MarketSchema) 


/*------------------------------*/
// "sellers" 스키마 생성
/*------------------------------*/
const SellerSchema = new mongoose.Schema({
    _id        : String,
    userId     : String,
    marketId   : String,
    category   : String,
    subCategory: String,
    sns        : [String], 
    description: String,
    photo      : [String],
    state      : String,
})

const Seller = mongoose.model("sellers", SellerSchema) 



//내보내기
export { User, Businessuser, Market, Seller }
