[![Stories in Ready](https://badge.waffle.io/FormidableLabs/victory-native.png?label=ready&title=Ready)](https://waffle.io/FormidableLabs/victory-native)
# Victory Native

### Usage

With npm, run:
```sh
$ npm install victory-native --save
```
Link react-native-svg with:
```sh
$ react-native link react-native-svg
```

Import charts from `victory-native`. E.g.,
```jsx
import React, { Component } from 'react';

import { VictoryBar } from "victory-native";

class App extends Component {
  render() {
    return (
      <VictoryBar />
    );
  }
}

export default App;
```

### Demo

Clone [victory-native-demo][victory-native-demo] and follow the instructions there.

### Local Development

If you'd like to contribute to victory-native, you can use the local demo app to test your changes on the iOS simulator. (But if you're just getting started with `victory-native`, we recommend using [victory-native-demo][victory-native-demo], as it supports Android and is simpler to set up.)

```sh
# Install
$ npm install -g react-native-cli # if you haven't already
$ git clone https://github.com/FormidableLabs/victory-native
$ cd victory-native
$ npm install

# Start the react-native packager in a terminal that will remain running
$ npm start

# Run the demo from a new terminal window
$ npm run demo:ios  # or react-native run-android
```

Changes to `lib` will be reflected in the demo app.

Do **not** run `npm install` in the `demo/` directory, or the packager packager will crash due to
"duplicate @providesModule declarations" found in `node_modules/` and `demo/node_modules`.

## _IMPORTANT_

This project is in a pre-release state. We're hard at work fixing bugs and improving the API. Be prepared for breaking changes!

**SEMVER** Minor version bumps should be considered breaking changes until we hit v1.0.0. Patches can be considered safe.

## Contributor Covenant Code of Conduct

Please review our [Code of Conduct][code] before contributing.

[code]: https://github.com/FormidableLabs/builder-victory-component/blob/master/CONTRIBUTING.md#contributor-covenant-code-of-conduct
[victory-native-demo]:https://github.com/FormidableLabs/victory-native-demo
