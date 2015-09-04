import alt from '../alt'
import {loadGitHubRepos} from '../data/api'

class RepoActions {

  getRepos() {
    loadGitHubRepos().then( (data) => {
     this.dispatch(data);
    });

  }

}

export default alt.createActions(RepoActions);