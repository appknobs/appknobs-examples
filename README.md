# APPKNOBS EXAMPLES

> Appknobs.io client library implementation examples

# Requirements

You will need an Appknobs.io app ID, API key and a feature name for these examples to work.
You can register for free at https://appknobs.io

# Setup

Add your

* app ID,
* API key
* feature name
* payload

to `examples/config.js`:

```
cp examples/config.sample.js examples/config.js
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

You can register a user, create an app, grab the API key and set up features on https://console.appknobs.io

# Running examples

## Angular

An implementation of [@appknobs/angular](https://www.npmjs.com/package/@appknobs/angular) using Angular 7.

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
