import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, Component } from 'react';

interface LayoutProps {
    children: ReactNode;
    isDark: boolean;
}

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
    constructor(props: { children: ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen w-full flex items-center justify-center">
                    <p>Something went wrong with the animation. Please refresh the page.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default function Layout({ children, isDark }: LayoutProps) {
    return (
        <ErrorBoundary>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`min-h-screen w-full flex flex-col ${isDark ? 'dark' : ''}`}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isDark ? 'dark' : 'light'}
                        layoutId="background"
                        className="fixed inset-0 -z-10"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            background: isDark
                                ? 'linear-gradient(to bottom right, rgb(17, 24, 39), rgb(31, 41, 55))'
                                : 'linear-gradient(to bottom right, rgb(249, 250, 251), rgb(243, 244, 246))'
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeInOut'
                        }}
                    />
                </AnimatePresence>
                {children}
            </motion.div>
        </ErrorBoundary>
    );
}