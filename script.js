const citiesByState = {
    "Maharashtra": [
        "Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad",
        "Solapur", "Amravati", "Kolhapur", "Sangli", "Satara"
    ],
    "Karnataka": [
        "Bangalore", "Mysore", "Hubli", "Belgaum", "Mangalore",
        "Gulbarga", "Davanagere", "Shimoga", "Bellary", "Tumkur"
    ],
    "Gujarat": [
        "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar",
        "Jamnagar", "Junagadh", "Gandhinagar", "Anand", "Bharuch"
    ]
};

function filterCities() {
    const stateSelect = document.getElementById('state');
    const citySelect = document.getElementById('city');
    const selectedState = stateSelect.value;

    citySelect.innerHTML = '<option value="">Select City</option>';

    if (selectedState && citiesByState[selectedState]) {
        citiesByState[selectedState].forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });

        citySelect.disabled = false;
    } else {
        citySelect.disabled = true;
    }
}

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value.trim();
    const pincode = document.getElementById('pincode').value.trim();

    if (name === '' || phone === '' || email === '' || state === '' || city === '' || country === '' || pincode === '') {
        alert('All fields are mandatory.');
        return;
    }


    alert('Form submitted successfully!');
});
