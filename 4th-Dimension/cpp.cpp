#include <iostream>
#include <cmath>
#include <iomanip>

const double SPEED_OF_LIGHT = 1.0;  // Speed of light represented as 1 for simplicity

// Function to calculate time dilation
double calculateTimeDilation(double earthTime, double velocity) {
    return earthTime / sqrt(1 - (velocity * velocity) / (SPEED_OF_LIGHT * SPEED_OF_LIGHT));
}

int main() {
    double years, speedPercent;

    // User input
    std::cout << "Enter travel duration in Earth years: ";
    std::cin >> years;
    std::cout << "Enter travel speed as a percentage of the speed of light: ";
    std::cin >> speedPercent;

    // Convert speed percentage to fraction of light speed
    double velocity = speedPercent / 100;

    // Calculating time experienced by the traveler
    double travelerTime = calculateTimeDilation(years, velocity);

    // Output results
    std::cout << "\n--- 4th Dimension Time Dilation Simulation ---\n";
    std::cout << "Earth Time (years): " << years << std::endl;
    std::cout << "Speed: " << speedPercent << "% of the speed of light" << std::endl;
    std::cout << "Traveler's Time (years): " << std::fixed << std::setprecision(2) << travelerTime << std::endl;

    // Simulation to show progression over time intervals
    std::cout << "\n--- Time Progression (Years Passed on Earth vs. Traveler) ---\n";
    double interval = years / 10;  // Break into ten intervals for demonstration
    for (int i = 1; i <= 10; ++i) {
        double earthInterval = interval * i;
        double travelerInterval = calculateTimeDilation(earthInterval, velocity);
        std::cout << "Earth Time: " << std::setw(6) << earthInterval 
                  << " years | Traveler's Time: " << std::setw(6) << travelerInterval << " years\n";
    }

    return 0;
}
