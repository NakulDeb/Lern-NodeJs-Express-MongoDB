var rect = require("./Ractangular");

function solveRectangular(l,b) {
    console.log("L = " + l + " and B = " + b);
    
    rect(l,b, (er,rectrangular) => {
        if(er) {
            console.log("ERROR : " + er.message);
        }
        else {
            console.log("The Area : " + rectrangular.area());
            console.log("The Perimeter : " + rectrangular.parameter());
        }
    });

    console.log("After call rect()");
};

solveRectangular(2,3);
solveRectangular(5,3);
solveRectangular(0,5);
solveRectangular(5,-3);