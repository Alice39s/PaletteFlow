import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Milestone, ArrowUpCircle, History, Trash2 } from 'lucide-react';
import { ColorFamily } from '../utils/colorUtils';
import { COLOR_CATEGORIES } from '../consts';
import { ColorNavItem } from './ColorNavItem';
import { useMemory } from '../hooks/useMemory';
import { toast } from 'sonner';

interface ColorNavProps {
    families: ColorFamily[];
    onSelect: (familyName: string) => void;
}

type CategoryKey = keyof typeof COLOR_CATEGORIES;

export function ColorNav({ families, onSelect }: ColorNavProps) {
    const [activeFamily, setActiveFamily] = useState<string | null>(null);
    const [expandedCategory, setExpandedCategory] = useState<CategoryKey | null>('RED');
    const [showScrollTop, setShowScrollTop] = useState(false);
    const { lastSelectedFamily, updateLastSelectedFamily, clearMemory } = useMemory();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const familyName = entry.target.id.replace('color-family-', '');
                        setActiveFamily(familyName);
                        const family = families.find(f => f.name === familyName);
                        if (family) {
                            updateLastSelectedFamily(family);
                        }
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
    }, [families, updateLastSelectedFamily]);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollToLastSelected = () => {
        if (lastSelectedFamily) {
            const element = document.getElementById(`color-family-${lastSelectedFamily.name}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                onSelect(lastSelectedFamily.name);
            }
        }
    };

    const handleClearHistory = () => {
        clearMemory();
        toast.success('已清除历史记录');
    };

    return (
        <motion.div
            className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 rounded-lg bg-white/90 dark:bg-gray-800/90 p-3 shadow-lg backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="text-sm font-medium text-gray-600 dark:text-gray-300 flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <Milestone className="w-4 h-4" />
                    快速导航
                </div>
                <button
                    onClick={handleClearHistory}
                    className="p-1 rounded-full hover:bg-white/20 transition-colors duration-200"
                    title="清除历史记录"
                >
                    <Trash2 className="w-4 h-4" />
                </button>
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

            <div className="flex flex-col gap-1 mt-2 border-t border-gray-200 dark:border-gray-700 pt-2">
                {lastSelectedFamily && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={scrollToLastSelected}
                        className="flex items-center gap-1 text-gray-600 dark:text-gray-300 p-1 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-200"
                    >
                        <History className="w-5 h-5" />
                        <span className="text-xs whitespace-nowrap">上次选择</span>
                    </motion.button>
                )}
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={scrollToTop}
                        className="flex items-center gap-1 text-gray-600 dark:text-gray-300 p-1 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-200"
                    >
                        <ArrowUpCircle className="w-5 h-5" />
                        <span className="text-xs whitespace-nowrap">回到顶部</span>
                    </motion.button>
                )}
            </div>
        </motion.div>
    );
} 