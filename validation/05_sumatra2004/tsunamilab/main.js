let data = {
    bathymetry: '../data/bathymetry',
    earthquake: '../data/earthquake.csv',
    coordinates: 'spherical',
    waveWidth: 2159,
    waveHeight: 960,  
    displayWidth: parseInt(2159/16),
    displayHeight: parseInt(960/16),
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

let lifeCycle = {
    controllerSimulationDidFinish : (model, controller) =>{
        controller.downloadCurrentGridHeights();
        controller.downloadMaximumHeights();
        controller.downloadArrivalTimes()        
    },

    modelStepDidFinish: (model, controller) =>{
        if(model.discretization.stepNumber % 100==0){
            console.log(model.currentTime/60/60, controller.stopTime/60/60);
        }
    }
}

let thismodel = new NAMI(data, output, lifeCycle);