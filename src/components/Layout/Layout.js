import React from "react";
import Aux from "../../hoc/Aux";

const layout = () => (
  <Aux>
    <div>Toolbar, Side-drawer,Backdrop</div>
    <main>{props}</main>
  </Aux>
);

export default layout;
