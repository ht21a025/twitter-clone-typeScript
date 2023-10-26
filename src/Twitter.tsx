import './App.css';
import Sidebar from './conponents/sidebar/Sidebar';
import Timeline from './conponents/timeline/Timeline';
import Widgets from './conponents/widget/Widgets';

function Twitter() {
  return (
    <div className="app">
      <Sidebar />
      <Timeline />
      <Widgets />
    </div>
  );
}

export default Twitter;