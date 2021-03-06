var app = angular.module('myApp', ['ngRoute']);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeController',
            controllerAs: 'home'
        })
        .when('/clinton', {
            templateUrl: 'views/clinton.html',
            controller: 'clintonControl',
            controllerAs: 'clinton'
        })
        .when('/sanders', {
            templateUrl: 'views/sanders.html',
            controller: 'sandersControl',
            controllerAs: 'sanders'
        })
        .when('/drump', {
            templateUrl: 'views/drump.html',
            controller: 'drumpControl',
            controllerAs: 'drump'
        })
        .when('/kasich', {
            templateUrl: 'views/kasich.html',
            controller: 'kasichControl',
            controllerAs: 'kasich'
        })
        .when('/zodiac', {
            templateUrl: 'views/zodiac.html',
            controller: 'zodiacControl',
            controllerAs: 'zodiac'
        })

    $locationProvider.html5Mode(true);

}])


app.controller('MainController', function() {

    this.message = 'This is some sweet data from the controller!';
});
app.controller('clintonControl', function() {

    this.message = 'Hillary Diane Rodham Clinton (born October 26, 1947) is an American politician. She was the 67th United States Secretary of State from 2009 to 2013. From 2001 to 2009, Clinton served as a United States Senator from New York. She is the wife of the 42nd President of the United States Bill Clinton, and was First Lady of the United States during his tenure from 1993 to 2001. She is currently campaigning for the Democratic nomination for President of the United States in the 2016 election.';
});

app.controller('sandersControl', function() {

    this.message = 'Bernard "Bernie" Sanders is an American politician and the junior United States senator from Vermont. He is a candidate for the Democratic nomination for President of the United States in the 2016 election.';
});

app.controller('drumpControl', function() {

    this.message = 'Donald John Trump is an American businessman, politician, television personality, author, and candidate for the Republican nomination for President of the United States in the 2016 election.';
});

app.controller('kasichControl', function() {

    this.message = 'John Richard Kasich is an American politician and the current governor of Ohio, first elected in 2010 and re-elected in 2014. On July 21, 2015, he announced his candidacy for the 2016 Republican nomination for President of the United States.';
});

app.controller('zodiacControl', function() {

    this.message = 'The Zodiac Killer was a serial killer who operated in northern California in the late 1960s and early 1970s.';
});
