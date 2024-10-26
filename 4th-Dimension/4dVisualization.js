// Setup canvas
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        let t = 0;  // Time represents the 4th dimension in our visualization

        // Equation parameters for line (y = mx + c)
        const m = 0.5;  // Slope of the line
        const c = 50;   // Y-intercept of the line

        // Draw grid for better visualization
        function drawGrid() {
            ctx.strokeStyle = '#ddd';
            ctx.lineWidth = 1;
            
            // Draw vertical grid lines
            for (let i = 0; i <= canvas.width; i += 50) {
                ctx.beginPath();
                ctx.moveTo(i, 0);
                ctx.lineTo(i, canvas.height);
                ctx.stroke();
            }
            
            // Draw horizontal grid lines
            for (let i = 0; i <= canvas.height; i += 50) {
                ctx.beginPath();
                ctx.moveTo(0, i);
                ctx.lineTo(canvas.width, i);
                ctx.stroke();
            }
        }

        // Draw y = mx + c line (3D space representation)
        function drawLine() {
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 2;
            
            ctx.beginPath();
            ctx.moveTo(0, c);  // Starting point (x=0, y=c)
            const xEnd = canvas.width;
            const yEnd = m * xEnd + c;
            ctx.lineTo(xEnd, yEnd);  // Line end point
            ctx.stroke();
        }

        // Draw function to create a moving point
        function drawPoint() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas

            // Draw grid and line
            drawGrid();
            drawLine();

            // Labels for 3D and 4D explanations
            ctx.fillStyle = "white";
            ctx.font = "14px Arial";
            ctx.fillText("3D Space (X-Y Coordinates)", 20, 20);
            ctx.fillText("4th Dimension: Time (Point Movement)", 20, 40);

            // Calculate position based on time (4th dimension)
            const x = 300 + Math.sin(t) * 100;  // X position (3D space) varies with time
            const y = 200 + Math.cos(t) * 50;   // Y position (3D space) varies with time

            // Draw a point representing an object in 3D moving through the 4th dimension (time)
            ctx.fillStyle = "blue";
            ctx.beginPath();
            ctx.arc(x, y, 10, 0, Math.PI * 2, true); // Draw a circle
            ctx.fill();

            // Update time to animate movement over 4th dimension
            t += 0.05;

            // Continuously call the draw function to animate the movement
            requestAnimationFrame(drawPoint);
        }

        // Start the animation
        drawPoint();