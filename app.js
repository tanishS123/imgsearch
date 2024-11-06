const accesskey= "U60OTax4MvINqa2QHHTaMF6IZ3SRhYr4mPa1aDGtKwQ";
const formel=document.querySelector("form");
const inptelt=document.getElementById("search-input");
const searchrslt=document.querySelector(".search-results");
const showmore=document.getElementById("show-more");

let inputdata=" ";
let page=1;

async function searchimg(){
    inputdata=inptelt.value;
    const url=`https://api.unsplash.com/search/photos?page=${page} &query=${inputdata}&client_id=${accesskey}`;

    const response= await fetch(url);
    const data =await response.json();
    const results=data.results;

    if(page==1){
        searchrslt.innerHTML=" ";
    }
    results.map((result)=>{
          const imgwrapper=document.createElement('div');
          imgwrapper.classList.add("search-result");
          const image=document.createElement('img');
          image.src=result.urls.small;
          image.alt=result.alt_description;
          const imagelink=document.createElement("a");
          imagelink.href=result.links.html;
          imagelink.target="_blank";
          imagelink.textContent=result.alt.description;


imgwrapper.appendChild(image);
imgwrapper.appendChild(imagelink);
searchrslt.appendChild(imgwrapper);
});
page++;
if (page>1)
{
     showmore.style.display="block";
}
}
formel.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchimg();
});
showmore.addEventListener("click",()=>{
    
    searchimg();
});
