import { useState, useEffect } from "react";
import { emptyForm, todayString, validateEnquiry } from "../js";

function EnquiryForm({ destinations, preselected }) {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // When a visitor clicks "Enquire about this place", fill in the destination
  useEffect(() => {
    if (preselected) {
      setValues((v) => ({ ...v, destination: preselected.name }));
      setErrors((e) => ({ ...e, destination: "" }));
      setSubmitted(false);
    }
  }, [preselected]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    // Clear the error for this field as the visitor fixes it
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validateEnquiry(values);
    setErrors(foundErrors);

    if (Object.keys(foundErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const handleNewEnquiry = () => {
    setValues(emptyForm);
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section className="enquiry" id="enquiry">
        <div className="confirmation" role="status">
          <h2>Thank you, {values.fullName.trim()}!</h2>
          <p>
            We received your enquiry about {values.destination} for {values.visitors}{" "}
            visitor(s) on {values.visitDate}. We'll reply to {values.email.trim()} soon.
          </p>
          <button onClick={handleNewEnquiry}>Send another enquiry</button>
        </div>
      </section>
    );
  }

  return (
    <section className="enquiry" id="enquiry">
      <h2>Visitor enquiry</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label>
          Full name
          <input name="fullName" type="text" value={values.fullName} onChange={handleChange} />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </label>

        <label>
          Email
          <input name="email" type="email" value={values.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
          Phone number
          <input name="phone" type="tel" value={values.phone} onChange={handleChange} />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label>

        <label>
          Selected destination
          <select name="destination" value={values.destination} onChange={handleChange}>
            <option value="">Choose a destination</option>
            {destinations.map((d) => (
              <option key={d.id} value={d.name}>{d.name}</option>
            ))}
          </select>
          {errors.destination && <span className="error">{errors.destination}</span>}
        </label>

        <label>
          Number of visitors
          <input
            name="visitors"
            type="number"
            min="1"
            max="50"
            value={values.visitors}
            onChange={handleChange}
          />
          {errors.visitors && <span className="error">{errors.visitors}</span>}
        </label>

        <label>
          Preferred visit date
          <input
            name="visitDate"
            type="date"
            min={todayString()}
            value={values.visitDate}
            onChange={handleChange}
          />
          {errors.visitDate && <span className="error">{errors.visitDate}</span>}
        </label>

        <label>
          Message
          <textarea name="message" rows="4" value={values.message} onChange={handleChange} />
          {errors.message && <span className="error">{errors.message}</span>}
        </label>

        <button type="submit">Send enquiry</button>
      </form>
    </section>
  );
}

export default EnquiryForm;
