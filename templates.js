module.exports.document = function (body) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Check all favorite RSS in one go">
    <title>RSS Daily</title>
    <link type="text/css" rel="stylesheet" href="./styles.css" media="all">
  </head>
  <body>
    <main>
      <header class="bg-dark mb-4">
        <nav class="container navbar navbar-dark">
        <div class="container-fluid">
          <h1 class="text-light h2 mb-0">RSS Daily</h1>
        </div>
        </nav>
      </header>
      <div class="container mb-3">
        <div class="row mb-3">
          <div class="col">
            <strong>Updated</strong>: ${new Date()}
          </div>
        </div>
        ${body}
      </div>
      <footer class="bg-dark text-light p-4">
        <div class="container text-center">
          <a class="text-light" href="https://crazyoptimist.net" title="CRAZYOPTIMIST BLOG">crazyoptimist</a>
        </div>
      </footer>
    </main>
  </body>
  </html>`;
}