var playlist = new Object({artistName: songTitle});
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  Object.assign({}, playlist, {artistName: ['My Bloody Valentine', 'Phil Ochs', 'Slowdive'] })
  return Object.assign({}, playlist, { [artistName]: songTitle});
  
}
function removeFromPlaylist(playlist, artistName) {
  console.log(playlist.slice(2));
  return playlist;
}