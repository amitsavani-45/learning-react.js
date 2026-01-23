import './Homepage.css';
import logo from './images/AtomOne-Logonew.jpg';
import machine1 from './images/machine1.png';
function Home() { 
    

  return ( <div className="homepagelogo">

    <div className="homeheader">
        <img src={logo} alt="AtomOne Logo" style={{ width: '200px', height: 'auto' }}/>

</div>

 <img src={machine1} alt="machine1" className="center-machine1" width="120" />
</div>
  );
}
export default Home;