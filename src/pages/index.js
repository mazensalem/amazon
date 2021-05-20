import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      {/* Header */}
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* banner */}
        <Banner />
        {/* products */}
        <ProductsList products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const products = await fetch("https://fakestoreapi.com/products");
  const json = await products.json();
  return {
    props: {
      products: json,
    },
  };
}
