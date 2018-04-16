let w = parseInt(3101);
let h = parseInt(1701);

let data = {
    bathymetry: '../data/bathymetry',
    binaryBathymetry: true,
    earthquake: '../data/earthquake.csv',
    coordinates: 'spherical',
    waveWidth: parseInt(w/3),
    waveHeight: parseInt(h/3),
    displayWidth:  w/4,
    displayHeight: h/4,
    xmin : 135,
    xmax :  360-70,
    ymin :  -35,
    ymax : 50
}

let output = {
    stopTime: 60*60*24,
    displayOption: 'heights',
    pois:{
        '21414': {location:[178.219,48.968]},
        '52403': {location:[145.52,4.02]},
        '52406': {location:[164.977,-5.307]},
        '51425': {location:[183.68,-9.517]},
        '51407': {location:[203.455,19.57]},
        '46404': {location:[231.267,45.853]},
        '46407': {location:[231.168,42.682]},
        '46411': {location:[232.933,39.333]},
        '43412': {location:[253.03300000000002,16.045]},
        '43413': {location:[259.91700000000003,11.012]},
        '32411': {location:[269.12,4.953]},
        '32412': {location:[273.626,-17.984]},
        '32401': {location:[286.579,-20.474]},
    }
    
};

let lifeCycle = {
    controllerSimulationDidFinish : (model, controller) =>{
        // controller.5();
        controller.downloadCurrentGridHeights();
        controller.downloadMaximumHeights();
        controller.downloadArrivalTimes() 
        controller.downloadAllPois();    
    },

    modelStepDidFinish: (model  , controller) =>{
        if(model.discretization.stepNumber % 100==0){
            console.log(model.currentTime/60/60, controller.stopTime/60/60);
        }
    },

    dataWasLoaded: (model)=>{
        document.body.appendChild(model.canvas);
        console.log(model);
    }
}

let thismodel = new NAMI(data, output, lifeCycle);
