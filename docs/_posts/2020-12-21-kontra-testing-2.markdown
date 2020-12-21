
Added some super basic keyboard controls. Next post I'm hopeful to find a way to include separate .js files to clean up the code for these posts.

You can play using the keyboard arrow keys to move the block around.
<script src="https://cdn.jsdelivr.net/npm/kontra@7.1.2/kontra.min.js"></script>
<canvas></canvas>
<script>

let { init, Sprite, GameLoop, initKeys, keyPressed } = kontra;
console.log('hello')
let { canvas } = init();
initKeys();

canvas.style.background = "black";

let sprite = Sprite({
  x: 100,        // starting x,y position of the sprite
  y: 80,
  color: 'red',  // fill color of the sprite rectangle
  width: 20,     // width and height of the sprite rectangle
  height: 40,
  //dx: 2          // move the sprite 2px to the right every frame
});

let loop = GameLoop({  // create the main game loop
  update: function() { // update the game state
    sprite.update();

    if(keyPressed('left')){
      sprite.dx = -2;
    }
    else if(keyPressed('right')){
      sprite.dx = 2
    }
    else{
      sprite.dx = 0
    }

    if(keyPressed('up')){
      sprite.dy = -2
    }
    else if(keyPressed('down')){
      sprite.dy = 2
    }
    else{
      sprite.dy = 0
    }

  },
  render: function() { // render the game state
    sprite.render();
  }
});

loop.start();    // start the game

</script>