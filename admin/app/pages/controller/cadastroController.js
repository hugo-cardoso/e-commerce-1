angular
.module('app')
.controller('cadastroController' , cadastroController);

function cadastroController($scope, $firebaseArray, $filter) {
	console.log("Controller Initialize");

	$scope.products = $firebaseArray(firebase.database().ref().child("products"));

	$scope.cadastrarProduto = function(){

		$scope.products.$add({
			title: $scope.title,
			categoryName: $scope.categoryName.categoryName,
			category: $scope.category,
			gender: $scope.gender,
			price: $scope.price,
			of: $scope.of,
			imgThumbnail: $scope.imgThumbnail
		}).then(function(){
			$scope.title = "";
			$scope.category = "";
			$scope.gender = "";
			$scope.price = "";
			$scope.of = "";
			$scope.imgThumbnail = "";
		});

	}

	$scope.categorias = $firebaseArray(firebase.database().ref().child("categorias"));

	$scope.cadastrarCategoria = function(){

		var list = $firebaseArray(firebase.database().ref().child("categorias"));

		var nome = $scope.cadastroCategoryName;
		var categoria = $scope.cadastroCategory;

		list.$add({ categoryName: nome, category: categoria }).then(function(ref) {
			var id = ref.key;
			console.log("added record with id " + id);
		});

	}

	$scope.getCategory = function(){

		$scope.category = $filter('filter')($scope.categorias, {categoryName: $scope.categoryName.categoryName})[0].category;

	}

}