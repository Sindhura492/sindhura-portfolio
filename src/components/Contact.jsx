import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [loading, setLoading] = useState(false);

	const handleChange = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		console.log(import.meta.env.VITE_APP_EMAILJS_TEMPLATEID);

		emailjs
			.send(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATEID,
				{
					from_name: form.name,
					to_name: "Sindhura",
					from_email: form.email,
					to_email: "sindhura7649@gmail.com",
					message: form.message,
				},
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
			)
			.then(
				() => {
					setLoading(false);
					showAlert({
						show: true,
						text: "Thank you for your message 😃",
						type: "success",
					});

					setTimeout(() => {
						hideAlert(false);
						setForm({
							name: "",
							email: "",
							message: "",
						});
					}, [3000]);
				},
				(error) => {
					setLoading(false);
					console.error(error);

					showAlert({
						show: true,
						text: "I didn't receive your message 😢",
						type: "danger",
					});
				},
			);
	};

	return (
		<section className="c-spac my-20">
			<div className="relative min-h-screen flex items-center justify-center flex-col">
				<img
					src="/assets/terminal.png"
					alt="terminal-bg"
					className="absolute inset-0 min-h-screen"
				/>
				<div className="contact-container">
					<h3 className="head-text mt-7">Let's talk</h3>
					<p className="text-lg text-white-600 mt-3">
						Whether you’re looking to build a new web application, improve your
						existing platform, or bring a unique project to life, I’m here!
					</p>
					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className="mt-12 flex flex-col space-y-7"
					>
						<label className="space-y-3">
							<span className="field-label">Full Name</span>
							<input
								type="text"
								name="name"
								value={form.name}
								onChange={handleChange}
								required
								className="field-input"
								placeholder="ex., John Doe"
							/>
						</label>

						<label className="space-y-3">
							<span className="field-label">Email Address</span>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								required
								className="field-input"
								placeholder="ex., johndoe@gmail.com"
							/>
						</label>

						<label className="space-y-3">
							<span className="field-label">Your Message</span>
							<textarea
								name="message"
								value={form.message}
								onChange={handleChange}
								required
								rows={5}
								className="field-input"
								placeholder="Hi, I wanna hire you..."
							/>
						</label>

						<button className="field-btn" type="submit" disabled={loading}>
							{loading ? "Sending..." : "Send Message"}

							<img
								src="/assets/arrow-up.png"
								alt="arrow-up"
								className="field-btn_arrow"
							/>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
