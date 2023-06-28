import React from 'react';
import { COMPANY_PROFILE } from '../../../utils/const';
import { formatPhoneNumber } from '../../../utils/helpers';

const ContactInformation: React.FC = () => {
	const { email, phone, address } = COMPANY_PROFILE;

	return (
		<section className='bg-orange-100 dark:bg-orange-900 py-12'>
			<div className='container mx-auto px-4'>
				<h2 className='text-4xl font-bold text-center mb-8'>
					Contact Information
				</h2>
				<div className='flex flex-col md:flex-row justify-center items-center text-orange-500'>
					<div className='md:w-1/3 text-center flex flex-col items-center justify-center mb-8 md:mb-0'>
						<div className=' mb-2'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='w-8 h-8'
							>
								<path d='M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z' />
								<path d='M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' />
							</svg>
						</div>
						<p className='text-gray-700 dark:text-gray-200'>
							{email}
						</p>
					</div>
					<div className='md:w-1/3 text-center flex flex-col items-center justify-center mb-8 md:mb-0'>
						<div className='flex gap-3 mb-2'>
							<svg
								width='800px'
								height='800px'
								viewBox='0 0 20 20'
								version='1.1'
								xmlns='http://www.w3.org/2000/svg'
								xmlnsXlink='http://www.w3.org/1999/xlink'
								className='w-8 h-8'
							>
								<g
									id='Page-1'
									stroke='none'
									strokeWidth='1'
									fill='none'
									fillRule='evenodd'
								>
									<g
										id='Dribbble-Light-Preview'
										transform='translate(-300.000000, -7599.000000)'
										fill='currentColor'
									>
										<g
											id='icons'
											transform='translate(56.000000, 160.000000)'
										>
											<path
												d='M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439'
												id='whatsapp-[#128]'
											></path>
										</g>
									</g>
								</g>
							</svg>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='w-8 h-8'
							>
								<path
									fillRule='evenodd'
									d='M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z'
									clipRule='evenodd'
								/>
							</svg>
						</div>
						<p className='text-gray-700 dark:text-gray-200'>
							{formatPhoneNumber(phone)}
						</p>
					</div>
					<div className='md:w-1/3 text-center flex flex-col items-center justify-center'>
						<div className=' mb-2'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='w-8 h-8'
							>
								<path
									fillRule='evenodd'
									d='M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z'
									clipRule='evenodd'
								/>
							</svg>
						</div>
						<p className='text-gray-700 dark:text-gray-200'>
							{address}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactInformation;
