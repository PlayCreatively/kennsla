import Chapter from "components/Chapter";
import GraphEmbed from "components/GraphEmbed";
import LineSegment from "components/LineSegment";
import ScrollText from "components/ScrollText";

const Diffrun = () => {
  return (
    <Chapter title="Diffrun">
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
          Það sem gerir þessa spurningu erfiða er að þú þarft tvo punkta til að
          finna halla. Halli á tilteknum <u>punkti</u> er flóknara því hér höfum
          við bara einn punkt.
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
          Þetta er samt bara hallatalan á milli punktana \(P\) og \(Q\) en ekki
          á \(P\) sjálfum. Þrátt fyrir það er þetta ágæt ágiskun og skref í
          rétta átt til að finna hver hallatalan á \(P\) er.
          <br />
          <br />
          <LineSegment>Við getum gert betur</LineSegment>
          Hvað ef við færum \(Q\) nær \(P\)?
          <br />
          Það er klárlega nær hallatölunni af \(P\) heldur en áður.
          <br />
          <br />
          Flott þá vitum við hvernig á að komast nær hallatöluni af \(P\).
          <br />
          En hvað ef við færum \(Q\) þar sem \(P\) er? Er það ekki talan?
          <br />
          Nei, því þá mun koma í ljós að við erum ekki lengur með tvo punkta,
          heldur erum við aftur bara með einn.
          <br />
          Og þar sem vigur fyrir tvo sama punkta \({"\\vec{AA}"}\) er \(\vec 0\)
          (núll vigur) er hallatalan því \(\frac 0 0\), sem er ógild jafna.
        </ScrollText>
      </div>
      <p>
        Þetta er hinsvegar ekki í raun hallatalan á \(P\), en þetta er gróft
        estimate
      </p>

      <p>
        Ef þú ert eitthvað eins og ég, þá er þetta ekki voðalega fullnægjandi
        aðferð og gætir séð þetta sem einhver sadistic brandari beint á OCD
        þolendur. Þó þetta getur verið eins nákvæmt og þú vilt, þá verður þetta
        í raun aldrei nákvæmlega talan.
        <br />
        <br />
        En með concept'ið af limits, getum við fundið hver talan er í raun.
        Limits hjálpar okkur að finna tölu sem jafnan stefnir að.
      </p>
      <GraphEmbed src="https://www.desmos.com/calculator/cyeiotrkzg" />

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
  );
};

export default Diffrun;
