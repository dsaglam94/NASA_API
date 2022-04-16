// local storage
if( !localStorage.getItem('firstTime') ){
    localStorage.setItem('firstTime','yes');
}
// Variables
const date = document.querySelector('.date');
const title = document.querySelector('.title');
const copyRight = document.querySelector('.copyright');
const paraEl = document.querySelector('.para');
const iFrame = document.querySelector('iframe');
// Event listeners
document.getElementById('not_random').addEventListener('click', getImage);
document.getElementById('random').addEventListener('click', getRandomImage);

window.addEventListener('load', () => {
    if ( localStorage.getItem('firstTime') === 'yes'){
        firstFetchNasa();
    } else if ( localStorage.getItem('firstTime') === 'no') {
        loadLastImage();
    }
})

// Get the image by input date
function getImage () {
    localStorage.setItem('firstTime','no');
    document.querySelector('img').src = '';
    fetchNasa();
}
// Get the image by random date
function getRandomImage() {
    localStorage.setItem('firstTime','no');
    document.querySelector('img').src = '';
    fetchNasaRandom();
}

// random date function 
function randomDate() {
    let randomNum = Math.ceil(Math.random() * 27)
    let randomYear = (2022 - randomNum);
    let randomMonth = Math.ceil(Math.random() * 12)
    let randomDay = Math.ceil(Math.random() * 30)

    if ( randomYear === 1995 && randomMonth < 6) {
        return `${randomYear}-6-${randomDay}`
    }

    return `${randomYear}-${randomMonth}-${randomDay}`
}

// Get today's date
function getTodayDate() {
    let todayDate = new Date();
    let year = todayDate.getFullYear();
    let month = todayDate.getMonth() + 1;
    let day = todayDate.getDate();

    return `${year}-${month}-${day}`
}


// Fetch the API with random date
async function fetchNasaRandom () {

    let myYear = randomDate();

    let choice = document.querySelector('input').value;
    let url = `https://api.nasa.gov/planetary/apod?api_key=FUfd5cMwMefO5LuLhERSa5lF3RP7WDdnqFgAHxZo&date=${myYear}`

    const response = await fetch(url);
    const data = await response.json();

    if ( data.media_type === 'video') {
        iFrame.style.display = 'block';
        iFrame.src = data.url;

        document.querySelector('img').style.display = 'none';
    } else if ( data.media_type === 'image') {
        iFrame.style.display = 'none';
        
        document.querySelector('img').src = data.hdurl;
        document.querySelector('img').style.display = 'block';
    }

    date.textContent = data.date;
    title.textContent = data.title;
    copyRight.textContent = data.copyright;
    paraEl.textContent = data.explanation;

    localStorage.setItem('date', data.date)

    console.log(data)
}

// Fetch the API with input date
async function fetchNasa () {    
    let choice = document.querySelector('input').value;
    let url = `https://api.nasa.gov/planetary/apod?api_key=FUfd5cMwMefO5LuLhERSa5lF3RP7WDdnqFgAHxZo&date=${choice}`

    const response = await fetch(url);
    const data = await response.json();

    if (data.media_type === 'video') {
        iFrame.style.display = 'block';
        iFrame.src = data.url;

        document.querySelector('img').style.display = 'none';
    } else if ( data.media_type === 'image') {
        iFrame.style.display = 'none';
        
        document.querySelector('img').src = data.hdurl;
        document.querySelector('img').style.display = 'block';
    }

    date.textContent = data.date;
    title.textContent = data.title;
    copyRight.textContent = data.copyright;
    paraEl.textContent = data.explanation;

    localStorage.setItem('date', data.date)

    console.log(data)
}

// Fetch the API for today's image for the first time
async function firstFetchNasa () {    
    let todayDate = getTodayDate();

    let url = `https://api.nasa.gov/planetary/apod?api_key=FUfd5cMwMefO5LuLhERSa5lF3RP7WDdnqFgAHxZo&date=${todayDate}`

    const response = await fetch(url);
    const data = await response.json();

    document.querySelector('img').src = data.hdurl;
    date.textContent = data.date;
    title.textContent = data.title;
    copyRight.textContent = data.copyright;
    paraEl.textContent = data.explanation;

    console.log(data)
}
// If not first time show the last image that user looked
async function loadLastImage () {    

    let url = `https://api.nasa.gov/planetary/apod?api_key=FUfd5cMwMefO5LuLhERSa5lF3RP7WDdnqFgAHxZo&date=${localStorage.getItem('date')}`

    const response = await fetch(url);
    const data = await response.json();

    document.querySelector('img').src = data.hdurl;
    date.textContent = data.date;
    title.textContent = data.title;
    copyRight.textContent = data.copyright;
    paraEl.textContent = data.explanation;

    console.log(data)
}


    