<?php
function why_am_i_single() {
    $reasons = [
        "I'm focusing on myself!",
        "Still haven't found the right person.",
        "I like my freedom and space.",
        "Programming takes up all my time!",
        "I'm too picky with my choices.",
        "I haven't met anyone who likes PHP as much as I do!"
    ];
    
    $randomIndex = array_rand($reasons);
    return $reasons[$randomIndex];
}

echo "Why Am I Single?\n";
echo "Press Enter to find out...\n";
fgets(STDIN);  // Wait for the user to press Enter
echo why_am_i_single() . "\n";
?>