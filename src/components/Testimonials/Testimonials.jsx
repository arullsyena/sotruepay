import "./Testimonials.css";
const Testimonials = () => {
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
    <div class='innerdiv'>
      {testimonials.map((testimonial) => (
        <div class='div1 eachdiv'>
          <div class='userdetails'>
            <div class='detbox'>
              <p class='name'>{testimonial.name}</p>
              <p class='designation'>{testimonial.desination}</p>
            </div>
          </div>
          <div class='review'>
            <h4>{testimonial.review}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
