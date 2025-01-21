import { useState, useCallback } from 'react';
import { STORAGE_KEYS, SHADE_CONFIG } from '../consts';
import { ColorFamily } from '../utils/colorUtils';

export function useMemory() {
    const [shadeCount, setShadeCount] = useState<number>(() => {
        const saved = localStorage.getItem(STORAGE_KEYS.SHADE_COUNT);
        return saved ? parseInt(saved, 10) : SHADE_CONFIG.MIN_COUNT;
    });

    const [lastSelectedFamily, setLastSelectedFamily] = useState<ColorFamily | null>(() => {
        const saved = localStorage.getItem(STORAGE_KEYS.LAST_SELECTED_FAMILY);
        return saved ? JSON.parse(saved) : null;
    });

    const updateShadeCount = useCallback((count: number) => {
        const validCount = Math.max(
            SHADE_CONFIG.MIN_COUNT,
            Math.min(SHADE_CONFIG.MAX_COUNT, count)
        );
        setShadeCount(validCount);
        localStorage.setItem(STORAGE_KEYS.SHADE_COUNT, validCount.toString());
    }, []);

    const updateLastSelectedFamily = useCallback((family: ColorFamily) => {
        setLastSelectedFamily(family);
        localStorage.setItem(STORAGE_KEYS.LAST_SELECTED_FAMILY, JSON.stringify(family));
    }, []);

    const clearMemory = useCallback(() => {
        setShadeCount(SHADE_CONFIG.MIN_COUNT);
        setLastSelectedFamily(null);
        localStorage.removeItem(STORAGE_KEYS.SHADE_COUNT);
        localStorage.removeItem(STORAGE_KEYS.LAST_SELECTED_FAMILY);
    }, []);

    return {
        shadeCount,
        lastSelectedFamily,
        updateShadeCount,
        updateLastSelectedFamily,
        clearMemory
    };
} 