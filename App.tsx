import { SafeAreaView } from "react-native";
// import HelloWordScreen from "./src/presentation/screens/HelloWordScreen";
// import CounterScreen from "./src/presentation/screens/CounterScreen";
import CounterM3Screen from  "./src/presentation/screens/CounterM3Screen"
import { PaperProvider } from "react-native-paper";

import AwesomeIcons from "react-native-vector-icons/FontAwesome"

export default function App() {
  return (
      <PaperProvider
        settings={{
          icon: (props) =>  <AwesomeIcons {...props} />
        }}
      >
        <CounterM3Screen />
      </PaperProvider>
  )
}
