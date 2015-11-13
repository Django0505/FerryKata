  var board = function(carClass,ferryClass) {
            var car_passengers =+ carClass.passengers
            var ferry_passengers = ferryClass.people_count
            var ferry_cars = ferryClass.car_count
            var carsOnBoard =+1;
            if ((car_passengers + carsOnBoard) <= (ferry_passengers + ferry_cars)) {

                console.log("Accepted");
            } else {
                console.log("Rejected")
            }

        }
module.exports= board;