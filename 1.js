fetch("https://api.openapi.com/v1/completions", {
    "method": "POST",
    "headers": {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            model: "text-davinci-003",
            prompt: "Once upon a time",
            max_tokens: 5
        })
})