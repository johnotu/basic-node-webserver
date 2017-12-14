# Basic nodejs web server

Whether I'm going through a tutorial or building a production app, I've often had to begin by creating a basic nodeJs webserver. So I decided to have it on Github with branches for additional packages and functions I can easily acess.

For now, the master branch will hold a basic **express** app with **dotenv** to load environment variables from a *.env* file.

Note: This is NOT the ideal. Something better may already be available if you look for them. I'm just trying to make one that has the config/settings and requirements I mostly use.

## To use

Of course, this assumes you have [node and npm](https://nodejs.org/en/) on your machine.

In your terminal,

* Clone repo `git clone git@github.com:johnotu/basic-node-webserver.git`
* Install packages `npm install`
* Launch server `node index`