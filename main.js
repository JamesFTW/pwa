
 if(navigator.serviceWorker) {
   navigator.serviceWorker.register('sw.js').then().catch(console.error)

   function giphyCahceClean(giphys){
     navigator.serviceWorker.getRegistration('sw.js').then((reg) => {
       if(reg.active) reg.active.postMessage({action: 'cleanGiphyCahce', giphys: giphys})
     }).catch(err => console.log(err))
   }
 }



 // Giphy API object
 var giphy = {
   url: 'https://api.giphy.com/v1/gifs/trending',
   query: {
     api_key: '54452c59b31e4d14aca213ec76014baa',
     limit: 12
   }
 };

 // Update trending giphys
 function update() {
   // Toggle refresh state
  $('#update .icon').toggleClass('d-none');

   // Call Giphy API
   $.get( giphy.url, giphy.query)
       // Success
     .done( function (res) {
         // Empty Element
       $('#giphys').empty();
       var latestGiphys = []
       // Loop Giphys
       $.each( res.data, function (i, giphy) {
         latestGiphys.push(giphy.images.downsized_large.url)
      
           // Add Giphy HTML
         $('#giphys').prepend(
           '<div class="col-sm-6 col-md-4 col-lg-3 p-1">' +
             '<img class="w-100 img-fluid" src="' + giphy.images.downsized_large.url + '">' +
           '</div>'
           );
         });
         if(navigator.serviceWorker) giphyCahceClean(latestGiphys)
       })

     // Failure
     .fail(function() {
       $('.alert').slideDown();
       setTimeout( function() { $('.alert').slideUp() }, 2000);
     })

     // Complete
     .always(function() {
       // Re-Toggle refresh state
       $('#update .icon').toggleClass('d-none');
     });

   // Prevent submission if originates from click
   return false;
 }

 // Manual refresh
 $('#update a').click(update);

 // Update trending giphys on load
 update();
