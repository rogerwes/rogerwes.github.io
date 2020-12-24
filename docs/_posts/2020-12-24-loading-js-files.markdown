# Loading local .js files!

This simplifies coding in a blog as before I was jamming the functionality in a script tag within the markdown file. But now I can load up an external locally hosted .js file.

I accomplished this by creating a folder structure `assets\js` at the root level. And to reference it from this markdown file, the script tag looks like: `<script src="..\..\..\assets\js\demo.js"></script>`. 

You can play using the keyboard arrow keys to move the block around.

Happy Coding!

<script src="https://cdn.jsdelivr.net/npm/kontra@7.1.2/kontra.min.js"></script>
<canvas></canvas>

<script src="..\..\..\assets\js\demo.js"></script>