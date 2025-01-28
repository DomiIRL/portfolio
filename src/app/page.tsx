"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import GridItem from "./GridItem";

const catppuccinMochaColors = [
    "#F5E0DC", "#F2CDCD", "#F5C2E7", "#CBA6F7", "#F38BA8",
    "#EBA0AC", "#FAB387", "#F9E2AF", "#A6E3A1", "#94E2D5",
    "#89DCEB", "#74C7EC", "#89B4FA", "#B4BEFE", "#CDD6F4",
    "#BAC2DE", "#A6ADC8", "#9399B2", "#7F849C", "#6C7086",
    "#585B70", "#45475A", "#313244", "#1E1E2E", "#181825",
    "#11111B"
];

export default function Home() {
    const [bubbleCount, setBubbleCount] = useState(0);
    const [maxBubbles, setMaxBubbles] = useState(10);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setMaxBubbles(window.innerWidth < 1000 ? 5 : 10);
        }
    }, []);

    useEffect(() => {
        const createBubble = (initial = false) => {
            if (bubbleCount >= maxBubbles) return;

            const bubble = document.createElement("div");
            bubble.className = "bubble";
            bubble.style.width = `${Math.random() * 250 + 150}px`;
            bubble.style.height = bubble.style.width;
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.backgroundColor = catppuccinMochaColors[Math.floor(Math.random() * catppuccinMochaColors.length)];
            bubble.style.animationDuration = `${Math.random() * 20 + 10}s`;

            if (initial) {
                bubble.style.bottom = `${Math.random() * 50}%`;
            } else {
                bubble.style.bottom = `${Math.random() * 25}%`;
            }

            document.querySelector(".background")?.appendChild(bubble);
            setBubbleCount(prevCount => prevCount + 1);

            // Trigger reflow to ensure transition starts
            window.getComputedStyle(bubble).opacity;
            bubble.classList.add("show");

            bubble.addEventListener("animationend", () => {
                bubble.remove();
                setBubbleCount(prevCount => prevCount - 1);
            });
        };

        const initialBubbles = window.innerWidth < 1000 ? 5 : 7;
        for (let i = 0; i < initialBubbles; i++) {
            createBubble(true);
        }

        const interval = setInterval(() => {
            if (bubbleCount < maxBubbles) {
                createBubble();
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [bubbleCount, maxBubbles]);

    return (
        <div className="font-[family-name:var(--font-jetbrains-mono)] uppercase min-h-screen flex flex-col">
            <div className="background"></div>
            <div className="flex-grow grid grid-rows-[20px_1fr_20px] pb-20 gap-16">
                <main className="flex flex-col gap-40 row-start-2 items-center">
                    <div className="w-full text-center">
                        <div className="gap-3 flex flex-col">
                            <h1 className="text-5xl">Dominik E. Svrt</h1>
                            <p className="text-lg">Also known as <strong>DomiIRL</strong></p>
                            <div className="flex items-center justify-center mt-2">
                                <Image
                                    aria-hidden
                                    src="/location.svg"
                                    alt="location icon"
                                    width={16}
                                    height={16}
                                />
                                <span className="ml-2 text-lg">Located in Kiel / Germany</span>
                            </div>
                        </div>
                        <hr className="w-1/2 mx-auto mt-4 border-gray-300" />
                        <div className="flex items-center gap-4 justify-center mt-4">
                            <a
                                className="flex items-center gap-2"
                                href="http://discord.com/users/289417516663439361"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    aria-hidden
                                    src="/discord-icon.svg"
                                    alt="Discord icon"
                                    width={24}
                                    height={24}
                                />
                                <span className="underline-hover">Message me</span>
                            </a>
                            <a
                                className="flex items-center gap-2"
                                href="https://github.com/DomiIRL"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    aria-hidden
                                    src="/github-mark-white.svg"
                                    alt="Github icon"
                                    width={24}
                                    height={24}
                                />
                                <span className="underline-hover">Visit Github</span>
                            </a>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-120 px-10 sm:px-20">
                        <div className="grid grid-cols-2 gap-20 items-center max-w-6xl mx-auto">

                            {/* Grid item 1 */}
                            <GridItem
                                title={["Fullstack", "Developer", "by ❤️"]}
                                buttons={[
                                    { text: "Projects", href: "#" },
                                    { text: "Skills", href: "#" },
                                ]}
                                position="left"
                            />

                            {/* Grid item 2 */}
                            <GridItem
                                title={["Server", "Admin"]}
                                buttons={[
                                    { text: "Projects", href: "#" },
                                    { text: "Skills", href: "#" },
                                ]}
                                position="right"
                            />

                            {/* Grid item 3 */}
                            <GridItem
                                title={["Minecraft", "Developer"]}
                                subtitle={["Projects: 6+", "Downloads: 17.800.000+"]}
                                buttons={[
                                    { text: "Mods", href: "https://www.curseforge.com/members/domiirl/projects" },
                                    { text: "Plugins", href: "https://www.spigotmc.org/resources/authors/1005207/" },
                                    { text: "Server Network", href: "https://dc.coding-area.net/" },
                                ]}
                                additionalContent={hovered => <div className={`minecraft-container steve ${hovered ? 'show-steve' : ''}`}></div>}
                                position="left"
                            />

                            {/* Grid item 4 */}
                            <GridItem
                                title={["3D Print", "Enthusiast"]}
                                buttons={[
                                    { text: "Prints", href: "#" },
                                    { text: "Materials", href: "#" },
                                ]}
                                position="right"
                            />

                            <GridItem
                                title={["Fitness", "Addict"]}
                                buttons={[
                                    { text: "Workouts", href: "#" },
                                    { text: "Diet", href: "#" },
                                ]}
                                position="left"
                            />
                        </div>
                    </div>
                </main>
            </div>
            <footer className="w-full text-center py-4 px-2 sm:px-4">
                <p>&copy; 2025 Dominik E. Svrt. All rights reserved.</p>
            </footer>
        </div>
    );
}