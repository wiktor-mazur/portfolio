import { animation } from '../utilities/animation.js';

function calcRotationValues( event )
{
	const posXPercentage = event.offsetX / event.target.offsetWidth;
	const posYPercentage = event.offsetY / event.target.offsetHeight;

	let rotateX = 0;
	let rotateY = 0;

	if ( posXPercentage < 0.5 )
	{
		rotateY = -( 1 - posXPercentage ) * ( event.target.offsetWidth / 180 );
	}
	else
	{
		rotateY = posXPercentage * ( event.target.offsetWidth / 180 );
	}

	if ( posYPercentage < 0.5 )
	{
		rotateX = ( 1 - posYPercentage ) * ( event.target.offsetHeight / 90 );
	}
	else
	{
		rotateX = -( posYPercentage ) * ( event.target.offsetHeight / 90 );
	}

	return {
		rotateX,
		rotateY
	};
}

function attachRotator( item )
{
	item.addEventListener( 'mousemove', ( e ) =>
	{
		const rotationValues = calcRotationValues( e );

		animation( e.target, {
			rotateX: `${rotationValues.rotateX}deg`,
			rotateY: `${rotationValues.rotateY}deg`
		}, 1500, 'linear', -1 );
	} );
}

export function image3dRotator( items )
{
	if ( !Array.isArray( items ) )
	{
		items = [ items ];
	}

	items.forEach( ( itemHtmlCollection ) =>
	{
		const collection = Array.from( document.querySelectorAll( itemHtmlCollection ) );

		collection.forEach( ( item ) =>
		{
			attachRotator( item );
		} );
	} );
}