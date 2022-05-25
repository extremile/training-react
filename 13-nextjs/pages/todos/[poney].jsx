import Layout from "../../components/Layout";
import Link from "next/link";

export default function todos({ data }) {
  return (
    <Layout title="Todos" currentPage="todos">
      <h1 className="text-4xl">{data.title}</h1>
    </Layout>
  );
}
export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.poney}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
