var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'auth0', 'angular-storage', 'angular-jwt']);

app.config(function ($routeProvider, $locationProvider, authProvider, $httpProvider, jwtInterceptorProvider) {

	jwtInterceptorProvider.tokenGetter = ['store', function(store) {
    	// Return the saved token
    	return store.get('token');
  	}];

  	$httpProvider.interceptors.push('jwtInterceptor');


	$routeProvider
	.when('/home', {
		controller: 'MainController',
		controllerAs: 'main_ctrl',
		templateUrl: '/partials/home.html'
	})
	.when('/log', {
		controller: 'PassesController',
		controllerAs: 'pass_ctrl',
		templateUrl: '/partials/log.html'
	})
	.when('/login', {
		controller: 'MainController',
		controllerAs: 'main_ctrl'
	})
	// Logged in Routes
	.when('/logout', {
		controller: 'MainController',
		controllerAs: 'main_ctrl',
		templateUrl: '/',
		requiresLogin: true
	})
	.otherwise('/');

	authProvider.init({
    	domain: 'shalkey.auth0.com',
    	clientID: 'hGjo8aTcCLcMupegXV4NEdfNz5ITmyoA'
    	callbackURL: location.href,
    	// Here include the URL to redirect to if the user tries to access a resource when not authenticated.
    	loginUrl: '/'
	});
})
.run(function($rootScope, auth, store, jwtHelper, $location) {
	// This hooks al auth events to check everything as soon as the app starts
	auth.hookEvents();
  	// This events gets triggered on refresh or URL change
  	$rootScope.$on('$locationChangeStart', function() {
    	var token = store.get('token');
    	if (token) {
      		if (!jwtHelper.isTokenExpired(token)) {
        		if (!auth.isAuthenticated) {
          			auth.authenticate(store.get('profile'), token);
        		}
      		} else {
        		// Either show the login page or use the refresh token to get a new idToken
        		$location.path('/');
      		}
    	}
  	});
});