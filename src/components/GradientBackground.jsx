import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
export default function GradientBackground({ className = '', style = {}, transition, ...props }) {
    const animation = transition ?? { duration: 6, ease: 'easeInOut', repeat: Infinity };
    return (
        <motion.div
            className={`size-full ${className}`}
            style={{
                background: 'linear-gradient(135deg, oklch(55% 0.32 305), oklch(45% 0.20 260), oklch(65% 0.28 230), oklch(55% 0.32 305))',
                backgroundSize: '400% 400%',
                ...style,
            }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={animation}
            {...props}
        />
    );
}
