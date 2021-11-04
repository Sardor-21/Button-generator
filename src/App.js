import "./App.css";
import ButtonSettings from "./Components/MyButton/ButtonSettings";
import MyButton from "./Components/MyButton/MyButton";
function App() {
  return (
    <div className="App bg-gray-50">
      <div className="container  mx-auto grid px-3 lg:grid-cols-3 md:grid-cols-2 gap-10 sm:grid-cols-1 py-3">
        <div>
          <ButtonSettings />
        </div>
        <div className="flex h-full justify-center items-center bg-green-300">
          <MyButton />
        </div>
        <div>{/* <Button /> */}</div>
      </div>
    </div>
  );
}

export default App;
