import {catsData} from "./data.js"


const memeForm = document.getElementById('meme-form')
const emotionSelect = document.getElementById('select')
const gifCheckbox = document.getElementById('gifs-input')
const memeModal = document.getElementById('meme-modal')
const memeModalInner = document.getElementById('meme-modal-inner')
const modalCloseBtn = document.getElementById('meme-modal-close-btn')


renderEmotions(catsData)


// event
emotionSelect.addEventListener('change', function(){

    if (emotionSelect.value){
        emotionSelect.style.backgroundColor='#565676'
    }
    else{
        emotionSelect.style.backgroundColor='#aeadf0'
    }
})

memeForm.addEventListener('submit', function(e){

    e.preventDefault()

    // get the value of the emotion selected
    const emotionSelected = document.querySelector('option:checked').value

    if (emotionSelected){

        // get the gif value
        const isGif = gifCheckbox.checked

        // get all the cats with this current emotions
        const catsArray = getCatsArray(catsData, emotionSelected, isGif)

        // get one random cat
        const catObject = getSingleCat(catsArray)

        // render cat
        renderCat(catsData, emotionSelected, isGif)
    }
})

modalCloseBtn.addEventListener('click', function(){
    closeModal()
})

window.addEventListener('click', function(e){

    if(!e.target.id.includes('meme-modal')){
        closeModal()
    }

})


function closeModal(){
    memeModal.style.display = "none"
}


// RENDER EMOTIONS SELECT
function getEmotions(data){

    const emotionsArr = []

    for (let cat of data){
        for (let emotion of cat.emotionTags){
            if (!emotionsArr.includes(emotion)){
                emotionsArr.push(emotion)
            }
        }
    }

    return emotionsArr
}

function renderEmotions(data){
    
    let selectDOM = emotionSelect.innerHTML

    const emotionsArr = getEmotions(data)

    for (let emotion of emotionsArr){
        selectDOM += `<option value="${emotion}">${emotion}</option>`
    }

    emotionSelect.innerHTML = selectDOM
}

// GET IMAGES MODAL
function getCatsArray(data, emotion, isGif){

    if (isGif){
        return data.filter(cat => cat.emotionTags.includes(emotion) && cat.isGif === isGif)
    }
    else{

        return data.filter(cat => cat.emotionTags.includes(emotion))
    }
}

function getSingleCat(data, emotion, isGif){

    // get the cats array according the emotion selected
    const catsArr = getCatsArray(data, emotion, isGif)

    // get a random number
    const randomNumber = Math.floor(Math.random() * catsArr.length)
    
    // get the cat in the array
    const catObject = catsArr[randomNumber]

    return catObject
}

function renderCat(data, emotion, isGif){

    // get single cat
    const catObject = getSingleCat(data, emotion, isGif)

    // render modal html
    memeModalInner.innerHTML = `<img id="meme-modal-img" class="meme-modal-img" src="images/${catObject.image}", alt="${catObject.alt}">`
    memeModal.style.display = "flex"
}





