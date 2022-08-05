const cardContainer = document.querySelector('.card-container')

function generateCard(data) {

    for (let i = 0; i < data.length; i++) {

    const card = document.createElement('div')
    card.classList.add('card')
    cardContainer.appendChild(card)

    const cardHeader = document.createElement('div')
    cardHeader.classList.add('card-header')
    card.appendChild(cardHeader)

    const cardName = document.createElement('h1')
    cardName.textContent = `${data.name}`
    cardHeader.appendChild(cardName)

    const cardTitle = document.createElement('h1')
    cardTitle.textContent = `${data.title}`
    cardHeader.appendChild(cardTitle)

    const ulEl = document.createElement('ul')
    ulEl.classList.add('list-group list-group-flush')
    card.appendChild(ulEl)

    const cardID = document.createElement('li')
    cardID.classList.add('list-group-item')
    cardID.textContent = `${data.ID}`
    ulEl.appendChild(cardID)

    const cardEmail = document.createElement('li')
    cardEmail.classList.add('list-group-item')
    cardEmail.textContent = `${data.email}`
    ulEl.appendChild(cardEmail)

        if (data.nextAction.choices[0]) {
            const cardGithub = document.createElement('li')
            cardGithub.classList.add('list-group-item')
            cardGithub.textContent = `${data.github}`
            ulEl.appendChild(cardGithub)
        }
        else if (data.nextAction.choices[1]) {
            const cardSchool = document.createElement('li')
            cardSchool.classList.add('list-group-item')
            cardSchool.textContent = `${data.school}`
            ulEl.appendChild(cardSchool)
        }
    }
}

function generatePage() {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="/dist/stylesheet.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet">
        <title>Document</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <div class="card-container">
            <div class="card">
                <div class="card-header">
                    <h1 class="name">${data.managerName}</h1>
                    <h2 class="title">Manager</h2>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${data.id}</li>
                    <li class="list-group-item">Email: ${data.email}</li>
                    <li class="list-group-item">Office number: ${data.officeNum}</li>
                </ul>
                ${generateCard(data)}
            </div>
            
        </div>
    </body>
    </html>`

}

module.exports = generatePage