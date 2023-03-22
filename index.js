let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((contests) => {
    console.log(contests)
    ihtml = ""
    for(item in contests){
        console.log(contests[item])
        ihtml +=
            `<div class="card" style="width: 18rem;">
                <div id=image></div>
                <img src="https://source.unsplash.com/1400x900/?coding" class="card-img-top" style="margin-top:5px;" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${contests[item].name}</h5>
                    <p class="card-text">${contests[item].status}</p>
                    <p class="card-text">${contests[item].in_24_hours}</p>
                    <p class="card-text">${contests[item].start_time}</p>
                    <p class="card-text">${contests[item].end_time}</p>
                    <a href="${contests[item].url}" class="btn btn-primary">Visit Contest</a>
                </div>
            </div>`  
    }
    cardContainer.innerHTML = ihtml
})


