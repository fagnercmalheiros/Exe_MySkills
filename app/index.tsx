import { StatusBar } from "react-native";
import { Home } from "./pages/Home";

export default function Index(){ 
  return(
    <>
    <StatusBar barStyle={'default'}/>
    <Home/>
    </>
  )
}