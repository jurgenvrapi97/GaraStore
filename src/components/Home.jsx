import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import videoSrc from '../assets/Download.mp4'
import Logo from '../assets/new-logo-gara.svg'
import ModCarousel from './ModCarousel'

const Home = () => {
  const sectionRefs = useRef([])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('zoom-in')
          } else {
            entry.target.classList.remove('zoom-in')
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    sectionRefs.current.forEach((section) => observer.observe(section))

    return () => {
      sectionRefs.current.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <div className="home">
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered is-flex-direction-column-touch">
              <div className="column is-narrow">
                <figure className="image">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="logo-svg"
                    style={{ marginRight: '10vh', transform: 'scale(1)' }}
                  />
                </figure>
              </div>
              <div className="column has-text-centered-touch">
                <h1 className="title is-size-1-desktop is-size-3-touch">
                  Benvenuti su GaraStore
                </h1>
                <h2 className="subtitle is-size-3-desktop is-size-5-touch">
                  Scopri le ultime novità in fatto di design e tecnologia
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section mb-5" ref={(el) => (sectionRefs.current[0] = el)}>
        <div className="container">
          <Slider {...settings} className="my-carousel">
            <div>
              <img
                className="rounded-image h-100"
                src="https://www.3dnatives.com/en/wp-content/uploads/sites/2/2023/08/BambuLab-cover.jpg"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <img
                className="rounded-image"
                src="https://wattsan.com/wp-content/uploads/screenshot_19.jpg"
              />
            </div>
            <div>
              <img
                className="rounded-image"
                src="https://woodprogress.it/wp-content/uploads/elementor/thumbs/Laboratorio-wood-Progress-pg7deqj7xa4x4hljcli15yzsjgsuds7j88s9tzoowg.jpeg"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </Slider>
        </div>
      </div>

      <div className="section mt-5" ref={(el) => (sectionRefs.current[1] = el)}>
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">3D Printig</p>
                  <p className="subtitle">
                    Attraverso le più attuali macchine di stampa 3D in
                    commercio, e i migliori materiali e filamenti
                  </p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">Legno</p>
                  <p className="subtitle">
                    Utilizzo dei migiori legni in commercio da fornitori di
                    eccelenzza
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section" ref={(el) => (sectionRefs.current[2] = el)}>
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">Design</p>
                  <p className="subtitle">
                    Designers professionisti a tua disposizione per creare
                    prodotti unici
                  </p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">Tecnologia</p>
                  <p className="subtitle">
                    Utilizzo delle più recenti tecnologie per garantire prodotti
                    di qualità
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section mb-5" ref={(el) => (sectionRefs.current[3] = el)}>
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">Sicurezza</p>
                  <p className="subtitle">
                    Prodotti sicuri e certificati per garantire la tua
                    tranquillità
                  </p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">Assistenza</p>
                  <p className="subtitle">
                    Assistenza post-vendita per garantire la tua soddisfazione
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section" ref={(el) => (sectionRefs.current[4] = el)}>
        <div className="container">
          <div className="columns">
            <div className="column">
              <video className="is-rounded" autoPlay loop muted>
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>
            <div className="column">
              <p className="title">Ecco i nostri collaboratori</p>
              <p className="subtitle">
                Vi presentiamo i nostri più storici collaboratori i veri
                ideatori di tutti i nostri proggetti. -Le Menti-
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section" ref={(el) => (sectionRefs.current[5] = el)}>
        <div className="container">
          <div className="columns">
            <div className="column">
              <ModCarousel></ModCarousel>
            </div>
          </div>
        </div>
      </div>

      <div className="section" ref={(el) => (sectionRefs.current[6] = el)}>
        <div className="container">
          <div className="columns">
            <div className="column">{/* <ThreeDProject /> */}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
