function titleController(storageFactory, $rootScope, $scope) {
    $scope.titlePage = storageFactory.titlePage;
    $rootScope.$on('titleChange', () => {
        $scope.titlePage = storageFactory.titlePage;
    });
}
