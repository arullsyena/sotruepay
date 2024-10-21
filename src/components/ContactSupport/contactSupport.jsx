// import { ContactSupport } from "@mui/icons-material";
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
      <div className='col-lg-12 col-md-12 col-sm-12'>
        <div className='contact-card'>
          <div className='row'>
            {/* Left side: Office address and contact details */}
            <div className='col-lg-5 col-md-5 col-sm-12' id='contactDetails'>
        <div className='contact-details'>
            <div className='contact-item'>
            <i className='fas fa-map-marker-alt'></i>
            <div>
                <h3>Address</h3>
                <p>HYDERABAD</p>
            </div>
            </div>
            
            <div className='contact-item'>
            <i className='fas fa-phone-alt'></i>
            <div>
                <h3>Call for Query</h3>
                <p>+91 9885666219</p>
            </div>
            </div>

            <div className='contact-item'>
            <i className='fas fa-envelope'></i>
            <div>
                <h3>Send Us Message</h3>
                <p>support@sotruepay.in</p>
            </div>
            </div>

            <div className='contact-item'>
            <i className='fas fa-clock'></i>
            <div>
                <h3>Opening Hours</h3>
                <p>24/7</p>
            </div>
            </div>
        </div>
        </div>


            {/* Right side: Contact form */}
            <div className='col-lg-7 col-md-7 col-sm-12'>
                <h2 className="section--title accordion--title">CONTACT</h2>
                <p>Send your query</p> 
              <form className='contact-form'>
                <div className='form-group'>
                  {/* <label htmlFor='name'>Name</label> */}
                  <input type='text' id='name' className='form-control' placeholder='Enter your name' />
                </div>

                <div className='form-group'>
                  {/* <label htmlFor='phone'>Phone Number</label> */}
                  <input type='tel' id='phone' className='form-control' placeholder='Enter your phone number' />
                </div>

                <div className='form-group'>
                  {/* <label htmlFor='email'>Email</label> */}
                  <input type='email' id='email' className='form-control' placeholder='Enter your email' />
                </div>

                <div className='form-group'>
                  {/* <label htmlFor='comment'>Comment</label> */}
                  <textarea id='comment' className='form-control' placeholder='Your message'></textarea>
                </div>

                <button type='submit' className='btn btn-primary'>Submit</button>
              </form>
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
