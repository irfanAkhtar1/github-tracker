const username = process.argv[2];
const command = process.argv[3];

async function getRepos(username) {

  const url = `https://api.github.com/users/${username}/repos`;

  const response = await fetch(url);
  const data = await response.json();


  data.forEach(repo => {
    console.log(repo.name);
  });

}

async function getActivity(username) {

  const url = `https://api.github.com/users/${username}/events`;

  const response = await fetch(url);
  const data = await response.json();

  data.forEach(event => {
    console.log(`${event.type} at ${event.created_at}`);
  })

}

if (command === 'repos') {
  getRepos(username);
} else if (command === 'events') {
  getActivity(username);
} else {
  console.log('Invalid command. Use "repos" or "activity".');
}

