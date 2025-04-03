import { useRegister } from "../hooks/useRegister";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";

function Register() {
  const { data, isPanding, register } = useRegister();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const displayName = formData.get("displayName");
    const email = formData.get("email");
    const password = formData.get("password");
    register(displayName, email, password);
  };
  return (
    <section>
      <div className="login-register-wrapper">
        <div className="login-register-left-section hidden md:flex"></div>
        <div className="grid palce-items-center login-register-left-section md:bg-none">
          <div className="overlay"></div>

          <form onSubmit={handleSubmit} className="w-96 relative z-20">
            <h2 className="login-register-title">Register</h2>
            <FormInput label="Email:" name="email" type="email" />
            <FormInput label="Display Name:" name="displayName" type="text" />
            <FormInput label="Password:" name="password" type="password" />
            <div className="flex items-center gap-5 mt-8 mb-8">
              {!isPanding && (
                <button type="submit" className="btn btn-primary grow">
                  Register
                </button>
              )}
              {isPanding && (
                <button
                  type="submit"
                  className="btn btn-primary grow btn-disabled"
                  disabled
                >
                  Loading...
                </button>
              )}
              <button type="button" className="btn btn-secondary grow">
                Google
              </button>
            </div>
            <p class="text-center opacity-75 text-white md:text-black">
              If you have account
              <Link className="link md:link-primary" to="/login">
                {" "}
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
