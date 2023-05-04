import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";

function SurveyPage() {
  return (
    <div className="survey_page">
      <div className="survey_page-container">
        <div className="survey_page_title">
          <h1>The Social Media Survey</h1>
          <p>Let us know your experience with social media.</p>
        </div>
        <div>
          <form className="survey_page_form">
            <div className="survey_page_form_questions">
              <h4>Q1. How old are you?</h4>
              <div className="survey_page_form_answers survey_page_form_age">
                <label for="age">Enter Age:</label>
                <input type="number" min="1" max="130" name="age" id="age" />
              </div>
            </div>
            <div className="survey_page_form_questions">
              <h4>Q2. How do you identify?</h4>
              <div className="survey_page_form_answers survey_page_form_radio_buttons">
                <div>
                  <input type="radio" name="gender" id="woman" value="woman" />
                  <label for="woman">Woman</label>
                </div>
                <div>
                  <input type="radio" name="gender" id="man" value="man" />
                  <label for="man">Man</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="gender"
                    id="nonbinary"
                    value="nonbinary"
                  />
                  <label for="nonbinary">Non-binary</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="gender"
                    id="prefer_not_to_say"
                    value="prefer_not_to_say"
                  />
                  <label for="prefer_not_to_say">Prefer not to say</label>
                </div>
              </div>
            </div>
            <div className="survey_page_form_questions">
              <h4>Q3. Are you attached to Your Phone?</h4>

              <div className="survey_page_form_answers survey_page_form_dropdown">
                <select id="dropdown">
                  <option value="Select Answer">Select Answer</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Maybe">Maybe</option>
                </select>
              </div>
            </div>
            <div className="survey_page_form_questions">
              <h4>Q4. How many hour do you send on social media daliy?</h4>
              <div className="survey_page_form_answers survey_page_form_radio_buttons">
                <div>
                  <input
                    type="radio"
                    name="hours"
                    value="less than 1 hour"
                    id="less-than-1-hour"
                  />
                  <label for="less-than-1-hour">Less than 1 hours</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="hours"
                    value="1-2 hours"
                    id="1-2-hours"
                  />
                  <label for="1-2-hours">1-2 hours</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="hours"
                    value="3-4 hours"
                    id="3-4-hours"
                  />
                  <label for="3-4-hours">3-4 hours</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="hours"
                    value="5-6 hours"
                    id="5-6-hours"
                  />
                  <label for="5-6-hours">5-6 hours</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="hours"
                    value="6+ hours"
                    id="more-than-6-hour"
                  />
                  <label for="more-than-6-hour">More than 6 hours</label>
                </div>
              </div>
            </div>
            <div className="survey_page_form_questions">
              <h4>Q5. Which social media platforms do you spend time on?</h4>
              <div className="survey_page_form_answers  survey_page_form_checkbox_buttons">
                <div>
                  <input
                    type="checkbox"
                    name="platforms"
                    value="Facebook"
                    id="Facebook"
                  />
                  <label for="Facebook">Facebook</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="platforms"
                    value="Instagram"
                    id="Instagram"
                  />
                  <label for="Instagram">Instagram</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="platforms"
                    value="Snapchat"
                    id="Snapchat"
                  />
                  <label for="Snapchat">Snapchat</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="platforms"
                    value="Twitter"
                    id="Twitter"
                  />
                  <label for="Twitter">Twitter</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="platforms"
                    value="TikTok"
                    id="TikTok"
                  />
                  <label for="TikTok">TikTok</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="platforms"
                    value="Reddit"
                    id="Reddit"
                  />
                  <label for="Reddit">Reddit</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="platforms"
                    value="Tumblr"
                    id="Tumblr"
                  />
                  <label for="Tumblr">Tumblr</label>
                </div>
              </div>
            </div>
            <div className="survey_page_form_submit_button">
              <Link to={"/confirmation"}>
                <button>Submit</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export { SurveyPage };
