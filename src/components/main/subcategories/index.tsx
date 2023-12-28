import downWave from '@/assets/images/down-wave.png'
import upperWave from '@/assets/images/upper-wave.png'
import cl from './subcategories.module.scss'
import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/text-field'

export const Subcategories = () => {
  return (
    <div style={{ marginTop: '500px', zIndex: 3 }}>
      <div className={cl.flexWrapper}>
        <img src={upperWave} alt="" className={cl.wave} />
        <div className={cl.container}>
          <div className={cl.subcategories}>
            <p>FireWorks</p>
            <p>Wreaths</p>
            <p>Illuminations</p>
            <p>Gift wraps</p>
            <p>Garnalds</p>
            <p>Decorations</p>
          </div>
          <div className={cl.searchGroup}>
            <TextField placeholder="What are you search?" />
            <Button>Search</Button>
          </div>
        </div>
        <img src={downWave} alt="" className={`${cl.wave} ${cl.downwave}`} />
      </div>
    </div>
  )
}
