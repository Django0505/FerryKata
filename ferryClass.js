

var ferryClass = function(){
	this.car_count = car_count;
	this.people_count= people_count;


}

var onBoard = function(carClass, ferryClass) {
    var car_passengers = carClass.passengers
    var ferry_passengers = ferryClass.people_count
    var ferry_cars = ferryClass.car_count
    var carsOnBoard = carClass.cars;
    if ((car_passengers + carsOnBoard) < (ferry_passengers + ferry_cars)){

    	console.log("Accepted");
    }else{
    	console.log("Rejected")
    }
   

};
