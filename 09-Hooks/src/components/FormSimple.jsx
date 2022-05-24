import { useEffect, useState } from 'react';

const FormSimple = () => {
  const [search, setSearch] = useState('');
  const [isFriend, setIsFriend] = useState(false);

  useEffect(() => {
    // console.log(search, isFriend);
    search.toLowerCase() === 'maxime' ? setIsFriend(true) : setIsFriend(false);
  }, [search]); // dans les crochets, on précisera les valeurs à obsever

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="w-1/2 p-8 m-8 max-auto bg-gray-100 shadow" onSubmit={handleSubmit}>
      <div className="w-1/2 mb-4">
        <label htmlFor="name" className="block font-medium text-gray-700">
          Nom
        </label>
        <input
          type="text"
          className="block w-full px-2 py-1 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          id="search"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <p className="pt-2 text-sm text text-red-500">
        {isFriend && 'Maxime est un homme en or et un ami en or.'}
      </p>
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-3 py-2 font-medium text-white text-lg bg-indigo-600 duration-200 hover:bg-indigo-700 rounded-md">
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default FormSimple;
