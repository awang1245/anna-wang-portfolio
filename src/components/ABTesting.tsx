import "../styles/ABTesting.css";
import verA from "../../public/ab_testing/version_A.png";
import verB from "../../public/ab_testing/version_B.png";
import timePage from "../../public/ab_testing/time_page.png";
import firstClick from "../../public/ab_testing/first_click.png";
import misclick from "../../public/ab_testing/misclicks.png";
import { useRecoilState } from "recoil";
import { isDarkState } from "./atoms";

function ABTesting() {
  const [isDark] = useRecoilState<boolean>(isDarkState);

  return (
    <>
      <main className={isDark ? "page-dark" : "page-light"}>
        <div className="ab-content">
          <section className="overview">
            <div className="grouping">
              <h1>MEDx A/B Testing</h1>
              <div className="subheading">A/B Testing | March 2024</div>
            </div>
            <div className="grouping">
              <p>
                In this project, I use A/B testing to optimize a healthcare
                platform on which users can find and schedule appointments with
                their local providers. The original webpage will be called
                Version A throughout this study, while my modified page will be
                called Version B. For users scheduling appointments, I am
                interested in seeing which version of the site offers a better
                user experience across three main metrics:
              </p>
              <ul className="details-list">
                <li>
                  <b>Time Spent on Page:</b> Time spent on the webpage to
                  complete the task for each user group.
                </li>
                <li>
                  <b>Time to First Click:</b> Time spent on the webpage before
                  the user first clicks something.
                </li>
                <li>
                  <b>Misclick Rate:</b> Frequency with which users click
                  something else on the page before finding the correct button
                  for the task.
                </li>
              </ul>
            </div>
          </section>
          <section className="process">
            <h2>Design Changes</h2>
            <div className="process-content">
              <div className="split">
                <div className="half-screen">
                  <img
                    src={verA}
                    alt="image of the original design called version A"
                  />
                  <p className="description">Version A: Original</p>
                </div>
                <div className="half-screen">
                  <img
                    src={verB}
                    alt="image of the modified design called version B"
                  />
                  <p className="description">Version B: After Changes</p>
                </div>
              </div>
              <p className="description">
                The original webpage had a number of accessibility and usability
                issues, but the ones I focused on addressing were that the
                combination of light blue and white did not have enough contrast
                and that the information was not clearly organized.
              </p>
              <p className="description">
                In Version B, the changes I made were:
              </p>
              <ul className="details-list">
                <li>
                  Added a dark background to the dates to clearly differentiate
                  this information from the other appointment details. The color
                  also draws the user's attention and creates an initial entry
                  point for users to scan the dates and narrow down their
                  options.
                </li>
                <li>
                  Changed the background color for the buttons to dark blue to
                  provide greater contrast between the background and the text.
                  Appointment information on a white background was changed to
                  black to similarly help with readability.
                </li>
                <li>
                  Increased the spacing between each appointment and added a box
                  shadow to each to better visually distinguish all of the
                  appointments from each other and the background.
                </li>
              </ul>
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
              <p className="description-top">
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
              <p className="description-top">
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
              <p className="description-top">
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
                When collecting the data for each version of the site, a group
                of around twenty people were asked to complete the following
                task:{" "}
                <b>
                  Schedule an appointment with Adam Ng, MD at Morristown Medical
                  Center on April 23, 2024.
                </b>
              </p>
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
                <div className="test-results">
                  <img src={timePage} />
                </div>
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
              </div>
            </div>
            <div className="process-content">
              <h3>Time to First Click</h3>
              <div className="test">
                <div className="test-results">
                  <img src={firstClick} />
                </div>
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
                      threshold of ~2. We also obtain a P-value of
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
              </div>
            </div>
            <div className="process-content">
              <h3>Misclick Rate</h3>
              <div className="test">
                <div className="test-results">
                  <img src={misclick} />
                </div>
                <div className="analysis">
                  <p className="description">
                    I decided to use a chi-squared test for this metric, as we
                    are working with categorical data (did_misclick: True or
                    False) to evaluate whether there is a lower misclick rate
                    for Version B than A.
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
              </div>
            </div>
          </section>
          <section className="process">
            <h2>Summary Statistics</h2>
            <p className="description">
              For all three metrics, the summary statistics indicate that
              Version B performed better than Version A. On average, users spent
              less than a quarter of the time to complete the task on Version B
              (8.46 seconds) compared to A (36.14 seconds). The variance in the
              data was also significantly less, further indicating that more
              users were able to schedule their desired appointments more
              quickly. It took users an average of 14.48 seconds to make their
              first click on Version A and 5.15 seconds on B, suggesting that
              Version B enabled users to more quickly able to understand the
              layout and information on the page and begin executing their task.
              Although some of the data points could be a product of stray
              clicks, the lower variance helps reinforce our conclusion as our
              sample data for B is more tightly centered around the mean.
              Lastly, for misclick rate, 50% of users made a misclick on Version
              A, while only 16% of users misclicked on B, showing that users
              were able to better navigate and accurately perform tasks on the
              page, which could be attributed to the improved color contrast and
              organization of appointments.
            </p>
          </section>
          <section className="conclusion">
            <h2>Conclusion</h2>
            <p className="description">
              When learning about the design process at the beginning of the
              course, we saw how crucial it was to do plenty of testing, as it
              appeared multiple times especially leading into the later stages.
              This project helped reinforce my understanding of and see
              firsthand the importance of testing, especially the statistics it
              can provide in helping you improve your product across different
              metrics.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
export default ABTesting;
