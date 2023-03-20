import React from "react";
import SiteRoot from "../root";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<SiteRoot />}>
        <Route index element={<Home />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  );
};

export default Routing;
