
window.onload = () => {
    var albumId = new URLSearchParams(document.location.search).get("id");
    var headers = new Headers({
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "575de39080mshf1f9cab8127c63fp1bcad8jsn113d9f3f814b"
    });
    var param = {
        method: "GET",
        headers: headers
    };
    fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + albumId, param)
        .then(resp => resp.json())
        .then(album => {
            showAlbum(album);
        })
        .catch(function (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
        });
}



const showAlbum = (currentAlbum) => {
    var mainCont = document.querySelector(".main-albums-container");
    var divFluid = document.createElement("div");
    divFluid.classList.add("container-fluid");
    divFluid.innerHTML = `
    <div class="row">
    <div id="picture" class="col-xs-12 col-lg-3 col-xl-4">
    </div>
    <div class="col-xs-12 col-lg-9 col-xl-8">
           <ul class="list-unstyled w-100">
           </ul>
    </div> 
    </div> `;
    mainCont.appendChild(divFluid);
    currentAlbum.tracks.data.forEach(track => {
        let li = document.createElement("li");
        li.setAttribute("class", "w-100")
        li.innerHTML = `
       <div class="d-flex justify-content-between align-items-center">
       <div>
       <h5 class="text-white py-2">${track.title}</h5>
       </div>
       <div>
       <p class="text-muted">${track.duration} sec</p>
       </div>
       </div>
       `;
        divFluid.querySelector("ul").appendChild(li);

    });

    showPicture(currentAlbum);
}

const showPicture = (currentAlbum) => {
    console.log(currentAlbum);
     var pictureCont = document.querySelector("#picture");
    pictureCont.innerHTML = `
   <div class="text-center py-2">
        <img class="img-fluid mt-4" src="${currentAlbum.cover_big}">
                            <h4 class="myPictureTitle pt-3">${currentAlbum.title}</h3>
                            <p>${currentAlbum.artist.name}</p>
                    <button class="play">PLAY</button><br>
                         <div class="py-2 ">
                         <span class="text-muted font-weight-bold">${currentAlbum.release_date.substring(0, 4)} &centerdot; ${currentAlbum.nb_tracks} SONGS</span>
                         <div>
                         <div class="pt-5">
                         <span class="px-3"><i class="far fa-heart myIcon"></i></span> <span class="pr-3"> <i class="fas fa-ellipsis-h myIcon"></i></span>
                         <div>
    </div>`; 
}