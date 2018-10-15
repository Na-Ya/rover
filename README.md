# Rover

## Start

To get started, fork or clone the repo & `run npm install`.

`npm run start-dev` will start up the app.

If you want to run the server and/or webpack separately, you can also `npm run start-server` and `npm run build-client`.

From there, just follow your bliss.

## Generators/sources used

I used fullstack academy's NERD stack boilerplate for this project and got mock data from mockaroo.com

Features implemented: The all vet view is rendering correctly and users can click into a single vet view.

Features that still need work: Users cannot click through to the next vet, The URL is updating correctly but a re-render is not triggering. The root level component is wrapped in withRouter so this will require additional debugging to find the root cause.

One thing I would add would be to fetch a single vet's data on the single vet page. This way we would not have to filter on the front end through a list of all vets.
