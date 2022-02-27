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

      <Chapter title="Diffrun">
        <Chapter title="forsenda">
          <p>
            Hvað gerum við til að reikna halla tölu á tilteknum punkti grafs?
            <br />
            Við vitum hvernig við reiknum halla <u>á milli tvo punkta</u>.
            <br />
            Við getum reynt að finna líklega hallatölu með þeirri vitneskju.
            <br />
          </p>
          <div className="Side">
            <GraphEmbed src="https://www.desmos.com/calculator/2on7kl4lyg" />
            <ScrollText>
              Finna hallatölu $$ =
              {"\\frac {y_\\vec{\\tiny AB}}  {x_\\vec{\\tiny AB}}"}
              $$ $$ ={"\\frac {y_2-y_1}  {x_2-x_1}"}
              $$
            </ScrollText>
          </div>
          <div className="Side">
            <GraphEmbed src="https://www.desmos.com/calculator/ydofqmv6po" />
            <ScrollText>
              Það sem gerir þessa spurningu erfiða er að þú þarft tvo punkta til
              að finna halla. Halli á tilteknum <u>punkti</u> er flóknara því
              hér höfum við bara einn punkt.
              <br />
              <br />
              En hvað ef við búum til annan punkt?
            </ScrollText>
          </div>
          <div className="Side">
            <GraphEmbed src="https://www.desmos.com/calculator/ok73aabkvq" />
            <ScrollText>
              Núna með tvo punkta (\(P\) og \(Q\)) er hægt að reikna hallatölu.
              <br />
              Þetta er samt bara hallatalan á milli punktana \(P\) og \(Q\) en
              ekki á \(P\) sjálfum, samt er þetta ágæt ágiskun á hver hallatalan
              á \(P\) væri.
              <br />
              <br />
              <LineSegment>Betur</LineSegment>
              Við getum samt gert betur. Hvað ef við færum \(Q\) nær \(P\)?
              <br />
              Það er klárlega nær hallatölunni af \(P\) heldur en áður.
              <br />
              <br />
              Flott þá vitum við hvernig á að komast nær hallatöluni af \(P\).
              <br />
              En hvað ef við færum \(Q\) þar sem \(P\) er? Er það ekki talan?
              <br />
              Nei, því þá mun koma í ljós að við erum ekki lengur með tvo
              punkta, heldur erum við aftur bara með einn.
              <br />
              Og þar sem vigur fyrir tvo sama punkta \({"\\vec{AA}"}\) er \(\vec
              0\) (núll vigur) er hallatalan \(\frac 0 0\) sem er ógild jafna.
            </ScrollText>
          </div>
          <p>
            Þetta er svo sem ekki í raun hallatalan á \(P\), en þetta er gróf
            Með punktinum sem við viljum finna, getum við valið einhvern annan
            punkt á grafinu og reikna hallatöluna á milli þeirra punkta.
            <br />
            $$
            {"h= \\frac {y_2-y_1}  {x_2-x_1}"}
            $$ Þetta er það sama og segja: $$
            {"h= \\frac {y_\\vec{\\tiny AB}}  {x_\\vec{\\tiny AB}}"}
            $$
          </p>

          <p>
            Ef þú ert eitthvað eins og ég, þá er þetta ekki voðalega
            fullnægjandi aðferð. Þó þetta getur verið eins nákvæmt og þú vilt,
            þá verður þetta í raun aldrei raunverulega talan.
            <br />
            <br />
            En með concept'ið af limits, getum við fundið hver tala er í raun.
            Limits hjálpar okkur að finna tölu sem jafna getur ekki reiknað,
            eins og þegar nefnari verður \(0\).
          </p>
          <GraphEmbed src="https://www.desmos.com/calculator/cyeiotrkzg" />
        </Chapter>

        <p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          diffrun er einfaldlega að reikna hallatölu á tilteknum punkti.
          <br />
          Það að segja getum við skrifað \(f'(x)\) til að fá hallatöluna á
          punktinum \(x\) jafnan er
        </p>
      </Chapter>
    </div>
  );
}

export default Stærðfræði;
