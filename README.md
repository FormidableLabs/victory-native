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

### Demo

```sh
$ git clone https://github.com/FormidableLabs/victory-native
$ cd victory-native
$ npm install # install victory-native
$ npm start # runs both the packager and the simulator.
```

Notes:
- The demo requires the [React Native CLI](https://facebook.github.io/react-native/docs/getting-started.html).
- A "Build Failed" message from react-native may be displayed when running `npm start`; don't despair, it should still work.
- The demo is both for illustration and for victory-native library development.
Because of this, you can _not_ use the `victory-native` command directly on the demo.


## _IMPORTANT_

This project is in a pre-release state. We're hard at work fixing bugs and improving the API. Be prepared for breaking changes!

**SEMVER** Minor version bumps should be considered breaking changes until we hit v1.0.0. Patches can be considered safe.

## Contributor Covenant Code of Conduct

Please review our [Code of Conduct][code] before contributing.

[code]: https://github.com/FormidableLabs/builder-victory-component/blob/master/CONTRIBUTING.md#contributor-covenant-code-of-conduct
