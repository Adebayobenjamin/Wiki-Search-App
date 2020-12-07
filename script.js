var form = document.getElementById('form');
form.addEventListener('submit', searchWiki);
var wikiApiUrl = "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=30&srsearch=%27";

async function searchWiki(e){
    // prevent reload
    e.preventDefault();

    var searchInput = document.getElementById('search-input').value;

    //if empty return false
  if(searchInput.trim() == '' ){
      alert("please search for something");
      return false;
  }
  else{
    var container = document.querySelector('.container');

    container.style.marginTop = '0';

    var result = document.getElementById('result');
    
    // remove former result
    result.innerHTML = `<hr>`;

    var url = wikiApiUrl + searchInput;

    var response = await fetch(url);
    var data = await response.json();

    dataQuery = data.query.search;
    for(i=0; i<= 5 ; i++){
        result.innerHTML += `
              <div class="result-div">
              <h2>${dataQuery[i].title}</h2>
              <p>${dataQuery[i].snippet}</p>
              <a href="https://en.wikipedia.org/wiki/${dataQuery[i].title}" target="_blank">Read More</a>
              </div>
            
        `
        console.log(dataQuery[i]);
    }
   
   
  
  }
}