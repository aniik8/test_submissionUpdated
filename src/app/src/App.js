import './App.css';
import logo from './logo.svg';
import post_task from './Component/post_task';
import view_task from './Component/view_task';
export function App() {
  return (
    <div className="App">
    <post_task/>
    <view_task/>
    </div>
  );
}

export default App;
