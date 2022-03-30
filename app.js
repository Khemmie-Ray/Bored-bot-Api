
document.getElementById('get-activity').addEventListener('click', () => {
    fetch('https://www.boredapi.com/api/activity')
    .then(response => response.json())
    .then(data => {
        document.getElementById('displayHtml').innerHTML = 
        `<div class="card">${data.activity}</div>`
    })
})
