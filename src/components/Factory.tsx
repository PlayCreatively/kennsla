//https://dev.to/shadid12/react-js-with-factory-pattern-building-complex-ui-with-ease-1ojf

import React, { ReactNode } from "react";
import Graph from "./Graph";



function Factory({ component }: { component: IFactorySupplement }) {
  var comp = React.createFactory(component.type);
  return comp(
    null,
      component.children?.map((child) => <Factory component={child.getFacSup} />)
  );

  switch (component.type) {
    case typeof Graph:
      return <Graph />;
    default:
      return <div>Reload...</div>;
  }
}

export default Factory;
