function convertTemperature() {
    const temperature = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    let result;
    let advice = '';

    if (!temperature) {
        alert('Please enter a temperature');
        return;
    }

    const temp = parseFloat(temperature);
    if (isNaN(temp)) {
        alert('Please enter a valid number');
        return;
    }

    switch(unit) {
        case 'Celsius':
            result = `
                <p>Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)}°F</p>
                <p>Kelvin: ${(temp + 273.15).toFixed(2)}K</p>`;
            break;
        case 'Fahrenheit':
            result = `
                <p>Celsius: ${((temp - 32) * 5/9).toFixed(2)}°C</p>
                <p>Kelvin: ${((temp - 32) * 5/9 + 273.15).toFixed(2)}K</p>`;
            break;
        case 'Kelvin':
            result = `
                <p>Celsius: ${(temp - 273.15).toFixed(2)}°C</p>
                <p>Fahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)}°F</p>`;
            break;
        default:
            result = 'Invalid unit';
            break;
    }

    if (temp >= 35) {
        advice = "It's too hot! Don't forget to stay hydrated and use sunscreen.";
    } else if (temp <= 0) {
        advice = "It's freezing! Bundle up and stay warm.";
    } else {
        advice = "Enjoy the weather!";
    }

    document.getElementById('result').innerHTML = result;
    document.getElementById('advice').textContent = advice;
    document.getElementById('result-container').style.display = 'block';
}
