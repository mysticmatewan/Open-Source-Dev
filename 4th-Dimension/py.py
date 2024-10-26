from flask import Flask, render_template, request

app = Flask(__name__)

# Time dilation calculation
def calculate_time_dilation(t, v):
    return t / (1 - (v ** 2)) ** 0.5

@app.route('/', methods=['GET', 'POST'])
def home():
    result = None
    if request.method == 'POST':
        # Get user input
        years = float(request.form['years'])
        speed_percent = float(request.form['speed'])

        # Constants
        speed_of_light = 1  # Speed of light is considered 1 in this case for simplicity
        velocity = speed_percent / 100  # Convert speed percentage to a fraction of light speed

        # Perform the time dilation calculation
        traveler_time = calculate_time_dilation(years, velocity)

        # Prepare the result for display
        result = {
            'years': years,
            'speed_percent': speed_percent,
            'traveler_time': round(traveler_time, 2)
        }
    
    return render_template('index.html', result=result)

if __name__ == '__main__':
    app.run(debug=True)
