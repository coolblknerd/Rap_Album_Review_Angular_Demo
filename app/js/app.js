'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('musicReview', [])

.controller('musicReviewController', ['$scope', '$log', function($scope) {
  $scope.albums = albums;
  $scope.addAlbum = function(form) {
    $scope.newAlbum = {
      title: $scope.title,
      artist: $scope.artist,
      asin: $scope.asin,
      review: $scope.review,
      rating: $scope.rating
    }

    $scope.albums.unshift($scope.newAlbum);
    $scope.newAlbum = {};
    $scope.title = '';
    $scope.artist = '';
    $scope.asin = '';
    $scope.review = '';
    $scope.rating = '';
  }
}])

.directive('albumCover', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/directives/album-cover.html',
    replace: true
  }
})

.directive('navMenu', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/directives/nav-menu.html'
    replace: true
  }
})

.directive('albumForm', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/directives/album-form.html',
    replace: true
  }
});

var genres = ['West Coast', 'Dirty South', 'Classic', 'East Coast'];

var albums = [
  {
    title: 'All Eyez on Me',
    artist: '2Pac',
    asin: 'B00005AQE8',
    review: 'One of the greatest albums of this generation',
    rating: 5,
    genres: { 'West Coast': true, 'Classic': true}
  },
  {
    title: 'Liquid Swords',
    artist: 'GZA',
    asin: 'B000000OUJ',
    review: 'Lyrical masturbation for any hip hop head',
    rating: 5,
    genres: { 'East Coast': true, 'Classic': true }
  },
  {
    title: 'Let\'s Get It: Thug Motivation 101',
    artist: 'Young Jeezy',
    asin: 'B0009VJWQS',
    review: 'A classic album that has helped define what people call trap music today',
    rating: 4,
    genres: { 'Dirty South': true, 'Classic': true }
  },
  {
    title: '2001',
    artist: 'Dr. Dre',
    asin: 'B000023VR6',
    review: 'The first act of this album alone makes this west coast gem a classic',
    rating: 4,
    genres: { 'West Coast': true, 'Classic': true}
  },
  {
    title: 'Everybody Looking',
    artist: 'Gucci Mane',
    asin: 'B01HOKNEQ0',
    review: 'In the context of a Gucci Mane album this is about as good as it gets',
    rating: 4,
    genres: { 'Dirty South': true }
  },
  {
    title: 'DS2',
    artist: 'Future',
    asin: 'B011BRK5PA',
    review: 'A modern day trap classic, Future put together one of the most culturally relevant album to ever come out of Atlanta',
    rating: 5,
    genres: { 'Dirty South': true, 'Classic': true }
  }
];
