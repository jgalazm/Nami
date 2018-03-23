let w = parseInt(2401);
let h = parseInt(2101);

let data = {
    bathymetry: '../data/bathymetry',
    binaryBathymetry: true,
    earthquake: '../data/earthquake.csv',
    coordinates: 'spherical',
    waveWidth: w/4,
    waveHeight: h/4,
    displayWidth:  w/4,
    displayHeight: h/4,
    xmin : 135,
    xmax :  215,
    ymin :  -20,
    ymax : 50
}

let output = {
    stopTime: 60*60*12,
    displayOption: 'heights',
    pois: {
        '21401': {location: [152.583, 42.617]},
        '21413': {location: [152.132, 30.533]},
        '21414': {location: [178.219, 48.968]},
        '21418': {location: [148.645, 38.727]},
        '21419': {location: [155.717, 44.435]},
        '51407': {location: [-156.545+360, 19.57]},
        '51425': {location: [-176.32+360, -9.517]},
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
    },

    dataWasLoaded: (model)=>{
        document.body.appendChild(model.canvas);
    }
}

let thismodel = new NAMI(data, output, lifeCycle);
