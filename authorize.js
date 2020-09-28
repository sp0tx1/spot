$( document ).ready(function() {
  console.log( "authorize.js ready!" );
  console.log('version 7');
  // *************** REPLACE THESE VALUES! *************************
  let client_id = '0e84c5db823e4272b080a0cecab13393';
  // Use the following site to convert your regular url to the encoded version: 
  // https://www.url-encode-decode.com/
  let redirect_uri = '';
  // *************** END *************************
  const redirect = `https://accounts.spotify.com/authorize?client_id=${client_id}&scope=user-read-playback-state%20user-read-playback-position%20user-read-email%20user-library-read%20user-top-read%20playlist-modify-public%20user-follow-read%20user-read-currently-playing%20user-read-recently-played%20user-read-private%20playlist-read-private%20user-library-modify%20playlist-read-collaborative%20playlist-modify-private%20user-follow-modify%20user-modify-playback-state&state=pk23cs&response_type=token&redirect_uri=${redirect_uri}`;
  console.log(`redirect url: ${redirect}`);

  window.location.replace(redirect);
});
