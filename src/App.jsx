import { useState } from "react";

const App = () => {
  const [values, setValues] = useState([
    {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      gender: "",
      subject: "",
      resume: "",
      url: "",
      about: "",
    },
  ]);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const resetButton=()=>{
    setValues({firstName:"",lastName:"",email:""})
  }

  return (
    <div className="w-full bg-gray-200 py-8">
      <h1 className="text-center text-2xl font-bold mb-4">Forms in React</h1>
      <form
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
        onSubmit={handleSubmit}
      >
        {/* Form Fields */}
        <div className="space-y-1">
          <label
            htmlFor="firstName"
            className="block text-gray-700 font-medium"
          >
            First Name*
          </label>
          <input
            type="text"
            placeholder="Enter first name..."
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => handleChanges(e)}
            required
            name="firstName"
            value={values.firstName}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="lastName" className="block text-gray-700 font-medium">
            Last Name*
          </label>
          <input
            type="text"
            placeholder="Enter last name..."
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            name="lastName"
            onChange={(e) => handleChanges(e)}
            value={values.lastName}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email*
          </label>
          <input
            type="email"
            placeholder="Enter email..."
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            name="email"
            onChange={(e) => handleChanges(e)}
            value={values.email}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="contact" className="block text-gray-700 font-medium">
            Contact*
          </label>
          <input
            type="text"
            placeholder="Enter phone#"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            name="contact"
            onChange={(e) => handleChanges(e)}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="gender" className="block text-gray-700 font-medium">
            Gender
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                className="text-blue-500 focus:ring-blue-500"
                onChange={(e) => handleChanges(e)}
              />
              <span className="ml-2 text-gray-700" name="gender">
                Male
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                className="text-blue-500 focus:ring-blue-500"
                onChange={(e) => handleChanges(e)}
              />
              <span
                className="ml-2 text-gray-700"
                name="gender"
                onChange={(e) => handleChanges(e)}
              >
                Female
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                className="text-blue-500 focus:ring-blue-500"
                onChange={(e) => handleChanges(e)}
              />
              <span className="ml-2 text-gray-700" name="gender">
                Others
              </span>
            </label>
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="subject" className="block text-gray-700 font-medium">
            Subject
          </label>
          <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option
              value="math"
              name="subject"
              onChange={(e) => handleChanges(e)}
            >
              Math
            </option>
            <option
              value="science"
              name="subject"
              onChange={(e) => handleChanges(e)}
            >
              Science
            </option>
            <option
              value="english"
              name="subject"
              onChange={(e) => handleChanges(e)}
            >
              English
            </option>
          </select>
        </div>

        <div className="space-y-1">
          <label htmlFor="resume" className="block text-gray-700 font-medium">
            Resume
          </label>
          <input
            type="file"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="resume"
            onChange={(e) => handleChanges(e)}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="url" className="block text-gray-700 font-medium">
            Enter URL
          </label>
          <input
            type="text"
            placeholder="Enter image URL"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="url"
            onChange={(e) => handleChanges(e)}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="about" className="block text-gray-700 font-medium">
            About
          </label>
          <textarea
            placeholder="Enter description..."
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="about"
            onChange={(e) => handleChanges(e)}
          ></textarea>
        </div>

        <div className="flex justify-between mt-4">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
            onClick={resetButton}
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
