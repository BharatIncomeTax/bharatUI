export const interestTableInstrumentRequest = {
    "no_of_slices":1,
    "no_of_instruments":2,
    "slicing_periods" : 
    {
        "0":{
            "slice_start":"06/18/2022" ,
            "slice_end":"07/15/2022"
            }
    },  
    "instruments":
    {
        "0":{
                "compounding_period":2,
                "principal":40000,
                "interest_rate":0.0710,
                "start_date":"03/06/2022", 
                "end_date":"07/06/2023" ,
                "type":"KVP"
            },
        "1":{
            "compounding_period":1,
            "principal":20000,
            "interest_rate":0.0685,
            "start_date":"03/08/2022",
            "end_date":"03/08/2023",
            "type":"CDR"
        }
            
    }      
};

export const interestTableInstrumentResponse = {
    "Out": [
        {
            "InstrumentNo": 0,
            "SliceNo": 0,
            "StartDate": "06-18-2022",
            "EndDate": "07-06-2022",
            "Days": "18",
            "Rate": 7.6880089991,
            "Amount": 138.3841619838
        },
        {
            "InstrumentNo": 0,
            "SliceNo": 0,
            "StartDate": "07-06-2022",
            "EndDate": "07-15-2022",
            "Days": "9",
            "Rate": 7.4821864525,
            "Amount": 67.3396780725
        },
        {
            "InstrumentNo": 1,
            "SliceNo": 0,
            "StartDate": "06-18-2022",
            "EndDate": "07-08-2022",
            "Days": "20",
            "Rate": 3.7527055652,
            "Amount": 75.054111304
        },
        {
            "InstrumentNo": 1,
            "SliceNo": 0,
            "StartDate": "07-08-2022",
            "EndDate": "07-15-2022",
            "Days": "7",
            "Rate": 3.6517574957,
            "Amount": 25.5623024699
        }
    ],
    "RowCount": 4
}

export const interestSpecifiedPeriodRequest = [
    {
        "StartDate": "03-06-2023",
        "EndDate": "04-06-2023",
        "Days": "31",
        "Rate": 7.6282978894,
        "compounding_flag": "N",
        "principal": 40000,
        "notional_principal": 236.4772345715
    },
    {
        "StartDate": "04-06-2023",
        "EndDate": "05-06-2023",
        "Days": "30",
        "Rate": 7.9291757211,
        "compounding_flag": "N",
        "principal": 40000,
        "notional_principal": 237.8752716333
    },
    {
        "StartDate": "05-06-2023",
        "EndDate": "06-06-2023",
        "Days": "31",
        "Rate": 7.718760445,
        "compounding_flag": "N",
        "principal": 40000,
        "notional_principal": 239.2815737935
    },
    {
        "StartDate": "06-06-2023",
        "EndDate": "07-06-2023",
        "Days": "30",
        "Rate": 8.0232063305,
        "compounding_flag": "N",
        "principal": 40000,
        "notional_principal": 240.6961899149
    },
    {
        "StartDate": "07-06-2023",
        "EndDate": "08-06-2023",
        "Days": "31",
        "Rate": 7.810295779,
        "compounding_flag": "N",
        "principal": 40000,
        "notional_principal": 242.119169149
    },
    {
        "StartDate": "08-06-2023",
        "EndDate": "09-06-2023",
        "Days": "31",
        "Rate": 7.8564697077,
        "compounding_flag": "N",
        "principal": 40000,
        "notional_principal": 243.5505609379
    },
    {
        "StartDate": "09-06-2023",
        "EndDate": "10-06-2023",
        "Days": "30",
        "Rate": 8.1663471672,
        "compounding_flag": "Y",
        "principal": 41684.9904150161,
        "notional_principal": 244.9904150161
    },
    {
        "StartDate": "10-06-2023",
        "EndDate": "11-06-2023",
        "Days": "31",
        "Rate": 7.9496381101,
        "compounding_flag": "N",
        "principal": 41684.9904150161,
        "notional_principal": 246.4387814121
    },
    {
        "StartDate": "11-06-2023",
        "EndDate": "12-06-2023",
        "Days": "30",
        "Rate": 8.2631903483,
        "compounding_flag": "N",
        "principal": 41684.9904150161,
        "notional_principal": 247.8957104501
    },
    {
        "StartDate": "12-06-2023",
        "EndDate": "01-06-2024",
        "Days": "31",
        "Rate": 8.0439113791,
        "compounding_flag": "N",
        "principal": 41684.9904150161,
        "notional_principal": 249.3612527518
    },
    {
        "StartDate": "01-06-2024",
        "EndDate": "02-06-2024",
        "Days": "31",
        "Rate": 8.091466427,
        "compounding_flag": "N",
        "principal": 41684.9904150161,
        "notional_principal": 250.8354592383
    },
    {
        "StartDate": "02-06-2024",
        "EndDate": "03-06-2024",
        "Days": "29",
        "Rate": 8.7006338321,
        "compounding_flag": "N",
        "principal": 41684.9904150161,
        "notional_principal": 252.3183811316
    },
    {
        "StartDate": "03-06-2024",
        "EndDate": "04-06-2024",
        "Days": "31",
        "Rate": 8.1874216115,
        "compounding_flag": "Y",
        "principal": 43185.6500699567,
        "notional_principal": 253.8100699567
    },
    {
        "StartDate": "04-06-2024",
        "EndDate": "05-06-2024",
        "Days": "30",
        "Rate": 8.5103525848,
        "compounding_flag": "N",
        "principal": 43185.6500699567,
        "notional_principal": 255.3105775429
    },
    {
        "StartDate": "05-06-2024",
        "EndDate": "06-06-2024",
        "Days": "31",
        "Rate": 8.2845147105,
        "compounding_flag": "N",
        "principal": 43185.6500699567,
        "notional_principal": 256.8199560263
    },
    {
        "StartDate": "06-06-2024",
        "EndDate": "07-06-2024",
        "Days": "30",
        "Rate": 8.6112752617,
        "compounding_flag": "N",
        "principal": 43185.6500699567,
        "notional_principal": 258.3382578509
    }
];