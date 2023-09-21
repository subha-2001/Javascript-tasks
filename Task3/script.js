function calculateDeliveryDate() {
    const startLocation = document.getElementById('start').value;
    const endLocation = document.getElementById('end').value;
    const timeline = document.querySelector('.timeline');
    timeline.innerHTML = '';

    if (!startLocation || !endLocation) {
        showError('Please select both start and end locations properly');
        return;
    }

    if (startLocation === endLocation) {
        showError('Route not found');
        return;
    }

    const routeMap = {
        'Tirunelveli': { 'Madurai': 2 },
        'Madurai': { 'Tirunelveli': 2, 'Trichy': 2, 'Coimbatore': 3, 'Salem': 3 },
        'Trichy': { 'Chennai': 3 },
        'Coimbatore': { 'Chennai': 3, 'Bangalore': 3 },
        'Salem': { 'Bangalore': 2 },
        'Chennai': { 'Bangalore': 2, 'Mumbai': 5 },
        'Bangalore': { 'Mumbai': 3 },
    };

    function findShortestRoute(start, end, visited, days, route) {
        if (start === end) return { days, route };
        visited[start] = true;
        let shortestDays = Infinity;
        let shortestRoute = null;

        for (const neighbor in routeMap[start]) {
            if (!visited[neighbor]) {
                const routeDays = routeMap[start][neighbor];
                const result = findShortestRoute(neighbor, end, visited, days + routeDays, route + ` -> ${neighbor}`);
                if (result.days < shortestDays) {
                    shortestDays = result.days;
                    shortestRoute = result.route;
                }
            }
        }

        visited[start] = false;
        return { days: shortestDays, route: shortestRoute };
    }
    const visited = {};
    let result;

    if (routeMap[startLocation] && routeMap[startLocation][endLocation]) {
        result = { days: routeMap[startLocation][endLocation], route: `${startLocation} -> ${endLocation}` };
    } else {
        result = findShortestRoute(startLocation, endLocation, visited, 0, startLocation);
    }

    if (result.days === Infinity) {
        showError('Route not found');
        return;
    }

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    // Calculate the end date based on delivery days
    const endDate = new Date(currentDate);

    for (let day = 1; day <= result.days; day++) {
        endDate.setDate(endDate.getDate() + 1);

        // Skip both Sundays (0) and Saturdays (6)
        while (endDate.getDay() === 0 || endDate.getDay() === 6) {
            endDate.setDate(endDate.getDate() + 1);
        }
    }

    const deliveryDetails = `${result.route}\nNumber of days: ${result.days}\nStart Date: ${currentDate.toDateString()}\nEnd Date: ${endDate.toDateString()}`;
    document.getElementById('deliveryDate').textContent = endDate.toDateString();
    document.getElementById('deliveredMessage').style.display = 'block';
    
    document.getElementById('result').textContent = deliveryDetails;
    document.getElementById('deliveryDetails').style.color = 'blue';
          
}

function showError(message) {
    document.getElementById('result').textContent = message;
    document.getElementById('deliveredMessage').style.display = 'none';
}
