'use client';
import Image from 'next/image';
import React from 'react';

export default function Navbar() {
	const [toggleMenu, setToggleMenu] = React.useState(false);
	return (
		<nav className=''>
			<div className=''>
				<Image
					src='/icon-72x72.png'
					alt=''
					className='w-full '
					height={64}
					width={64}
				/>
			</div>
			<ul className=''>
				<li className=''>
					<a href='#home'>Home</a>
				</li>
				<li className=''>
					<a href='#about'>About</a>
				</li>
				<li className=''>
					<a href='#menu'>Menu</a>
				</li>
				<li className=''>
					<a href='#awards'>Awards</a>
				</li>
				<li className=''>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
			<div className=''>
				<a
					href='#login'
					className=''
				>
					Log In / Registration
				</a>
				<div />
				<a
					href='/'
					className=''
				>
					Book Table
				</a>
			</div>
			<div className=''>
				<button
					className=''
					onClick={() => setToggleMenu(true)}
				>
					Menu
				</button>
				{toggleMenu && (
					<div className=''>
						<button
							className=''
							onClick={() => setToggleMenu(false)}
						>
							Menu
						</button>
						<ul className=''>
							<li>
								<a
									href='#home'
									onClick={() =>
										setToggleMenu(false)
									}
								>
									Home
								</a>
							</li>
							<li>
								<a
									href='#about'
									onClick={() =>
										setToggleMenu(false)
									}
								>
									About
								</a>
							</li>
							<li>
								<a
									href='#menu'
									onClick={() =>
										setToggleMenu(false)
									}
								>
									Menu
								</a>
							</li>
							<li>
								<a
									href='#awards'
									onClick={() =>
										setToggleMenu(false)
									}
								>
									Awards
								</a>
							</li>
							<li>
								<a
									href='#contact'
									onClick={() =>
										setToggleMenu(false)
									}
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
}
