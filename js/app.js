angular.module("app", ["ngStorage"])
    .controller("mainController", mainController)
    .controller('titleController', titleController)
    .factory("storageFactory", storageFactory);
