// Check internet connectivity using navigator.onLine
function checkInternetConnectivity() {

    if (navigator.onLine) {
        //alert("You are online!");
        ShowConGood("You are connected to the Internet");
    } else {
        //alert("You are offline.");
          ShowConBad("You are not connected to the Internet");
    }
}

// Listen for online/offline events
window.addEventListener('online', checkInternetConnectivity);
window.addEventListener('offline', checkInternetConnectivity);




// Initial check when the page loads
checkInternetConnectivity();


if (!navigator.onLine) {
 function ShowConGood (message) {
    Swal.fire({
        title: 'Internet Connectivity',
        text: ''+message,
        icon: 'success',
        confirmButtonText: 'OK'
    });
}
}


 function ShowConBad (message) {
    Swal.fire({
        title: 'No Internet Connectivity',
        text: ''+message,
        icon: 'error',
        confirmButtonText: 'OK'
    });
}

//https://sweetalert.js.org/guides/
