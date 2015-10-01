console.log('test')

//songs app

var songs = [];

var Song = function(title, artist, genre){
  this.title = title;
  this.artist = artist;
  this.genre = genre;
}

var wonderwall = new Song("wonderwal", "oasis", "popishthing");
var stairway = new Song("Stairway to Heaven", "Led Zeppelin", "rock");
var toxic = new Song("toxic", "Britney Spears", "pop");
songs.push(wonderwall, stairway, toxic);

//display songs
function displaySongs() {
  var elemString = "";
  for(var i=0; i< songs.length; i++ ) {
    //the next step:pass the song itself, and the index of the song to get the elemString
    elemString += getElemString(songs[i], i);
              // "<div class='well container'>"
              // + '<h3>' +songs[i].title+ '</h3>'
              // + '<p><i>' +songs[i].artist+ '</i></p><br/>'
              // + '<p><i>' +songs[i].genre+ '</i></p><br/>'
              // + '</div>'
  }
  document.getElementById('songs').innerHTML = elemString;
}

displaySongs();
// When someone click the submit button, or hits enter one of the inputs... run this function
document.getElementById('newSongForm').addEventListener("submit",
function(event){
  //do not refresh page
  event.preventDefault();

  //get the values from the inputs and store them in variables
  var title= document.getElementById('songTitle').value;
  var artist= document.getElementById('songArtist').value;
  var genre= document.getElementById('songGenre').value;

//Create the mySong object by calling the song constructor.
  var mySong= new Song(title, artist, genre);

  //add the created song into the array
  songs.push(mySong);
//Append the new song to the end of the list already on the index page
  document.getElementById("songs").innerHTML += getElemString(mySong, songs.length -1)
      // // before getElemString(mysong) we have this
      // // "<div class='well container'>"
      //           + '<h3>' +song.title+ '</h3>'
      // // this works too for the line above ^^^^
      //       //  + '<h3>' +songs[songs.length-1].title+ '</h3>'
      //           + '<p><i>' +song.artist+ '</i></p><br/>'
      //           + '<p><i>' +song.genre+ '</i></p><br/>'
      //           + '</div>';


  // Clear out the inputs
            document.getElementById('songTitle').value="";
            document.getElementById('songArtist').value="";
            document.getElementById('songGenre').value="";
});

//returns the elem string for us display
function getElemString(song, z) {
  //console.log(z);
  // var song = arguments[0];
  return "<div class='well container'>"
            + '<h3>' +song.title+ '</h3>'
  // this works too for the line above ^^^^
        //  + '<h3>' +songs[songs.length-1].title+ '</h3>'
            + '<p><i>' +song.artist+ '</i></p><br/>'
            + '<p><i>' +song.genre+ '</i></p><br/>'
            + '<div>'
                + '<button class="btn btn-primary" onclick="editSong(' +z+ ')">Edit Song</button>'
                + '<button class="btn btn-danger" onclick="deleteSong(' +z+ ')">Delete</button></div>'
            + '</div>'
          + '</div>';
}

function editSong(index) {
      // in JavaScript getElementById('editTitle').value = songs[index].title;
  $('#editTitle').val(songs[index].title);
  $('#editArtist').val(songs[index].artist);
  $('#editGenre').val(songs[index].genre);
      // in js document.getElementById('saveEditButton').innerHTML = 'button string'
  $('#saveEditButton').html ('<button onclick="saveChanges('+index+')" type="button" class="btn btn-primary">Save Changes</button>');
  $('#myModal').modal('toggle');
}

function saveChanges(index){
  // in JS var title = document.getElementById('editTitle').value;
  var title = $('#editTitle').val();
  var artist = $('#editArtist').val();
  var genre = $('#editGenre').val();

  // set the selected song equal to a New Song created from the input field values
  songs[index] = new Song(title, artist, genre);

  //clear all the inputs
  $('#editTitle').val('');
  $('#editArtist').val('');
  $('#editGenre').val('');

  $('#myModal').modal('toggle');
  displaySongs();
}
// a is the song index we want to delete(references z in getElemString())
 function deleteSong(a) {
   songs.splice(a, 1);
   displaySongs();
 }
// //Remove Post Original
// // function removePost(postIndex){
// //   posts.splice(postIndex, 1);
// //   showPosts();
// }
//
// // song version
// function removemySong(new SongIndex){
//   new Song.splice(new SongIndex, 1);
//   show new Song();
// }
//
// function editmySong(new SongIndex){
//   //This is going to be the chosen post we want to edit, we're saving that posts values into variables so that we can manipulate them later on.
//   var editTitle = posts[new SongIndex].title;
//   var editArtist = posts[new SongIndex].artist;
//   var editGenre = posts[new SongIndex].genre;
//
//
//   document.getElementById('songTitle').value = editTitle;
//   document.getElementById('songArtist').value = editArtist;
//   document.getElementById('songGenre').value = editGenre;
//
//   document.getElementById("editSong").value = newSongIndex;
//
//   var save = "<td><button onclick='savePost()'>Save Post</button></td>"
//
//   for (var i = 0; i < mySong.length; i++) {
//     document.getElementById("save"+i).innerHTML = save;
//   }
//
// }
//
// function savenewSong(){
//   var songTitle = document.getElementById("title").value;
//   var songArtist = document.getElementById("artist").value;
//   var songGenre = document.getElementById("genre").value;
//   var new SongIndex = document.getElementById("editPostId").value;
//
//   posts[postIndex].title = editTitle;
//   posts[postIndex].artist = editArtist;
//   posts[postIndex].genre = editGenre;
//
// });
