# Dashboard 
This is a personal project in which I have developed a dummy backend REST api service in Node.js/Express.js and a frontend web application with a Dashboard view in Vue.js. The web application gets data from the backend service and visualizes them with an interactive line chart and gauge chart.

# Contents

* [Installation](#installtion)
* [How to run](#how-to-run)

<a name="installation"></a>
## Installation

Enter the IoT-Backend directory and type:
```npm
sudo npm install
```
After dependencies installation is finished, enter the IoT-WebApp directory and type the same instruction:
```npm
sudo npm install
```

<a name="how-to-run"></a>
## How to run
Firstly, you have to start the backend service, so enter into the IoT-Backend directory and type:

```npm
node server.js
```
You will see that a message on yor terminal:
```
REST API listening on port 3001!
```
which means that the service is active.

The next step is to enter the IoT-WebApp directory and type the following instruction on your console:
```npm
sudo npm run dev
```
This will set up and run a development mode of our Dashboard web applicaiton.
When the progress ends, you can enter into your application by typing into your browser the *localhost:8081*`

