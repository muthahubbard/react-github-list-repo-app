import alt from '../alt';
import RepoActions from '../actions/repo-actions'

class RepoStore {
  
  constructor() {
    this.bindListeners({
      loadData: RepoActions.getRepos
    });
    
    this.apiData =[];

  }

  loadData(data) {
    this.apiData = data;
  }

}

export default alt.createStore(RepoStore, 'RepoStore');