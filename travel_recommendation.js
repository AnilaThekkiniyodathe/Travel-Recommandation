let contactList=[];
function searchRecommandations(){
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        if(input==="countries"){
            const countries = data.countries;
            recommandationCountryResult(countries);
        }
        if(input==="temples"){
            const temples = data.temples;
            recommandationResult(temples);
        }
        if(input==="beaches"){
            const beaches = data.beaches;
            recommandationResult(beaches);
        }
       
        function recommandationResult(keywords){
        keywords.forEach(function(keyword) {
          //resultDiv.style.backgroundColor = 'white';
          const name = keyword.name;
          const imageUrl = keyword.imageUrl;
          const description = keyword.description;
          resultDiv.innerHTML += `<img src="${imageUrl}" alt="hjh">
          <div style="background-color:white;margin-top: -23px;
          margin-bottom: 10px;"><h3 style="font-weight:500;margin-left:20px;margin-bottom:-10px">${name}</h3>         
          <p style="margin-left:20px;margin-bottom:-10px">${description}</p><br>
          <button style="margin-left:20px;margin-bottom:5px">Visit</button><br></div>`;
          })
        }
        function recommandationCountryResult(keywords){
            keywords.forEach(function(keyword) {
              //resultDiv.style.backgroundColor = 'white';
              let citilist=[];
              citilist=keyword.cities;
              console.log(citilist);
              citilist.forEach(function(city){
              const name = city.name;
              const imageUrl = city.imageUrl;
              const description = city.description;
              resultDiv.innerHTML += `<img src="${imageUrl}" alt="hjh">
              <div style="background-color:white;margin-top: -23px;
              margin-bottom: 10px;"><h3 style="font-weight:500;margin-left:20px;margin-bottom:-10px">${name}</h3>         
              <p style="margin-left:20px;margin-bottom:-10px">${description}</p><br>
              <button style="margin-left:20px;margin-bottom:5px">Visit</button><br></div>`;
              })  
            })
            }
        } )
      
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
function submitMessage() {
    const Name = document.getElementById('name').value;
    const emailID = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (Name && emailID && message) {
        const contact = {
            name: Name,
            email: emailID,
            Contactmessage: message
        };
        contactList.push(contact);
        alert("Thank you for contacting us")
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}
function clearInputs(){
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}
function clearRecommandations(){    
   // const input = document.getElementById('searchInput').value.toLowerCase();
    //input.innerHTML="";
    document.getElementById('result').innerHTML = '';
}
