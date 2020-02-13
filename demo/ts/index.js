import { AppRegistry } from "react-native";
import App from "./src/index.tsx";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
