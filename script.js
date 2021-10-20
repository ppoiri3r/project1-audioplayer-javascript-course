$(document).ready(function() {
  // isSongPlaying
  // handle form submit/handle button on click 
  let whetherSongIsPlaying = false;
  const songList = $('.song'); 
  const songs = [];
  songList.each(function(song){
    const songPrototype = new Audio();
    songPrototype.src = songList[song].dataset.src;
    songs.push(songPrototype);
  });

// this determines behaviour of PLAY button (which also functions as a PAUSE button) //
  $('#play').on('click', function() {
    const activeSong = $('.active');
    const songSource = activeSong[0].dataset.src;
    let nowPlaying; 
    for (let i = 0; i < songs.length; i = i + 1) {
      // we need to check each song in the songs array:
      // if the source of that song equals songSource, return that song as nowPlaying
      const sourceWithoutDotSlash = songSource.slice(2);
      if (songs[i].src.includes(sourceWithoutDotSlash)) {
        nowPlaying = songs[i];
      }
    }
    if (whetherSongIsPlaying === false) {
      nowPlaying.play();
      whetherSongIsPlaying = true;
      $('.fa-pause').toggle();
      $('.fa-play').toggle();
    }
    else { 
      nowPlaying.pause();
      whetherSongIsPlaying = false;
      $('.fa-pause').toggle();
      $('.fa-play').toggle();
    }
  });

// this determines the behaviour of the STOP button //
  $('#stop').on('click', function() {
    const activeSong = $('.active');
    const songSource = activeSong[0].dataset.src;
    let nowPlaying; 
    for (let i = 0; i < songs.length; i = i + 1) {
      const sourceWithoutDotSlash = songSource.slice(2);
      if (songs[i].src.includes(sourceWithoutDotSlash)) {
        nowPlaying = songs[i];
      }
    }
    if (whetherSongIsPlaying === true) {
      nowPlaying.pause();
      nowPlaying.currentTime = 0;
      whetherSongIsPlaying = false;
      $('.fa-pause').toggle();
      $('.fa-play').toggle();
    }
  });
  
  $('#forward').on('click', function() {
    // on click, we want to skip to the next song in the array (getting to song 1). 
    let nowPlayingIndex;
    const activeSong = $('.active');
    let songSource = activeSong[0].dataset.src;
    let nowPlaying; 
    for (let i = 0; i < songList.length; i = i + 1) {
      if (songList[i].classList.contains('active')) {
        songList[i].classList.remove('active');
        nowPlaying = songs[i];
        nowPlaying.pause();
        nowPlayingIndex = i + 1;
      }
    }
    songList[nowPlayingIndex].classList.add('active');
    songSource = songList[nowPlayingIndex].dataset.src;
    let newCover = songList[nowPlayingIndex].dataset.cover;
    $('#coverArt').html(`<img src="${newCover}">`);
    let newArtistInfo = songList[nowPlayingIndex].dataset.artist;
    let newSongInfo = songList[nowPlayingIndex].dataset.song;
    $('#audio-info').html(`<p>${newArtistInfo}</p><p>${newSongInfo}</p>`);
    for (let i = 0; i < songs.length; i = i + 1) {
      const sourceWithoutDotSlash = songSource.slice(2);
      if (songs[i].src.includes(sourceWithoutDotSlash)) {
        nowPlaying = songs[i];
      }
    }
    if (whetherSongIsPlaying === true) {
      nowPlaying.play();
    }
  })

  $('#backward').on('click', function() {
    let nowPlayingIndex;
    const activeSong = $('.active');
    let songSource = activeSong[0].dataset.src;
    let nowPlaying; 
    for (let i = 0; i < songList.length; i = i + 1) {
      if (songList[i].classList.contains('active')) {
        songList[i].classList.remove('active');
        nowPlaying = songs[i];
        nowPlaying.pause();
        nowPlayingIndex = i - 1;
      }
    }
    songList[nowPlayingIndex].classList.add('active');
    songSource = songList[nowPlayingIndex].dataset.src;
    let newCover = songList[nowPlayingIndex].dataset.cover;
    $('#coverArt').html(`<img src="${newCover}">`);
    let newArtistInfo = songList[nowPlayingIndex].dataset.artist;
    let newSongInfo = songList[nowPlayingIndex].dataset.song;
    $('#audio-info').html(`<p>${newArtistInfo}</p><p>${newSongInfo}</p>`);
    for (let i = 0; i < songs.length; i = i + 1) {
      const sourceWithoutDotSlash = songSource.slice(2);
      if (songs[i].src.includes(sourceWithoutDotSlash)) {
        nowPlaying = songs[i];
      }
    }
    if (whetherSongIsPlaying === true) {
      nowPlaying.play();
    }
  })

  
});