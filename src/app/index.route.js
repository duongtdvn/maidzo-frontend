(function() {
  'use strict';

  angular
    .module('Maidzo')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        data: {
          authenticate: false,
          pageTitle: 'Trang chủ'
        }
      })
      .state('auth', {
        url: '/auth',
        templateUrl: 'app/auth/auth.html'
      })
      .state('auth.login', {
        url: '/login',
        templateUrl: 'app/auth/auth.login.html',
        controller: 'LoginController',
        controllerAs: 'login',
        data: {
          authenticate: false,
          pageTitle: 'Đăng nhập'
        }
      })
      .state('auth.signup', {
        url: '/singup',
        templateUrl: 'app/auth/auth.signup.html',
        controller: 'SignupController',
        controllerAs: 'signup',
        data: {
          authenticate: false,
          pageTitle: 'Đăng ký'
        }
      })
      .state('auth.logout', {
        url: '/logout',
        template: null,
        controller: 'LogoutController',
        data: {
          authenticate: true,
          pageTitle: 'Thoát'
        }
      })
      .state('account', {
        url: '/account',
        templateUrl: 'app/account/account.html',
        controller: 'AccountController',
        resolve: {
          accountData: function(Account) {
            return Account.getAccount();
          }
        },
        data: {
          authenticate: true,
          pageTitle: 'Thông tin tài khoản'
        }
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileController',
        resolve: {
          profileData: function(Profile) {
            return Profile.getProfile();
          }
        },
        data: {
          authenticate: true,
          pageTitle: 'Hồ sơ cá nhân'
        }
      })
      .state('shop', {
        url: '/shop',
        templateUrl: 'app/shop/shop.html',
      })
      .state('shop.products', {
        url: '/products',
        templateUrl: 'app/shop/products/products.html'
      })
      .state('shop.products.detail', {
        url: '/:slug',
        templateUrl: 'app/shop/products/detail/detail.html',
        controller: 'ProductDetailController',
        resolve: {
          productData: function($stateParams, Product) {
            return Product.getDetail($stateParams.slug, 'options.values,variants');
          }
        },
        data: {
          authenticate: true,
          pageTitle: 'Thông tin sản phẩm'
        }
      })
      .state('shop.products.search', {
        url: '/search',
        templateUrl: 'app/shop/products/search/search.html',
        controller: 'ProductSearchController',
        data: {
          authenticate: false,
          pageTitle: 'Tìm kiếm sản phẩm'
        }
      })
      .state('shop.cart', {
        url: '/cart',
        templateUrl: 'app/shop/cart/cart.html',
        controller: 'CartController',
        data: {
          authenticate: true,
          pageTitle: 'Giỏ hàng'
        }
      })
      .state('shop.checkout', {
        url: '/checkout',
        templateUrl: 'app/shop/checkout/checkout.html',
        controller: 'CheckoutController',
        resolve: {
          profileData: function(Profile) {
            return Profile.getProfile();
          }
        },
        data: {
          authenticate: true,
          pageTitle: 'Thanh toán'
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
