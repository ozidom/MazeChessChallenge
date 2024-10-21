// Function to get the date from the browser but this can be overwritten by a querysting in the form of
// ?date=2024-10-01 ie 1st of October 
function getTodayDate() {
    var today = new Date();

    // if the query string has a valid date then use that
    if (dateBoardSelect !== null){
        today = new Date(dateBoardSelect);
    }
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so +1
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`; // Format: YYYY-MM-DD
}