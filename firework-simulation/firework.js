class Firework {
    constructor (location, w, h, color, density, longevity) {
      this.pos = location;
      this.startx = location[0];
      this.positions = [];
  
      this.width = location[0];
      this.height = location[1];
  
      this.vely = -2*sqrt(location[1]-h);
      this.velx = (w-location[0])/(-1*this.vely/2);
      
      this.life = 0;
      this.exploding = false;
      this.particles = [];
      this.color = color;
      this.density = density;
      this.longevity = longevity;
      this.explodingTime = 0;
    }
  
    done() {
      return this.explodingTime > this.longevity + 0.5;
    }
  
    update() {
      if (this.life < this.vely*-0.5) {
        this.pos[0] = this.velx*this.life+this.width;
        this.pos[1] = (this.life*this.life)+this.vely*(this.life)+this.height;
        this.life += deltaTime*0.01;
        this.positions.push([this.pos[0], this.pos[1]]);
      } else if (!this.exploding) {
  
        for (var i = 0; i < this.density; i++) {
          var angle = random(0, TWO_PI);
          var strength = random(0, 5);
            
          var lifespan = random(this.longevity - 0.5, this.longevity + 0.5);
          this.particles.push(new Particle([this.pos[0], this.pos[1]], [strength*sin(angle), strength*cos(angle)], lifespan, this.color));
        }
        this.exploding = true;
      } else{
        this.explodingTime += 0.01;
      }
    }
  
    show() {
      if (!this.exploding) {
        for (var i = 0; i < this.positions.length-1; i++) {
          stroke(this.color[0], this.color[1], this.color[2], i/this.positions.length*50);
          strokeWeight(6);
          line(this.positions[i][0], this.positions[i][1], this.positions[i+1][0], this.positions[i+1][1]);
        }
      } else {
        for (var i = 0; i < this.density; i++) {
          this.particles[i].update();
          this.particles[i].show();
        }
      }
      
      
    }
}