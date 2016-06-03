var app = angular.module('LibraryStore', []);
var totalPrice = 0;
var books = [
	{
		name: 'Harry Potter and the Philosophers Stone',
		description: "Harry Potter and the Philosopher's Stone is the first novel in the Harry Potter series....",
		author: "J.K. Rowling",
		price: 8,
		rarity: 2,
		lang: 'en',
		date: 2014-09-01,
		pages: 352,
		ISBN10: 1408855658,
		ISBN13: 978-1408855652,
		Dimensions: "19.7 x 2.4 x 13.1 cm",
		canPurchase: true,
		images: "images/hp1_pic.jpg",
	},
	{
		name: 'Harry Potter and the Chamber of Secrets',
		description: "Harry Potter and the Chamber of Secrets is the second novel in the Harry Potter series, written by J. K. Rowling...",
		author: "J.K. Rowling",
		price: 8,
		rarity: 2,
		lang: 'en',
		pages: 384,
		ISBN10: 1408855666,
		ISBN13: 978-1408855669,
		Dimensions: "13 x 2.4 x 19.7 cm ",
		canPurchase: true,
		images: "images/hp2_pic.jpg",
	},
	{
		name: 'Harry Potter and the Prisoner of Azkaban ',
		description: "Harry Potter and the Prisoner of Azkaban is the third novel in the Harry Potter series, written by J. K. Rowling...",
		author: "J.K. Rowling",
		price: 3.39,
		rarity: 3,
		lang: 'en',
		date: 2014-09-01,
		pages: 480,
		ISBN10: 1408855674,
		ISBN13: 978-1408855676,
		Dimensions: "19.7 x 3.3 x 13.2 cm",
		canPurchase: true,
		images: "images/hp3_pic.jpg",
	},
	{
		name: 'Harry Potter and the Goblet of Fire',
		description: "Harry Potter and the Goblet of Fire is the fourth novel in the Harry Potter series, written by British author J. K. Rowling...",
		author: "J.K. Rowling",
		price: 8,
		rarity: 2,
		lang: 'en',
		date: 2014-09-01,
		pages: 640,
		ISBN10: 1408855658,
		ISBN13: 978-1408855652,
		Dimensions: "19.7 x 2.4 x 13.1 cm",
		canPurchase: true,
		images: "images/hp4_pic.jpg",
	},
	{
		name: 'Harry Potter and the Order of the Phoenix',
		description: "Harry Potter and the Order of the Phoenix is the fifth novel in the Harry Potter series, written by J. K. Rowling...",
		author: "J.K. Rowling",
		price: 8,
		rarity: 4,
		lang: 'en',
		date: 2014-09-01,
		pages: 816,
		ISBN10: 1408855690,
		ISBN13: 978-1408855690,
		Dimensions: "13.7 x 5.1 x 19.7 cm",
		canPurchase: true,
		images: "images/hp5_pic.jpg",
	},
	{
		name: 'Harry Potter and the Half-Blood Prince',
		description: "Harry Potter and the Half-Blood Prince is the sixth and penultimate novel in the Harry Potter series, written by British author J. K. Rowling...",
		author: "J.K. Rowling",
		price: 8,
		rarity: 5,
		lang: 'en',
		date: 2014-09-01,
		pages: 560,
		ISBN10: 978-1408855706,
		ISBN13: 978-1408855652,
		Dimensions: " 19.8 x 3.5 x 12.9 cm",
		canPurchase: true,
		images: "images/hp6_pic.jpg",
	},
	{
		name: 'Harry Potter and the Deathly Hallows',
		description: "Harry Potter and the Deathly Hallows is the seventh and final novel of the Harry Potter series, written by British author J. K. Rowling...",
		author: "J.K. Rowling",
		price: 8,
		rarity: 8,
		lang: 'en',
		date: 2014-09-01,
		pages: 640,
		ISBN10: 1408855712,
		ISBN13: 978-1408855713,
		Dimensions: "19.8 x 4 x 12.9 cm",
		canPurchase: true,
		images: "images/hp7_pic.jpg",
	},
	{
		name: 'Harry Potter and the Cursed Child',
		description: "Harry Potter and the Cursed Child is an upcoming two-part West End stage play written by Jack Thorne and based on a story by author J. K. Rowling...",
		author: "J.K. Rowling",
		shine: 70,
		price: 8,
		rarity: 9,
		pages: 640,
		ISBN10: 1408855682,
		ISBN13: 978-1408855683,
		Dimensions: "19.7 x 4.1 x 13.1 cm",
		canPurchase: true,
		images: "images/hp8_pic.jpg",
	}
];

app.controller('LibraryController', function(){
	"use strict";
	this.books = books;
});


//app.controller("tabController", function(){
//	"use strict";
//	this.selectTab = function(setTab){
//		this.totalPrice += parseFloat(setTab);
//	};
//	this.isSelected	= function(checkTab){
//		return this.totalPrice === checkTab;
//	};
//});

// ng-click="panel.selectTab(book.price)"

app.controller('tabController', function () {
	"use strict";
    this.panier = [];
	this.totalPrice = 0;
	this.addPanier = function (bookAdd) {
        this.panier.push(bookAdd.name);
		this.totalPrice += bookAdd.price;
	};

})

app.directive('resize', function () {
    return {
      restrict: 'A',
      scope: {},
      link: function(scope, elem, attrs) {
        elem.css('height', '85px');
      }
    };
  })

app.controller("navController", function(){
	"use strict";
	this.tabOne = 1;
	this.selectTab = function(setTab){
		this.tabOne = setTab;
	};
	this.isSelected	= function(checkTab){
		return this.tabOne === checkTab;
	};
});
