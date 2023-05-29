import { useEffect, useState } from "react";
import {
  Navbar,
  Loader,
  Showreel,
  Projects,
  About,
  Footer,
} from "./components";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios("https://api.npoint.io/f836015b58737570944c").then((res) =>
      setData(res.data)
    );
  }, []);

  if (data === null) {
    return <Loader />;
  }

  return (
    <main className="bg-background paddingX">
      <Navbar data={data.nav} />
      <Showreel />
      <Projects data={data.projects} />
      <About data={data.about} />
      <Footer />
    </main>
  );
}

export default App;
