import Link from 'next/link';

interface ButtonProps {
	children: React.ReactNode;
	href?: string;
	onClick?: () => void;
	className?: string;
	type?: 'button' | 'submit' | 'reset' | undefined;
	disabled?: boolean;
}

const Button = ({
	children,
	href,
	onClick,
	className,
	type,
	disabled,
}: ButtonProps) => {
	const buttonClasses =
		'px-4 py-2 rounded-md text-sm transition duration-500 hover:shadow-lg uppercase';

	if (href) {
		return (
			<Link href={href}>
				<span className={`${buttonClasses} ${className}`}>
					{children}
				</span>
			</Link>
		);
	}

	return (
		<button
			type={type}
			className={`${buttonClasses} ${className}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;
