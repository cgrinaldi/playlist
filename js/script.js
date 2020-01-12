let myTitles = ['Song A', 'Song B', 'Song C'];
let myArtists = ['Artist A', 'Artist B', 'Artist C'];
let songLength = [50, 30, 20];
let songImgs = ['https://via.placeholder.com/100', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'];
let songLinks = ['http://www.google.com', 'http://www.cnn.com', 'http://www.abc.com'];

function displaySongInfo() {
    songImgs.forEach(function(imageUrl) { 
        $('#imageList').append(`<img src="${imageUrl}">`)
    })
    myTitles.forEach(function(title) { 
        $('#titleList').append(`<p>${title}</p>`)
    })
    myArtists.forEach(function(artist) { 
        $('#artistList').append(`<p>${artist}</p>`)
    })
    songLinks.forEach(function(link) { 
        $('#linkList').append(`<a href="${link}">Listen</a>`)
    })
}

function emptySongInfo() { 
    $('#imageList').empty();
    $('#titleList').empty();
    $('#artistList').empty();
    $('#linkList').empty();
}

$('#add').click(function() {
    // get user input from input boxes
    let title = $('#title').val();
    let artist = $('#artist').val();
    let image = $('#image').val();
    let link = $('#link').val();

    // add to song arrays via .push()
    myTitles.push(title);
    myArtists.push(artist);
    songImgs.push(image);
    songLinks.push(link);

    emptySongInfo();
    displaySongInfo();
})

displaySongInfo();