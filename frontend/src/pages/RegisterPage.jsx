import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    return Swal.fire({
      icon: "success",
      title: "You have successfully Registered",
      showConfirmButton: false,
      iconColor: "#cbdf5c",
      timer: 2000,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  return (
    <section className="flex items-center justify-center min-h-screen mx-auto flex-col ">
      <form
        onSubmit={handleRegister}
        className="bg-white rounded-md text-left shadow-lg max-w-lg py-8 px-6 w-full"
      >
        <div className="block my-8">
          <h1 className="text-center text-4xl font-bold text-zed">Register</h1>
        </div>
        {/* Fullname */}
        <div className="my-3">
          <label className="block my-2">Full Name</label>
          <input
            type="text"
            required
            className="border-2 border-black w-full px-3 py-3 rounded-md border-none outline-none bg-slate-100"
          />
        </div>
        {/* Username */}
        <div className="my-3">
          <label className="block my-2">Username</label>
          <input
            type="text"
            required
            className="border-2 border-black w-full px-3 py-3 rounded-md border-none outline-none bg-slate-100"
          />
        </div>
        {/* Email */}
        <div className="my-3">
          <label className="block my-2">Email</label>
          <input
            type="email"
            required
            className="border-2 border-black w-full px-3 py-3 rounded-md border-none outline-none bg-slate-100"
          />
        </div>
        {/* Password */}
        <div className="my-3">
          <label className="block my-2">Password</label>
          <input
            type="password"
            required
            className="border-2 border-black w-full px-3 py-3 rounded-md border-none outline-none bg-slate-100"
          />
        </div>
        <div className="mt-8 mb-4 text-center">
          <button className="text-nvy bg-zed w-full py-3 rounded-full hover:bg-nvy hover:text-zed uppercase font-bold shadow-sm">
            Register
          </button>
        </div>
      </form>
      <div>
        <hr className="my-4" />
        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-zed" to="/login">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;
