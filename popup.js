
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
            let {first,second,values} = jsonData;
            let arr = values.map((el) => el[0]);
            let option = "";
            for(let i = 0; i < arr.length; i ++) {
                option+= '<option value = "'+ arr[i] + '">' + arr[i] + "</option>"
            }
            document.getElementById("item").innerHTML = option;
        } else {
            console.log("ERROR!")
        }
    });
})




