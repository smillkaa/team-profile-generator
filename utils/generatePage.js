function generateManagerCard() {
    
}
function generateEngineerCard() {

}
function generateInternCard() {

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
                ${generateManagerCard(data)}
                ${generateEngineerCard(data)}
                ${generateInternCard(data)}

            </div>
            
        </div>
    </body>
    </html>`

}

module.exports = generatePage