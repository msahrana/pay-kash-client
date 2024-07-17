import {Link, useNavigate} from "react-router-dom";
import ImgLogo from "/logo.jpeg";
import toast from "react-hot-toast";
import useAxiosPublic from "../hooks/useAxiosPublic";
import bcrypt from "bcryptjs";

const Register = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const mobile = form.mobile.value;
    const email = form.email.value;
    const pin = form.pin.value;
    const role = form.role.value;

    try {
      // Hash the PIN
      const salt = await bcrypt.genSalt(10);
      const hashedPin = await bcrypt.hash(pin, salt);

      const newUser = {
        name,
        email,
        mobile,
        pin: hashedPin,
        role,
        status: "pending",
      };

      const {data} = await axiosPublic.post("/register", newUser);

      navigate("/dashboard");

      if (data.insertedId) {
        toast.success("User created successfully!");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex justify-center mx-auto">
        <img className="w-auto h-12 rounded-full" src={ImgLogo} alt="" />
      </div>

      <form onSubmit={handleRegister} className="mt-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div>
          <label
            htmlFor="mobile"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Mobile
          </label>
          <input
            type="number"
            name="mobile"
            placeholder="Your Mobile"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Your Role:</span>
          </div>
          <select className="select select-bordered" name="role" required>
            <option disabled selected>
              Select a Role
            </option>
            <option value="user">User</option>
            <option value="agent">Agent</option>
          </select>
        </label>

        <div>
          <label
            htmlFor="email"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="pin"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Pin (5 Number)
            </label>
          </div>

          <input
            type="password"
            name="pin"
            placeholder="Your Pin"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-6">
          <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
            Register
          </button>
        </div>
      </form>

      <p className="mt-8 text-xs font-light text-center text-gray-400">
        {" "}
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
        >
          <span className="text-blue-500 font-bold ml-1">Login</span>
        </Link>
      </p>
    </div>
  );
};

export default Register;
