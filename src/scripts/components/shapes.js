export function initShapes( wrapperSelector, amount )
{
	const shapesWrapper = document.createElement( 'div' );
	shapesWrapper.classList.add( 'page-header__shapes-wrapper' );

	for ( let i = 0; i < amount; ++i )
	{
		const shapeWrapper = document.createElement( 'div' );
		shapeWrapper.classList.add( 'shape-wrapper' );
		shapeWrapper.classList.add( `shape-wrapper--${i}` );

		const shape = document.createElement( 'div' );
		shape.classList.add( 'shape' );
		shape.classList.add( 'triangle' );
		shape.classList.add( `triangle--${i}` );

		shapeWrapper.appendChild( shape );
		shapesWrapper.appendChild( shapeWrapper );
	}

	document.querySelector( wrapperSelector ).appendChild( shapesWrapper );
}