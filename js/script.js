// let myTitles = ['Song A', 'Song B', 'Song C'];
// let myArtists = ['Artist A', 'Artist B', 'Artist C'];
// let songLength = [50, 30, 20];
// let songImgs = ['https://via.placeholder.com/100', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'];
// let songLinks = ['http://www.google.com', 'http://www.cnn.com', 'http://www.abc.com'];

let songs = [
    {
        title: 'Song A',
        artist: 'Artist A',
        length: 50,
        image: 'https://via.placeholder.com/150',
        link: 'http://www.google.com'
    },
    {
        title: 'Song B',
        artist: 'Artist B',
        length: 100,
        image: 'https://via.placeholder.com/150',
        link: 'http://www.google.com'
    },
    {
        title: 'Song C',
        artist: 'Artist C',
        length: 150,
        image: 'https://via.placeholder.com/150',
        link: 'http://www.google.com'
    },
]

function displaySongInfo() {
    // songImgs.forEach(function(imageUrl) { 
    //     $('#imageList').append(`<img src="${imageUrl}">`)
    // })
    // myTitles.forEach(function(title) { 
    //     $('#titleList').append(`<p>${title}</p>`)
    // })
    // myArtists.forEach(function(artist) { 
    //     $('#artistList').append(`<p>${artist}</p>`)
    // })
    // songLinks.forEach(function(link) { 
    //     $('#linkList').append(`<a href="${link}">Listen</a>`)
    // })
    songs.forEach(function(song) { 
        $('#imageList').append(`<img src="${song.image}">`)
        $('#titleList').append(`<p>${song.title}</p>`)
        $('#artistList').append(`<p>${song.artist}</p>`)
        $('#linkList').append(`<a href="${song.link}">Listen</a>`)
        
    })
}

function emptySongInfo() { 
    $('#imageList').empty();
    $('#titleList').empty();
    $('#artistList').empty();
    $('#linkList').empty();
}

function getUserInput() {
    let title = $('#title').val();
    let artist = $('#artist').val();
    let image = $('#image').val();
    let link = $('#link').val();

    return [title, artist, image, link]
}

function clearUserInput() {
    $('#title').val('');
    $('#artist').val('');
    $('#image').val('');
    $('#link').val('');
}

function saveUserInput(userInput) {
    let [title, artist, image, link] = userInput
    // myTitles.push(title);
    // myArtists.push(artist);
    // songImgs.push(image);
    // songLinks.push(link);
    songs.push({ title, artist, image, link })
}


$('#add').click(function() {
    userInput = getUserInput();
    saveUserInput(userInput);
    clearUserInput();
    emptySongInfo();
    displaySongInfo();
})

displaySongInfo();