// Mars Climate Orbiter Navigation System Simulation
/**
 * Debugging Guide
 * 1. Improve readability with clear variable names and comments.
 * 2. Fix calculation errors related to unit mismatches.
 * 3. Make calculations robust by adding validation and error handling for units and values.
 */

// Given Parameters
const velocityKmH = 10000; // velocity in km/h
const accelerationMS = 3;  // acceleration in m/s^2
const timeSeconds = 3600;  // time in seconds (1 hour)
const initialDistanceKm = 0; // initial distance in km
const fuelKg = 5000; // remaining fuel in kg
const fuelBurnRateKgS = 0.5; // fuel burn rate in kg/s

// Helper function to check units consistency and validity
function checkUnits(velocity, acceleration, time) {
    if (typeof velocity !== 'number' || typeof acceleration !== 'number' || typeof time !== 'number') {
        throw new Error('Invalid input: velocity, acceleration, and time must be numbers.');
    }

    // Ensure velocity is in km/h, acceleration in m/s^2, and time in seconds
    if (velocity < 0 || acceleration < 0 || time <= 0) {
        throw new Error('Invalid values: velocity, acceleration, and time must be positive.');
    }
}

// Function to convert km/h to m/s for consistent calculations
function convertKmHtoMS(velocityKmH) {
    return velocityKmH * (1000 / 3600); // 1 km/h = 1000 meters / 3600 seconds
}

// Function to convert m/s to km/h
function convertMStoKmH(velocityMS) {
    return velocityMS * (3600 / 1000); // 1 m/s = 3600 seconds / 1000 meters
}

// Function to calculate new velocity based on acceleration and time
function calcNewVelocity(accelerationMS, velocityKmH, timeSeconds) {
    checkUnits(velocityKmH, accelerationMS, timeSeconds); // Validate inputs

    const velocityMS = convertKmHtoMS(velocityKmH); // Convert velocity to m/s
    const newVelocityMS = velocityMS + (accelerationMS * timeSeconds); // v = u + at
    return convertMStoKmH(newVelocityMS); // Convert back to km/h
}

// Calculate new distance traveled
function calcNewDistance(initialDistanceKm, velocityKmH, timeSeconds) {
    const velocityMS = convertKmHtoMS(velocityKmH); // Convert to m/s
    const distanceMeters = velocityMS * timeSeconds; // d = vt (in meters)
    const distanceKm = distanceMeters / 1000; // Convert to km
    return initialDistanceKm + distanceKm;
}

// Calculate remaining fuel after burn
function calcRemainingFuel(initialFuelKg, fuelBurnRateKgS, timeSeconds) {
    const burnedFuel = fuelBurnRateKgS * timeSeconds; // fuel used = rate * time
    if (burnedFuel > initialFuelKg) {
        throw new Error('Error: Not enough fuel to sustain burn for the given time.');
    }
    return initialFuelKg - burnedFuel; // Remaining fuel
}

try {
    // Calculate the new velocity
    const correctedVelocityKmH = calcNewVelocity(accelerationMS, velocityKmH, timeSeconds);
    console.log(`Corrected New Velocity: ${correctedVelocityKmH.toFixed(2)} km/h`);

    // Calculate the new distance traveled
    const correctedDistanceKm = calcNewDistance(initialDistanceKm, velocityKmH, timeSeconds);
    console.log(`Corrected New Distance: ${correctedDistanceKm.toFixed(2)} km`);

    // Calculate the remaining fuel
    const correctedRemainingFuel = calcRemainingFuel(fuelKg, fuelBurnRateKgS, timeSeconds);
    console.log(`Corrected Remaining Fuel: ${correctedRemainingFuel.toFixed(2)} kg`);
    
} catch (error) {
    console.error(error.message); // Output any error message encountered
}
