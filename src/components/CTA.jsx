import styles from '../style';
import Button from './Button';

const CTA = () => (
  
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Let's try this website</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}> El conocimiento nace apartir de los sentidos y se desarrolla atravéz de la razón.Siendo selectiva y sistematica en su rasgo cientifico, en cambio es radical en su forma filosofica por la especifica función que es el estudio del ser.
        El conocimiento valido es coherente. 
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  )


export default CTA