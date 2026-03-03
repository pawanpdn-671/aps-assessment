export default function Button({ children, variant = "primary", fullWidth = false, className = "", ...props }) {
	const base =
		"inline-flex text-sm items-center justify-center gap-2 font-light transition-all duration-200 cursor-pointer whitespace-nowrap";

	const variants = {
		primary: "py-3 px-6 rounded-full bg-primary text-white text-base hover:bg-active active:scale-[0.98]",
		secondary:
			"py-2.5 px-4 rounded-lg text-sm border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 active:scale-[0.98]",
		danger: "py-2.5 px-4 rounded-lg text-sm bg-red-500 text-white hover:bg-red-600 active:scale-[0.98]",
		"social-apple": "flex-1 py-3 rounded-full bg-black text-white hover:bg-gray-900 active:scale-[0.98]",
		"social-google": "flex-1 py-3 rounded-full bg-[#f5e6e0] text-gray-700 hover:bg-[#edddd7] active:scale-[0.98]",
		"social-meta": "flex-1 py-3 rounded-full bg-[#1877F2] text-white hover:bg-[#1565d8] active:scale-[0.98]",
		icon: "p-1.5 rounded-lg hover:bg-gray-100 active:scale-[0.95]",
	};

	return (
		<button className={`${base} ${variants[variant] || ""} ${fullWidth ? "w-full" : ""} ${className}`} {...props}>
			{children}
		</button>
	);
}
