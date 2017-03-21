[![Stories in Ready](https://badge.waffle.io/FormidableLabs/victory-native.png?label=ready&title=Ready)](https://waffle.io/FormidableLabs/victory-native)
# Victory Native

This package imports components from `victory-core-native`, `victory-pie-native`, and `victory-chart-native`

# Usage
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

### Running demo

the demo requires the [React Native CLI](https://facebook.github.io/react-native/docs/getting-started.html).

```sh
$ npm install -g react-native-cli # install victory-native if you haven't already
$ git clone https://github.com/FormidableLabs/victory-native
$ cd victory-native
$ npm install   # install victory-native
$ npm start     # start react-native packager manually before launching demo!
$ npm demo:ios  # or react-native run-android
```

## _IMPORTANT_

This project is in a pre-release state. We're hard at work fixing bugs and improving the API. Be prepared for breaking changes!

**SEMVER** Minor version bumps should be considered breaking changes until we hit v1.0.0. Patches can be considered safe.

## Contributor Covenant Code of Conduct

Please review our [Code of Conduct][code] before contributing.

[code]: https://github.com/FormidableLabs/builder-victory-component/blob/master/CONTRIBUTING.md#contributor-covenant-code-of-conduct
