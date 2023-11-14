let table = document.getElementById("dataTable");
const showData = (dataa) => {
    console.log("in showdata");
    console.log(dataa);
    dataa.map(item => {
        const row = document.createElement("tr");
        createName(item, row);
        createDeath(item, row);
        table.appendChild(row);
    })
}

const createDeath = (item, row) => {
    const tData = document.createElement("td");
    tData.innerHTML = Object.values(item)[2];
    row.appendChild(tData);
}
const createName = (item, row) => {
    const tData = document.createElement("td");
    tData.innerHTML = Object.values(item)[1];
    row.appendChild(tData);
}

const fetchDeathsFile = async() =>{
    let sortedData = [];
    /*
    testings
    function handleSubmit(event) {
        event.preventDefault();
    
        const data = new FormData(event.target);
    
       const value = Object.fromEntries(data.entries());
    
        console.log({value});
      }
    
      const form = document.querySelector('form');
      form.addEventListener('submit', handleSubmit);
      */
    try {
        const response = await fetch(`deaths.txt`);
        const data = await response.json();
        sortedData = sortDataFunc(data);
        showData(sortedData);
    } catch (error) {
        console.log(error);
    }
}
const sortDataFunc = (unsortedData) =>{
    return unsortedData.sort(({deaths : as }, {deaths : bs}) => bs - as);
}

fetchDeathsFile();