import {v4 as uuidv4} from 'uuid';

const sampleMarkets = [
    {
        "_id"            : uuidv4(),
        "businessusersId": "iseoulu",
        "name"           : "한강달빛야시장",
        "category"       : "ct002", //야시장
        "place"          : "반포",
        "location": { "type"       : "Point", 
                      "coordinates": [ 37.5103503, 126.9059344 ]
        },
        "startdate"     : "2022-10-22",
        "enddate"       : "2022-10-30",
        //"site"          : "http://www.bamdokkaebi.org/",
        "description"   : "(구)밤도깨비야시장 으로 놀러오세요",
        "isPromotional" : true,
        "needSellers"   : true,
        "sellersForm"   : {
            "sellersCount": 20,
            "deadline"       : "2022-10-03 18:00",
            "needCategory"   : ["ALL"], //[“음식”, “의류”, “소품”, “수제”]
            "charge"         : "30000",
            "description"    : "셀러모집합니다!"
        }
    },
    {
    "_id"            : uuidv4(),
    "businessusersId": "iseoulu",
    "name"           : "한강달빛야시장",
    "category"       : "ct002", //야시장
    "place"          : "여의도",
    "location": { "type"       : "Point", 
                  "coordinates": [ 37.5103513, 126.9059344 ]
    },
    "startdate"     : "2022-12-01",
    "enddate"       : "2022-12-31",
    //"site"          : "", //"http://www.bamdokkaebi.org/",
    "description"   : "기간 중 매주 토, 일 (구)밤도깨비야시장 으로 놀러오세요",
    "isPromotional" : true,
    "needSellers"   : true,
    "sellersForm"   : {
        "sellersCount": 20,
        "deadline"       : "2022-11-30 18:00",
        "needCategory"   : ["음식", "소품", "수제"],
        "charge"         : "30000",
        "description"    : "셀러모집합니다!"    
        }
    },
    {
        "_id"            : uuidv4(),
        "businessusersId": "ssg",
        "name"           : "국민 플리마켓",
        "category"       : "ct001", //"플리마켓"
        "place"          : "뚝섬한강공원",
        "location": { "type"       : "Point", 
                      "coordinates": [ 37.5292974433415, 127.06892112991 ]
        },
        "startdate"     : "2022-12-01",
        "enddate"       : "2022-12-31",
        //"site"          : "",
        "description"   : "ssg과 함께하는 플리마켓",
        "isPromotional" : true,
        "needSellers": false,
    },
]

// POST 테스트 시 아래 JSON 데이터만 복사해서 쓰시오.
const sampleMarketsForPost = [
    {
        "businessusersId": "starkindustry",
        "name": "스타크플리마켓",
        "category": "ct001", //"플리마켓"
        "place": "반포",
        "location": { "type": "Point", 
                    "coordinates": [ 37.5103503, 126.9059344 ]
        },
        "startdate": "2022-10-22",
        "enddate": "2022-10-30",
        //"site"          : "",
        "description": "아이언맨 특별방문",
        "isPromotional": true,
        "needSellers": true,
        "sellersForm": {
            "sellersCount": 20,
            "deadline": "2022-10-03 18:00",
            "needCategory": ["음식", "의류", "소품", "수제"],
            "charge": 30000,
            "description": "셀러모집합니다!"
        }
    }
]

export { sampleMarkets }  