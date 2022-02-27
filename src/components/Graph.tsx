import { useEffect } from "react";
import { useRef } from "react";
import Desmos from "desmos";

interface IGraph {
  //Array of expressions
  expressions?: Array<any>;
  //single expression
  exp?: string;
}

function GetCalculator(divRef: React.RefObject<HTMLDivElement>): any {
  return Desmos.GraphingCalculator(divRef.current, {
    expressionsCollapsed: true,
    settingsMenu: false,
    expressions: false,
    pasteGraphLink: true,
  });
}

const Graph: React.FC<IGraph> = ({ expressions, exp }) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculator = GetCalculator(divRef);
    if (expressions !== undefined) {
      for (let i = 0; i < expressions.length; i++)
        calculator.setExpression(expressions[i]);
    } else if (exp !== undefined) {
      calculator.setExpression({ id: "graph", latex: exp });
    }
  }, [divRef, expressions, exp]);

  return <div className="Graph" ref={divRef}></div>;
};

export default Graph;
