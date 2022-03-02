function DateDifference(a,b){
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return (Math.floor((utc1 - utc2) / _MS_PER_DAY));
}

//Get today's date
let todayVisitDate = new Date();

// Look for last visit date on local storage
let lastVisitDate = window.localStorage.getItem('lastVisitDate');
// Set daysSinceLastVisit to 0 (if last visit date doesn't exist we would to return 0)
let daysSinceLastVisit = 0;
if(lastVisitDate){
    // If last visit date exists , calculate difference in days and update daysSinceLastVisit
    daysSinceLastVisit = DateDifference(today,new Date(lastVisitDate));
}

// Display the daysSinceLastVisit in the page
document.querySelector('.visits').innerHTML = daysSinceLastVisit;

// Save new "lastVisitDate" value with today's date
localStorage.setItem('lastVisitDate',todayVisitDate.toISOString());