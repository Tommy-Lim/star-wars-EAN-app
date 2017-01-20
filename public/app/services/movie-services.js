angular.module('App')
.service('MovieServices', MovieServices);

function MovieServices($http){

  this.getMovies = function(){
    var req = {
      url: 'http://swapi.co/api/films',
      method: 'GET'
    };
    return $http(req).then(function(res){
      return res.data.results;
    });
  };

  this.getMovie = function(id){
    var req = {
      url: 'http://swapi.co/api/films/'+id,
      method: 'GET'
    };
    return $http(req).then(function(res){
      return res.data;
    });
  };

}

MovieServices.$inject = ['$http'];
