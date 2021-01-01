var u;
var count;
var mods = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  u = 50;
  widthExtra = ((int(windowWidth/u))*u)+u;
  count = int(widthExtra/u);
  var index = 0;
  for (var xc = 0; xc < count*2; xc++) {
      mods[index++] = new Module((int(xc)*u),0);
   }
 
}

function draw() {
  noStroke();
  background(0);
  for (var i = 0; i <= count; i++) {
    mods[i].draw();
  }
}

function mousePressed() {
  for (var i = 0; i <= count; i++) {
    mods[i].Pressed();
  }
}

function Module(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.j = 0;
  this.k = 1;
  this.forward = true;
}

Module.prototype.draw = function() {
  push();
  translate(this.x, this.y);
  noStroke();
  fill(random(255),random(255),random(255));
  quad(this.j,0,this.j+25,0,this.j+25,height,this.j,height);
  this.x = this.x + this.k;
  if(this.x > widthExtra){
    this.x = -u;
  }
  if(this.x < -u){
    this.x = widthExtra;
  }
  pop();
}

Module.prototype.Pressed = function() {
    if (this.forward === true){
      this.k = this.k*-1;
      this.forward = false;
      } else {
      this.k = this.k*-1;
      this.forward = true;
      }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}