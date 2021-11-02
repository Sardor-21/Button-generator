import "./App.css";
import ButtonSettings from "./Components/MyButton/ButtonSettings";
import MyButton from "./Components/MyButton/MyButton";
import Button from "./Components/MyButton/Button";
function App() {
  return (
    <div className="App bg-gray-50">
      <div className="container mx-auto grid grid-cols-3 gap-10">
        <div>
          <ButtonSettings />
        </div>
        <div className="flex h-screen justify-center items-center bg-green-300">
          <MyButton />
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
