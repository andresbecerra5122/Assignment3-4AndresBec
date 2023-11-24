// Currency conversion rates
const cadToUsdRate = 0.75; // Replace with the actual rate
const usdToCadRate = 1.33; // Replace with the actual rate

// Function to convert CAD to USD dynamically
function convertCADtoUSD(cadInput) {
    // Validate input
    if (isNaN(cadInput) || cadInput === "") {
        return "";
    }

    // Perform conversion
    const usdResult = parseFloat(cadInput) * cadToUsdRate;

    // Return formatted result
    return usdResult.toFixed(3);
}

// Function to convert USD to CAD dynamically
function convertUSDtoCAD(usdInput) {
    // Validate input
    if (isNaN(usdInput) || usdInput === "") {
        return "";
    }

    // Perform conversion
    const cadResult = parseFloat(usdInput) * usdToCadRate;

    // Return formatted result
    return cadResult.toFixed(3);
}

// Attach event listeners for dynamic bidirectional conversion
const cadInput = document.getElementById("cadInput");
const usdInput = document.getElementById("usdInput");

cadInput.addEventListener("input", function() {
    const cadValue = cadInput.value;
    const usdResult = convertCADtoUSD(cadValue);
    usdInput.value = usdResult;
});

usdInput.addEventListener("input", function() {
    const usdValue = usdInput.value;
    const cadResult = convertUSDtoCAD(usdValue);
    cadInput.value = cadResult;
});
