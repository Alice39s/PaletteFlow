import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { ColorFamily } from '../utils/colorUtils';
import { COLOR_CATEGORIES } from '../consts';
import { ColorNavButton } from './ColorNavButton';

interface ColorNavItemProps {
    category: typeof COLOR_CATEGORIES[keyof typeof COLOR_CATEGORIES];
    isExpanded: boolean;
    activeFamily: string | null;
    families: ColorFamily[];
    onToggle: () => void;
    onSelect: (familyName: string) => void;
}

export function ColorNavItem({
    category,
    isExpanded,
    activeFamily,
    families,
    onToggle,
    onSelect
}: ColorNavItemProps) {
    return (
        <div className="flex flex-col">
            <motion.button
                className={`flex items-center justify-between gap-2 rounded px-2 py-1 text-sm ${
                    isExpanded
                        ? 'bg-gray-100 dark:bg-gray-700'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                }`}
                onClick={onToggle}
                whileTap={{ scale: 0.95 }}
            >
                <span className="text-gray-700 dark:text-gray-300">{category.name}</span>
                <ChevronRight
                    className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                />
            </motion.button>
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        className="ml-2 flex flex-col gap-1 overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {category.colors.map((colorName) => {
                            const family = families.find((f) => f.name === colorName);
                            if (!family) return null;
                            return (
                                <ColorNavButton
                                    key={colorName}
                                    family={family}
                                    isActive={activeFamily === colorName}
                                    onClick={() => onSelect(colorName)}
                                />
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
} 