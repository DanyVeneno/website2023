import {feedback} from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => (
  
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>

      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 
      relative z-[1]'>
        <h1 className={styles.heading2}>
          What awesome people 
          <br className='sm:block hidden' /> 
          belong our team.
        </h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[470px]`}>
          Afortunada o desafortunadamente  este modelo apenas esta empezando la curva de aprendizaje se vuelve compleja al querer destacar y ser una opción de entre las miles que existen el cambio es inminente y desafiante entre el dilema de la transformación y la fase de la negación la insertidumbre nos inunda todo cambio implica desaprender.

          </p>

        </div>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container realtive z-[1]'>
          {feedback.map((card)=>(
            <FeedbackCard key={card.id} {...card} />
          ))}
      </div>
    </section>
  )


export default Testimonials