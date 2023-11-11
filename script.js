let input = document.querySelector('input')
let btn = document.querySelector("button")
let images = document.querySelector(".images")

const api = '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'

window.onload = () => {
    input.focus()
}

const getImages = async () => {
    // Make a Request
    const methods = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api}`
        },
        body: JSON.stringify(
            {
                "prompt": input.value,
                "n": 3,
                "size": "1024x1024"
            }
        )
    }
    const res = await fetch('https://api.openai.com/v1/images/generations', methods)
    // Pasrsing the response as a json
    const data = await res.json()
    console.log(data);
    // Dealing with images
    const listImages = data.data
    images.innerHTML = ''
    listImages.map(image => {
        let container = document.createElement("div")
        images.appendChild (container)
        let img = document.createElement("img")
        container.appendChild(img)  
        img.src = image.url
        img.alt = input.value
    })
} 

btn.onclick = getImages




  