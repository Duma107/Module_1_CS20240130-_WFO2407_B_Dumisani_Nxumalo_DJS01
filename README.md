# Mars Climate Orbiter Navigation System Simulation

## Overview

The Mars Climate Orbiter Navigation System Simulation is designed to highlight the critical importance of precision and accuracy in spacecraft navigation. Inspired by the Mars Climate Orbiter incident in 1999, this project simulates the navigation calculations necessary for space missions, emphasizing the need for correct unit usage and error handling in calculations.

## Purpose

This simulation aims to:
- Demonstrate how unit mismatches can lead to significant errors in space navigation.
- Provide a robust framework for calculating velocity, distance, and fuel consumption.
- Implement thorough validation checks to ensure input parameters are appropriate and correctly formatted.

## Features

- **Unit Conversion**: Automatically converts velocity between kilometers per hour (km/h) and meters per second (m/s) to ensure consistency in calculations.
- **Error Handling**: Provides robust error handling for invalid inputs, such as negative values or incorrect units, preventing incorrect calculations.
- **Calculation Functions**: 
  - Computes new velocity based on initial velocity, acceleration, and time.
  - Calculates the distance traveled over a specified time period.
  - Determines the remaining fuel after accounting for the fuel burn rate over time.
  
## Usage

To use the simulation:
1. Define initial parameters such as velocity, acceleration, time, initial distance, fuel amount, and fuel burn rate.
2. The simulation will perform calculations to provide the new velocity, distance traveled, and remaining fuel.
3. In case of invalid parameters, the simulation will throw meaningful error messages to guide the user.

## Requirements

- JavaScript runtime (e.g., Node.js) for executing the simulation code.
- Basic understanding of space navigation concepts and physics.

## Conclusion

The Mars Climate Orbiter Navigation System Simulation serves as a critical reminder of the need for accuracy in calculations during space missions. By ensuring that unit conversions and input validations are thoroughly implemented, this project aims to minimize the risk of errors that can lead to mission failures.
