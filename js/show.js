document.addEventListener("DOMContentLoaded", function() {

    var wineShowTemplateHtml = document.getElementById("wine-index-template").innerHTML;
    var wineShowTemplateFunction = Handlebars.compile(wineShowTemplateHtml);
  
    var wineShowCard = document.querySelector("#collection");
 

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
  
              wineShowCard
              .innerHTML += wineShowTemplateFunction({
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

      

      

        
  
  });
