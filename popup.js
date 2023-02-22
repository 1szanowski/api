
//test click button
function popup(e) {
    let message = "Magic starts! :)";
    alert("Him : " +message);

}
let plusBtn = document.querySelector('#clickMe');
plusBtn.addEventListener('click', popup);




//retrieving data from background
document.getElementById("clickMe").addEventListener("click", function() {
    chrome.storage.local.get("data", function (result) {
        let jsonData = result.data;
        if (jsonData) {
            alert("Data loaded, NASA hacking in progress!")
            console.log(jsonData);
            // Get the dropdown element
            let dropdown = document.getElementById("myDropdown");

// Get the select element
            let select = document.getElementById("item");

// Get the data
           let data = jsonData;

// Populate the select element with the values from the data
            for (let i = 1; i < data.values.length; i++) {
                let option = document.createElement("option");
                option.value = data.values[i][0];
                option.text = data.values[i][0];
                select.appendChild(option);
            }



// Add a change event listener to the select element
            select.addEventListener("change", function() {
                // Get the selected value from the select element
                let selectedValue = select.options[select.selectedIndex].value;

                // Get the index of the selected value in the data array
                let index = data.values.findIndex(function(element) {
                    return element[0] === selectedValue;
                });

                // Display the quantity of the selected item in the <p> element
                document.getElementById("displayData").innerHTML =  data.values[index][1];
            });



        } else {
            console.log("ERROR!")
        }
    });
})




