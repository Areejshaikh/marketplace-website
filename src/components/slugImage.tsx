'use client';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface SlugImagesProps {
  image: string[] | StaticImageData[];
}

export default function SlugImages({ image }: SlugImagesProps) {
  const [path, setPath] = useState<string | StaticImageData>('');

  // Ensure `image` is an array
  if (!Array.isArray(image) || image.length === 0) {
    return <p className='' >No images available</p>;
  }

  return (
    <div className=" max-w-screen-xl  gap-6">
     

      {/* Main Image Section */}
      <div className="overflow-hidden z-10  mx-auto">
        <Image
          alt="Main Product Image"
          src={path || image[0]}
          width={1000}
          height={1000}         
           className="md:w-[32rem] w-auto h-[32rem] object-cover rounded-3xl hover:scale-125 transform transition duration-500 ease-in-out"

        />
      </div>
       {/* Thumbnail Section */}
       <div className="flex flex-col gap-6">
        {image.map((item, i) => (
          <Image
            key={i}
            alt={`Thumbnail ${i + 1}`}
            className="w-[12rem] h-[10.1rem] my-4 rounded-3xl cursor-pointer"
            src={item}
            width={1000}
            height={1000}
            onClick={() => setPath(item)}
          />
        ))}
      </div>
    </div>
  );
}


