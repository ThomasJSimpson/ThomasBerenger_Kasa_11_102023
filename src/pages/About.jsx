import Banner from "../components/Banner";
import Collapse from "../components/Collapse.jsx";
import backgroundImg from "../assets/kalen-emsley.jpg";
import Footer from "../components/Footer";

export default function About() {
  const aboutData = {
    fiabilite: ["Fiabilité", "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."],
    respect: ["Respect", "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."],
    service: ["Service", "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."],
    securité: [
      "Sécurité",
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    ],
  };

  return (
    <>
      <main className="fade-in">
        <Banner src={backgroundImg} />
        <div className="collapse-list">
          {Object.keys(aboutData).map((key) => (
            <Collapse aboutTitle={aboutData[key][0]} aboutText={aboutData[key][1]} key={key} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

// function BackgroundImage() {
//   const location = useLocation();
//   const pathname = location.pathname;
//   const parts = pathname.split("/");
//   const fileName = parts[parts.length - 1];

//   console.log("Nom du fichier : " + fileName);

//   return (
//     <div className="backgroundImage">
//       <img src={backgroundImage} alt="{mountain}-vue" />
//       <div className="overlay"></div>
//       {/* {  ? <p>Chez vous, partout et ailleurs</p>: null} */}
//     </div>
//   );
// }
