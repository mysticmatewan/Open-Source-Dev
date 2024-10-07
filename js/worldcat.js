function searchWorldCat() {
    // Get the search query from the input field
    const query = document.getElementById("searchQuery").value;

    // Check if the input is not empty
    if (query) {
        // Encode the query to be used in a URL
        const encodedQuery = encodeURIComponent(query);

        // Redirect to the WorldCat search results page with the user's query
        window.location.href = `https://www.worldcat.org/search?q=${encodedQuery}`;
    } else {
        alert("Please enter a search query.");
    }
}
