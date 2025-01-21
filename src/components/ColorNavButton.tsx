import { motion } from 'framer-motion';
import { ColorFamily } from '../utils/colorUtils';

interface ColorNavButtonProps {
    family: ColorFamily;
    isActive: boolean;
    onClick: () => void;
}

export function ColorNavButton({ family, isActive, onClick }: ColorNavButtonProps) {
    return (
        <motion.button
            className={`group flex items-center gap-2 rounded px-2 py-1 text-sm ${
                isActive
                    ? 'bg-gray-100 dark:bg-gray-700'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
            }`}
            onClick={onClick}
            whileTap={{ scale: 0.95 }}
        >
            <div
                className="h-3 w-3 rounded"
                style={{ backgroundColor: family.shades[Math.floor(family.shades.length / 2)].hex }}
            />
            <span className="text-gray-600 dark:text-gray-400">
                {family.name}
            </span>
        </motion.button>
    );
} 