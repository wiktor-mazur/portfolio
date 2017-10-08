import debounce from '../utilities/debounce.js';
import { animation } from '../utilities/animation.js';

function parallaxLogic( el, factor )
{
	animation( el, {
		translateY: `${window.pageYOffset / ( 20 / factor )}px`
	}, 1500, 'ease' );
}

export function parallax( selector, factor = 1 )
{
	if ( !selector )
	{
		return false;
	}

	const el = document.querySelector( selector );

	if ( !el )
	{
		return false;
	}

	window.addEventListener( 'scroll', debounce( () =>
	{
		parallaxLogic( el, factor );
	}, 25 ) );
}