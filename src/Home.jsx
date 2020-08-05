import React, { useRef, useEffect} from 'react';

import './Home.css'

const Home = () => {

  const bgImage = useRef(null)

  useEffect(() => {

    function parallax (e){
        var scrolled = window.pageYOffset
        bgImage.current.style.top = - (scrolled * 0.5) + 'px'
    }

    //componentDidMount :
    document.addEventListener('scroll', parallax);

    //componentWillUnmount :
    return () => {
        document.removeEventListener('scroll', parallax)
    }
  }, [])

  return (
    <div class='home'>

      <div class='home-header'>
        <div class='bg-image' ref={bgImage}></div>
        <div class='content'>
          <div class='home-header-branding'>DEVIENS LIBRE FINANCIÈREMENT</div>
          <div class='elementor-widget-divider'></div>
          <div class='logo'>
            <img 
              src={require('./img/logo.png')}
              alt="logo"
              width='187'
            />
          </div>
        </div>
      </div>

      <section class='first-fact'>
        <div class='first-fact-content'>
          "90% des traders particuliers perdent de l'argent en bourse"
        </div>
        <div class='first-fact-profile'>
          <div class='first-fact-profile-picture'>
            <img
              src={require('./img/18272.jpg')}
              alt='christopher'
              width='60'
            ></img>
          </div>
          <div class='first-fact-profile-presentation'>
            <div class='name'>CHRISTOPHER</div>
            <div class='job'>Analyste Financier</div>
          </div>
        </div>
      </section>


      <section class='second-fact'>
        <div class='second-fact_first-container'>
          <div class='second-fact_widget-divider'></div>
          <div class='second-fact_text-content'>
            <div class='second-fact_text-content_question'>
              TU AS PEUR DE PERDRE TON CAPITAL ?
            </div>
            <div class='second-fact_text-content_list'>
              <ul>
                <li>Tu ne comprends rien à la bourse ?</li>
                <li>Tu n’as pas beaucoup à investir ?</li>
                <li>Tu as déjà eu de grosses pertes ?</li>
              </ul>
            </div>
            <div class='second-fact_text-content_answer'>
              On est aussi passé par là.
            </div>
          </div>
        </div>
        
        <div class='second-fact_second-container'>
          <div class='second-fact_image-content'>
            <img
              src={require('./img/3.png')}
              alt=''
            ></img>
          </div>
        </div>
      </section>
      
    </div>
  );
}
 
export default Home;