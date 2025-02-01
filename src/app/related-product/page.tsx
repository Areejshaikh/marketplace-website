
import RelatedProductPage from "./related";

interface RelatedPageProps {
    category: string;
    currentProductId: string;
}

export default function RelatedProduct({ category, currentProductId }: RelatedPageProps) {
    return (
       <RelatedProductPage  category={category} currentProductId={currentProductId}/>
    );
}
