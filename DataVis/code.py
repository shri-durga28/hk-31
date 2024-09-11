import pandas as pd
import matplotlib.pyplot as plt
from windrose import WindroseAxes

# Load CSV file
# Assuming the CSV file has columns: Date, Direction, Air Quality Index
csv_file = 'data1.csv'  # Replace with the actual path to your CSV file
df = pd.read_csv(csv_file)

# Map wind directions to angles (0-360 degrees)
direction_mapping = {
    'North': 0,
    'North-East': 45,
    'East': 90,
    'South-East': 135,
    'South': 180,
    'South-West': 225,
    'West': 270,
    'North-West': 315
}

# Convert wind direction to angles
df['Direction_Angle'] = df['Direction'].map(direction_mapping)

# Create windrose plot
ax = WindroseAxes.from_ax()

# Plot windrose with AQI as data for color intensity
ax.bar(df['Direction_Angle'], df['Air Quality Index'], normed=True, opening=0.8, edgecolor='white', cmap=plt.cm.jet)

# Add legend and title
ax.set_legend()
plt.title('Windrose with AQI - 360° Wind Plot')

# Show plot
plt.show()
