import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, ArrowUpRight, Check, CheckCircle2, ChevronDown, ChevronRight, Clock3, Menu, MapPin, ShieldCheck, Truck, CalendarDays, ClipboardCheck, CircleHelp, Mail, Instagram, X, Sun, Headphones, ArrowLeft, HeartHandshake } from 'lucide-react';
import './styles.css';

// Coverage requests go to Formspree. Configure email notifications in its dashboard.
const COVERAGE_FORM_ENDPOINT = 'https://formspree.io/f/xrpedorn';
// Driver applications still use email until a separate Formspree endpoint is provided.
const CONTACT_EMAIL = 'hello@routefree.example';
const faqs = [
  ['What types of routes do you cover?', 'We focus on independent bread and baked-goods distribution routes. Tell us your distributor, territory, and delivery schedule so we can evaluate whether coverage is a fit.'],
  ['How far in advance should I request coverage?', 'As early as possible is best, especially for multi-day vacations. You can also inquire about last-minute coverage; availability is not guaranteed.'],
  ['Can you cover just one or two days?', 'Absolutely. Request single-day, weekend, vacation, or emergency relief and we’ll review the details.'],
  ['Are relief drivers trained on my route?', 'Every route is different. We coordinate route instructions and an onboarding or ride-along plan when appropriate before confirming an assignment.'],
  ['How much does route relief cost?', 'Pricing depends on the days needed, location, schedule, workload, and training requirements. Submit a request for a custom quote.'],
];
function Logo({ light=false }) { return <a href="#top" className={`logo ${light?'light':''}`} aria-label="RouteFree home"><span className="logo-mark"><Truck size={20} strokeWidth={2.4}/></span><span>route<span className="logo-accent">free</span><span className="logo-dot">.</span></span></a> }
function ScrollButton({ children, to='#request', variant='primary', className='' }) { return <a className={`btn ${variant} ${className}`} href={to}>{children}<ArrowRight size={17}/></a> }
function Header() { const [menu,setMenu]=useState(false);return <header className="site-header"><div className="container nav"><Logo/><nav className={menu?'open':''} aria-label="Main navigation"><a href="#how" onClick={()=>setMenu(false)}>How it works</a><a href="#services" onClick={()=>setMenu(false)}>Coverage options</a><a href="#why" onClick={()=>setMenu(false)}>Why RouteFree</a><a href="#faq" onClick={()=>setMenu(false)}>FAQs</a><a className="mobile-only" href="#drivers" onClick={()=>setMenu(false)}>Become a relief driver</a></nav><div className="nav-actions"><a className="driver-link" href="#drivers">For drivers <ArrowUpRight size={14}/></a><a className="btn nav-cta" href="#request">Request coverage <ArrowRight size={16}/></a></div><button className="menu-button" aria-label={menu?'Close navigation':'Open navigation'} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div></header> }
function Hero() {return <section id="top" className="hero"><div className="container hero-grid"><div className="hero-copy"><div className="eyebrow"><span className="tiny-circle"/> ROUTE RELIEF, REIMAGINED</div><h1>Your route runs.<br/><em>You don't have to.</em></h1><p className="hero-description">You built your business. You deserve a break from it. RouteFree helps independent bread route owners find reliable coverage so they can take time off without putting deliveries on hold.</p><div className="hero-actions"><ScrollButton>Find my relief driver</ScrollButton><a className="underlink" href="#how">See how it works <ChevronRight size={17}/></a></div><div className="trust-row"><div className="avatar-stack"><span>RF</span><span><Truck size={17}/></span><span><Check size={17}/></span></div><div><strong>Built for route owners, by route people.</strong><small>Starting with Colorado bread routes</small></div></div></div><div className="hero-visual"><div className="image-frame"><img src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85" alt="Open road through a green landscape"/><div className="photo-overlay"/></div><div className="floating-note"><span className="note-icon"><CalendarDays size={22}/></span><span><strong>Time off? Handled.</strong><small>Relief coverage for your route.</small></span><span className="approved"><Check size={16}/></span></div><div className="round-stamp">TAKE<br/>THE<br/>TRIP <span>✳</span></div></div></div><div className="hero-footer container"><span>GOOD BUSINESS SHOULDN'T MEAN NO DAYS OFF.</span><div className="hero-footer-line"/><span>COLORADO-BASED • BUILT TO GROW</span></div></section>}
const serviceItems=[{icon:Sun,title:'Vacation coverage',desc:'Take the trip, book the flight, or spend a week unplugged. We’ll help plan route coverage around your dates.',tag:'PLANNED TIME OFF'},{icon:Clock3,title:'Day-off relief',desc:'Need a long weekend, appointment day, or a little breathing room? Request flexible short-term help.',tag:'FLEXIBLE COVERAGE'},{icon:Headphones,title:'Backup support',desc:'When plans change unexpectedly, ask about available relief options so your business can keep moving.',tag:'WHEN LIFE HAPPENS'}];
function Services(){return <section className="section services" id="services"><div className="container"><div className="section-heading split"><div><span className="kicker">THE COVERAGE YOU NEED</span><h2>Less stress.<br/><em>More living.</em></h2></div><p>Early mornings and seven-day schedules are part of the business. Missing out on life doesn’t have to be.</p></div><div className="service-grid">{serviceItems.map((s,i)=><article className="service-card" key={s.title}><div className="service-top"><span className="service-icon"><s.icon size={26}/></span><span className="service-number">0{i+1}</span></div><span className="service-tag">{s.tag}</span><h3>{s.title}</h3><p>{s.desc}</p><a href="#request">Request coverage <ArrowUpRight size={16}/></a></article>)}</div></div></section>}
function Steps(){return <section className="section steps" id="how"><div className="container steps-layout"><div className="steps-intro"><span className="kicker light-kicker">EASY AS 1, 2, 3</span><h2>Clock out.<br/><em>We'll take it<br/>from here.</em></h2><p>Simple requests. Clear expectations. Coverage designed around the realities of your route.</p><ScrollButton to="#request" variant="cream">Let's get you a day off</ScrollButton></div><div className="steps-list">{[{icon:CalendarDays,title:'Tell us about your route',desc:'Share your territory, distributor, delivery schedule, and the dates you need covered.'},{icon:ClipboardCheck,title:'We review the details',desc:'We discuss availability, route requirements, onboarding, and a personalized quote.'},{icon:Truck,title:'Prepare for handoff',desc:'If coverage is confirmed, we coordinate instructions and a smooth transition so you can step away.'}].map((s,i)=><div className="step" key={s.title}><div className="step-circle">{String(i+1).padStart(2,'0')}</div><div><s.icon size={25}/><h3>{s.title}</h3><p>{s.desc}</p></div></div>)}</div></div></section>}
function Why(){return <section className="section why" id="why"><div className="container why-grid"><div className="why-visual"><img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1050&q=85" alt="Peaceful mountain landscape"/><div className="why-image-caption">GO AHEAD. TAKE THE SCENIC ROUTE.</div></div><div className="why-copy"><span className="kicker">WE GET IT</span><h2>Your business is important.<br/><em>So is your life.</em></h2><p>Early starts. Tight windows. Stores that count on you. Route owners work hard, and getting time away isn't always simple. RouteFree is being built to make that part easier.</p><ul><li><CheckCircle2/>Focused on independent distribution routes</li><li><CheckCircle2/>Flexible requests for short and extended breaks</li><li><CheckCircle2/>Route-specific planning and communication</li><li><CheckCircle2/>Human support, not a complicated platform</li></ul><ScrollButton>Start planning time off</ScrollButton></div></div></section>}
const initialRequest={name:'',email:'',phone:'',company:'',city:'',dates:'',details:''};
function EmailForm({ type }) {
  const isDriver = type === 'driver';
  const initialValues = isDriver
    ? { name: '', email: '', phone: '', location: '', experience: '', availability: '' }
    : initialRequest;
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const set = (key, value) => setValues((current) => ({ ...current, [key]: value }));

  async function submit(event) {
    event.preventDefault();
    if (status === 'sending') return;

    if (isDriver) {
      const subject = 'RouteFree relief driver application';
      const body = Object.entries(values)
        .map(([key, value]) => `${key.toUpperCase()}: ${value}`)
        .join('\n');
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setMessage('Your email app should open with your application. You must send the email to finish applying.');
      setStatus('email');
      return;
    }

    setStatus('sending');
    setMessage('');
    try {
      const response = await fetch(COVERAGE_FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...values,
          _subject: 'New RouteFree Vacation Coverage Request',
          formType: 'Vacation coverage request',
        }),
      });
      if (!response.ok) {
        let errorMessage = 'We couldn’t send your request. Please try again.';
        try {
          const result = await response.json();
          if (Array.isArray(result.errors) && result.errors[0]?.message) {
            errorMessage = result.errors.map((error) => error.message).join(' ');
          }
        } catch { /* Use a general error message for non-JSON failures. */ }
        throw new Error(errorMessage);
      }
      setStatus('success');
      setMessage('Thank you! RouteFree received your coverage request. We’ll review it and contact you about availability and a quote.');
      setValues(initialValues);
    } catch (error) {
      setStatus('error');
      setMessage(error.message || 'There was a problem submitting your request. Please try again.');
    }
  }

  return (
    <form onSubmit={submit} className="contact-form">
      <div className="form-row">
        <label>Full name<input required name="name" value={values.name} onChange={(e) => set('name', e.target.value)} placeholder="Your name" /></label>
        <label>Email address<input required name="email" type="email" value={values.email} onChange={(e) => set('email', e.target.value)} placeholder="you@email.com" /></label>
      </div>
      <div className="form-row">
        <label>Phone number<input required name="phone" type="tel" value={values.phone} onChange={(e) => set('phone', e.target.value)} placeholder="(555) 000-0000" /></label>
        <label>{isDriver ? 'Where are you based?' : 'Route city / territory'}<input required name={isDriver ? 'location' : 'city'} value={isDriver ? values.location : values.city} onChange={(e) => set(isDriver ? 'location' : 'city', e.target.value)} placeholder="e.g. Parker, CO" /></label>
      </div>
      {isDriver ? (
        <>
          <label>Distribution or driving experience<textarea required name="experience" rows="3" value={values.experience} onChange={(e) => set('experience', e.target.value)} placeholder="Tell us about your delivery experience..." /></label>
          <label>General availability<textarea name="availability" rows="2" value={values.availability} onChange={(e) => set('availability', e.target.value)} placeholder="Weekdays, weekends, areas you'll cover..." /></label>
        </>
      ) : (
        <>
          <div className="form-row">
            <label>Distributor or route type<input name="company" value={values.company} onChange={(e) => set('company', e.target.value)} placeholder="e.g. Flowers Foods" /></label>
            <label>Coverage dates<input required name="dates" value={values.dates} onChange={(e) => set('dates', e.target.value)} placeholder="e.g. June 10–17" /></label>
          </div>
          <label>Tell us about the route<textarea name="details" rows="3" value={values.details} onChange={(e) => set('details', e.target.value)} placeholder="Delivery days, start time, stops, special details..." /></label>
        </>
      )}
      <button type="submit" className="btn primary form-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending request…' : isDriver ? 'Open driver application email' : 'Request my coverage quote'} <ArrowRight size={17} />
      </button>
      <p className="form-note"><ShieldCheck size={15}/>{isDriver ? 'Driver applications currently open an email draft; they are not submitted automatically.' : 'Requests are securely sent to Formspree for RouteFree to review. Submitting is not a confirmed booking.'}</p>
      {message && <p className={`form-notice ${status === 'error' ? 'form-error' : ''}`} role={status === 'error' ? 'alert' : 'status'}>{message}</p>}
    </form>
  );
}

