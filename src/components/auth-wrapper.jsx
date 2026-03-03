import { HiCheck } from "react-icons/hi";

const features = [
	"Effortlessly spider and map targets to uncover hidden security flaws",
	"Deliver high-quality, validated findings in hours, not weeks.",
	"Generate professional, enterprise-grade security reports automatically.",
];

export default function AuthWrapper({ children }) {
	return (
		<div
			className="relative min-h-screen w-full overflow-hidden font-[Inter]"
			style={{
				backgroundColor: "#0f141a",
				backgroundImage: `
					radial-gradient(circle at 145% 205%, 
						transparent,
                  #c82d22 25%,
						#120b12 52%,
						#c82d22 55%,
						#c82d22 55%,
						#d4894e 58%, 
						#12363b 65%,
						transparent 75%,
						transparent 100%
					)
				`,
			}}>
			<div className="p-5 flex items-center gap-2.5 relative z-10">
				<div
					className="w-7 h-7 rounded-full flex items-center justify-center"
					style={{ backgroundColor: "var(--primary)" }}>
					<div className="w-2.5 h-2.5 rounded-full bg-white" />
				</div>
				<span className="text-lg font-medium text-white">aps</span>
			</div>
			<div className="mt-14 flex items-center px-16">
				<div className="relative z-10 flex flex-col justify-between basis-1/2">
					<div>
						<h1 className="text-[40px] leading-tight font-medium text-white">
							Expert level Cybersecurity
							<br />
							in <span className="text-primary">hours</span> not weeks.
						</h1>
						<div className="mt-10">
							<p className="text-white font-semibold text-sm mb-4">What's included</p>
							<div className="flex flex-col gap-3">
								{features.map((text, i) => (
									<div key={i} className="flex items-start gap-3">
										<HiCheck size={18} className="shrink-0 mt-0.5 text-green-600" />
										<span className="text-sm leading-relaxed text-white">{text}</span>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="mt-10">
						<div className="flex items-center gap-2 mb-1">
							<span className="text-green-600 text-lg">★</span>
							<span className="text-white text-sm font-medium">Trustpilot</span>
						</div>
						<p className="text-white">
							<span className="text-xl font-bold">Rated 4.5/5.0</span>
							<span className="text-sm ml-2 text-gray-500">(100k+ reviews)</span>
						</p>
					</div>
				</div>

				<div className="basis-1/2 flex">
					<div
						className="ml-auto max-w-120 w-full rounded-2xl p-8 lg:p-10"
						style={{ backgroundColor: "#fff", boxShadow: "0 8px 40px rgba(0,0,0,0.3)" }}>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}
