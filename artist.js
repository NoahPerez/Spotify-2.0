window.onload = () => {
    var artistId = new URLSearchParams(document.location.search).get("id");//getting id of url
    var headers = new Headers({
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "3828ca50bfmsha4ce9f70a342856p11c0cbjsn04641b49888f"
    });
    var param = {
        method: "GET",
        headers: headers
    };
    fetch("https://deezerdevs-deezer.p.rapidapi.com//artist/" + artistId, param)
        .then(resp => resp.json())
        .then(artist => {
           /*  showAlbum(album); */
           console.log(artist);
           let fluidDiv = document.querySelector(".container-fluid");
           console.log(fluidDiv);
           document.querySelector("#queenHeader").innerText = artist.name;
           let myBg = `background:linear-gradient(to bottom, rgba(0,0,0,0) 5%, rgba(0,0,0,1) 75%),  url("${artist.picture_xl}") fixed;`;
           fluidDiv.classList.add("mybackground");
           fluidDiv.setAttribute("style", myBg);
          /*  showArtist(artist); */
        })
        .catch(function (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
        });
}

/* const showArtist = (currentArtist) =>{
    var albumContainer = document.querySelector(".main-albums-container");
    var newSection = document.createElement("section");
    newSection.setAttribute("role", "album");
    newSection.innerHTML = `
         <div class="d-flex justify-content-between align-items-center">
         <h1 class=" header">Album</h1>
            <a class="d-block d-lg-none listTopItem" href="#">Show More</a>
         </div>
         <div class="row mt-3 mb-5" id="album">
     </div>`;
    albumContainer.appendChild(newSection);
    var currentRow = document.querySelector(".main-albums-container [role=album]").lastChild;
    for (let i = 15; i < songs.data.length; i++) {
      let title = songs.data[i].title_short; //song title
      let artist = songs.data[i].artist.name;//artist name
      let albumId = songs.data[i].album.id;//album Id
      let artistId = songs.data[i].artist.id //artist id
      let img = songs.data[i].album.cover_medium; //image
      let newSizeImg = img.replace("/250x250-000000-80-0-0.jpg", mySize);
      let col = document.createElement("div");
      currentRow.appendChild(col);
      col.outerHTML = `
       <div class="col-xs-12 col-sm-6 col-md-3 col-lg-2 col-xl-2 px-2 pb-4">
       <div class="media-obj text-center" style="max-width: 300px">
          <img class="image img-fluid"
              src=${newSizeImg}>
          <div class="middle">
              <img src="assets/playerButtons/Play.png" width="40px">
          </div>
        </div><!-- End of Media Obj -->
        <div class="text-center py-2">
        <a href="album.html?id=${albumId}" class="text-muted pt-1"><h5 class="album-label pt-1 mb-0">${title}</h5></a>
        <a href="artist.html?id=${artistId}" class="text-muted pt-1">${artist}<a>
         </div>
        </div><!-- End of col -->`;
} */