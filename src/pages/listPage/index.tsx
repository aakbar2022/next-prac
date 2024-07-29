import { NoDataFoundIcon } from "@/assets/images";
import { Navbar } from "@/src/components";
import Layout from "@/src/components/Layout";
import ListPageHeader from "./ListPageHeader";
import PropertyCard from "./PropertyCard";

const data = [
  {
    _id: "123",
    title: "Room title here Room title here",
    description: "Room description here",
    price: "$123",
  },
  {
    _id: "1234",
    title: "Room title here Room title here Room title here",
    description:
      "Room description here Room description hereRoom description hereRoom description here  Room description hereRoom description hereRoom description here",
    price: "$123",
  },
  {
    _id: "1235",
    title: "Room title here ",
    description:
      "Room description here Room description hereRoom description hereRoom description here",
    price: "$123",
  },
  {
    _id: "12",
    title: "Room title here ",
    description:
      "Room description here Room description hereRoom description hereRoom description here",
    price: "$123",
  },
];

function page() {
  const isDatafound = data && data.length > 0
  return (
    <Layout>
      <Navbar />
      <div className="page">
        <main>
          <ListPageHeader datafound={isDatafound} />
          <div className="container p-0 m-auto row gy-3 justify-content-between pb-5">
            {isDatafound ?
              data.map((item) => (
                <PropertyCard
                  _id={item._id}
                  key={item._id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                />
              )) : <div className="d-flex justify-content-center align-items-center flex-column p-5">
                <NoDataFoundIcon />
                <h3 className="py-2 mt-3">Oops! No listing found</h3>
                <h6 className="subTextColor py-1">Listing is empty. Try again later</h6>
              </div>}
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default page;
