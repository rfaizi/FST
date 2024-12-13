"use client";
import { useState, useEffect } from 'react';

const EnquiryForm = () => {
  const [service, setService] = useState("option1");
  const [page, setPage] = useState(1);
  const [compatibility, setCompatibility] = useState("fixed");
  const [turnaround, setTurnaround] = useState("option1");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Price-related states
  const [totalAmount, setTotalAmount] = useState(60);
  const [pageAmount, setPageAmount] = useState(60);
  const [pagePriceInfo, setPagePriceInfo] = useState("First Page $60 and rest all $35 each");

  // Price constants
  const servicePricing = {
    option1: { base: 60, additional: 35, description: "Web Design" },
    option2: { base: 400, additional: 50, description: "Single Page App" },
    option3: { base: 250, additional: 50, description: "App Development" },
    option4: { base: 75, additional: 60, description: "Email Templates" },
  };
  const compatibilityPricing = { fixed: 0, responsive: 15 };
  const turnaroundPricing = { option1: 0, option2: 25 };

  useEffect(() => {
    calculateTotalAmount();
  }, [service, page, compatibility, turnaround]);

  const calculateTotalAmount = () => {
    const baseService = servicePricing[service].base;
    const additionalPages = (page - 1) * servicePricing[service].additional;
    const compatibilityCost = compatibilityPricing[compatibility];
    const turnaroundCost = turnaroundPricing[turnaround];
    const total = baseService + additionalPages + compatibilityCost + turnaroundCost;
    setTotalAmount(total);
    setPageAmount(baseService + additionalPages);
  };

  const handleServiceChange = (e) => {
    setService(e.target.value);
    setPage(1); // Reset to 1 page on service change
    setCompatibility("fixed"); // Reset compatibility to fixed
    setTurnaround("option1"); // Reset turnaround to standard
    setPagePriceInfo(servicePricing[e.target.value].description);
  };

  const handlePageChange = (e) => {
    setPage(Number(e.target.value));
  };

  const handleCompatibilityChange = (e) => {
    setCompatibility(e.target.value);
  };

  const handleTurnaroundChange = (e) => {
    setTurnaround(e.target.value);
  };

  return (
    <div className='container'>
      <h3 className="heading">
          <span className="underlineHeading">Get In Touch</span>
          <span className="bigTxt">Connecting You to Solutions</span>
        </h3>
        <div className='row'>
        <div className="col-sm-8 leftrail">
        <div style={{ float: "left", width: "100%", marginBottom: "20px" }}>
          {Object.entries(servicePricing).map(([key, value]) => (
            <label
              key={key}
              className={`radio-inline radiolabel ${service === key ? 'active' : ''}`}
            >
              <input
                type="radio"
                name="service"
                value={key}
                checked={service === key}
                onChange={handleServiceChange}
              />
              {value.description}
            </label>
          ))}
        </div>
        <div className="row">
          <div className="col-sm-6">
            <label>Compatibility</label>
            <select
              id="compatibility"
              className="form-control"
              value={compatibility}
              onChange={handleCompatibilityChange}
            >
              <option value="fixed">Fixed</option>
              <option value="responsive">Responsive</option>
            </select>
          </div>
          <div className="col-sm-6">
            <label>Number of Pages</label>
            <select
              id="page"
              className="form-control"
              value={page}
              onChange={handlePageChange}
            >
              {[...Array(12).keys()].map((i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row is--mar-top15 is--mar-btm15">
          <div className="col-sm-12">
            <label className="radio-inline" style={{marginRight: "15px"}}>
              <input
                type="radio"
                name="turnaround"
                value="option1"
                checked={turnaround === "option1"}
                onChange={handleTurnaroundChange} style={{marginRight: "5px"}}
              />
              Standard Turnaround
            </label>
            <label className="radio-inline" style={{marginRight: "15px"}}>
              <input
                type="radio"
                name="turnaround"
                value="option2"
                checked={turnaround === "option2"}
                onChange={handleTurnaroundChange} style={{marginRight: "5px"}}
              />
              Express Turnaround ($25)
            </label>
          </div>
        </div>
        <div>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              name="message"
              rows="6"
              placeholder="Type Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        </div>              
      </div>
      <div className="col-sm-4 rightrail">
        <div className="thumbnail">
          <div className="row rightrail__head">
            <h4><span>{servicePricing[service].description}</span></h4>
          </div>
          <div className="row rightrail__items">
            <div className="col-sm-9">
              <strong>{page} PAGE{page > 1 ? 'S' : ''}</strong>
              <div><small>{pagePriceInfo}</small></div>
            </div>
            <div className="col-sm-3 col-pad-0 text-right">
              <strong>${pageAmount}</strong>
            </div>
          </div>
          <div className="row rightrail__items">
          <div className="col-sm-9">
          <strong>COMPATIBILITY</strong>
          <div><span>{compatibility.toUpperCase()}</span></div>
          </div>           
            <div className="col-sm-3 col-pad-0 text-right">
              <strong>{compatibility === 'fixed' ? 'Free' : `$${compatibilityPricing[compatibility]}`}</strong>
            </div>
          </div>
          <div className="row rightrail__items">            
            <div className="col-sm-9">
            <strong>TURNAROUND</strong>
              <div><span>{turnaround === 'option1' ? 'STANDARD - 5 to 7 DAYS' : 'EXPRESS - 2 to 3 DAYS'}</span></div>
            </div>
            <div className="col-sm-3 col-pad-0 text-right">
              <strong>{turnaround === 'option1' ? 'Free' : `$${turnaroundPricing[turnaround]}`}</strong>
            </div>
          </div>
          <div className="rightrail__price text-right">
            Total Price <strong>${totalAmount}</strong>
          </div>
        </div>
      </div>
      <div className='col-sm-12' style={{textAlign: 'center', padding: '0'}}>
      <button type="submit" className="ctaBtn">SUBMIT</button>
      </div>
        </div>

    </div>
    
  );
}
export default EnquiryForm;