import { Carousel } from 'react-responsive-carousel'
import { useInView } from 'react-intersection-observer'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  return (
    <>
      <section className="hero is-fullheight ">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Benvenuti su GaraStore</h1>
            <h2 className="subtitle">
              Scopri le ultime novità in fatto di design e tecnologia
            </h2>
          </div>
        </div>
      </section>

      <section className={`section ${inView ? 'zoom-in' : ''}`} ref={ref}>
        <div className="container">
          <Carousel>
            <div>
              <img src="https://troianiortodonzia.it/wp-content/uploads/2016/10/orionthemes-placeholder-image.png" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="https://troianiortodonzia.it/wp-content/uploads/2016/10/orionthemes-placeholder-image.png" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="https://troianiortodonzia.it/wp-content/uploads/2016/10/orionthemes-placeholder-image.png" />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  )
}

export default Home
