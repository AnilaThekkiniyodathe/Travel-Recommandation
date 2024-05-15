function searchRecommandations(){
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        if(input=="countries"){
            const countries = data.countries;
            recommandationResult(countries);
        }
        if(input=="temples"){
            const temples = data.temples;
            recommandationResult(temples);
        }
        if(input=="beaches"){
            const beaches = data.beaches;
            recommandationResult(beaches);
        }
       
        function recommandationResult(keywords){
        keywords.forEach(function(keyword) {
          const name = keyword.name;
          const imageUrl = keyword.imageUrl;
          const description = keyword.description;
          
          resultDiv.innerHTML += `<img src="${imageUrl}" alt="hjh">`;
          resultDiv.innerHTML += `<h4 style="font-weight:500">${name}</h4>`;          
          resultDiv.innerHTML += `<p>${description}</p>`;
          
          })
        }
        } )
      
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }


