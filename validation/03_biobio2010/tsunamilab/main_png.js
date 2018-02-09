let data = {
    bathymetry: '../data/bathymetry_SA.png',
    bathymetryMetadata: {
        zmin:-5717,
        zmax: 8084
    },
    earthquake: '../data/earthquake.csv',
    coordinates: 'spherical',
    waveWidth: 361,
    waveHeight: 361,
    displayWidth: 512,
    displayHeight: 512,
    xmin : -120,
    xmax : -60,
    ymin :  -60,
    ymax : 0.0
}

let output = {
    stopTime: 6*60*60,
    displayOption: 'heights',
    pois: {
    'dart': {
        location:[-86.374, -17.984 ]
    }
    }
};

let lifeCycle = {
    controllerSimulationDidFinish : (model, controller) =>{
        // controller.5();
        // controller.downloadCurrentGridHeights();
        // controller.downloadMaximumHeights();
        // controller.downloadArrivalTimes() 
        controller.downloadAllPois();    
    },

    modelStepDidFinish: (model, controller) =>{
        if(model.discretization.stepNumber % 100==0){
            console.log(model.currentTime/60/60, controller.stopTime/60/60);
        }
    }
}

let nami = new NAMI(data, output, lifeCycle);
