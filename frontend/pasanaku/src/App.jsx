import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/admin" element={<MainPage />} />
        <Route path="/users" element={<h1>Users</h1>} />
        <Route path="/pasanakus" element={<h1>Pasanakus</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;