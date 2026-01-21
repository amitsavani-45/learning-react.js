import './Home.css';
import logo from './images/AtomOne-Logonew.jpg';
import photo from './images/photo.png';
function Home(){
  
  return (
    <div className="container1">

    <div className="header2">
        <header>
        <img src={logo} alt="AtomOne Logo" style={{ width: '200px', height: 'auto' }}/>
        </header>
        </div>
        <section className="content1">
        <h1>About Us</h1>
      </section>

      <p className="paragraph"><h1>" Success is the sum of small efforts, repeated day in and day out. "</h1></p>
      
        <img src={photo} alt="photo" className="center-imgage " /><div/>
  
  <section className="content-section">
  <div className="content-text">
      <p >
        AtomOne Technologies was founded by Mr. Satish Goyal in 1996. Our company
        is a leading engineering firm specializing in sheet metal fabrication
        products for various industrial sectors, including automotive,
        electrical, electronics and heavy fabrication.
      </p>

      <p>
        Our facilities are equipped with cutting-edge technology and advanced
        manufacturing processes. This enables us to handle technically
        challenging projects while delivering high-quality products, cost-
        competitive design solutions, technical assistance, and timely
        deliveries.
      </p>
       </div>
</section>
    

  <section className="content2">
        <h1>Our Values</h1>
      </section>

</div>


        )
};

    

export default Home;
