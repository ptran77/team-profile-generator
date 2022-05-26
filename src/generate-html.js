// function to generate the Profile Section of the HTML page
const generateProfiles = teamMembers => {
  const profileCards = teamMembers.map(employee => {
    console.log(employee);
    let thirdLine;
    if(employee.getRole() === 'Manager') thirdLine = `Office number: ${employee.getOfficeNumber()}`;
    else if(employee.getRole() === 'Engineer') thirdLine = `Github: <a href="https://github.com/${employee.getGithub()}"> ${employee.getGithub()} </a>`;
    else thirdLine = `School: ${employee.getSchool()}`;
    return `
    <section class="profile col-3 card m-2">
      <div class="card-header bg-primary text-white px-3 py-3">
        <h2 class="pb-2"> ${employee.getName()} </h2>
        <h2> ${employee.getRole()} </h2>
      </div>
      <ul class="card-body list-group-flush">
        <li class="list-group-item"> ID: ${employee.getId()} </li>
        <li class="list-group-item"> Email: <a href="mailto:${employee.getEmail()}"> ${employee.getEmail()} </a></li>
        <li class="list-group-item"> ${thirdLine} </li>
      </ul>
    </section>`;
  })
  console.log(profileCards.join(''));
  return profileCards.join('');
}


// function to generate html page
const generateHTML = teamMembers => {
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UFT-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Team Profile</title>
  </head>

  <body>
    <header>
      <h1 class="text-center text-white bg-danger py-4">My Team</h1> 
    </header>
    <main>
      <!-- Team Profiles Section -->
      <section class="row justify-content-center" id="team-container">
        ${generateProfiles(teamMembers)}
      </section>
    </main>
  </body>
  </html>
  `;
}

module.exports = generateHTML;