import { Button } from "@/components/ui/button";
import Link from "next/link";

const PaymentSuccess = () => {
  return (
    <div className="text-center max-w-screen-xl mx-auto my-24 bg-gray-300 p-12">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/categories">Categories</Link>
          </li>
          <li>Payment Success</li>
        </ul>
      </div>
      <div className="text-center w-full my-24 bg-gray-300 p-12">
        <h1 className="text-2xl font-semibold md:text-6xl pb-12">
          Thank you for purchasing
        </h1>
        <Link href="/shippingRates">
          <Button>Go To Shipment</Button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
