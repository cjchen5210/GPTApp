async function sendToGPT(history, url) {
    console.log("request body", history);
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(history)
    });
    const data = await response.json();
    console.log("response from openai", data);
    return data;
}


async function getConversation(url) {
    const response = await fetch(url, {
        method: "GET",
        header: {
            "Content-type": "application/jsson"
        }
    });
    const data = await response.json();
    return data;
}

async function clearConversation(url) {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-type": "application/jsson"
        }
    });
    return response;
}

export { sendToGPT, getConversation, clearConversation };