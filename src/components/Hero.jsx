import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} `}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">10%</span> Descuento En{" "}
            <span className="text-white">Webpack</span> / 2023
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-montserrat font-bold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            La Siguiente{" "}
            <br
              className="sm:block 
              hidden"
            />{" "}
            <span className="text-gradient">Generación Diseño &</span>{" "}
            <br
              className="sm:block 
              hidden"
            />{" "}
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-montserrat font-bold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          Desarrollo Web.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Este Sitio web es una muestra de lo que en el año 2023 podría ser el
          sitio web de tu empresa, emprendimiento ó negocio desarrollado con
          tecnologías literalmente nueva ReactJS, TailwindCss, con las que se
          desarrollan plataformas como facebook, airbnb.
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img src={robot} alt="billing" className="w-[10]" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[40%] h-[35%] top-0 blue__gradient" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 white__gradient" />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
