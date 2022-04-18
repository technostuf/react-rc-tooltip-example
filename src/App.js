import logo from './logo.svg';
import './App.css';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';


function App() {
  return (
    <div className="App">
      <h1>Tooltip using rc-tooltip - technostuf.com</h1>
      <h3>Tooltip on hover event</h3>
      <Tooltip placement="left" trigger={['hover']} overlay={<span>Litora tristique, iure, atque repellat rutrum, ultricies labore adipiscing quia.</span>}>
        <a href="#">hover</a>
      </Tooltip>
      <br />
      <h3>Tooltip on click event</h3>
      <Tooltip placement="left" trigger={['click']} overlay={<span>Corporis do suscipit corporis est turpis ultricies optio maiores accusantium.</span>}>
        <a href="#">Click to view tooltip</a>
      </Tooltip>
      <h3>Tooltip on different position</h3>
      <p>
        <Tooltip placement="top" overlay={<span>Corporis do suscipit corporis est turpis ultricies optio maiores accusantium.</span>}>
          <a href="#">Click to view tooltip</a>
        </Tooltip>
      </p>
      <p>
        <Tooltip placement="right" overlay={<span>Corporis do suscipit corporis est turpis ultricies optio maiores accusantium.</span>}>
          <a href="#">Click to view tooltip</a>
        </Tooltip>
      </p>
      <p>
        <Tooltip placement="bottom" overlay={<span>Corporis do suscipit corporis est turpis ultricies optio maiores accusantium.</span>}>
          <a href="#">Click to view tooltip</a>
        </Tooltip>
      </p>
      <p>
        <Tooltip placement="leftBottom" overlay={<span>Corporis do suscipit corporis est turpis ultricies optio maiores accusantium.</span>}>
          <a href="#">Click to view tooltip</a>
        </Tooltip>
      </p>
    </div>
  );
}

export default App;
