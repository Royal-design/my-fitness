import Reactotron from "reactotron-react-native";

Reactotron.configure({
  host: "localhost",
  name: "myfitness",
})
  .useReactNative()
  .connect();

console.tron = Reactotron;
