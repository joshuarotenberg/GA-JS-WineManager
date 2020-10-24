document.addEventListener("DOMContentLoaded", function() {

    var wineTemplateHtml = document.getElementById("wine-index-template").innerHTML;
    var wineTemplateFunction = Handlebars.compile(wineTemplateHtml);
  
    var wineCard = document.querySelector("#collection");

    // grab wines from API    
     axios
      .get("http://myapi-profstream.herokuapp.com/api/46dbf6/wines")
      .then(function(response){
          let data = response.data;
          for(wine of data) {
              var wineHtml = wineTemplateFunction({
                  id: wine.id,
                  name: wine.name,
                  year: wine.year,
                  grapes: wine.grapes,
                  country: wine.country,
                  region: wine.region,
                  description: wine.description,
                  price: wine.price,            
                  picture: wine.picture               
              });
  
              wineCard
              .innerHTML += wineHtml;  

              
          }
          
            // add random earthtone to card background
             
            randomHex = () => {
                var bg_hex = ["#D4CEF2","#AECCAD","#739973","#998373","#F2C29D",];
                return(bg_hex[Math.floor(Math.random() * bg_hex.length)]);
            }

            let getCards = document.getElementsByClassName("card")


            for (var i = 0; i < getCards.length; i++) {
                getCards[i].style.backgroundColor=`${randomHex()}`;
            }

      })
      .catch(function(err) {
          console.log(err);
      });

      // add new wine; updated api; update cards
      document
      .getElementById("add-wine")
      .addEventListener("submit", function(e){
          e.preventDefault();
  
          console.log("Form was submitted!");
            var name = document.getElementById("name").value
            var year = document.getElementById("year").value
            var grapes = document.getElementById("grapes").value
            var country = document.getElementById("country").value
            var region = document.getElementById("region").value
            var price = document.getElementById("price").value
            var picture = document.getElementById("picture").value
            var description = document.getElementById("description").value
  
          console.log(`name: ${name} year: ${year} grapes: ${grapes}  country: ${country} region: ${region} price: ${price} picture: ${picture}  description: ${description}`);
  
          axios
          .post("http://myapi-profstream.herokuapp.com/api/46dbf6/wines", {
              name,
              year,
              grapes,
              country,
              region,
              price,
              picture,
              description
          })
          .then(function(repsonse) {
              var newWine = repsonse.data
  
              document
              .getElementById("add-wine")
              .reset();
  
              // close modal with jquery
              $("#add-wine-modal").modal("hide");
  
              //add new user record to the table using handlebars
  
              wineCard
              .innerHTML += wineTemplateFunction({
                  name: newWine.name,
                  year: newWine.year,
                  grapes: newWine.grapes,
                  country: newWine.country,
                  region: newWine.region,
                  price: newWine.price,
                  picture: newWine.picture,
                  description: newWine.description
              });
  
          })
          .catch(function(err) {
              console.log(err);
          });
  
   
  
  });

  // Delete wine from api

  document
  wineCard
  .addEventListener("click", function(e){
      console.log(e.id)

        // axios
        // .delete("http://myapi-profstream.herokuapp.com/api/46dbf6/wines", {
        //     id
        //     })
        // .then(response => {
        //     console.log(response);
        // });
  
  });
});