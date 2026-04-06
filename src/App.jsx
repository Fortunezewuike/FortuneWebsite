import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      <Card title="Ezewuike" description="This is my Surn name" />
      <Card title="Fortune Uzoma" description="This are my other names 2" />
      <Card title="Run/cyb/25/18840" description="This is my matric number " />
    </div>
  );
}

export default App;