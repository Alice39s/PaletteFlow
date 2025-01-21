import { ColorFamily, generateExtendedShades } from "./colorUtils";

export const initialColors: ColorFamily[] = [
    {
        name: 'Red',
        baseHsl: [0, 75, 50],
        shadeCount: 11,
        shades: generateExtendedShades([0, 75, 50], 11)
    },
    {
        name: 'Orange',
        baseHsl: [30, 75, 50],
        shadeCount: 11,
        shades: generateExtendedShades([30, 75, 50], 11)
    },
    {
        name: 'Yellow',
        baseHsl: [60, 75, 50],
        shadeCount: 11,
        shades: generateExtendedShades([60, 75, 50], 11)
    },
    {
        name: 'Green',
        baseHsl: [120, 75, 50],
        shadeCount: 11,
        shades: generateExtendedShades([120, 75, 50], 11)
    },
    {
        name: 'Cyan',
        baseHsl: [180, 75, 50],
        shadeCount: 11,
        shades: generateExtendedShades([180, 75, 50], 11)
    },
    {
        name: 'Blue',
        baseHsl: [210, 75, 50],
        shadeCount: 11,
        shades: generateExtendedShades([210, 75, 50], 11)
    },
    {
        name: 'Purple',
        baseHsl: [270, 75, 50],
        shadeCount: 11,
        shades: generateExtendedShades([270, 75, 50], 11)
    },
    {
        name: 'Pink',
        baseHsl: [330, 75, 50],
        shadeCount: 11,
        shades: generateExtendedShades([330, 75, 50], 11)
    },
];
