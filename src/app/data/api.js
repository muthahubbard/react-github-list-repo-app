import 'fetch'

var loadGitHubRepos = function() {
  
  const url = '//api.github.com/orgs/zone/repos';

  return fetch(url).then(response => response.json());
}

export { loadGitHubRepos }