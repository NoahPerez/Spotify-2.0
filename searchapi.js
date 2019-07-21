
window.onload = () => {
  console.log("pagina caricata corr");
  getEminem();
  getMetallica();
  getBehemoth();


  document.querySelector("#home").addEventListener("click", backHome);

  document.querySelector('a[href="#search"]').addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector('#search').classList.add('open');
    document.querySelector('#search > form > input[type="search"]').focus();
  });


  ['click'].forEach(evt => document.querySelector('#search').addEventListener(evt, function (event) {
    if ((event.target.className == 'close') || event.keyCode == 27) {
      document.querySelector('#search').classList.remove('open');
    } else if (event.target.className == "btn btn-primary" || event.keyCode == 13) {
      event.preventDefault();
      document.querySelector('#search').classList.remove('open');
      genericSong(document.querySelector('#search > form > input[type="search"]').value);
    }
  })
  );/* end of foreach */

}


var searched = 0;
function backHome() {
   console.log(searched);
    var allSection = document.querySelectorAll(".main-albums-container section");
   
    allSection.forEach(sec => {
      sec.classList.remove("d-none");
    });
    if (searched > 0) {
     for(let i =1; i<= searched; i++){
      var lastSection = allSection[allSection.length - i];
      lastSection.parentNode.removeChild(lastSection);
     }
    
  }
  searched = 0;
}

const mySize = "/300x300-000000-80-0-0.jpg";
function getEminem() {
  var headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "575de39080mshf1f9cab8127c63fp1bcad8jsn113d9f3f814b"
  });
  var param = {
    method: "GET",
    headers: headers
  };
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem",
    param).then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (songs) {
      var albumContainer = document.querySelector(".main-albums-container");
      var newSection = document.createElement("section");
      newSection.setAttribute("role", "eminem");
      newSection.innerHTML = `
           <div class="d-flex justify-content-between align-items-center">
           <h1 class=" header">Eminem</h1>
              <a class="d-block d-lg-none listTopItem" href="#">Show More</a>
           </div>
           <div class="row mt-3 mb-5" id="eminem">
       </div>`;
      albumContainer.appendChild(newSection);
      var currentRow = document.querySelector(".main-albums-container [role=eminem]").lastChild;
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
      }
    })
    .catch(function (error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
}

function getMetallica() {
  var headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "575de39080mshf1f9cab8127c63fp1bcad8jsn113d9f3f814b"
  });
  var param = {
    method: "GET",
    headers: headers
  };
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica",
    param).then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (songs) {
      var albumContainer = document.querySelector(".main-albums-container");
      var newSection = document.createElement("section");
      newSection.setAttribute("role", "metallica");
      newSection.innerHTML = `
           <div class="d-flex justify-content-between align-items-center">
           <h1 class=" header">Metallica</h1>
              <a class="d-block d-lg-none listTopItem" href="#">Show More</a>
           </div>
           <div class="row mt-3 mb-5" id="metallica">
       </div>`;
      albumContainer.appendChild(newSection);
      var currentRow = document.querySelector(".main-albums-container [role=metallica]").lastChild;
      for (let i = 0; i < 10; i++) {
        let title = songs.data[i].title_short; //song title
        let img = songs.data[i].album.cover_medium; //image
        let albumId = songs.data[i].album.id;//album Id
        let artistId = songs.data[i].artist.id //artist id
        let artist = songs.data[i].artist.name;//artist name
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
        /*  } */
      }
    })
    .catch(function (error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
}





function getBehemoth() {
  var headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "575de39080mshf1f9cab8127c63fp1bcad8jsn113d9f3f814b"
  });
  var param = {
    method: "GET",
    headers: headers
  };
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=behemoth",
    param).then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (songs) {
      console.log(songs);
      var albumContainer = document.querySelector(".main-albums-container");
      var newSection = document.createElement("section");
      newSection.setAttribute("role", "behemoth");
      newSection.innerHTML = `
           <div class="d-flex justify-content-between align-items-center">
           <h1 class=" header">Behemoth</h1>
              <a class="d-block d-lg-none listTopItem" href="#">Show More</a>
           </div>
           <div class="row mt-3 mb-5" id="behemoth">
       </div>`;
      albumContainer.appendChild(newSection);
      var currentRow = document.querySelector(".main-albums-container [role=behemoth]").lastChild;
      for (let i = 2; i < 12; i++) {
        let title = songs.data[i].title_short; //song title
        let img = songs.data[i].album.cover_medium; //image
        let albumId = songs.data[i].album.id;//album Id
        let artistId = songs.data[i].artist.id //artist id
        let artist = songs.data[i].artist.name;//artist name
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
        /*  } */
      }
    })
    .catch(function (error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });

}


function genericSong(artist) {
  var headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "575de39080mshf1f9cab8127c63fp1bcad8jsn113d9f3f814b"
  });
  var param = {
    method: "GET",
    headers: headers
  };
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artist, param)
    .then(function (response) {
      if (response.ok) {
        searched += 1;
        return response.json();
      }
    })
    .then(function (songs) {
      var myHeadings = artist.toLowerCase();
      var myHeadingsCapitalized = myHeadings.charAt(0).toUpperCase() + myHeadings.slice(1);
      var albumContainer = document.querySelector(".main-albums-container");
      var newSection = document.createElement("section");
      newSection.setAttribute("role", myHeadings);
      newSection.innerHTML = `
           <div class="d-flex justify-content-between align-items-center">
           <h1 class=" header">${myHeadingsCapitalized}</h1>
              <a class="d-block d-lg-none listTopItem" href="#">Show More</a>
           </div>
           <div class="row mt-3 mb-5" id=${myHeadingsCapitalized}>
       </div>`;
      var allSection = document.querySelectorAll(".main-albums-container section");
      allSection.forEach(sec => {
        sec.classList.add("d-none");
      });
      albumContainer.appendChild(newSection);
      var currentRow = document.querySelector(".main-albums-container [role=" + myHeadings + "]").lastChild;
      for (let i = 0; i < songs.data.length; i++) {
        let title = songs.data[i].title_short; //song title
        let img = songs.data[i].album.cover_medium; //image
        let newSizeImg = img.replace("/250x250-000000-80-0-0.jpg", mySize);
        let col = document.createElement("div");
        currentRow.appendChild(col);
        col.outerHTML = `
         <div class="col-xs-12 col-sm-6 col-md-3 col-lg-2 col-xl-2 px-2">
         <div class="media-obj text-center" style="max-width: 300px">
            <img class="image img-fluid"
                src=${newSizeImg}>
            <div class="middle">
                <img src="assets/playerButtons/Play.png" width="40px">
            </div>
          </div><!-- End of Media Obj -->
          <div class="text-center py-2">
            <h5 class="album-label pt-1">${title}</h5>
           </div>
          </div><!-- End of col -->`;
        /*  } */
      }
    })
    .catch(function (error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });

} 