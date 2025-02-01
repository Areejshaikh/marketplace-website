import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";

const reviews = [
    {
        username: "Samantha D.",
        body: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        img: "/assets/pic1.jpg",
        date: ' Posted on August 14, 2023'
    },
    {
        username: "Alex M.",
        body: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        img: "/assets//pic1.jpg",
        date: "Posted on August 15, 2023"
    },
    {
        username: "Olivia P.",
        body: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        img: "/assets/pic1.jpg",
        date: "Posted on August 16, 2023"

    },
    {
        username: "Liam K.",
        body: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        img: "/assets/pic1.jpg",
        date: "Posted on August 17, 2023"
    },
    {
        username: "Willim j.",
        body: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        img: "/assets/pic1.jpg",
        date: "Posted on August 18, 2023"

    },
    {
        username: "Ava H.",
        body: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
        img: "/assets/pic1.jpg",
        date: "Posted on August 19, 2023"
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    username,
    body,
    date,
}: {
    img: string;
    username: string;
    body: string;
    date: string;
}) => {
    return (
        <figure

            className={cn(
                "relative w-96 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">

                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                    <span className="text-xs font-medium dark:text-white/40">{date}</span>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export function MarqueeDemo() {
    return (
        <>
         <h2 className="text-center capitalize py-8 text-[48px] text- font-bold leading-[48px] tracking-[4%]">
         Our Happy Customerse
            </h2>
           
            <div className="relative max-w-screen-xl mx-auto flex my-12 h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">

                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </>
    );
}
