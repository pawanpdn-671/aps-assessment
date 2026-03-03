import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/reusable/input";
import Button from "../components/reusable/button";
import { FaApple, FaMeta } from "react-icons/fa6";
import AuthWrapper from "../components/auth-wrapper";

const Login = () => {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/dashboard");
	};
	return (
		<AuthWrapper>
			<h2 className="text-3xl font-medium mb-1 text-center text-gray-900">Sign in</h2>
			<p className="mt-4 text-sm mb-6 text-center font-normal text-gray-500">
				Don't have an account?{" "}
				<Link to="/signup" className="underline text-primary">
					Sign up
				</Link>
			</p>

			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<Input type="email" placeholder="Email address*" required />
				<div className="relative">
					<Input type={"password"} placeholder="Password (8+ characters)*" required minLength={8} />
				</div>

				<div className="flex justify-end">
					<Link to="/" className="text-sm text-primary">
						Forgot password?
					</Link>
				</div>

				<div className="mt-5">
					<Button variant="primary" type="submit" fullWidth>
						Sign In
					</Button>
				</div>
			</form>

			<div className="flex gap-3 mt-4">
				<Button variant="social-apple">
					<FaApple size={24} />
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
					<FaMeta size={24} />
				</Button>
			</div>
		</AuthWrapper>
	);
};

export default Login;
