var assert = require('assert');
var Car = require("../carClass");
var Ferry = require("../ferryClass");
var board = require("../boardClass");

describe('Ferry Kata', function() {
    it('Car Class should specify the car color and the number of passengers', function() {
        var car = new Car("green", 6);
        console.log(car)
        assert.equal("green", car.color);
        assert.equal(6, car.passengers);

    });
    it('Ferry Class should specify the number of cars allowed and specify the number of passengers allowed on the ferry',function(){
    	 var ferry = new Ferry(3, 10);
    	 console.log(ferry);
    	 assert.equal(3,ferry.car_count);
    	 assert.equal(10,ferry.people_count);
    });
    it('Board Class should return Accepted',function(){
    	var ferry = new Ferry(3, 10);
    	assert.equal(3,ferry.car_count);
    	assert.equal(10,ferry.people_count);


    	//board
    	var Board = new board(car,ferry);


    	var car = new Car("green", 6);
    	var car1 = new Car("red", 2);
    	var car2 = new Car("blue", 2);

    	
    	assert.equal("Accepted",Board(car,ferry));
    	assert.equal("Accepted",Board(car1,ferry));
    	assert.equal("Accepted",Board(car2,ferry));
    })
});
