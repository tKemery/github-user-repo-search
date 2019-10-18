'use strict';

function formatQuery(userHandle){
    const URL = `https://api.github.com/users/${userHandle}/repos`;
    console.log(URL);
    getQuery(URL);
}

function displayResults(responseJson){
    $('div').empty();
    for (let i = 0; i < responseJson.length; i++){
        $('div').append(`
    <ul><h3><span>${i + 1}  </span><a href="${responseJson[i].html_url}" target="_blank">${responseJson[i].name}</a></h3></ul>`)
    }
}

function getQuery(URL){
    fetch(URL)
    .then(response => {
        console.log(response);
        if (response.ok){
            // console.log(response.json());
            return response.json();
        }
        throw new Error(response.statusText);
    }).then(responseJson => {
        console.log(responseJson);
        displayResults(responseJson);
    }).catch(error => alert('Something went wrong. Please try again later.'))
}

function handleSearch(){
    $('form').submit(event => {
        event.preventDefault();
        const userHandle = $('#userQuery').val();
        console.log(userHandle);
        formatQuery(userHandle);
    })
}

$(handleSearch)