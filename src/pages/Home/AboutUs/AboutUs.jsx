import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div className="hero min-h-screen bg-base-200 my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="rounded-lg w-4/5 shadow-2xl" />
          <img
            src={parts}
            className="rounded-lg w-1/2 border-8 border-white shadow-2xl absolute right-5 top-1/2"
          />
        </div>
        <div className="lg:w-1/2 space-y-3">
          <h3 className="text-orange-500">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
