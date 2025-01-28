import React from 'react';
import Image from 'next/image';

interface Skill {
    name: string;
    src: string;
}

interface SkillsIconsProps {
    skills: Skill[],
    c?: string
}

export default function SkillsIcons({skills, c}: SkillsIconsProps) {
    return (
        <div className={`skills-icons flex flex-wrap gap-4 justify-center ${c}`}>
            {skills.map((skill, index) => (
                <div key={index} className="skill-icon">
                    <Image src={skill.src} alt={skill.name} width={40} height={40}/>
                    <p className="text-center mt-2">{skill.name}</p>
                </div>
            ))}
        </div>
    );
}
