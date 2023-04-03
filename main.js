const btn = document.getElementById('btn1');
btn.addEventListener('click', randomPhrase)

const nameBox = document.getElementById('nameInput');

const compliment = document.getElementById('compliment')


const randomBodyParts = ['face', 'eyes', 'smile', 'hair'];
const randomAdjectives = ['flowing', 'radiant', 'bewildering', 'smothering', 'giant']
const randomWords = ["tower", "flower", "tree", "shadow", "forest"]

function pickRandomWord(words) {
    return words[Math.floor(Math.random() * words.length)];
}

function randomPhrase () {

    let name = nameBox.value; 
    console.log(name)

    const phrase = `${name}, your ${pickRandomWord(randomBodyParts)} is like a ${pickRandomWord(randomAdjectives)} ${pickRandomWord(randomWords)}!`
    // console.log(phrase);



    compliment.innerText = `${phrase}`;
    nameBox.value=''

}




