<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4th Dimension Time Dilation</title>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@400&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Josefin Slab', serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }
        h1 {
            margin-bottom: 20px;
        }
        input, button {
            margin: 5px;
        }
        .result {
            margin-top: 20px;
            border: 1px solid #ccc;
            padding: 10px;
            width: 300px;
            text-align: left;
        }
    </style>
</head>
<body>
    <h1>4th Dimension Time Dilation Simulation</h1>
    <form method="POST">
        <label for="years">Travel Duration (Earth years):</label><br>
        <input type="number" name="years" id="years" required><br>
        <label for="speed">Travel Speed (% of Speed of Light):</label><br>
        <input type="number" name="speed" id="speed" required><br>
        <button type="submit">Calculate</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get user input
        $years = $_POST['years'];
        $speedPercent = $_POST['speed'];

        // Constants
        $speedOfLight = 1; // Speed of light is considered 1 in this case for simplicity
        $velocity = $speedPercent / 100; // Convert speed percentage to a fraction of light speed

        // Time dilation formula
        function calculateTimeDilation($t, $v) {
            return $t / sqrt(1 - ($v ** 2));
        }

        // Perform the time dilation calculation
        $travelerTime = calculateTimeDilation($years, $velocity);
        
        // Display results
        echo "<div class='result'>";
        echo "<h2>Calculation Result</h2>";
        echo "<p>If you travel for <strong>$years years</strong> at <strong>$speedPercent% of the speed of light</strong>, you will experience:</p>";
        echo "<ul>";
        echo "<li><strong>$years years</strong> will pass on Earth</li>";
        echo "<li><strong>" . round($travelerTime, 2) . " years</strong> will pass for you (the traveler)</li>";
        echo "</ul>";

        // Display the workflow explanation
        echo "<h2>Calculation Workflow</h2>";
        echo "<p>The calculation is based on Einstein's theory of time dilation, where:</p>";
        echo "<ul>";
        echo "<li>Time experienced by the traveler is reduced as their speed increases.</li>";
        echo "<li>The closer you are to the speed of light, the slower time passes for you relative to someone on Earth.</li>";
        echo "<li>The formula used is: <strong>t' = t / √(1 - v²/c²)</strong></li>";
        echo "</ul>";
        echo "</div>";
    }
    ?>
</body>
</html>
