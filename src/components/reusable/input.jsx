import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

export default function Input({ type = "text", placeholder = "", value, onChange, className = "", ...props }) {
	const [showPassword, setShowPassword] = useState(false);

	const isPassword = type === "password";
	const inputType = isPassword ? (showPassword ? "text" : "password") : type;

	return (
		<div className={`relative w-full ${className}`}>
			<input
				type={inputType}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 outline-none transition-all duration-200 focus:border-gray-300 focus:bg-white focus:ring-1 focus:ring-gray-200 pr-12"
				{...props}
			/>
			{isPassword && (
				<button
					type="button"
					onClick={() => setShowPassword((prev) => !prev)}
					className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
					tabIndex={-1}
					aria-label={showPassword ? "Hide password" : "Show password"}>
					{showPassword ? <IoEyeOutline size={20} /> : <IoEyeOffOutline size={20} />}
				</button>
			)}
		</div>
	);
}
