import Link from "next/link";
import Layout from "../components/Layout";
export default function todos({ data }) {
  return (
    <Layout title="Todos" currentPage="todos">
      <h2 className="pb-8 text-2xl">Listing des todos</h2>
      <ul>
        {data.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-indigo-200 rounded-md py-3 mb-8"
          >
            {todo.title}
            <Link href={`/todos/${todo.id}`}>Vers le todo</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

// -------------------------------------------
// on a reemplace tout le code ici (todos) en bas pour le component Layout qui est chlidren, on a fait la meme chose dans la page index.
// -------------------------------------------------
// import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";

// export default function todos() {
//   return (
//     <div className="flex flex-col w-screen min-h-screen bg-gray-200">
//       <Head>
//         <title>todos</title>
//         <meta name="description" content="App for training with nextjs" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <header className="flex items-center w-full shadow-md mb-8 px-8 py-6">
//         <Image src="/beer.png" alt="Drink beeeeeer" width={100} height={100} />
//         <nav className="ml-8">
//           <ul className="flex">
//             <li className="mr-6 text-indigo-600">
//               <Link href="/">
//                 <a href="#">Accueil</a>
//               </Link>
//             </li>
//             <li className="mr-6 text-indigo-600">
//               <Link href="/todos">
//                 <a href="#" className="font-bold">
//                   Todos
//                 </a>
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </header>
//       <main className="container p-8 mx-auto">
//         Las cervezas de todos para todos
//       </main>
//     </div>
//   );
// }