function Request(){return <section className="section request" id="request"><div className="container request-grid"><div className="request-info"><span className="kicker">LET'S MAKE IT HAPPEN</span><h2>Ready for a<br/><em>real day off?</em></h2><p>Tell us what your route needs. We'll review the details and follow up about next steps and coverage options.</p><div className="request-benefit"><CalendarDays/><span>Request dates that work for you</span></div><div className="request-benefit"><MapPin/><span>Colorado routes are our starting focus</span></div><div className="request-benefit"><HeartHandshake/><span>Personal communication every step of the way</span></div><div className="request-quote">“The best part of owning your own business should be the freedom.”</div></div><div className="form-card"><div className="form-card-head"><span>GET STARTED</span><h3>Request route coverage</h3><p>No commitment. Just tell us what you need.</p></div><EmailForm type="owner"/></div></div></section>}
function Drivers(){return <section className="driver-section" id="drivers"><div className="container driver-layout"><div><span className="kicker light-kicker">CALLING GREAT DRIVERS</span><h2>Know your way<br/><em>around a route?</em></h2><p>We're interested in connecting with dependable drivers who have delivery or bread distribution experience. Share your details to start the conversation.</p></div><div className="driver-form"><div className="driver-form-title"><Truck size={24}/><div><h3>Become a relief driver</h3><p>Tell us a little about yourself.</p></div></div><EmailForm type="driver"/></div></div></section>}
function Faq(){const [open,setOpen]=useState(0);return <section className="section faq" id="faq"><div className="container faq-grid"><div><span className="kicker">GOOD QUESTIONS</span><h2>You've got questions.<br/><em>We've got answers.</em></h2><p>Don't see yours? Tell us what you need in the coverage request form.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><div className="faq-item" key={q}><button aria-expanded={open===i} onClick={()=>setOpen(open===i?-1:i)}><span>{q}</span><ChevronDown size={20} className={open===i?'rotated':''}/></button>{open===i&&<p>{a}</p>}</div>)}</div></div></section>}
function Footer(){return <footer className="footer"><div className="container"><div className="footer-top"><div><Logo light/><p>Because owning the route shouldn't mean never leaving it.</p></div><div className="footer-nav"><a href="#how">How it works</a><a href="#services">Coverage</a><a href="#request">Request a quote</a><a href="#drivers">For drivers</a></div><a className="footer-cta" href="#request">It's time to get away <ArrowUpRight/></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} RouteFree. All rights reserved.</span><span>Made for the people who keep things moving.</span><span>Colorado, USA</span></div></div></footer>}
function App(){return <><Header/><main><Hero/><Services/><Steps/><Why/><Request/><Drivers/><Faq/></main><Footer/></>};

createRoot(document.getElementById('root')).render(<App/>);

