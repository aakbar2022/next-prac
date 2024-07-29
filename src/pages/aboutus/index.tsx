import { Navbar } from "@/src/components";
import Layout from "@/src/components/Layout";
import AboutHeader from "./AboutHeader";
import AboutContent from "./AboutContent";


function page() {
  return (
    <Layout>
      <Navbar />
      <div className="page">
        <main>
          <AboutHeader />
          <AboutContent />
        </main>
      </div>
    </Layout>
  );
}

export default page;
