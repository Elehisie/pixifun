//Create the renderer
var renderer = PIXI.autoDetectRenderer(256, 256);

//Add the canvas to the HTML document
document.body.appendChild(renderer.view);

//Create a container object called the `stage`
var stage = new PIXI.Container();

//styling
renderer.backgroundColor = 0x550055;
renderer.autoResize = true;
renderer.resize(window.innerWidth, window.innerHeight);

//Aliases
var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    TextureCache = PIXI.utils.TextureCache,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

loader
  .add("images/sprites/cat/Idle-1.png")
  .load(setup);

function setup() {
  var cat = new Sprite(resources["images/sprites/cat/Idle-1.png"].texture);
  cat.scale.set(0.5,0.5);
  cat.x = renderer.view.width/2 - (cat.width/2);
  cat.y = renderer.view.height - (cat.height);
  stage.addChild(cat); //Add the cat to the stage
  renderer.render(stage); //Render the stage
}

//Tell the `renderer` to `render` the `stage`
renderer.render(stage);