import RelatedProduct from "@/components/RelatedProduct";

interface Props {
  searchParams: {
    category?: string;
    currentProductId?: string;
  };
}

const RelatedProductPage = ({ searchParams }: Props) => {
  return <RelatedProduct category={searchParams.category || ""} currentProductId={searchParams.currentProductId || ""} />;
};

export default RelatedProductPage;
