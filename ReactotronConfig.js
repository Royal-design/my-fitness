import Constants from "expo-constants";
import Reactotron from "reactotron-react-native";

let host = "localhost";

if (Constants.platform?.android) {
  const debuggerIp = Constants.expoConfig?.hostUri?.split(":")[0];

  if (debuggerIp) {
    host = debuggerIp;
  }
}

Reactotron.configure({ host, name: "myfitness" }).useReactNative().connect();

console.tron = Reactotron;
