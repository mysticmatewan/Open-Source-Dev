function showReason() {
    var reasons = [
        "I'm focusing on myself!",
        "Still haven't found the right person.",
        "I like my freedom and space.",
        "Programming takes up all my time!",
        "I'm too picky with my choices.",
        "I haven't met anyone who likes JavaScript as much as I do!"
    ];

    var randomIndex = Math.floor(Math.random() * reasons.length);
    document.getElementById("reason").innerHTML = reasons[randomIndex];
}