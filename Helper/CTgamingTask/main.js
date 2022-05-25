const url = "https://ctgaming-interactive.com/samples/games.json";
const mainElement = document.querySelector("main");
async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data.games
}

async function generateGames() {

   let data = await getData(url);
   let sortedData = data.sort((a, b) => a.order - b.order)
   sortedData.forEach(x => {
       
    if(x.icon === null) {
        return;
    }
       const article = document.createElement("article");
       article.classList.add("article");
       mainElement.appendChild(article);

       if(x.bigIco == 1){
           article.classList.add("double");
       }
       
    const divImageWrapper = document.createElement("div");
    divImageWrapper.classList.add("articleImageWrapper");
    article.appendChild(divImageWrapper);
 
    const a = document.createElement("a");
    a.href = x.link;
    a.alt = x.name;
    a.classList.add("articleImg");
    divImageWrapper.appendChild(a);
 
    const img = document.createElement("img");
    img.classList.add("articleImg");
    img.src = x.icon;
    a.appendChild(img);
  
 
    const divMainContent = document.createElement("div");
    divMainContent.classList.add("mainContentWrapper");
    article.appendChild(divMainContent);

    divMainContent.innerHTML = `
    <h3 class="articleTitle">${x.name}</h3>
    <i class="fa-regular fa-star"></i>`

    const divButtons = document.createElement("div");
    divButtons.classList.add("buttons")
    divButtons.innerHTML = `
    <a href=${x.link}>Демо</a>
    <a href=${x.link}>Играй</a>`
    article.appendChild(divButtons);
   });

}
generateGames();





