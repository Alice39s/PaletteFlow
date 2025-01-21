// 色阶配置
export const SHADE_CONFIG = {
    MIN_COUNT: 16,
    MAX_COUNT: 56,
    MIN_LIGHTNESS: 8,
    MAX_LIGHTNESS: 92,
    MIN_SATURATION_FACTOR: 0.7,
    MAX_SATURATION_FACTOR: 1.2,
} as const;

// 颜色分类
export const COLOR_CATEGORIES = {
    GRAY: {
        name: '灰度',
        colors: ['Slate', 'Gray', 'Zinc', 'Neutral', 'Stone']
    },
    RED: {
        name: '红色系',
        colors: ['Red', 'Orange', 'Rose', 'Pink']
    },
    GREEN: {
        name: '绿色系',
        colors: ['Green', 'Emerald', 'Teal', 'Lime']
    },
    BLUE: {
        name: '蓝色系',
        colors: ['Blue', 'Sky', 'Cyan', 'Indigo']
    },
    WARM: {
        name: '暖色调',
        colors: ['Yellow', 'Amber', 'Orange', 'Red', 'Rose', 'Pink', 'Fuchsia']
    },
    COOL: {
        name: '冷色调',
        colors: ['Purple', 'Violet', 'Indigo', 'Blue', 'Sky', 'Cyan', 'Teal']
    }
} as const;

// Toast 配置
export const TOAST_CONFIG = {
    DURATION: 2000,
    POSITION: 'top-right',
} as const;

// Local Storage 键名
export const STORAGE_KEYS = {
    THEME: 'paletteflow-theme',
} as const; 