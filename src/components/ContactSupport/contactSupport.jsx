// import { ContactSupport } from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./contactSupport.css";
const ContactSupport = () => {

  return (
<section className="home-page__section home-page__sections">
  <h2 className="section--title">Contact</h2>
  {/* <hr width="100%" color="#05e950" /> */}
  <div className="container">
    <div className="contact-card">
      <div className="row">
        <div className="col-md-6 col-sm-12 contactCard1">
          <div className="card">
            <div className="card-body">
              <h5 className="section--title">Query</h5><br />
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label contactHeader">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" placeholder="Your Message" rows="4" required></textarea>
              </div>
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="card">
            <div className="card-body">
              <h5 className="section--title">Get in Touch</h5><br />
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="text-start"><p className="contactHeader">Address</p></td>
                      <td className="text-start"><p className="contactVal">Hyderabad</p></td>
                    </tr>
                    <tr>
                      <td className="text-start"><p className="contactHeader">Call for Query</p></td>
                      <td className="text-start"><p className="contactVal">+91 9885666219</p></td>
                    </tr>
                    <tr>
                      <td className="text-start"><p className="contactHeader">Mail</p></td>
                      <td className="text-start"><p className="contactVal">support@sotruepay.in</p></td>
                    </tr>
                    <tr>
                      <td className="text-start"><p className="contactHeader">Opening Hours</p></td>
                      <td className="text-start"><p className="contactVal">24/7</p></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="spacer"></div>
  </div>
</section>



  );
};

export default ContactSupport;
