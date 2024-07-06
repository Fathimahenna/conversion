function convert() {
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;
    let result;

    if (isNaN(value)) {
        document.getElementById('result').innerText = 'Please enter a valid number.';
        return;
    }

    // Conversion logic
    if (fromUnit === 'm/s' && toUnit === 'km/h') {
        result = value * 3.6;
    } else if (fromUnit === 'km/h' && toUnit === 'm/s') {
        result = value / 3.6;
    } else if (fromUnit === 'C' && toUnit === 'F') {
        result = (value * 9/5) + 32;
    } else if (fromUnit === 'F' && toUnit === 'C') {
        result = (value - 32) * 5/9;
    } else if (fromUnit === 'Pa' && toUnit === 'kPa') {
        result = value / 1000;
    } else if (fromUnit === 'kPa' && toUnit === 'Pa') {
        result = value * 1000;
    } else if (fromUnit === 'Pa' && toUnit === 'psi') {
        result = value / 6894.757;
    } else if (fromUnit === 'psi' && toUnit === 'Pa') {
        result = value * 6894.757;
    } else if (fromUnit === 'kPa' && toUnit === 'psi') {
        result = value / 6.894757;
    } else if (fromUnit === 'psi' && toUnit === 'kPa') {
        result = value * 6.894757;
    } else {
        result = 'Conversion not supported.';
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}

// Function to add logo file
function addLogo(logoUrl) {
    const logo = document.getElementById('logo');
    logo.src = logoUrl;
    logo.style.display = 'block';
}

