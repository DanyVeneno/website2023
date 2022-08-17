import {card} from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

const CardDeal = () => (
  
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Improve your commercial <br  className='sm:block hidden'/> digital ecosystem.

      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      En la actualidad la forma de relacionarnos comercialmente es atrávez de herramientas digitales las cuales nos sirven para conectar con nuevos prospectos a clientes además de crear valor a las personas que buscan nuestros productos y/o servicios en linea.
      
      </p>
      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]' />

    </div>

  </section>
  )
export default CardDeal