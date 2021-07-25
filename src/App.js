import { useState} from 'react'
import * as S from './styled';
import {featured, women, newCollection} from './data/products.json';

import Featured from './components/Featured';
import Navbar from './components/Navbar';
import Women from './components/Women';
import New from './components/New';
import { Link } from 'react-scroll';

function App() {
  const [ colorHeader , setColorHeader] = useState(false);
  const [inputForm, setInputForm] = useState('');



  window.onscroll = () => {
    if(window.scrollY >= 200) {
      setColorHeader(true)
    } else {
      setColorHeader(false)
    }
  }

  function handleSubscribe(e){
    e.preventDefault();
    console.log(inputForm)
    if(inputForm === ''){
      alert('You must fill the field to get the newsletter.');
      return
    }

    localStorage.setItem('@subscribe-newsletter',JSON.stringify(inputForm));
    setInputForm('');
    alert('You were subscribed with success.');
  }

  return (
    
    <S.Container>
      <header className={colorHeader ? 'l-header scroll-header': 'l-header'} id="header">
        <Navbar />
      </header>

      <main className="l-main">
        <section className="home" id="home">
          <div className="home__container bd-grid">
            <div className="home__sneaker">
              <div className="home__shape"></div>
              <img src="/assets/imghome.png" alt="" className="home__img" />
            </div>

            <div className="home__data">
              <span className="home__new">New in</span>
              <h1 className="home__title">YEEZE BOOST <br/> SPLY - 350</h1>
              <p className="home__description">Explore the new collections of sneakers</p>
              <Link className="button">Explore now</Link>
            </div>
          </div>
        </section>

        <section className="featured section" id="featured">
          <h2 className="section-title">FEATURED</h2>
          {/* CRIAR MAP COM OS COMPONENTS ARTICLE */}
          <div className="featured__container bd-grid">
            
            { featured.map( (product, index) => (
              <Featured 
                image={product.image}
                name={product.name}
                price={product.price}
                index={index}
              />
            ))}
           
          </div>
        </section>

        <section className="collection section">
          <div className="collection__container bd-grid">
            <div className="collection__card">
              <div className="collection__data">
                <h3 className="collection__name">Nike</h3>
                <p className="collection__description">New collection 2021</p>
                <Link className="button-light">Buy Now <i className='bx bx-right-arrow-alt button-icon'></i></Link>
              </div>

              <img src="/assets/collection1.png" alt="" className="collection__img" />
            </div>

            <div className="collection__card">
              <div className="collection__data">
                <h3 className="collection__name">Adidas</h3>
                <p className="collection__description">New collection 2021</p>
                <Link className="button-light">Buy Now <i className='bx bx-right-arrow-alt button-icon'></i></Link>
              </div>

              <img src="/assets/collection2.png" alt="" className="collection__img" />
            </div>
          </div>
        </section>

        <section className="women section" id="women">
          <h2 className="section-title">WOMEN SNEAKERS</h2>
          <div className="women__container bd-grid">

            {women.map( (product, index) => (
              <Women 
                image={product.image}
                name={product.name}
                price={product.price}
                index={index}
              />
            ))}

          </div>
        </section>

        <section className="offer section">
          <div className="offer__container bd-grid">
            <div className="offer__data">
              <h3 className="offer__title">50% OFF</h3>
              <p className="offer__description">In Adidas Superstar sneakers</p>
              <Link className="button">Shop now</Link>
            </div>

            <img src="/assets/offert.png" alt="" className="offer__img" />
          </div>
        </section>

        <section className="new section" id="new">
          <h2 className="section-title">NEW COLLECTION</h2>
          <div className="new__container bd-grid">
            <div className="new__mens">
              <img src="/assets/new1.png" alt="" className="new__mens-img" />
              <h3 className="new__title">Mens Shoes</h3>
              <span className="new__price">From R$179.99</span>
              <Link className="button-light">View Collection <i className='bx bx-right-arrow-alt button-icon'></i></Link>
            </div>

            <div className="new__sneaker">

              {newCollection.map( (product, index) => (
                <New 
                  image={product.image}
                  index={index}
                />
              ))}
              
            </div>
          </div>
        </section>

        <section className="newsletter section">
          <div className="newsletter__container bd-grid">
            <div>
              <h3 className="newsletter__title">Subscribe And Get<br/>10% OFF</h3>
              <p className="newsletter__description">Get 10% discount for ALL products</p>
            </div>
            
            <form action="" className="newsletter__subscribe">
              <input 
                type="email" 
                className="newsletter__input"
                placeholder='@email.com'
                value={inputForm}
                onChange={e => setInputForm(e.target.value)}
              />
              <button type="submit" onClick={handleSubscribe} className="button">Subscribe</button>
            </form>
          </div>
        </section>

      </main>

      <footer className="footer section">
        <div className="footer__container bd-grid">
          <div className="footer__box">
            <h3 className="footer__title">LOGO</h3>
            <p className="footer__description">New collection of shoes 2021.</p>
          </div>

          <div className="footer__box">
            <h3 className="footer__title">EXPLORE</h3>
            <ul>
              <li><Link className="footer__link">Home</Link></li>
              <li><Link className="footer__link">Featured</Link></li>
              <li><Link className="footer__link">Women</Link></li>
              <li><Link className="footer__link">New</Link></li>
            </ul>
          </div>

          <div className="footer__box">
            <h3 className="footer__title">SUPPORT</h3>
            <ul>
              <li><Link className="footer__link">Product Help</Link></li>
              <li><Link className="footer__link">Customer Care</Link></li>
              <li><Link className="footer__link">Authorized Service</Link></li>
            </ul>
          </div>

          <div className="footer__box">
            <Link className="footer__social"><i className='bx bxl-facebook' ></i></Link>
            <Link className="footer__social"><i className='bx bxl-instagram' ></i></Link>
            <Link className="footer__social"><i className='bx bxl-twitter' ></i></Link>
            <Link className="footer__social"><i className='bx bxl-google' ></i></Link>
          </div>
        </div>

        <p className="footer__copy">&#169; 2021 Company. All right reserved.</p>
      </footer>


    </S.Container>


  );
}

export default App;
