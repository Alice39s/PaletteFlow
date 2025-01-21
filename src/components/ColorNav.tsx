import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Milestone } from 'lucide-react';
import { ColorFamily } from '../utils/colorUtils';
import { COLOR_CATEGORIES } from '../consts';
import { ColorNavItem } from './ColorNavItem';

interface ColorNavProps {
    families: ColorFamily[];
    onSelect: (familyName: string) => void;
}

type CategoryKey = keyof typeof COLOR_CATEGORIES;

export function ColorNav({ families, onSelect }: ColorNavProps) {
    const [activeFamily, setActiveFamily] = useState<string | null>(null);
    const [expandedCategory, setExpandedCategory] = useState<CategoryKey | null>('RED');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const familyName = entry.target.id.replace('color-family-', '');
                        setActiveFamily(familyName);
                        const foundCategory = Object.entries(COLOR_CATEGORIES)
                            .find(([, category]) => {
                                const colors = category.colors as readonly string[];
                                return colors.includes(familyName);
                            });
                        if (foundCategory) {
                            setExpandedCategory(foundCategory[0] as CategoryKey);
                        }
                    }
                });
            },
            {
                rootMargin: '-20% 0px -60% 0px'
            }
        );

        families.forEach((family) => {
            const element = document.getElementById(`color-family-${family.name}`);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [families]);

    return (
        <motion.div
            className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 rounded-lg bg-white/90 dark:bg-gray-800/90 p-3 shadow-lg backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="text-sm font-medium text-gray-600 dark:text-gray-300 flex items-center gap-1">
                <Milestone className="w-4 h-4" />
                快速导航
            </div>
            <div className="flex flex-col gap-1">
                {(Object.entries(COLOR_CATEGORIES) as [CategoryKey, typeof COLOR_CATEGORIES[CategoryKey]][]).map(([key, category]) => (
                    <ColorNavItem
                        key={key}
                        category={category}
                        isExpanded={expandedCategory === key}
                        activeFamily={activeFamily}
                        families={families}
                        onToggle={() => setExpandedCategory(expandedCategory === key ? null : key)}
                        onSelect={onSelect}
                    />
                ))}
            </div>
        </motion.div>
    );
} 