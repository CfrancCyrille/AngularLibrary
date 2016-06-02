var app = angular.module('libraryStore', []);

var books = [
	{
		name: 'Harry Potter and the Philosophers Stone',
		description: "Harry Potter and the Philosopher's Stone is the first novel in the Harry Potter series....",
		author: "J.K. Rowling",
		price: 3.55,
		rarity: 2,
		lang: 'en',
		date: 2014-09-01
		color: '#CCC',
		pages: 352,
		ISBN10: 1408855658,
		ISBN13: 978-1408855652,
		Dimensions: "19.7 x 2.4 x 13.1 cm",
		images: [
			"images/hp1_pic.jpg",
		],
	},
	{
		name: 'Harry Potter and the Chamber of Secrets',
		description: "Harry Potter and the Chamber of Secrets is the second novel in the Harry Potter series, written by J. K. Rowling...",
		author: "J.K. Rowling",
		price: 3.49,
		rarity: 2,
		lang: 'en',
		color: '#EEE',
		pages: 623,
		images: [
			"images/hp2_pic.jpg",
		],
	},
	{
		name: 'Harry Potter and the Prisoner of Azkaban ',
		description: "Harry Potter and the Prisoner of Azkaban is the third novel in the Harry Potter series, written by J. K. Rowling...",
		author: "J.K. Rowling",
		price: 3.39,
		rarity: 3,
		lang: 'en',
		color: '#000',
		pages: 6,
		images: [
			"images/hp3_pic.jpg",
		],
	}
	{
		name: 'Harry Potter and the Goblet of Fire',
		description: "Harry Potter and the Goblet of Fire is the fourth novel in the Harry Potter series, written by British author J. K. Rowling...",
		shine: 70,
		price: 3.85,
		rarity: 2,
		lang: 'en',
		color: '#000',
		pages: 640,
		images: [
			"images/hp4_pic.jpg"
		],
	}
	{
		name: 'Harry Potter and the Order of the Phoenix',
		description: "Harry Potter and the Order of the Phoenix is the fifth novel in the Harry Potter series, written by J. K. Rowling...",
		shine: 70,
		price: 3.85,
		rarity: 4,
		lang: 'en',
		color: '#000',
		faces: 6,
		images: [
			"images/hp5_pic.jpg"
		],
	}
	{
		name: 'Harry Potter and the Half-Blood Prince',
		description: "Harry Potter and the Half-Blood Prince is the sixth and penultimate novel in the Harry Potter series, written by British author J. K. Rowling...",
		shine: 70,
		price: 4.01,
		rarity: 5,
		lang: 'en',
		color: '#000',
		faces: 6,
		images: [
			"images/hp6_pic.jpg.gif"
		],
	}
	{
		name: 'Harry Potter and the Deathly Hallows',
		description: "Harry Potter and the Deathly Hallows is the seventh and final novel of the Harry Potter series, written by British author J. K. Rowling...",
		shine: 70,
		price: 4.99,
		rarity: 8,
		color: '#000',
		faces: 6,
		images: [
			"images/hp6_pic.jpg.gif"
		],
	}
	{
		name: 'Harry Potter and the Cursed Child',
		description: "Harry Potter and the Cursed Child is an upcoming two-part West End stage play written by Jack Thorne and based on a story by author J. K. Rowling...",
		shine: 70,
		price: 4.99,
		rarity: 9,
		color: '#000',
		faces: 6,
		images: [
			"images/gem-06.gif"
		],
	}
];

app.controller('LibraryController', function(){
	"use strict";
	this.books = books;
});


app.controller("tabController", function(){
	"use strict";
	this.tabOne = 1;
	this.selectTab = function(setTab){
		this.tabOne = setTab;
	};
	this.isSelected	= function(checkTab){
		return this.tabOne === checkTab;
	};
});

