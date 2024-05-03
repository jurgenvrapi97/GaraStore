import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const center = {
  lat: 42.9001,
  lng: 13.8622,
}

function SetViewOnClick({ coords }) {
  const map = useMap()
  map.setView(coords, map.getZoom())

  return null
}

const About = () => {
  return (
    <div className="container">
      <div className="columns is-flex-direction-column">
        <div className="column ">
          <h1 className="title">Informazioni sull'azienda</h1>
          <p className="has-text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            purus feugiat, molestie ipsum et, consequat nibh. Nullam vitae
            feugiat libero.
          </p>
          <p className="has-text-white">
            Indirizzo: Via Example 123, Città, Stato
          </p>
          <p className="has-text-white">Telefono: 123-456-7890</p>
          <p className="has-text-white">Email: info@azienda.com</p>
          <div className="buttons are-large mt-2">
            <a
              className="button is-white"
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <FaFacebook />
              </span>
            </a>
            <a
              className="button is-white"
              href="https://www.twitter.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <FaTwitter />
              </span>
            </a>
            <a
              className="button is-white"
              href="https://www.instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <FaInstagram />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <h1 className="title">Mappa</h1>
          <MapContainer
            center={center}
            zoom={15}
            style={{ height: '800px', width: '100%' }}
          >
            <SetViewOnClick coords={center} />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
          </MapContainer>
        </div>
      </div>
    </div>
  )
}

export default About
