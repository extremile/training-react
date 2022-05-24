import { useState } from 'react';

const Form = () => {
  const [{ name }, setSignup] = useState({
    name: '',
  });

  const handleChange = (e) => {
    const val = e.target.value;
    const key = e.target.name;

    setSignup((prev) => {
      console.log(prev);
      console.log(val, key);
      const newState = {
        ...prev,
        [key]: val,
      };
      return newState;
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      ` ${name}
      `,
    );
  };

  return (
    <form className="w-1/2 p-8 m-8 max-auto bg-gray-100 shadow" onSubmit={handleSubmit}>
      <div className="w-1/2 mb-4">
        <label htmlFor="name" className="block font-medium text-gray-700">
          Produit à ajouter à la liste de courses:
        </label>
        <input
          type="text"
          className="block w-full px-2 py-1 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          id="name"
          value={name}
          onChange={handleChange}
          name="name"
        />
      </div>

      <div className="flex justify-items-star">
        <button
          type="submit"
          className="px-3 py-2 font-medium text-white text-lg bg-indigo-600 duration-200 hover:bg-indigo-700 rounded-md">
          Ajouter
        </button>
      </div>
    </form>
  );
};

export default Form;
