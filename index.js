import {catsData} from "./data.js"


const emotionSelect = document.getElementById('select')
const gifCheckbox = document.getElementById('gifs-input')
const generateBtn = document.getElementById('generate-btn')
const memeModal = document.getElementById('meme-modal')
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

generateBtn.addEventListener('click', function(){

    // get the value of the emotion selected
    const emotionSelected = document.querySelector('option:checked').value

    // get the gif value
    const isGIF = document.getElementById('gifs-input').checked

    console.log(emotionSelected, isGIF)

    // get all the cats with this current emotions

    memeModal.style.display = "flex"
})

modalCloseBtn.addEventListener('click', function(){
    memeModal.style.display = "none"
})


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




