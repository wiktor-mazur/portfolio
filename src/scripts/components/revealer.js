import debounce from '../utilities/debounce.js';
import { animation } from '../utilities/animation.js';

function elementPercentageVisibility( item )
{
	let percentVisible = 0;

	const itemHeight = item.offsetHeight;
	let itemTop = item.offsetTop;

	const screenTop = window.pageYOffset;
	const screenBottom = screenTop + window.innerHeight;

	while ( item.offsetParent )
	{
		item = item.offsetParent;
		itemTop += item.offsetTop;
	}

	const itemBottom = itemTop + itemHeight;

	if ( itemTop > screenTop )
	{
		if ( itemBottom < screenBottom )
		{
			percentVisible = 100;
		}
		else if ( itemTop < screenBottom )
		{
			percentVisible = Math.round( ( screenBottom - itemTop ) / itemHeight * 100 );
		}
	}
	else if ( itemBottom > screenTop )
	{
		percentVisible = Math.round( ( itemBottom - screenTop ) / itemHeight * 100 );
	}

	return percentVisible;
}

function reveal( item, index, speed )
{
	item.revealed = true;

	animation( item, {
		opacity: '1',
		translateX: '0px',
		translateY: '0px'
	}, speed, 'ease', index * 200 );
}

function prepareBlockRevealMask( item, overlayColor, maskColor )
{
	const mask = document.createElement( 'div' );
	mask.classList.add( 'revealer-overlay__mask' );
	mask.style.background = maskColor;

	const overlay = document.createElement( 'div' );
	overlay.classList.add( 'revealer-overlay' );
	overlay.style.background = overlayColor;
	overlay.appendChild( mask );

	item.appendChild( overlay );
}

function blockReveal( item, index, speed )
{
	item.revealed = true;

	const overlay = item.querySelector( '.revealer-overlay' );
	const mask = item.querySelector( '.revealer-overlay__mask' );

	animation( mask, {
		width: '100%',
	}, speed, 'inOutQuintic', index * 300 )
	.then( () =>
	{
		overlay.style.background = 'transparent';

		animation( mask, {
			width: '0%',
			translateX: `${item.offsetWidth}px`,
		}, speed + 200, 'inOutQuintic' )
		.then( () =>
		{
			overlay.remove();
		} );
	} );
}

export function revealer( arr )
{
	if ( !Array.isArray( arr ) )
	{
		return false;
	}

	arr.forEach( ( item, index ) =>
	{
		const itemEl = document.querySelector( item.element );
		const wrapperEl = document.querySelector( item.wrapper );

		const speed = Number( item.speed || 300 );

		if ( !itemEl )
		{
			return;
		}

		if ( item.type === 'block' )
		{
			let animating = false;

			prepareBlockRevealMask( itemEl, item.overlayColor, item.maskColor );

			window.addEventListener( 'scroll', debounce( () =>
			{
				if ( elementPercentageVisibility( wrapperEl || itemEl ) >= item.percentageVisibility && !animating && itemEl.revealed === undefined )
				{
					blockReveal( itemEl, index, speed );
					animating = true;
				}
			}, 25 ) );
		}
		else if ( item.type === 'fadeIn' )
		{
			itemEl.style.transform = 'translate(0px, -20px)';
			itemEl.style.opacity = '0';

			window.addEventListener( 'scroll', debounce( () =>
			{
				if ( elementPercentageVisibility( wrapperEl || itemEl ) >= item.percentageVisibility && itemEl.revealed === undefined )
				{
					reveal( itemEl, index, speed );
				}
			}, 25, this ) );
		}
	} );
}