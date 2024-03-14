import "../styles/ABTesting.css";
import verA from "../../public/version_A.png";
import verB from "../../public/version_B.png";
import timePageRes from "../../public/time_page_results.png";
import firstClickRes from "../../public/first_click_results.png";
import misclickRes from "../../public/misclick_results.png";
import misclickData from "../../public/misclick_data.png";

function ABTesting() {
  return (
    <>
      <main className="ab">
        <div className="ab-content">
          <section className="overview">
            <div className="grouping">
              <h1>MEDx A/B Testing</h1>
              <div className="subheading">A/B Testing | March 2024</div>
            </div>
            <div className="grouping">
              <p>
                In this project, I am working to optimize a healthcare platform
                on which users can find and schedule appointments with their
                local providers. The original webpage will be called Version A
                throughout this study, while my modified page will be called
                Version B. Using A/B testing, I am interested in seeing which
                site offers a better user experience across three main metrics:
                time spent on page, time to first click, and misclick rate.
              </p>
              <p>
                For each version, a group of around twenty people were asked to
                complete the task:{" "}
                <b>
                  Schedule an appointment with Adam Ng, MD at Morristown Medical
                  Center on April 23, 2024.
                </b>
              </p>
            </div>
            <div className="split">
              <div className="half-screen">
                <img
                  src={verA}
                  alt="image of the original design called version A"
                />
                <p className="description">Version A: Before changes</p>
              </div>
              <div className="half-screen">
                <img
                  src={verB}
                  alt="image of the modified design called version B"
                />
                <p className="description">Version B: After changes</p>
              </div>
            </div>
          </section>
          <section className="process">
            <h2>Creating Hypotheses</h2>
            <div className="process-content">
              <h3>Time on Page</h3>
              <p className="description">
                This metric is defined as the time spent on the webpage to
                complete the task for each user group.
              </p>
              <ul className="details-list">
                <li>
                  <b>Null Hypothesis:</b> There will be no difference in the
                  time spent on the webpage for Version A and Version B.
                </li>
                <li>
                  <b>Alternative Hypothesis:</b> Less time will be spent on the
                  page for Version B than for Version A.
                  <ul className="nested-list">
                    <li>
                      The increased contrast and clearer organization of
                      information will allow users to more quickly locate and
                      select their desired appointment.
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="description">
                I predict that I will reject the null hypothesis since the
                modified layout for Version B provides clearer visual separation
                between each appointment and the information within each
                appointment, enabling users to more easily understand and
                navigate the web page.
              </p>
            </div>
            <div className="process-content">
              <h3>Time to First Click</h3>
              <p className="description">
                This metric is defined as the time spent on the webpage before
                the user first clicks something.
              </p>
              <ul className="details-list">
                <li>
                  <b>Null Hypothesis:</b> There will be no difference in the
                  time until the first click between Version A and Version B.
                </li>
                <li>
                  <b>Alternative Hypothesis:</b> Less time will elapse before
                  the user’s first click on Version B compared to Version A.
                  <ul className="nested-list">
                    <li>
                      Each appointment and the details within each appointment
                      are more clearly delineated and displayed, so users can
                      quickly grasp the webpage and search for their
                      appointment.
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="description">
                I predict that I will reject the null hypothesis since the
                higher color contrast, box shadows, and cleaner organization of
                information all contribute to the user more quickly being able
                to find what they are looking for. The dark blue background
                around the dates will serve as an entry point for users to
                quickly start finding their appointment.
              </p>
            </div>
            <div className="process-content">
              <h3>Misclick Rate</h3>
              <p className="description">
                This metric is defined as the frequency with which users click
                something else on the page before finding the correct button for
                the task.
              </p>
              <ul className="details-list">
                <li>
                  <b>Null Hypothesis:</b> There will be no difference in the
                  misclick rate between Version A and Version B.
                </li>
                <li>
                  <b>Alternative Hypothesis:</b> There will be a lower misclick
                  rate for Version B than Version A.
                  <ul className="nested-list">
                    <li>
                      There is a greater color contrast in each appointment’s
                      information and buttons, increasing readability and user
                      accuracy.
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="description">
                I predict that I will reject the null hypothesis as the
                increased contrast enables users to more clearly identify and
                select the information they need.
              </p>
            </div>
          </section>
          <section className="process">
            <h2>Statistical Tests</h2>
            <div className="process-content">
              <p className="description">
                For all three of my tests, I used an alpha of 0.05, the
                threshold at which we reject the null hypothesis. If there is a
                less than 5% chance that there is no difference between Version
                A and B, or alternately if there is a greater than 95% chance
                that there is a difference between Version A and B, then we
                determine that we have a statistically significant difference in
                our metric and should reject the null hypothesis.
              </p>
            </div>
            <div className="process-content">
              <h3>Time on Page</h3>
              <div className="test">
                <div className="analysis">
                  <p className="description">
                    I decided to use a one-tailed t-test for this metric, as we
                    are working with continuous data (time) to evaluate whether
                    users spend less time on the page for Version B compared to
                    A.
                  </p>
                  <ul className="details-list">
                    <li>
                      We get a T-score of 9.157774453, which exceeds the
                      threshold of ~2. We also obtain a P-value of
                      0.0000000010975189, which falls below the threshold of
                      0.05.
                    </li>
                    <li>
                      Both values indicate that there is a statistically
                      significant difference in the time users spent on the page
                      to complete the task for Version A and B.
                    </li>
                    <li>
                      Thus, we reject the null hypothesis that there will be no
                      difference in the time spent on the webpage for Version A
                      and B.
                    </li>
                  </ul>
                </div>
                <div className="test-results">
                  <img src={timePageRes} />
                </div>
              </div>
            </div>
            <div className="process-content">
              <h3>Time to First Click</h3>
              <div className="test">
                <div className="analysis">
                  <p className="description">
                    I decided to use a one-tailed t-test for this metric, as we
                    are working with continuous data (time) to evaluate whether
                    users take less time to perform their first click on Version
                    B than A.
                  </p>
                  <ul className="details-list">
                    <li>
                      We obtained a T-score of 5.230325613, which exceeds the
                      threshold of ~2 We also obtain a P-value of
                      0.000008520042382, which falls below the threshold of 0.5.
                    </li>
                    <li>
                      Both values indicate that there is a statistically
                      significant difference in the time it took users to first
                      click something for Version A and B.
                    </li>
                    <li>
                      Thus, we reject the null hypothesis that there will be no
                      difference in the time until the first click between
                      Version A and B.
                    </li>
                  </ul>
                </div>
                <div className="test-results">
                  <img src={firstClickRes} />
                </div>
              </div>
            </div>
            <div className="process-content">
              <h3>Misclick Rate</h3>
              <div className="test">
                <div className="analysis">
                  <p className="description">
                    I decided to use a chi-squared test for this metric, as we
                    are working with categorical data (did_misclick: T or F) to
                    evaluate whether there is a lower misclick rate for Version
                    B than A.
                  </p>
                  <ul className="details-list">
                    <li>
                      We get a high chiˆ2 value of 6.906744868 and a p-value of
                      0.008587118222, which falls below the threshold of 0.05,
                      indicating that there is a statistically significant
                      difference in the misclick rate between Version A and B.
                    </li>
                    <li>
                      Thus, we reject the null hypothesis that there will be no
                      difference in the misclick rate between Version A and
                      Version B.
                    </li>
                  </ul>
                </div>
                <div className="test-results">
                  <img src={misclickData} />
                  <img src={misclickRes} />
                </div>
              </div>
            </div>
          </section>
          <section className="process">
            <h2>Summary Statistics</h2>
            <p className="description">
              This project was valuable both as an intensive exercise in
              responsive design and revisit to a site from my childhood. Through
              each stage, I was able to engage much more deeply with the design
              process, from considering the needs of Beestar's users to
              iterating through multiple designs and to finally developing a
              site that was both responsive and accessible. If I have a chance
              to revisit this project in the future, I would love to improve
              upon my tablet and mobile designs, and also get feedback from
              actual Beestar users.
            </p>
          </section>
          <section className="conclusion">
            <h2>Conclusion</h2>
            <p className="description">
              This project was valuable both as an intensive exercise in
              responsive design and revisit to a site from my childhood. Through
              each stage, I was able to engage much more deeply with the design
              process, from considering the needs of Beestar's users to
              iterating through multiple designs and to finally developing a
              site that was both responsive and accessible. If I have a chance
              to revisit this project in the future, I would love to improve
              upon my tablet and mobile designs, and also get feedback from
              actual Beestar users.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
export default ABTesting;
