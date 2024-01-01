import { connect, io } from "socket.io-client";
import { TextEditor } from "./components/TextEditor";

function App() {
  return (
    <div>
      Write Below:
      <TextEditor />
    </div>
  );
}

export default App;
