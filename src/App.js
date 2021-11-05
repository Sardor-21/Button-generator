import "./App.css";
import ButtonSettings from "./Components/MyButton/ButtonSettings";
import MyButton from "./Components/MyButton/MyButton";
import StyleButton from "./Components/MyButton/StyleButton";
function App() {
  return (
    <div className="App bg-white-500 min-w-max bg-white-800">
      <div className="container  mx-auto grid px-3 lg:grid-cols-3  md:grid-cols-2 gap-5 sm:grid-cols-1 py-3">
        <div className="buttonSettings px-4 h-screen bg-gray-500 overflow-auto">
          <ButtonSettings />
        </div>
        <div className="flex justify-center items-center bg-gray-300 myButton  h-screen overflow-auto">
          <MyButton />
        </div>
        <div className="stylesButton h-screen overflow-auto bg-gray-200">
          <StyleButton />
        </div>
      </div>
    </div>
  );
}

export default App;
