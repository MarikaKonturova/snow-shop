import { Button } from '@/components/ui/button'
import cl from './card.module.scss'
import { ChristmasGift } from '@/assets/icons'
import cardExample from '@/assets/images/cardExample.png'
export const Card = () => {
  return (
    <div className={cl.container}>
      <div className={cl.imgContainer}>
        <img src={cardExample} alt="card image" />
      </div>
      <div className={cl.textGroup}>
        <p className={cl.description}>Some pretty package</p>
        <p className={cl.price}>1000$</p>
      </div>

      <div className={cl.buttonGroup}>
        <Button className={cl.button}>More Info</Button>
        <Button variant="secondary">
          <ChristmasGift />
        </Button>
      </div>
    </div>
  )
}
