// TODO: Fetch data from postgreSQL database (to be implemented later)
function fetchGradeData() {
  // This function will query postgreSQL database and return grade data
  console.log("Fetching grade data...");
 let xhr= new XMLHttpRequest();
let apiroute = "/api/grades";
xhr.onreadystatechange = function()
let results(){             
  let results;
  if(xhr.readystate=== xhr.DONE)}
  if(xhr.status !== 200){
    console.error('couldnotgetgrades.
      status: ${xhr.status}')
    }
    populateGradebook{JSON.parse(xhr.responsetext)};
  }
}.bind(this);
xhr.open("get", apiroute, true);
xhr.send();
// TODO: populate the table with grade data
function populateGradebook(data) {
  // this function will take the fetched grade data and populate this table
  console.log("populating gradebook with data:",data);


// TODO romove this
// call the stubs to demonstrate the workflow
const GradeData = fetchgradedata();
populateGradebook(gradedata);
// END REMOVE
