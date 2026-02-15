import {motion} from "framer-motion";

function Navbar() {
	return (
		<div className="fixed top-6 left-0 w-full flex justify-center z-50">
			<motion.div
				initial={{opacity: 0, y: -15}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 0.6, ease: "easeOut"}}
				className="
          px-12 py-3
          rounded-full
          bg-brand-gold/95
          backdrop-blur-sm
          border border-brand-gold/40
          flex gap-12
          text-brand-emerald
          text-sm
          tracking-wide
        "
			>
				<a className="hover:opacity-70 transition duration-300 cursor-pointer">
					Home
				</a>
				<a className="hover:opacity-70 transition duration-300 cursor-pointer">
					Products
				</a>
				<a className="hover:opacity-70 transition duration-300 cursor-pointer">
					Brands
				</a>
				<a className="hover:opacity-70 transition duration-300 cursor-pointer">
					About Us
				</a>
				<a className="hover:opacity-70 transition duration-300 cursor-pointer">
					Contact
				</a>
			</motion.div>
		</div>
	);
}

export default Navbar;
