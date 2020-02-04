const button = document.querySelector("#search")
const breedInput = document.querySelector("#dogFinder")
const imageDiv = document.querySelector("#searchResults")
const modal =document.querySelector("#modal")
const exit = document.querySelector(".exit")

button.addEventListener('click', async function (){
// const apitest = await axios.get(`https://dog.ceo/api/breed/hound/images`)
// console.log (apitest)
searchResults.innerHTML = ""

const breed = breedInput.value
const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random/300`)
console.log(response)

const imageURL = response.data.message
// imageDiv.innerHTML = `<img src=${imageURL}>`

imageURL.forEach(function (dog) {
    imageDiv.innerHTML +=`<div id=${dog} class="doggyCrate"> <img class="doggyImg" src=${dog} /> </div>`
})
})

document.addEventListener("click", async function (e) {
    const element = e.target.parentElement
    if (element.className === "doggyCrate") {
      const dogId = element.id
      modal.style.display = "block"
      modal.innerHTML = `<img src=${dogId} /> <button class="exit">Exit</button>`
        modal.addEventListener("click", function () {
            modal.style.display = "none"
            })
      }
    })
