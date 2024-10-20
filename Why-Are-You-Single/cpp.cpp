#include <iostream>
#include <vector>
#include <cstdlib>  // for rand() and srand()
#include <ctime>    // for time()

using namespace std;

string why_am_i_single() {
    vector<string> reasons = {
        "I'm focusing on myself!",
        "Still haven't found the right person.",
        "I like my freedom and space.",
        "Programming takes up all my time!",
        "I'm too picky with my choices.",
        "I haven't met anyone who likes C++ as much as I do!"
    };
    
    int randomIndex = rand() % reasons.size();  // Get a random index
    return reasons[randomIndex];
}

int main() {
    srand(time(0));  // Seed the random number generator with the current time
    
    cout << "Why Am I Single?" << endl;
    cout << "Press Enter to find out..." << endl;
    cin.get();  // Wait for user to press Enter
    
    cout << why_am_i_single() << endl;
    
    return 0;
}