// Function to get the date from the browser but this can be overwritten by a querysting in the form of
// ?date=2024-10-01 ie 1st of October 
function getTodayDateUTC() {
    var date = new Date();
    if (dateBoardSelect !== null){
        date = new Date(dateBoardSelect);
    }
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based, so +1
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`; // Format: YYYY-MM-DD
}