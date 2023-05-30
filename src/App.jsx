import { useEffect, useState } from "react";
import { Navbar, Loader, Home, Footer, Imprint } from "./components/";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios("https://api.npoint.io/4acfc9dafe3470d0e7cb").then((res) =>
      setData(res.data)
    );
  }, []);

  if (data === null) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <main className="bg-background paddingX">
        <Navbar data={data.nav} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                showreel={data.showreel}
                projects={data.projects}
                about={data.about}
              />
            }
          />
          <Route path="/imprint" element={<Imprint />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
