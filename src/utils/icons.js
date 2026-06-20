// const iconColor = '#4527a4';

// A card mid-flip in 3D: a solid front face and a faded back face turning
// around a dashed central hinge, with a motion arc on top.
export const blockIcon = (
	<svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 24 24'>
		<path d='M8 3.4Q12 1.5 16 3.4' fill='none'  strokeWidth='1.3' strokeLinecap='round' />
		<path d='M16 3.4l-1.9-.8.3 2z'  />
		<path d='M3.6 5.6 11 7.3v11.4l-7.4 1.7z'  opacity='0.85' />
		<path d='M20.4 5.6 13 7.3v11.4l7.4 1.7z' opacity='0.28' />
		<circle cx='7' cy='11' r='1.6' fill='#ffffff' />
		<path d='M4.4 16.4c0-1.6 1.2-2.6 2.6-2.6s2.6 1 2.6 2.6z' fill='#ffffff' />
		<line x1='12' y1='4.4' x2='12' y2='21.6'  strokeWidth='1.2' strokeDasharray='2 1.6' />
	</svg>
);

export const verticalLineIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 14.707 14.707'>
	<rect x='6.275' y='0' width='2.158' height='14.707' />
</svg>;

export const horizontalLineIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 357 357'>
	<path d='M357,204H0v-51h357V204z' />
</svg>;
