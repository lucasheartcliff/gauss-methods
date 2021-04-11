import { jacobi, seidel } from "./methods";
import { jacobiExample, seidelExample } from "./example";
import "./styles.css";

export default function App() {
  const { result, index } = jacobi(jacobiExample);
  console.log("result", result, index);
  const { result:resultS, index:indexS } = seidel(seidelExample);
  console.log("resultS", resultS, indexS);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
