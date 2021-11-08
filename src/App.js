
import './App.css';
import Description from './Profile/Description';
import Getty from './Profile/Getty.jpg';

function App() {
  const styleObject = {display:"flex",flexdirection:"columns",color:"black",justifycontent:"center",Img:"100px"}
  return (
    <div className="App" style={styleObject}>
  
      
    <Description FullName="Diaby Aboubackr Skl" Bio="Je suis Daskl, je kiffe les bons pains" Profession="Etudiant FullStack Js" Alert='Daskl' Img={Getty} alt="Getty"/>
    
    </div>
  );
}

export default App;
