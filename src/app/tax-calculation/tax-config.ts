// let taxConfig = [{ 
//     "name": "John",    
//     "age": 25,   
//     "city": "New York",
//     "contact": 123123123,
//     "device": "Android",
//     "Amount": "anything"
//   }]
let taxConfig = [
    {
        name: "name",
        model: "name",
        required: true
    },
    {
        name: "age",
        model: "age",
        required: true
    },
    {
        name: "city",
        model: "city",
        required: true
    },
    {
        name: "contact",
        model: "contact",
        required: true
    },
    {
        name: "device",
        model: "device",
        required: false
    },
    {
        name: "amount",
        model: "amount",
        required: false
    }
]
export default taxConfig;