import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
// import { useContext } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  // const { signInUser } = useContext(AuthContext);
  const { signInUser } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const loggedInUser = result.user;
        console.log(loggedInUser);
        // const user = { email };
        // axios
        //   .post(`http://localhost:3000/jwt`, user, { withCredentials: true })
        //   .then((res) => {
        //     console.log(res.data)
        //     if (res.data.success) {
        //       navigate(location?.state ? location?.state : "/");
        //     }
        //   });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200 my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2 mr-8">
          <img src={img} alt="" />
        </div>

        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center my-6">
            New to car doctors?{" "}
            <Link className="text-orange-500 font-bold" to="/signup">
              Please SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
