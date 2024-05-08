import { useState, useEffect } from 'react'
import { Card, Content, Heading, Icon, Button } from 'react-bulma-components'
import {
  FaHeadset,
  FaInfoCircle,
  FaPaintBrush,
  FaArrowRight,
  FaArrowLeft,
  FaCreditCard,
  FaTruck,
  FaUndo,
} from 'react-icons/fa'

const ModCarousel = () => {
  const [groupIndex, setGroupIndex] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  const cardGroups = [
    [
      {
        icon: FaHeadset,
        title: 'Assistenza',
        description: "Dopo l'acquisto non verrai lasciato solo.",
      },
      {
        icon: FaInfoCircle,
        title: 'Informazioni',
        description: 'Chiedici informazioni quando vuoi.',
      },
      {
        icon: FaPaintBrush,
        title: 'Personalizzazione',
        description: 'Scegli il prodotto che più ti piace, come ti piace.',
      },
    ],
    [
      {
        icon: FaCreditCard,
        title: 'Pagamenti',
        description: 'Pagamenti sicuri e certificati.',
      },
      {
        icon: FaTruck,
        title: 'Consegna',
        description: 'Consegna rapida e sicura.',
      },
      {
        icon: FaUndo,
        title: 'Resi',
        description: 'Resi facili e veloci.',
      },
    ],
  ]
  useEffect(() => {
    const transitionTimer = setTimeout(() => {
      if (transitioning) {
        setTransitioning(false)
      }
    }, 1000)

    const changeGroupTimer = setInterval(() => {
      setTransitioning(true)
      setGroupIndex((groupIndex + 1) % cardGroups.length)
    }, 2000)

    return () => {
      clearTimeout(transitionTimer)
      clearInterval(changeGroupTimer)
    }
  }, [transitioning, groupIndex, cardGroups.length])
  const handlePrevClick = () => {
    setTransitioning(true)
    setGroupIndex((groupIndex - 1 + cardGroups.length) % cardGroups.length)
  }

  const handleNextClick = () => {
    setTransitioning(true)
    setGroupIndex((groupIndex + 1) % cardGroups.length)
  }

  return (
    <div>
      <div className="columns is-multiline">
        {cardGroups[groupIndex].map((card, index) => (
          <div
            key={index}
            className={`column is-one-third ${
              transitioning ? 'card-fade' : ''
            }`}
          >
            <Card className="card-padding background-alt">
              <Card.Content>
                <Content>
                  <Icon color="white">
                    <card.icon style={{ fontSize: '200px' }} />
                  </Icon>
                  <Heading>{card.title}</Heading>
                  <p>{card.description}</p>
                </Content>
              </Card.Content>
            </Card>
          </div>
        ))}
      </div>
      <div className="has-text-centered">
        <Button onClick={handlePrevClick} className="round-arrow mr-1">
          <FaArrowLeft />
        </Button>
        <Button onClick={handleNextClick} className="round-arrow">
          <FaArrowRight />
        </Button>
      </div>
    </div>
  )
}

export default ModCarousel
