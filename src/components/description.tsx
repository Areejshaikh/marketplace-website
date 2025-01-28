'use client'
import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';  // Importing icons

interface Idata {
    title: string;
    content: string;
}

const data: Idata[] = [
    {
        title: "Product Info",
        content: "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item."
    },
    {
        title: "Return Policy",
        content: "I'm a return policy. I'm a great place to explain how your customers can return their products. This is also a great space to write what makes this policy special and how your customers can benefit from this item."
    },
    {
        title: "Shipping Policy",
        content: "I'm a shipping policy. I'm a great place to explain how your customers can return their products. This is also a great space to write what makes this policy special and how your customers can benefit from this item."
    }
];

export default function ProductInfo() {
    // State to track which section is expanded
    const [activeSection, setActiveSection] = useState<number | null>(null);

    // Toggle function for showing/hiding paragraphs
    const toggleSection = (section: number) => {
        if (activeSection === section) {
            setActiveSection(null); // Close the section if already open
        } else {
            setActiveSection(section); // Open the clicked section
        }
    };

    return (
        <div className="gap-6">
            {data.map((section, index) => (
                <div key={index}>
                    <div className="flex items-center justify-between">
                        <h2
                            className="text-black cursor-pointer uppercase py-2 -tracking-tighter text-1xl leading-loose"
                            onClick={() => toggleSection(index)}
                        >
                            {section.title}
                        </h2>
                        <span className="text-xl cursor-pointer" onClick={() => toggleSection(index)}>
                            {activeSection === index ? <FiMinus /> : <FiPlus />}  {/* Conditionally render icons */}
                        </span>
                    </div>
                    <div className="border m-2"></div>
                    {activeSection === index && (
                        <p className="my-2 text-gray-600">{section.content}</p>
                    )}
                </div>
            ))}
        </div>
    );
}