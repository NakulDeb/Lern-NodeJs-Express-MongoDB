var rect = {
    parameter: (l,b) => (2*(l+b)),
    area: (l,b) => (l*b)
};

function solveRectangular(l,b) {
    console.log("L = " + l + " and B = " + b);
    if(l <= 0 || b <= 0){
        if(l <= 0){
            console.log("L is Wrong ");
        }
        else{
            console.log("L = " + l);
        }
        if(b <= 0){
            console.log(" and B is Wrong ");
        }
        else{
            console.log(" and B = " + b);
        }
    }
    else{
        console.log("The Rectangular is : " + rect.area(l,b));
        console.log("The paremeter of this Rectangular is : " + rect.parameter(l,b));
    }
    console.log("");
}

solveRectangular(2,3);
solveRectangular(5,3);
solveRectangular(0,5);
solveRectangular(5,-3);