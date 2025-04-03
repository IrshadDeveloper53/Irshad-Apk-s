// Function to show alert on button click
function downloadApp(appName) {
    alert(appName + " download shuru ho gaya!");
    
    // Get the current count from local storage or set it to 0
    let count = localStorage.getItem(appName + "_count") || 0;
    count++;
    
    // Save new count
    localStorage.setItem(appName + "_count", count);
    
    // Update the download count on page
    document.getElementById(appName + "-count").innerText = count;
}

// Function to load download count when page loads
window.onload = function() {
    let apps = ["app1", "app2", "app3"]; // Update with your app names
    apps.forEach(function(app) {
        let count = localStorage.getItem(app + "_count") || 0;
        document.getElementById(app + "-count").innerText = count;
    });
};
