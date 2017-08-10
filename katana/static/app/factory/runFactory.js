/*
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

app.factory('runFactory', ['$http', '$routeParams', '$q', function($http, $routeParams, $q) {
    return {
        executeFiles: function(pathjson) {
            var deferred = $q.defer();
	    $http.defaults.headers.post["Content-Type"] = "application/text";
            $http.post('/execute/', pathjson)
                .success(function(data, status, headers, config) {
                    deferred.resolve(data);
								executeApi && executeApi.init( pathjson );
                })
                .error(function(data, status, headers, config) {
                    deferred.reject("error while saving xml: " + status + ' ' + JSON.stringify(headers));
                })
            return deferred.promise;
        }

    };
}]);
