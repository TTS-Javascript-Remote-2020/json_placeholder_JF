 //Get reference to the list element
 var list = $('#catPosts');
 // var listUser = $('ul#userLists');



 function getAllPosts() {
     return new Promise(function(resolve, reject) {
         //Make a GET request for the items to render
         $.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10', function(data) {

             //Iterate over the response, adding elements to DOM
             data.forEach(function(fact) {
                 var card = $('<div class=\"cat-card\"></div>');
                 var cardImage = $('<div class=\"cat-card-img\"><img src=\"https://cataas.com/cat/gif\"></div>');
                 var postUpdated = fact.updatedAt;

                 card.text(fact.text).append(cardImage).append("Updated: " + postUpdated);
                 list.append(card);



             })
         })

     })

 }
 /* 
  function getAllUsers() {
      return new Promise(function(resolve, reject) {
          $.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10', function(data) {
              //Iterate over the response, adding elements to DOM
              //Iterate over the response, adding elements to DOM
              data.forEach(function(fact) {
                  var items = $('<li></li>');
                  items.text(fact.user);
                  listUser.append(items);
              })
          })
      })
  } */

 // var usersPromise = getAllUsers();
 var postsPromise = getAllPosts();