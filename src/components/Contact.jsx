// src/components/Contact.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Contact() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function validate() {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Please add a short message";
    return e;
  }

  function onSubmit(evt) {
    evt.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    setSending(true);
    console.log("Form submitted:", form);

    setTimeout(() => {
      setSending(false);
      navigate("/");
    }, 500);
  }

  return (
    <main className="c2-wrap">
      <section className="c2-shell" aria-label="Contact section">
        {/* Left panel: Say Hello */}
        <aside className="c2-accent">
          <div className="c2-ribbon" />
          <div className="c2-accent-inner">
            <h1 className="c2-title">SAY HELLO</h1>
            <p className="c2-tag">Front-End Developer — GTA, Canada</p>

            <div className="c2-info">
              <h4>Email</h4>
              <a className="c2-link" href="mailto:you@example.com">
                you@example.com
              </a>
            </div>

            <div className="c2-info">
              <h4>Availability</h4>
              <p>Freelance & internships</p>
            </div>

            <div className="c2-socials">
              <a className="c2-social" href="#" aria-label="LinkedIn">
                <img src="/assets/linkedin.png" alt="LinkedIn" className="c2-icon" />
                LinkedIn ↗
              </a>
              <a className="c2-social" href="#" aria-label="GitHub">
                <img src="/assets/github.png" alt="GitHub" className="c2-icon" />
                GitHub ↗
              </a>
              <a className="c2-social" href="mailto:you@example.com" aria-label="Email">
                <img src="/assets/email.png" alt="Email" className="c2-icon" />
                Email ↗
              </a>
            </div>
          </div>
        </aside>

        {/* Right form panel */}
        <form className="c2-form" onSubmit={onSubmit} noValidate>
          <h2 className="c2-form-title">Send a message</h2>
          <p className="c2-form-sub">I usually reply within 24 hours.</p>

          <div className="c2-row">
            <div className={"c2-field" + (errors.firstName ? " c2-haserror" : "")}>
              <label htmlFor="firstName">First name</label>
              <input
                id="firstName"
                name="firstName"
                value={form.firstName}
                onChange={onChange}
                required
              />
              {errors.firstName && <p className="c2-error">{errors.firstName}</p>}
            </div>

            <div className={"c2-field" + (errors.lastName ? " c2-haserror" : "")}>
              <label htmlFor="lastName">Last name</label>
              <input
                id="lastName"
                name="lastName"
                value={form.lastName}
                onChange={onChange}
                required
              />
              {errors.lastName && <p className="c2-error">{errors.lastName}</p>}
            </div>
          </div>

          <div className="c2-row">
            <div className="c2-field">
              <label htmlFor="phone">Contact number (optional)</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(###) ###-####"
                value={form.phone}
                onChange={onChange}
              />
            </div>

            <div className={"c2-field" + (errors.email ? " c2-haserror" : "")}>
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
              />
              {errors.email && <p className="c2-error">{errors.email}</p>}
            </div>
          </div>

          <div className={"c2-field" + (errors.message ? " c2-haserror" : "")}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={7}
              value={form.message}
              onChange={onChange}
              required
            />
            {errors.message && <p className="c2-error">{errors.message}</p>}
          </div>

          <button className="c2-btn" type="submit" disabled={sending}>
            {sending ? "Sending…" : "Send Message"}
          </button>
          <p className="c2-privacy">By submitting, you agree to be contacted by email.</p>
        </form>
      </section>

      <style jsx="true">{`
        .c2-wrap {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 48px 20px 84px;
          color: #e8edf5;
        }
        .c2-shell {
          display: grid;
          grid-template-columns: 1fr;
          gap: 22px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255,255,255,0.03);
        }
        @media (min-width: 980px) {
          .c2-shell { grid-template-columns: 0.9fr 1.1fr; }
        }

        /* Left panel */
        .c2-accent {
          background: radial-gradient(1200px 600px at -10% 0%, #1b2233 0%, #0e131d 55%, #0b0d12 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .c2-accent-inner { padding: 32px 28px 40px; max-width: 420px; margin: 0 auto; }
        .c2-title {
          margin: 2px 0 6px;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 900;
          background: linear-gradient(135deg, #93c5fd, #c4b5fd);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .c2-tag { margin: 0 0 20px; color: #9aa4b5; }

        .c2-info { margin-bottom: 18px; }
        .c2-info h4 { margin: 0 0 4px; font-size: 14px; color: #9aa4b5; }
        .c2-info a, .c2-info p { margin: 0; font-size: 15px; color: #d6e3ff; }

        /* Social links with icons */
        .c2-socials {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }
        .c2-social {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #c8d8ff;
          text-decoration: none;
        }
        .c2-social:hover { text-decoration: underline; }
        .c2-icon {
          width: 20px;
          height: 20px;
          object-fit: contain;
        }

        /* Form panel */
        .c2-form { padding: 36px; background: rgba(255,255,255,0.04); }
        .c2-form-title { margin: 0; font-size: 22px; font-weight: 800; }
        .c2-form-sub { margin: 6px 0 18px; color: #9aa4b5; }
        .c2-row { display: grid; grid-template-columns: 1fr; gap: 14px; margin-bottom: 14px; }
        @media (min-width: 760px) { .c2-row { grid-template-columns: 1fr 1fr; } }
        .c2-field { display: grid; gap: 6px; }
        .c2-field input, .c2-field textarea {
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.18);
          color: #e8edf5;
          padding: 10px 0;
          outline: none;
        }
        .c2-btn {
          display: inline-flex;
          justify-content: center;
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #60a5fa, #a78bfa);
          color: #0b0d12;
          font-weight: 800;
        }
        .c2-privacy { margin-top: 10px; color: #9aa4b5; font-size: 12px; text-align: center; }
      `}</style>
    </main>
  );
}
