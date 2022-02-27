import CardRef from "components/CardRef";
import GraphEmbed from "components/GraphEmbed";
import LineSegment from "components/LineSegment";
import ScrollText from "components/ScrollText";
import Card from "./components/Card";
import Chapter from "./components/Chapter";
import Graph from "./components/Graph";

const x = [
  { id: "graph1", latex: "(b.yx)/(x-b.x)" },
  { id: "graph2", latex: "x=b.x", color: "gray", lineOpacity: 0.6 },
  { id: "graph3", latex: "y=b.y", color: "gray", lineOpacity: 0.6 },
  { id: "point", latex: "b=(1,1)", showLabel: true },
];

function Stærðfræði() {
  return (
    <div className="Stærðfræði">
      <Chapter title="Vigrar">
        <CardRef id="jafna" />
        <Card name="jafna">
          {"$$\\vec a \\times \\vec a = {|\\vec a|}^2$$"}
        </Card>
        <Card name="annað nafn">
          $$
          {
            "{|\\vec a+ \\vec b|}^2 = {|\\vec a|}^2 + 2 \\vec a \\vec b + {|\\vec b|}^2"
          }
          $$
        </Card>
        {/* http://mathquill.com/ */}
        {/* https://www.desmos.com/calculator/9glvxfygcv */}
        {/* https://www.desmos.com/calculator/4wd72pxlni */}
        <Chapter title="algebra">
          {"$$\\root q \\of{a^p}=a^{p \\over q}$$"}
          {"$$5^{-1}= ({ \\frac 5 1})^{-1} = { \\frac 1 5}$$"}
        </Chapter>
      </Chapter>
      <Card name="meira anfn">
        <p>
          Aðfella er bein afleiðing af því að deila með \(x\). Það er vegna þess
          að Þar sem föll reikna út öll möguleg gildi af er óhjákvæmilegt að
          \(x\) verði ekki á einhverjum punkti tala sem gerir nefnara að \(0\).
          Samkvæmt stærðfræði reglum er það ekki hægt að deila með \(0\) og þar
          af leiðandi er það gildi óþekkt. Lóðfella er rótin af nefnara (sem
          gerir nefnara = \(0\))
          {"$$\\frac{2x^2+x}{2-3x}$$"}
          Hér er aðfellan \(\frac 2 3\) því það gerir nefnaran \(0\) og má því
          rita svo: 💡
          {"\\(\\boxed{ v_f={x|x\\neq {\\frac 2 3}, x\\in R }}\\)"}
        </p>
      </Card>

      <Chapter title="Calculus">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Graph expressions={x} />
          <Card name="">
            <div style={{ width: "100%", textAlign: "center" }}>
              <h1>graph</h1>
              <p>þetta er graph</p>
            </div>
          </Card>
        </div>
      </Chapter>

    </div>
  );
}

export default Stærðfræði;
