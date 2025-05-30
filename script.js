const canvas = document.querySelector('.background');
const ctx = canvas.getContext('2d');
let W, H;

function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  }
  resize();
  window.addEventListener('resize', resize);

  const symbols = '#?&@!*$%+-=/<>^~|{}[]()'.split('');
  const charsCount = 150;
  const chars = [];

  class Char {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.size = 14 + Math.random() * 12;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.char = symbols[Math.floor(Math.random() * symbols.length)];
      this.opacity = 0.3 + Math.random() * 0.7;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0) this.x = W;
      if (this.x > W) this.x = 0;
      if (this.y < 0) this.y = H;
      if (this.y > H) this.y = 0;
    }
    draw(ctx) {
      ctx.fillStyle = `rgba(200, 200, 200, ${this.opacity})`;
      ctx.font = `${this.size}px monospace`;
      ctx.fillText(this.char, this.x, this.y);
    }
  }

  for (let i = 0; i < charsCount; i++) {
    chars.push(new Char());
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    chars.forEach(char => {
      char.update();
      char.draw(ctx);
    });
    requestAnimationFrame(animate);
  }
  animate();