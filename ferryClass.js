

var ferryClass = function(car_count, people_count) {
        this.car_count = car_count;
        this.people_count = people_count;

         this.board = function(car) {
            var car_passengers =+car.passengers
            var ferry_passengers = ferry.people_count
            var ferry_cars = ferry.car_count
            var carsOnBoard =+1;
            if ((car_passengers + carsOnBoard) <= (ferry_passengers + ferry_cars)) {

                console.log("Accepted");
            } else {
                console.log("Rejected")
            }

        }
    };
module.exports= ferryClass;
// module.exports= onBoard;