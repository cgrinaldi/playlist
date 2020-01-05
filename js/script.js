let mySongs = ['Song A', 'Song B', 'Song C'];
let myArtists = ['Artist A', 'Artist B', 'Artist C'];
let songLength = [50, 30, 20];
let songImgs = ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'];
let songLinks = ['http://www.google.com', 'http://www.cnn.com', 'http://www.abc.com'];

mySongs.forEach(function(song, i) {
    $("#songs").append(`<img src="${songImgs[i]}">`);
    $('#songs').append(`<p>${song}</p>`);
    $('#songs').append(`<p>${myArtists[i]}</p>`);
    $('#songs').append(`<p><a href="${songLinks[i]}">Listen</a></p>`);
    $('#songs').append('<hr>');
});
