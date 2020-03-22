 # Introduction 
nodejs-boilerplate Swagger file for the endpoint is also available and exposed via api. The swagger will be deployed to the appropriate APIM environment during release and exposed.

# Getting Started
1.	Installation process
    * Clone the repositry 'git clone 
    * run the command npm install
    * run  local-startup.bat
2.	Software dependencies
    * GIT version ^2.15
    * Node version ^10
3.	Latest releases
    * Version 0.1.0
4.	API references
    * Swagger endpoint: `http://localhost:7700/api-docs`
5.  Folder Structure 

        |_src
            |_config    `environment config`
            |_constants `constants files`
            |_models    `business models`
            |_routes    `express routes`
            |_service   `Buisness logic`

# Build and Test
local-startup.sh ( set accordingly in windows)
to run in watch mode npm run watch


To start with docker set the variables mentioned in local-startup.sh and use the command sudo -E docker-compose up --build


Please cite this repo if you are using this. Thanks

