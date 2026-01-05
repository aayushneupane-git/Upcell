"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
    {
        name: "Jason Garren",
        rating: 5,
        time: "5 months ago",
        text: "The guy helped me switch over my numbers and helped me get a great job. A pleasure to work with him!",
    },
    {
        name: "Rylee Scott",
        rating: 5,
        time: "10 months ago",
        text: "Amazing experience! Raymond and Louis assisted me quickly with great attitudes. Seamless and efficient service.",
    },
    {
        name: "Luis Ceballos",
        rating: 5,
        time: "7 months ago",
        text: "Very good prices on phones and cellphone repairs. I really recommend them and trust them with my phones.",
    },
    {
        name: "Kaylee",
        rating: 4,
        time: "5 months ago",
        text: "Really fast working, gets the job done right then and there!",
    },
    {
        name: "Zo White",
        rating: 5,
        time: "1 year ago",
        text: "Great service. Gave me great deals on a new phone along with a good price on my trade-ins.",
    },
    {
        name: "Vivian Brown",
        rating: 5,
        time: "10 months ago",
        text: "Took about 20 minutes to fix my phone. Affordable and fast — I was able to clock in for work on time!",
    },
];

export default function Reviews() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="px-6 py-20 bg-zinc-50 dark:bg-black">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold mb-4 tracking-tight text-zinc-900 dark:text-zinc-100">
                    Trusted by Columbus Customers
                </h2>

                <p className="text-zinc-600 dark:text-zinc-400 mb-14 text-lg">
                    Real feedback from customers who trust{" "}
                    <span className="font-semibold text-red-600">UPCELL COLUMBUS</span>
                </p>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.45 }}
                            className="p-10 rounded-3xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 shadow-md hover:shadow-xl transition"
                        >
                            {/* Avatar */}
                            <div className="flex justify-center mb-4">
                                <img
                                    src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
                                    alt={reviews[index].name}
                                    className="w-20 h-20 rounded-full object-cover shadow-sm border border-zinc-200"
                                />
                            </div>

                            {/* Rating */}
                            <div className="flex justify-center mb-4 text-lg text-red-500">
                                {"★".repeat(reviews[index].rating)}
                                <span className="text-zinc-300">
                                    {"☆".repeat(5 - reviews[index].rating)}
                                </span>
                            </div>

                            {/* Review */}
                            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed italic">
                                “{reviews[index].text}”
                            </p>

                            {/* Name */}
                            <div className="text-sm text-zinc-500 dark:text-zinc-400">
                                <span className="font-semibold text-red-600">
                                    {reviews[index].name}
                                </span>{" "}
                                • {reviews[index].time}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {reviews.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${index === i
                                        ? "bg-red-600 scale-125"
                                        : "bg-zinc-300 dark:bg-zinc-700 hover:scale-110"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
