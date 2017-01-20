angular.module('App')
.component('showMovieComp', {
  templateUrl: 'app/containers/showMovie/showMovie.html',
  controller: ShowMovieCompCtrl,
  controllerAs: 'showMovieComp'
});

function ShowMovieCompCtrl($stateParams, MovieServices){
  var showMovieComp = this;
  showMovieComp.movie = {};

  MovieServices.getMovie($stateParams.id).then(
    function success(response){
      showMovieComp.movie = response;
    }, function error(response){
      console.log("error: ", response);
    }
  );
}

ShowMovieCompCtrl.$inject = ['$stateParams', 'MovieServices'];
