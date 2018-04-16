let data = {
    bathymetry: 'bathymetry',
    earthquake: [{
        L: 3,
        W: 2,
        depth: 4,
        slip: 1.0,
        strike: 90.0,
        dip: 70.0,
        rake: 0.0,
        U3: 0.0,
        cn: 0,
        ce: 0,
        reference: 'begin bottom'
    }],
    coordinates: 'cartesian',
    waveWidth: 21,
    waveHeight: 21,
    displayWidth: 512,
    displayHeight: 512,
    xmin: -10,
    xmax: 10,
    ymin: -10,
    ymax: 10,
}

let output = {
    stopTime: 0
}


//  strike slip
let strikeSlipModel = new NAMI.driver(data, output, {
    controllerSimulationDidFinish: (model, controller) => {
        controller.downloadCurrentGridHeights();
    }
});


//  dip slip
let data_dipslip = {
    bathymetry: 'bathymetry',
    earthquake: [{
        L: 3,
        W: 2,
        depth: 4,
        slip: 1.0,
        strike: 90.0,
        dip: 70.0,
        rake: 90.0,
        U3: 0.0,
        cn: 0,
        ce: 0,
        reference: 'begin bottom'
    }],
    coordinates: 'cartesian',
    waveWidth: 21,
    waveHeight: 21,
    displayWidth: 512,
    displayHeight: 512,
    xmin: -10,
    xmax: 10,
    ymin: -10,
    ymax: 10,
}
let dipSlipModel = new NAMI.driver(data_dipslip, output, {
    controllerSimulationDidFinish: (model, controller) => {
        controller.downloadCurrentGridHeights();
    }
});


// tensile
let data_tensile = {
    bathymetry: 'bathymetry',
    earthquake: [{
        L: 3,
        W: 2,
        depth: 4,
        slip: 0.0,
        strike: 90.0,
        dip: 70.0,
        rake: 0.0,
        U3: 1.0,
        cn: 0,
        ce: 0,
        reference: 'begin bottom'
    }],
    coordinates: 'cartesian',
    waveWidth: 21,
    waveHeight: 21,
    displayWidth: 512,
    displayHeight: 512,
    xmin: -10,
    xmax: 10,
    ymin: -10,
    ymax: 10,
}
let tensileFaultModel = new NAMI.driver(data_tensile, output, {
    controllerSimulationDidFinish: (model, controller) => {
        controller.downloadCurrentGridHeights();
    }
});