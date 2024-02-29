import api from "@/api/index.api";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import ProductCardsList from "@/components/ProductCardsList";

async function HomePage() {
  const products = await api.products.getProducts();

  return (
    <Page>
      <section>
        <Heading>전체 판매글</Heading>
        <ProductCardsList products={products?.posts} />
      </section>
    </Page>
  );
}

export default HomePage;

/***************** 헬스체크 *********************/
// const [healthCheck, setHealthCheck] = useState("");

// useEffect(() => {
//   fetch("http://localhost:5050/health-check")
//     .then((response) => response.text())
//     .then((data) => setHealthCheck(data));
// });
