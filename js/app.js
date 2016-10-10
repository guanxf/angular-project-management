// 获取应用程序
angular.module('app',['ngRoute'])
// 创建路由配置
.config(function($routeProvider){
	$routeProvider
	// 定义跟路由
	.when('/',{
		// 将login.html模板引入
		templateUrl : 'view/index.html',
		controller : 'homeCtrl'
	})
	// 定义login页面路由
	.when('/login',{
		templateUrl : 'view/login.html',
		controller : 'loginCtrl'
	})
	// 定义用户列表路由
	.when('/userlist/:pagenum',{
		templateUrl : 'view/user/list.html',
		controller : 'userListCtrl'
	})
	// 定义创建用户路由
	.when('/createuser',{
		templateUrl : 'view/user/create.html',
		controller : 'createUserCtrl'
	})
	// 定义用户详情路由
	.when('/userinfo/:userId',{
		templateUrl : 'view/user/info.html',
		controller : 'userInfoCtrl'
	})
	// 定义新闻列表路由
	.when('/newslist/:pagenum',{
		templateUrl : 'view/news/list.html',
		controller : 'newsListCtrl'
	})
	// 定义创建新闻路由
	.when('/createnews',{
		templateUrl : 'view/news/create.html',
		controller : 'createNewsCtrl'
	})
	// 定义新闻详情路由
	.when('/newsinfo/:newsId',{
		templateUrl : 'view/news/info.html',
		controller : 'newsInfoCtrl'
	})
	// 定义默认路由
	.otherwise({
		redirectTo : '/'
	})
})
// 定义服务,在各界面都要检测是否已经登录
.factory('checkLogin',function($rootScope,$http,$location){
	return function(){
		$http({
			url : 'action/checkLogin.php',
			method : 'GET'
		})
		.success(function(res){
			if (res.errno === 0 && res.data) {
				// 登录过
				// 如果返回用户名，我们要将他显示在页面中
				$rootScope.username = res.data.username
			} else{
				// 跳转到登录页面
				$location.path('/login')
			};
			$rootScope.isShow = 'block'
		})
	}
})
// 定义用户列表控制器
.controller('userListCtrl',function($scope,$http,$routeParams){
	// 获取页码参数,保存在作用域中
	$scope.num = $routeParams.pagenum;
	// 通过页码来获得相应的数据
	$http.get('action/userlist.php?num='+ $scope.num)
	.success(function(res){
		$scope.list = res.data
	})
})
// 定义创建用户路由
.controller('createUserCtrl',function($scope,$http,$location){
	// 设置默认性别
	$scope.user = {
		sex : 'man'
	}
	// 表单提交事件
	$scope.submitData = function(){
		$http.post('action/createuser.php',$scope.user)
		.success(function(res){
			if (res && res.errno === 0) {
				$location.path('/userlist/1')
			};
		})
	}
})
// 定义用户详情路由
.controller('userInfoCtrl',function($scope,$http,$routeParams){
	// 获取用户id
	$scope.userId = $routeParams.userId;
	$http.get('action/userdetail.json',{
		params : {
			id : $scope.userId
		}
	}).success(function(res){
		if (res && res.errno === 0) {
			$scope.data = res.data;
		};
	})
})
// 定义新闻列表控制器
.controller('newsListCtrl',function($scope,$http,$routeParams){
	// 获取页码
	$scope.num = $routeParams.pagenum;
	$http.get('action/newslist.php?num='+ $scope.num)
	.success(function(res){
		// console.log(res)
		$scope.list = res.data;
	})
})
// 定义创建新闻路由
.controller('createNewsCtrl',function($scope,$http,$location){
	$scope.submitData = function(){
		// console.log($scope)
		// 获取新闻列表数据
		$http.post('action/createnews.php',$scope.news)
		.success(function(res){
			if (res && res.errno === 0) {
				$location.path('/newslist/1')
			};
		})
	}
})
// 定义新闻详情路由
.controller('newsInfoCtrl',function($scope,$http,$routeParams){
	// 获取页码
	$scope.newsId = $routeParams.newsId;
	$http.get('action/newsdetail.php',{
		params : {
			id : $scope.newsId
		}
	})
	.success(function(res){
		$scope.data = res.data;
	})
})
// 定义根控制器
.controller('homeCtrl',function(checkLogin,$scope,$interval){
	// 检验是否登录
	checkLogin();

	$scope.date = new Date();
	$interval(function(){
		$scope.date = new Date();
	},1000)
})
// 定义登录控制器
.controller('loginCtrl',function($scope,$http,$location,$rootScope){
	$scope.submitData = function(){
		$http.post('action/login.php',$scope.user)
		.success(function(res){
			if (res && res.errno === 0) {
				// 登录成功返回用户名
				$rootScope.username = res.username
				// 请求返回成功，跳转到首页
				$location.path('/');
			}
		})
	}
})
// 定义nav控制器
.controller('navCtrl',function($scope){
	$scope.list = [
		{
			title : '成员管理',
			childList :[
				{
					title: '成员列表',
					link: '#/userlist/1'
				},
				{
					title: '创建成员',
					link: '#/createuser'
				}
			]
		},
		{
			title: '消息管理',
			childList: [
				{
					title: '消息列表',
					link: '#/newslist/1'
				},
				{
					title: '发布消息',
					link: '#/createnews'
				}
			]
		}
	]
})
.run(function(checkLogin){
	checkLogin();
})