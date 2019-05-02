# ToDoFrontEndPresentation
Repository for React.js application needed to presentate React.js basics.

# Technologies
 * React
 * Bootstrap

# Configuration

In order to run ToDoFrontEnd, you need to provide just one configuration property. Propery is stored in `src/component/constant/ApiConstants.js` file.

### Api address

Pattern:
```sh
API_URL = 'http://<IP_ADDRESS>:<PORT>';
```

Example:
```sh
API_URL = 'http://localhost:6969';
```

# Run&Build

### Build production app

```sh
npm run-script build
```

It builds the app for production to the `build` folder.

### Run development app

```sh
npm start
```

Runs app in: `http://localhost:3000`.

### Run production app

First, install static server.
Via NPM:
```sh
npm install serve
```

or yarn:
```sh
sudo npm install yarn -g
yarn global add serve
```

Then run.
Via NPM:
```sh
nohup serve -s &
```

or yarn:
```sh
nohup yarn serve -l 3000 &
```

Runs app in: `http://localhost:3000`.