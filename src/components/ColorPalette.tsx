import { useCallback } from 'react';
import { ColorFamilyCard } from './ColorFamilyCard';
import { ColorNav } from './ColorNav';
import { SHADE_CONFIG } from '../consts';
import { ColorFamily, ColorShade } from '../utils/colorUtils';

interface ColorPaletteProps {
    families: ColorFamily[];
    colorFormat: 'hex' | 'rgb' | 'hsl';
    shadeCount: number;
    onCopy: (color: ColorShade) => void;
    onCopyAll: (shades: ColorShade[]) => void;
    onShadeCountChange: (count: number) => void;
}

export default function ColorPalette({
    families,
    colorFormat,
    shadeCount,
    onCopy,
    onCopyAll,
    onShadeCountChange
}: ColorPaletteProps) {
    const handleNavigate = useCallback((familyName: string) => {
        const element = document.getElementById(`color-family-${familyName}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    return (
        <div className="w-full py-8 mx-auto max-w-full">
            <div className="mb-8 px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4 w-full">
                    <input
                        type="range"
                        min={SHADE_CONFIG.MIN_COUNT}
                        max={SHADE_CONFIG.MAX_COUNT}
                        value={shadeCount}
                        onChange={(e) => onShadeCountChange(parseInt(e.target.value))}
                        className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                        {shadeCount} 个色阶
                    </span>
                </div>
            </div>

            <div className="px-4 grid gap-8">
                {families.map((family) => (
                    <div key={family.name} id={`color-family-${family.name}`}>
                        <ColorFamilyCard
                            family={family}
                            colorFormat={colorFormat}
                            handleCopy={onCopy}
                            handleCopyAll={onCopyAll}
                        />
                    </div>
                ))}
            </div>

            <ColorNav families={families} onSelect={handleNavigate} />
        </div>
    );
}