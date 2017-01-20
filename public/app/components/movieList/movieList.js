angular.module('App')
.component('movieListComp', {
  templateUrl: 'app/components/movieList/movieList.html',
  controller: MovieListCompCtrl,
  controllerAs: 'movieListComp'
});

function MovieListCompCtrl(MovieServices){
  var movieListComp = this;
  movieListComp.movies = [];

  MovieServices.getMovies().then(
    function success(response){
      movieListComp.movies = response;
    }, function error(response){
      console.log("error: ", response);
    }
  );
}

MovieListCompCtrl.$inject = ['MovieServices'];
