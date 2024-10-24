// import { ContactSupport } from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./contactSupport.css";
const ContactSupport = () => {
  const testimonials = [
    {
      name: "John Doe",
      desination: "CEO, GameWorld",
      review: ` "So-True Pay has revolutionized our payment processing. Their
            security features are top-notch, and our users love the seamless
            experience."`,
    },
    {
      name: "Jane Smith",
      desination: "CTO, PlayZone",
      review: ` "The wallet management solutions provided by So-True Pay are
            incredibly efficient and user-friendly. Highly recommend their
            services!"`,
    },
    {
      name: "COO, FunGames",
      desination: "CEO, GameWorld",
      review: ` "We have seen a significant improvement in user satisfaction since
            integrating So-True Pay's secure payment gateways. Their support
            team is also fantastic."`,
    },
  ];
  return (
<section className='home-page__section home-page__sections'>
  <h2 className='section--title'>Contact</h2>
  <hr width='100%' color='#05e950' />
  <div className='container'>
      <div className='spacer'>
        <div className='contact-card'>
            <div class="row">
              <div class="col-md-6 col-sm-12 contactCard1">
                  <div class="card">
                      <div class="card-body">
                        <h5 class="section--title">Query</h5><br/>
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label contactHeader">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1"  />
                          </div>
                          <div class="mb-3">
                            <textarea className='form-control' placeholder='Your Message' rows='4' required></textarea>
                          </div>
  
                          <button  class="btn btn-primary">Submit</button>

                      </div>
                  </div>
              </div><br/>
              <div class="col-md-6 col-sm-12">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="section--title">Get in Touch</h5><br/>

                        <div className="table-responsive">
  <table className="table">
    <tbody>
      <tr>
        <td className="text-start">
          <p className="contactHeader">Address</p>
        </td>
        <td className="text-start">
          <p className="contactVal">Hyderabad</p>
        </td>
      </tr>
      <tr>
        <td className="text-start">
          <p className="contactHeader">Call for Query</p>
        </td>
        <td className="text-start">
          <p className="contactVal">+91 9885666219</p>
        </td>
      </tr>
      <tr>
        <td className="text-start">
          <p className="contactHeader">Mail</p>
        </td>
        <td className="text-start">
          <p className="contactVal">support@sotruepay.in</p>
        </td>
      </tr>
      <tr>
        <td className="text-start">
          <p className="contactHeader">Opening Hours</p>
        </td>
        <td className="text-start">
          <p className="contactVal">24/7</p>
        </td>
      </tr>
    </tbody>
  </table>
</div>


                          
                      </div>
                  </div>
              </div>

            </div>

        </div>
    </div>
  </div>
</section>


  );
};

export default ContactSupport;
