import {v4 as uuidv4} from 'uuid';

const sampleUsers = [   
    {
        "id": "heungmin7",
        "loginPw": "heungmin7zzang",
        "name": "손흥민",
        "tel": "010-1234-5678",
        "favorite": {
            "markets": [],
            "fivemarkets": [
                {
                    "name": "용궁시장",
                    "location" : { 
                        "type"       : "Point",
                        "coordinates": [36.607018, 128.275372]
                    }
                }
            ]
        }
    },
    {
        "id": "kangin18",
        "loginPw": "kangin18zzang",
        "name": "이강인",
        "tel": "010-9876-5432",
        "favorite": {
            "markets": [],
            "fivemarkets": []
        }
    },
    {
        "id": "minjae4",
        "loginPw": "minjae4zzang",
        "name": "김민재",
        "tel": "010-7777-7777",
        "favorite": {
            "markets": [],
            "fivemarkets": []
        }
    },
]


// {
//     "id": "hyunwoo",
//     "loginPw": "hyunwoozzang",
//     "name": "조현우",
//     "tel": "010-1111-1177",
//     "favorite": {
//         "markets": [],
//         "fivemarkets": []
//     }
// }



export { sampleUsers }