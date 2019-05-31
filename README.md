# APPKNOBS EXAMPLES

> Appknobs.io client library implementation examples

# Requirements

You will need an Appknobs.io app ID, API key and a feature name for these examples to work.

You can register a user, create an app, grab the API key and set up features on https://console.appknobs.io

Read our quickstart guide for [Angular](https://appknobs.io/blog/adding-release-toggles-to-an-angular-app) or [React](https://appknobs.io/blog/implementing-release-toggles-with-react-and-cli) to get familiar with the basic concepts.

# Setup

Add your

* app ID,
* API key
* feature name
* payload

to `config.js`:

```
cp config.sample.js config.js
```

so it looks something like this:

```
module.exports = {
  apiKey: 'arbjc9ldLdEoFeXGIh69g',
  appId: 'IDkfh378dfhjJJHDFJ_d7',
  featureName: 'my-test-feature',
  payload: {username: 'yours_truly'},
}
```

# Running examples

## Angular

An implementation of [@appknobs/angular](https://www.npmjs.com/package/@appknobs/angular) using Angular 7.

Note: you need to manually set the feature name in
`angular/src/app/app.component.html` to the one you would add in `config.js`:

```
<ak-feature name='YOUR_FEATURE_NAME'>
  <span>Very well, the feature is enabled 👏</span>
</ak-feature>
```

To start the example on http://localhost:4200/ run:

```
cd angular
npm install
npm start
```

## React client and server (SSR)

This example uses Next.js to demonstrate both client-side and server-side rendering.

```
cd react-nextjs
yarn
yarn start
```

## React legacy (15+)

```
cd react-legacy
yarn
yarn start
```

## React Native

Make sure you have [set up your environment](https://facebook.github.io/react-native/docs/getting-started.html) for either iOS or Android

```
cd react-native
yarn // or npm install
```

then

```
yarn ios
```

or start an Android emulator and

```
yarn android
```

## Electron

A minimal implementation using Electron to demonstrate fetching available features in both the main and renderer process, using `newElectronClient` and `newBrowserClient` respectively.

```
cd electron
yarn
yarn start
```
