import { Cards, Subcategories } from '@/components/main'
import { Intro } from '@/components/main/intro'
import cl from './main-page.module.scss'

export const MainPage = () => {
  return (
   <div className={cl.container} style={{minHeight:'100vh'}}>
   <Intro/>
    <Subcategories/>
    <Cards/>
<div style={{height: '100vh'}}></div>
</div>

  )
}
