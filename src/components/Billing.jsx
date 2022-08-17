import {apple, bill, google} from '../assets';
import styles, {layout} from '../style';


const Billing = () => (

<section id='product' className={layout.sectionReverse}>
  <div className={layout.sectionImgReverse}>
    <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
  <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
  <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
  </div>

  <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>Aún la mejor estrategia <br className='sm:block hidden'/> es hacerlo.</h2>

    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    Los negocios están bajo presión que se intensifica. Nuevos enfoques, facilitados por tecnologías exponenciales y la liberalización de las políticas públicas, están reduciendo las barreras de entrada a una escala global. Los nuevos que ingresan pueden rápidamente escalar negocios que a los tradicionales les llevó décadas construir. Como resultado, en muchos mercados la competencia se está incrementando, y los ciclos de vida de los productos se están comprimiendo. 
    </p>

    <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
      <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
      <img src={apple} alt="google_play" className='w-[128px] h-[42px] object-contain  cursor-pointer' />

    </div>

  </div>

</section>
)
  
    
  


export default Billing