
// Wrapper class around a Kontra game
class KontraGame {

    // Default Constructor
    constructor() {
        const { init, Sprite, GameLoop, initKeys, keyPressed } = kontra
        const { canvas } = init()
        
        initKeys();

        canvas.style.background = "black";

        let sprite = Sprite({
            x: 100,        // starting x,y position of the sprite
            y: 80,
            color: 'red',  // fill color of the sprite rectangle
            width: 20,     // width and height of the sprite rectangle
            height: 40,
        });

        // quirky thing with .js is you can reference this and it'll become
        // a class property that can be referenced later on.
        this.loop = GameLoop({  // create the main game loop
            update: function () { // update the game state
                sprite.update();

                if (keyPressed('left')) {
                    sprite.dx = -2;
                }
                else if (keyPressed('right')) {
                    sprite.dx = 2
                }
                else {
                    sprite.dx = 0
                }

                if (keyPressed('up')) {
                    sprite.dy = -2
                }
                else if (keyPressed('down')) {
                    sprite.dy = 2
                }
                else {
                    sprite.dy = 0
                }

            },
            render: function () { // render the game state
                sprite.render();
            }
        });
    }

    // Function to start the game
    start() {
        this.loop.start();
    }

}

// Now that we have a class setup for the game, using this syntax to handle the game constructor and starting.
const setup = () => {
    let k = new KontraGame();
    k.start();
}
setup();
