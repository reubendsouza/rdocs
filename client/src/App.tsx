import { connect, io } from "socket.io-client";
import { TextEditor } from "./components/TextEditor";

function App() {
  return (
    <div className="bg-slate-200 flex flex-col items-center">
      <div>Write Below:</div>
      <TextEditor />
    </div>
  );
}

export default App;
