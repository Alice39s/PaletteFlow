import convert from 'color-convert';
import { SHADE_CONFIG } from '../consts';

export interface ColorShade {
    name: string;
    hex: string;
    hsl: [number, number, number];
    rgb: [number, number, number];
}

export interface ColorFamily {
    name: string;
    shades: ColorShade[];
    baseHsl: [number, number, number];
    shadeCount: number;
    baseColor: string;
}

export const validateShadeCount = (count: number): number => {
    return Math.max(SHADE_CONFIG.MIN_COUNT, Math.min(SHADE_CONFIG.MAX_COUNT, Math.round(count)));
};

export const generateExtendedShades = (
    baseHsl: [number, number, number],
    count: number = SHADE_CONFIG.MIN_COUNT
): ColorShade[] => {
    const validCount = Math.min(
        validateShadeCount(count),
        SHADE_CONFIG.MAX_COUNT
    );

    const [h, s] = baseHsl;
    const shades: ColorShade[] = [];

    const MIN_L = SHADE_CONFIG.MIN_LIGHTNESS;
    const MAX_L = SHADE_CONFIG.MAX_LIGHTNESS;
    const MIN_S = Math.max(s * SHADE_CONFIG.MIN_SATURATION_FACTOR, 10);
    const MAX_S = Math.min(s * SHADE_CONFIG.MAX_SATURATION_FACTOR, 100);

    // 预计算亮度值以提高性能
    const generateLightnessValues = (count: number): number[] => {
        const values: number[] = [];
        const step = (MAX_L - MIN_L) / (count - 1);

        for (let i = 0; i < count; i++) {
            const rawL = MAX_L - (step * i);
            values.push(Math.round(Math.max(MIN_L, Math.min(MAX_L, rawL))));
        }

        return values;
    };

    const calculateSaturation = (lightness: number): number => {
        const distance = Math.abs(lightness - 50) / 50;
        const saturationFactor = 1 - (distance * distance);
        const newS = s + (lightness > 50 ? MIN_S - s : MAX_S - s) * (1 - saturationFactor);
        return Math.round(Math.max(MIN_S, Math.min(MAX_S, newS)));
    };

    const lightnessValues = generateLightnessValues(validCount);

    for (let i = 0; i < validCount; i++) {
        const newL = lightnessValues[i];
        const newS = calculateSaturation(newL);

        const hsl: [number, number, number] = [h, newS, newL];

        const hex = '#' + convert.hsl.hex(hsl);
        const rgb = convert.hsl.rgb(hsl) as [number, number, number];

        shades.push({
            name: `${i + 1}`,
            hex,
            hsl,
            rgb,
        });
    }

    return shades;
};

export const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
};

export const formatColor = (color: ColorShade, format: 'hex' | 'rgb' | 'hsl'): string => {
    switch (format) {
        case 'hex':
            return color.hex;
        case 'rgb':
            return `rgb(${color.rgb.join(', ')})`;
        case 'hsl':
            return `hsl(${color.hsl[0]}, ${color.hsl[1]}%, ${color.hsl[2]}%)`;
    }
};