const apiURL="https://www.breakingbadapi.com/api/quote/random?series=Breaking+Bad";
const imgURL="https://www.breakingbadapi.com/api/characters?name=";
const newQuote=document.getElementById('newQuote');
const bigImage=document.getElementById('heroImage');
const quote=document.getElementById('quote');

async function getTheOffice() {
    let response=await fetch(apiURL);
    let data=await response.json();
    console.log(data);
    quote.innerText=`"${data[0].quote}"
    
    - ${data[0].author}`;
    
    let quoteName = `${data[0].author}`.split(" ");
    bigImageURL = `${imgURL}${quoteName[0]}+${quoteName[1]}`;        

    let imgResponse = await fetch(bigImageURL);
    let imgData = await imgResponse.json();
    console.log(imgData);

    if (imgData.length===0) {
        bigImage.src='assets/bbHeroLogo.jpg';
    } else {
    bigImage.src=`${imgData[0].img}`}}

newQuote.addEventListener("click", getTheOffice);