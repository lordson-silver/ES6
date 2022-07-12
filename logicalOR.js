// Logical OR assignment ||

const song = {
  title: "", 
  album: "Love Damini", 
  artiste: "Burna Boy",
  duration: 186
};

song.duration ||= 160;
console.log(song.duration);
// Expected output 186

song.title ||= "Wild Dreams";
console.log(song.title);
// Expected output "Wild Dreams"

console.log(`${song.artiste} - ${song.album}`);
//song.artiste + " - " + song.album)

// The logical OR assignment (x ||= y) operator only assigns if x is falsy. 
