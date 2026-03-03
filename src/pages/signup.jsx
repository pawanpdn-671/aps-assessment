import { FaApple, FaMeta } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import AuthWrapper from "../components/auth-wrapper";
import Button from "../components/reusable/button";
import Input from "../components/reusable/input";

const Signup = () => {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/dashboard");
	};

	return (
		<AuthWrapper>
			<h2 className="text-3xl font-medium mb-1 text-center text-gray-900">Sign up</h2>
			<p className="mt-4 text-sm mb-6 text-center font-normal">
				Already have an account?{" "}
				<Link to="/login" className="underline text-primary">
					Log in
				</Link>
			</p>

			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<Input type="text" placeholder="First name*" required />
				<Input type="text" placeholder="Last name*" required />
				<Input type="email" placeholder="Email address*" required />
				<div className="relative">
					<Input type={"password"} placeholder="Password (8+ characters)*" required minLength={8} />
				</div>

				<label className="flex items-start gap-3 cursor-pointer mt-1">
					<input type="checkbox" required className="mt-0.5 w-4 h-4" style={{ color: "#0CC8A8" }} />
					<span className="text-xs leading-relaxed text-gray-600">
						I agree to Aps's{" "}
						<a href="#" className="underline">
							Terms & Conditions
						</a>{" "}
						and acknowledge the{" "}
						<a href="#" className="underline">
							Privacy Policy
						</a>
					</span>
				</label>

				<Button type="submit">Create account</Button>
			</form>

			<div className="flex gap-3 mt-4">
				<Button variant="social-apple">
					<FaApple size={20} />
				</Button>
				<Button variant="social-google">
					<img
						src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
						alt="Google"
						width={22}
						height={22}
					/>
				</Button>
				<Button variant="social-meta">
					<FaMeta size={20} />
				</Button>
			</div>
		</AuthWrapper>
	);
};

export default Signup;
