function createBackground() {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
  
    const ctx = canvas.getContext('2d');
    const stars = [];
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    // Function to generate a random number within a range
    function random(min, max) {
      return Math.random() * (max - min) + min;
    }
  
    // Function to create a star
    function createStar() {
      return {
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        radius: random(1, 3),
        speed: random(1, 3),
      };
    }
  
    // Populate stars array with initial stars
    for (let i = 0; i < 100; i++) {
      stars.push(createStar());
    }
  
    function animate() {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // Draw stars
      ctx.fillStyle = 'white';
      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
  
        // Update star position
        star.y += star.speed;
  
        // Reset star if it goes below the screen
        if (star.y > canvas.height + star.radius) {
          star.y = 0;
          star.x = random(0, canvas.width);
        }
      }
  
      // Repeat the animation
      requestAnimationFrame(animate);
    }
  
    animate();
  }
  
  window.onload = createBackground;
  