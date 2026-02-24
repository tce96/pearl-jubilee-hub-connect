import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <h1 className="text-3xl md:text-4xl font-serif font-bold gold-text mb-2">{title}</h1>
      {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
      <div className="mt-4 h-px w-20 gold-gradient rounded-full" />
    </motion.div>
  );
}
