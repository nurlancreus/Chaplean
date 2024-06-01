import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import { About, Docs, OurDifference, Pricing } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="docs" />} />
          <Route path="about" element={<About />} />
          <Route path="our-difference" element={<OurDifference />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="docs" element={<Docs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
