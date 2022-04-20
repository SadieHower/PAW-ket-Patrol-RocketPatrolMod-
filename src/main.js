let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
  }
let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

//Sadie(Sarah) Hower
//PAW-ket Patrol
// Time taken to make the game: 6hrs T-T
// Time taken to make the mod: 10hrs :) 
// Point Breakdown:
// (5) Add copyright-free music
// (10) Create a new animated sprite for enemies [probably more like 5 because it was only the smaller faster one]
// (10) Implement parallax scrolling
// (20) Create a new enemy that is smaller, moves faster, and is worth more points
// (60) Redesign the game's artwork, UI, and sound to change the theme [it's dogs :)]
//  I'm realizing now that I miscounted and it's a little over 100...
//so idk what to do about that but sorry ^_^;