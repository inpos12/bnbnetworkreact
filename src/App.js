/* eslint-disable */
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../src/Parts/Screen/Home/Home.js";
import SubPage1_1 from "./Parts/Screen/SubPage1/SubPage1_1/SubPage1_1.js";
import SubPage1_2 from "./Parts/Screen/SubPage1/SubPage1_2/SubPage1_2.js";
import SubPage2_1 from "./Parts/Screen/SubPage2/SubPage2_1/SubPage2_1.js";
import SubPage2_2 from "./Parts/Screen/SubPage2/SubPage2_2/SubPage2_2.js";
import SubPage2_3 from "./Parts/Screen/SubPage2/SubPage2_3/SubPage2_3.js";
import SubPage2_4 from "./Parts/Screen/SubPage2/SubPage2_4/SubPage2_4.js";
import SubPage2_5 from "./Parts/Screen/SubPage2/SubPage2_5/SubPage2_5.js";
import SubPage3_1 from "./Parts/Screen/SubPage3/SubPage3_1/SubPage3_1.js";
import SubPage4_1 from "./Parts/Screen/SubPage4/SubPage4_1/SubPage4_1.js";
import SubPage5_1 from "./Parts/Screen/SubPage5/SubPage5_1/SubPage5_1.js";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SubPage1-1" element={<SubPage1_1 />} />
        <Route path="/SubPage1-2/" element={<SubPage1_2 />} />
        <Route path="/SubPage2-1" element={<SubPage2_1 />} />
        <Route path="/SubPage2-2" element={<SubPage2_2 />} />
        <Route path="/SubPage2-3" element={<SubPage2_3 />} />
        <Route path="/SubPage2-4" element={<SubPage2_4 />} />
        <Route path="/SubPage2-5" element={<SubPage2_5 />} />
        <Route path="/SubPage3-1" element={<SubPage3_1 />} />
        <Route path="/SubPage4-1" element={<SubPage4_1 />} />
        <Route path="/SubPage5-1" element={<SubPage5_1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
