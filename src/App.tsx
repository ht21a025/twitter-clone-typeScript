import './App.css';
import Sidebar from './conponents/sidebar/Sidebar';
import Timeline from './conponents/timeline/Timeline';
import Widgets from './conponents/widget/Widgets';

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Timeline */}
      <Timeline />
      
      {/* Widget */}
      <Widgets />

    </div>
  );
}

export default App;
