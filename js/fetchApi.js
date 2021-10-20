function number_seperate(num) {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
}

document.getElementById("searchBtn").addEventListener('click', function (e) {
    e.preventDefault();
   
})
function getInputValue(){
    var inputVal = document.getElementById("myInput").value;
    fetch("https://corona.lmao.ninja/v3/countries/"+ inputVal)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  
   
    document.getElementById("confirmed_sub").innerHTML = number_seperate(data.active);
   

    document.getElementById("death_sub").innerHTML = number_seperate(data.deaths);
    document.getElementById("recovered_sub").innerHTML = number_seperate(data.recovered);
    
});
}
