# Case details
## Domain and mesh:
* `(x,y) \in [-30°,30°] \times [-30°,30°]`
* `\Delta x = 60°/300`, 300 cells in each direction
*  Same resolution bathymetry

## Initial condition 
* `eta = (lon<=0) ? 1.0 : 0.0`

## Time conditions
* `CFL = 0.5`
*  Tfinal = 10 hours

* Hardcoded in tsunamilab
* Not sure if exactly done by easywave


# Instructions
* Run the notebook in the bathymetry/ folder to generate the bathymetry
* Go to the easyWave/ folder and run 
    `sh run.sh`
* Go back to the root folder and start a local server
* Open the local server home page and go to the validation/01-horizontal folder
* Export output from there 

