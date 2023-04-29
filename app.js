// TODO: read from env
const API_KEY = "YOUR_API_KEY"

async function fetchData(){
    const response = await fetch("https://api.openapi.com/v1/completions", {
        "method": "POST",
        "headers": {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            model: "text-davinci-003",
            prompt: "Once upon a time",
            max_tokens: 5,
            temperature: 0.9
            // use this or top_p, not both
            // top_p: 0.1,
        })
    })
    const data = await response.json()
    console.log(data)
}


fetchData()