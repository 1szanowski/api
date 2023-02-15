chrome.identity.getAuthToken({ 'interactive': true }, getToken);




///gettin token usin oauth
function getToken(token) {

    console.log('this is the token: ', token);
    let init = {
        method: 'GET',
        async: true,
        headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        'contentType': 'json'

    };
    //fetch the data from sheet
    fetch(
        "https://sheets.googleapis.com/v4/spreadsheets/1DQSPR9NjNEhUcDdc3drvYOQWpy7BnZn7JfEZuZ1R8rI/values/A1:Z1000",
    init).then((response) => response.json())
        .then(function(data) {
            //console.log(data);
            //storage the json with sheets data
            chrome.storage.local.set({data: data});





        });

}
