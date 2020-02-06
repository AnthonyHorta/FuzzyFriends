const button = document.querySelector("#search")
const breedInput = document.querySelector("#dogFinder")
const imageDiv = document.querySelector("#searchResults")
const modal =document.querySelector("#modal")
const modalContent =document.querySelector("#modalContent")
const modalImg = document.querySelector("#modalImg")
const exit = document.querySelector("#exit")

button.addEventListener('click', async function (){
// const apitest = await axios.get(`https://dog.ceo/api/breed/hound/images`)
// console.log (apitest)
searchResults.innerHTML = ""

const breed = breedInput.value.toLowerCase()
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
      let button = `<div class="${dogId}" id="save"> <button id="saveMe">Save</button> </div>`
      modal.style.display = "block"
      modalContent.innerHTML = `<img src=${dogId} />`
      modalClick.innerHTML = `${button}`
        modalContent.addEventListener("click", function () {
            modal.style.display = "none"
            })
      }
    })

document.addEventListener("click", async function (i) {
    const elementSave = i.target.parentElement
    if (elementSave.id === "save") {
      modalClick.innerHTML = `<p id="saveConfirmation"> You Saved Me! <3 </p>`
      const dogIdSave = elementSave.className
      localSaveImg = `<img src=${dogIdSave} />`
      localStorage.clear
      localStorage.setItem(`saved`,localSaveImg);
      }
    })

exit.addEventListener("click", function(){
   modal.style.display = "none"
})