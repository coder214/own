const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg;
var form;
var canvas;

let engine;
let world;

function preload() {
  bg = loadImage("garden.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  form = new Form();
}


function draw() {
  background(bg);
  Engine.update(engine);

  form.display();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

