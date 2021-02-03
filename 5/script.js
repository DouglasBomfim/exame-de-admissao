const tableBody = document.querySelector('#table_body')

const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
};

const getName = (obj) => {
    return `${obj.first} ${obj.last}`;
}

const getLocation = (obj) => {
    return `${obj.street.name}, ${obj.street.number} - ${obj.city}, ${obj.state} - ${obj.country}`;
}

const populate = (response) => {
    let new_body = `<tr>`;
    new_body += `<td>${getName(response.name)}</td>`;
    new_body += `<td>${getLocation(response["location"])}</td>`;
    new_body += `<td>${response.email}</td>`;
    new_body += `<td>${response.phone}</td>`;
    new_body += `<td><img src="${response.picture.medium}"></td>`
    new_body += `</tr>`;
    tableBody.innerHTML += new_body;
};

const loadContent = () => {
    fetch("https://randomuser.me/api?results=5", options).then(
    response => response.json()
        .then(data => data.results.forEach(
            data => {
                populate(data);
            }
        ))
    )
};