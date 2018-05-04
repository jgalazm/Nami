let data = {
    bathymetry: '../data/bathymetry.png',
    bathymetryMetadata: {
        zmin: -6709,
        zmax: 10684
    },
    earthquake: '../data/earthquake.csv',
    coordinates: 'spherical',
    waveWidth: 2159,
    waveHeight: 960,  
    displayWidth: parseInt(2159/2),
    displayHeight: parseInt(960/2),
    xmin : -179.99166666666667,
    xmax :  179.67499999999998  ,
    ymin :  -79.991666666666646,
    ymax : 79.841666666666654, 
    periodicBoundary: true
}

let output = {
    stopTime: 30*60*60,
    displayOption: 'heights'
};

let niterations = 0;
let lifeCycle = {
    dataWasLoaded : (model)=>{
        document.body.appendChild(model.canvas);

    },
    controllerSimulationDidFinish : (model, controller) =>{
        // controller.downloadCurrentGridHeights();
        // controller.downloadMaximumHeights();
        // controller.downloadArrivalTimes()        
    },

    modelStepDidFinish: (model, controller) =>{
        if(model.discretization.stepNumber % 1000==0){
            console.log(model.currentTime/60/60, controller.stopTime/60/60);
        }
        niterations = niterations + 1;

        if( niterations%10 == 0){
            niterations = 0;
            return false;
        }
        else{
            return true;
        }
        
    }
}

let thismodel = new NAMI.driver(data, output, lifeCycle);