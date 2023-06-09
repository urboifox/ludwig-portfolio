import { useEffect, useState } from "react";
import { Navbar, Loader, Home, Footer, Imprint } from "./components/";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState(null);
  // https://api.npoint.io/f836015b58737570944c (testing)
  // https://api.npoint.io/4acfc9dafe3470d0e7cb (official)
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
            element={
              <Home
                showreel={data.showreel}
                projects={data.projects}
                about={data.about}
              />
            }
          />
          <Route path=":imprint" element={<Imprint data={data.imprint} />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
