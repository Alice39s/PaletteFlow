import { useState, useCallback } from 'react';
import { toast } from 'sonner';
import { ColorShade, ColorFamily, generateExtendedShades, copyToClipboard, formatColor } from '../utils/colorUtils';
import { SHADE_CONFIG, TOAST_CONFIG } from '../consts';


export function useColorPalette(initialColors: ColorFamily[]) {
    const [colorFormat, setColorFormat] = useState<'hex' | 'rgb' | 'hsl'>('hex');
    const [colorFamilies, setColorFamilies] = useState<ColorFamily[]>(initialColors);
    const [globalShadeCount, setGlobalShadeCount] = useState<number>(SHADE_CONFIG.MIN_COUNT);

    const handleCopy = useCallback((color: ColorShade) => {
        const colorString = formatColor(color, colorFormat);
        copyToClipboard(colorString);
        toast.success('已复制颜色值', {
            description: colorString,
            duration: TOAST_CONFIG.DURATION,
        });
    }, [colorFormat]);

    const handleCopyAll = useCallback((shades: ColorShade[]) => {
        const colors = shades.map(shade => formatColor(shade, colorFormat));
        copyToClipboard(JSON.stringify(colors, null, 2));
        toast.success('已复制全部颜色', {
            description: `共 ${colors.length} 个颜色值`,
            duration: TOAST_CONFIG.DURATION,
        });
    }, [colorFormat]);

    const updateGlobalShadeCount = useCallback((newCount: number) => {
        const validCount = Math.max(SHADE_CONFIG.MIN_COUNT, Math.min(SHADE_CONFIG.MAX_COUNT, newCount));
        setGlobalShadeCount(validCount);
        setColorFamilies(prev => prev.map(family => ({
            ...family,
            shadeCount: validCount,
            shades: generateExtendedShades(family.baseHsl, validCount)
        })));
    }, []);

    return {
        colorFormat,
        setColorFormat,
        colorFamilies,
        globalShadeCount,
        handleCopy,
        handleCopyAll,
        updateGlobalShadeCount,
    };
}