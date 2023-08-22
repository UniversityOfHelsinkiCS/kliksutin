import React from 'react'

interface SummaryEmailProps {
  showNotes: boolean
  notes: string
}

const SummaryEmailTemplate = ({ showNotes, notes }: SummaryEmailProps) => (
  <div>
    <h3>
      <strong>Curren viesti opettajalle</strong>
    </h3>
    <p>Hei</p>

    <br />

    <p>
      Kiitos Curren k&auml;ytt&auml;misest&auml; opetuksen suunnitteluun. Alta
      n&auml;et kurssillesi tekem&auml;si pedagogiset valinnat ja niit&auml;
      tukevat Helsingin yliopiston tarjoamat sovellukset. Voit nyt jatkaa
      suunnittelua perehtym&auml;ll&auml; v&auml;lineisiin tarkemmin
      opetusty&ouml;n ohjeiden avulla ja olemalla lis&auml;ksi tarvittaessa
      yhteydess&auml; opetusteknologian k&auml;yt&ouml;n tukipalveluihin.
      Kurssin arvioinnissa k&auml;ytet&auml;&auml;n
      Norppa-palautej&auml;rjestelm&auml;&auml;, jonne voit my&ouml;s
      lis&auml;t&auml; omia kysymyksi&auml;si. Linkit mainittuihin palveluihin
      l&ouml;yd&auml;t alta.
    </p>
    <p>
      Hyv&auml;&auml; jatkoa suunnitteluun! Olethan yhteydess&auml;
      opiskelijoihin ja tarpeen mukaan tukipalveluihin hyviss&auml; ajoin ennen
      kurssin alkamista.
    </p>

    <br />

    <p>*********</p>
    <p>
      Opetusty&ouml;n ohjeet:
      <a href="https://teaching.helsinki.fi/">https://teaching.helsinki.fi/</a>
    </p>
    <p>
      Moodle-aiheiset palvelupyynn&ouml;t:
      <a href="mailto:moodle@helsinki.fi">moodle@helsinki.fi</a>
    </p>
    <p>
      Muut opetusteknologiaan liittyv&auml;t palvelupyynn&ouml;t:
      <a href="mailto:opetusteknologia@helsinki.fi">
        opetusteknologia@helsinki.fi
      </a>
    </p>
    <p>
      Norppa-kurssipalautej&auml;rjestelm&auml;:
      <a href="http://coursefeedback.helsinki.fi/">
        http://coursefeedback.helsinki.fi/
      </a>
    </p>
    <p>**********</p>

    {showNotes && notes.length && (
      <>
        <p>
          <strong>Muistiinpanosi Curressa tekemist&auml;si valinnoista:</strong>
        </p>
        <i>{notes}</i>
      </>
    )}

    <br />
    <br />

    <p>
      <strong>
        Kooste Curressa tekemist&auml;si valinnoista ja
        k&auml;ytett&auml;viss&auml; olevista sovelluksista:
      </strong>
    </p>
  </div>
)

export default SummaryEmailTemplate
