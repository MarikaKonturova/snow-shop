import moonLogo from '@/assets/images/moonLogo.png'
import tree1 from '@/assets/images/tree1.png'
import tree2 from '@/assets/images/tree2.png'
import { useEffect, useState } from 'react'
import cl from './intro.module.scss'

export const Intro = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cl.container}>
      <div className={cl.bggradient} />
      <img src={tree1} className={cl.tree1}  style={{ transform: `translateY(${offsetY * 0.2}px)` }}></img>
      <img src={moonLogo} className={cl.moonLogo}  style={{ transform: `translateY(${offsetY * 0.25}px)` }}></img>

      <img src={tree2} className={cl.tree2}  style={{ transform: `translateY(${offsetY * 0.3}px)` }}></img>
      <div className={cl.snow}/>
    </div>
  )
}
