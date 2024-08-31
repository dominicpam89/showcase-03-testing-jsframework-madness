import { motion } from "framer-motion";

interface Props {
	message: string;
}
export default function SearchErrorUI({ message }: Props) {
	return (
		<motion.p
			initial={{ x: -35, opacity: 0 }}
			animate={{ x: 5, opacity: 1 }}
			className="w-full text-destructive"
		>
			{message}
		</motion.p>
	);
}
