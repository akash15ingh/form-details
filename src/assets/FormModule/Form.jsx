import {useState} from 'react'

const Form = () => {
  const initialValues = {
    email: "",
    fullName: "",
    age: "",
    collegeName: "",
    study: "",
    canadaInstitute: "",
    studyProgram: "",
    country: "",
    goals: "",
    listenScore: "",
    readScore: "",
    speakScore: "",
    writeScore: "",
    tuitionFee: "",
    gic: "",
    paidAmount: "",
    highestStudy:"",
  };

  const [formData, setFormData] = useState(initialValues);
  const [selectedOption, setSelectedOption] = useState(null); // Default selected option is 'yes'
  const [selectedOptionFee, setSelectedOptionFee] = useState(null); // Default selected option is 'yes'
  const [selectedDropDownOption, setSelectedDropDownOption] = useState(null);

  const inputhandler = (e) => {
    console.log(e.target.name, e.target.value);
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  };

  const handleGicRadio = (event) => {
    console.log(event.target.name, event.target.value);
    setSelectedOption(event.target.value);
    setFormData({
      ...formData,
      ["gic"]: event.target.value,
    });
  };
  const handleTutionFeeRadio = (event) => {
    console.log(event.target.name, event.target.value);
    setSelectedOptionFee(event.target.value);
    setFormData({
      ...formData,
      ["tuitionFee"]: event.target.value,
    });
  };
   
 const dropDownoption = (e) => {
  console.log(e.target.value)
   setSelectedDropDownOption(e.target.value);
    setFormData({
      ...formData,
      ["highestStudy"]: e.target.value,
    });
 };
   
  return (
    <>
      <form className="form">
        <h2>CONTACT US</h2>
        <p type="Email:">
          <input
            type="email"
            required
            placeholder="Enter your Email here.."
            onChange={inputhandler}
            name="email"
            value={formData.email}
          />
        </p>
        <p type="Full Name:">
          <input
            type="text"
            required
            placeholder="Enter name here.."
            minLength={3}
            name="fullName"
            value={formData.fullName}
            onChange={inputhandler}
          />
        </p>
        <p type="Age">
          <input
            type="number"
            required
            placeholder="Your age here.."
            name="age"
            value={formData.age}
            onChange={inputhandler}
          />
        </p>
        <p type="Highest Level of Education">
          <div className="custom-select" >
            <select required placeholder="Choose" onChange={dropDownoption} value={selectedDropDownOption} name="highestStudy">
              <option value="">---Choose---</option>
              <option value="Grade 12">Grade 12</option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelors of degree">Bachelors of degree</option>
              <option value="Masters">Masters Degree</option>
              <option value="Phd">PhD</option>
            </select>
          </div>
        </p>
        <p type="Insititute name of highest level of education">
          <input
            type="text"
            required
            placeholder="Your institute here.."
            name="collegeName"
            value={formData.collegeName}
            onChange={inputhandler}
          />
        </p>
        <p type="Field of Study?">
          <input
            type="text"
            required
            placeholder="What did you study?.."
            name="study"
            value={formData.study}
            onChange={inputhandler}
          />
        </p>
        <p type="Your institute name in canada?">
          <input
            type="text"
            required
            placeholder="Institute you got admitted in canada.."
            name="canadaInstitute"
            value={formData.canadaInstitute}
            onChange={inputhandler}
          />
        </p>
        <p type="Your program of study in canada">
          <input
            type="text"
            required
            placeholder="program of study in canada.."
            name="studyProgram"
            value={formData.studyProgram}
            onChange={inputhandler}
          />
        </p>
        <p type="Country you are applying from?">
          <input
            type="text"
            required
            placeholder="Your answer.."
            name="country"
            value={formData.country}
            onChange={inputhandler}
          />
        </p>
        <p type="What are your future goals">
          <input
            type="text"
            required
            placeholder="Your answer.."
            name="goals"
            value={formData.goals}
            onChange={inputhandler}
          />
        </p>
        <p type="English Scores-Listening?">
          <input
            type="number"
            required
            placeholder="Score?.."
            name="listenScore"
            value={formData.listenScore}
            onChange={inputhandler}
          />
        </p>
        <p type="English Scores-Reading?">
          <input
            type="number"
            required
            placeholder="Score?.."
            name="readScore"
            value={formData.readScore}
            onChange={inputhandler}
          />
        </p>
        <p type="English Scores-Speaking?">
          <input
            type="number"
            required
            placeholder="Score?.."
            name="speakScore"
            value={formData.speakScore}
            onChange={inputhandler}
          />
        </p>
        <p type="English Scores-Writing?">
          <input
            type="number"
            required
            placeholder="Score?.."
            name="writeScore"
            value={formData.writeScore}
            onChange={inputhandler}
          />
        </p>
        <p type="Did you pay your first year tuition">
          <input
            type="radio"
            value="yes"
            name="tutionFee"
            checked={selectedOptionFee === "yes"}
            onChange={handleTutionFeeRadio}
          />
          <lable>Yes</lable>
          <input
            type="radio"
            name="tutionFee"
            value="no"
            checked={selectedOptionFee === "no"}
            onChange={handleTutionFeeRadio}
          />
          <label>No</label>
        </p>
        <p type="How much fee did you pay">
          <input
            type="number"
            required
            name="feePay"
            value={formData.feePay}
            onChange={inputhandler}
          />
        </p>
        <p type="Did you do a GIC">
          <input
            type="radio"
            value="yes"
            name="gic"
            checked={selectedOption === "yes"}
            onChange={handleGicRadio}
          />
          <lable>Yes</lable>
          <input
            type="radio"
            name="gic"
            value="no"
            checked={selectedOption === "no"}
            onChange={handleGicRadio}
          />
          <label>No</label>
          <p type="How much did you pay">
            <input
              type="number"
              required
              name="paidAmount"
              value={formData.paidAmount}
              onChange={inputhandler}
            />
          </p>
        </p>

        <p type="Say about your relevant work Experience">
          <textarea
            placeholder="Incluse Job-title,company name,job duties"
            name="workExperience"
            value={formData.workExperience}
            rows="4"
            cols="50"
            onChange={inputhandler}
          ></textarea>
        </p>
        <button
          onClick={() => {
            console.log(formData, "➕");
          }}
        >
          Send Message
        </button>
      </form>
    </>
  );
}

export default Form


