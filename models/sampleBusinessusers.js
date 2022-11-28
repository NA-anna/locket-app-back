import {v4 as uuidv4} from 'uuid';

const sampleBusinessusers = [   
    {
        "id": "heungmin7",
        "loginPw": "heungmin7zzang",
        "name": "손흥민",
        "profile" : "",
        "tel": "010-1234-5678",
        "email": "heungmin7@korea.com",
        "favorite": {
            "fav_fleamarkets": [],
            "fav_fivemarkets": [
                {
                    "market_name": "용궁시장",
                    "location"   : { "type"       : "Point", 
                                     "coordinates": [ 36.607018, 128.275372 ]
                    }
                },
            ]
        }
    },
    {
        "id": "kangin18",
        "loginPw": "kangin18zzang",
        "name": "이강인",
        "profile" : "",
        "tel": "010-9876-5432",
        "email": "kangin18@korea.com",
        "favorite": {
            "fav_fleamarkets": [],
            "fav_fivemarkets": []
        }
    },
    {
        "id": "minjae4",
        "loginPw": "minjae4zzang",
        "name": "김민재",
        "profile" : "",
        "tel": "010-7777-7777",
        "email": "minjae4@korea.com",
        "favorite": {
            "fav_fleamarkets": [],
            "fav_fivemarkets": []
        }
    },
]


// {
//     "id": "hyunwoo",
//     "loginPw": "hyunwoozzang",
//     "name": "조현우",
//     "profile" : "",
//     "tel": "010-1111-1177",
//     "email": "hyunwoo@korea.com",
//     "favorite": {
//         "fav_fleamarkets": [],
//         "fav_fivemarkets": []
//     }
// }



export { sampleUsers }