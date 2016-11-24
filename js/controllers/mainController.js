function mainController($localStorage, storageFactory, $rootScope) {
    this.storageFactory = storageFactory;
    this.storageFactory.titlePage = 'Hello';
    $rootScope.$emit('titleChange');
    if (!$localStorage.datas)
        $localStorage.datas = [];
    storageFactory.datas = $localStorage.datas;
    this.data = "";
    this.create = () => {
        this.storageFactory.datas.push(this.data);
        this.data = "";
    };
    this.delete = (i) => {
        this.storageFactory.datas.splice(i, 1);
    };
    this.update = (i, data) => {
        this.storageFactory.datas[i] = data;
    };
}
