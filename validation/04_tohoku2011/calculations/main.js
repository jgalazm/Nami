let w = parseInt(2400);
let h = parseInt(1680);

let data = {
    xmin : 90,
    xmax :  290,
    ymin :  -70,
    ymax : 70,
    waveWidth: w/4,
    waveHeight: h/4,
    coordinates: 'spherical',
    bathymetry: '../data/bathymetry',
    binaryBathymetry: true,
    earthquake: '../data/earthquake.csv'
}

let output = {
    displayWidth:  w/4,
    displayHeight: h/4,
    stopTime: 60*60*25,
    displayOption: 'heights',
    pois:{
        '21414': {location:[178.219,48.968]},
        '21419': {location:[155.717,44.435]},
        '21401': {location:[152.583,42.617]},
        '21418': {location:[148.645,38.727]},
        '21413': {location:[152.132,30.533]},
        '52403': {location:[145.52,4.02]},
        '52406': {location:[164.977,-5.307]},
        '55012': {location:[158.453,-15.664]},
        '51425': {location:[183.68,-9.517]},
        '51407': {location:[203.455,19.57]},
        '46404': {location:[231.267,45.853]},
        '46407': {location:[231.168,42.682]},
        '46411': {location:[232.933,39.333]},
        '46412': {location:[239.437,32.492]},
        '43412': {location:[253.03300000000002,16.045]},
        '43413': {location:[259.91700000000003,11.012]},
        '32411': {location:[269.12,4.953]},
        '32412': {location:[273.626,-17.984]},
        '32413': {location:[266.483,-7.406]},
        '32401': {location:[286.579,-20.474]},
    }
};
debugger;
let lifeCycle = {
    controllerSimulationDidFinish : (model, controller) =>{
        // controller.5();
        controller.downloadCurrentGridHeights();
        controller.downloadMaximumHeights();
        controller.downloadArrivalTimes() 
        controller.downloadAllPois();    

        let arrivalsBuffer = [ ... model.currentArrivalTimes ];

        var i0 = d3.interpolateHsvLong(d3.hsv(120, 1, 0.65), d3.hsv(60, 1, 0.90)),
        i1 = d3.interpolateHsvLong(d3.hsv(60, 1, 0.90), d3.hsv(0, 0, 0.95));
        var interpolateTerrain = function(t) { return t < 0.5 ? i0(t * 2) : i1((t - 0.5) * 2); },
        color = d3.scaleSequential(interpolateTerrain).domain([0, output.stopTime]);

        let contours = d3.contours()
                        .size([data.waveWidth,data.waveHeight ])
                        .thresholds(d3.range(0, output.stopTime, 60*60))(arrivalsBuffer);
        var svg = d3.select("svg"),
            width = +svg.attr("width"),
            height = +svg.attr("height");
                    
        svg.selectAll("path")
            .data(contours)
            .enter().append("path")
            .attr("d", d3.geoPath(d3.geoIdentity() ))
            // .attr("fill", function(d) { return color(d.value); })

    },

    modelStepDidFinish: (model, controller) =>{
        if(model.discretization.stepNumber % 100 !== 0){
            return true;
        }
        else{
            console.log(model.discretization.stepNumber, model.currentTime/60/60, controller.stopTime/60/60);
            return false;
        }
    },

    dataWasLoaded: (model)=>{
        document.body.appendChild(model.canvas);
    }
}

let thisApp = new NAMI.app(data, output, lifeCycle);
