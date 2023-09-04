import Particles from "react-tsparticles";
import PartcilesConfig from "./config/particles-config";
import { loadFull } from "react-tsparticles";


export default function ParticleBackground() {
	const particlesInit = async (main) => {
		console.log(main);
		await loadFull(main);
	};
	const particlesLoaded = (container) => {
		console.log(container);
	};
	return (
		<Particles
			params={PartcilesConfig}
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
		/>
	);
}

/* const PARTICLEB =() =>{
  return(
    <Particles params={PartcilesConfig}>

    </Particles>
  )
} */

























//======================================
/* import { useEffect } from "react";
import particlesJS from "particles.js";

const ParticleBackground = () => {
  useEffect(() => {
    particlesJS.load("particles-js", "particles-config.json");
  }, []);
  return (
    <div
      id="particles-js"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    ></div>
  );
};

export default ParticleBackground;
 */