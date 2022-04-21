class Particle {
    constructor (location, vel, lifespan, color) {
      this.pos = location;
      this.vel = vel;
      this.life = lifespan;
      this.lifespan = lifespan;
      this.color = color;
    }
  
    update() {
      this.pos[0] += this.vel[0];
      this.pos[1] += this.vel[1];
      this.vel[1] -= this.vel[1] * 0.05
      this.vel[0] -= this.vel[0] * 0.05;
      this.life -= deltaTime*0.001;
    }
  
    show() {
      stroke(this.color[0], this.color[1], this.color[2], this.life/this.lifespan*255);
      strokeWeight(4);
      point(round(this.pos[0]), round(this.pos[1]));
      
    }
}