let w = parseInt(1350/2);
let h = parseInt(1801/2);

let data = {
    bathymetry: '../data/bathymetry',
    earthquake: '../data/earthquake.csv',
    coordinates: 'spherical',
    waveWidth: w,
    waveHeight: h,
    displayWidth:  w,
    displayHeight: h,
    xmin : 135,
    xmax :  180,
    ymin :  -10,
    ymax : 50
}

let output = {
    stopTime: 60*60*24,
    displayOption: 'max heights',
    pois: {
        '21401': {location: [152.583, 42.617]},
        '21413': {location: [152.132, 30.533]},
        '21414': {location: [178.219, 48.968]},
        '21418': {location: [148.645, 38.727]},
        '21419': {location: [155.717, 44.435]},
        '51407': {location: [-156.545, 19.57]},
        '51425': {location: [-176.32, -9.517]},
        '52403': {location: [145.52, 4.02]},
        '52406': {location: [164.977, -5.307]},
        '55012': {location: [158.453, -15.66]}
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

let thismodel = new NAMI(data, output, lifeCycle);
