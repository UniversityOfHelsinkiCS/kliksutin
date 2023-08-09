import { UpcomingCoursesWithEntries } from '@backend/types'

const generateReminderEmail = (entry: UpcomingCoursesWithEntries) =>
  ` \
  <div> \
    <h3> \
      <strong> \
        Curren muistutus valinnoista kurssille: ${entry.courseData.name.fi}
      </strong> \
    </h3> \
    <p>
      Hei
    </p> \
    <p>
      Olit valinnut s&auml;hk&ouml;postimuistutuksen tekemist&auml;si valinnoista. 
      Voit tarkastella valintojasi suoraan selaimella
        <a href="https://curre.helsinki.fi/view/${entry.id}"> \
          Curressa. \
        </a>
    </p> \
    <p>
      *********
      Opetusty&ouml;n ohjeet: \
      <a href="https://teaching.helsinki.fi/"> \
        https://teaching.helsinki.fi/ \
      </a> \
    </p> \
    <p>
      Moodle-aiheiset palvelupyynn&ouml;t: \
      <a href="mailto:moodle@helsinki.fi"> \
        moodle@helsinki.fi \
      </a> \
    </p> \
    <p>
      Muut opetusteknologiaan liittyv&auml;t palvelupyynn&ouml;t: \
      <a href="mailto:opetusteknologia@helsinki.fi"> \
        opetusteknologia@helsinki.fi \
      </a> \
    </p> \
    <p>
      Norppa-kurssipalautej&auml;rjestelm&auml;: \
      <a href="http://coursefeedback.helsinki.fi/"> \
        http://coursefeedback.helsinki.fi/ \
      </a>
      ********** 
    </p> \
  </div> \
  `

export default generateReminderEmail
