import ShopItemFunc from './Components/ShopItemFunc/ShopItemFunc';
import logo from './logo.svg';
import './App.css';
import ContentModel from './Models/ContentModel';

function App() {
  const item = new ContentModel({
    name: "Tiger of Sweden",
    title: "Leonard coat",
    description: "Minimalistic coat in cotton-blend",
    descriptionFull:
      "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
    price: 399,
    currency: "£",
  });

  return (
    <div className="App">
      <ShopItemFunc item={item} />
    </div>
  );
}

export default App;
