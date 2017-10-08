import { animation } from '../utilities/animation.js';

let firstCloud;
let secondCloud;

let animating;

const animationTime = 35000;

function aFirstCloud()
{
	animation( firstCloud, {
		translateX: '100%',
	}, 0 );

	animation( firstCloud, {
		translateX: '0%',
	}, animationTime )
	.then( () =>
	{
		aSecondCloud(); // eslint-disable-line no-use-before-define

		animation( firstCloud, {
			translateX: '-100%',
		}, animationTime );
	} );
}

function aSecondCloud()
{
	animation( secondCloud, {
		translateX: '100%'
	}, 0 );

	animation( secondCloud, {
		translateX: '0%'
	}, animationTime )
	.then( () =>
	{
		aFirstCloud();

		animation( secondCloud, {
			translateX: '-100%'
		}, animationTime );
	} );
}

function animateClouds()
{
	if ( !animating )
	{
		return;
	}

	animation( firstCloud, {
		translateX: '0%'
	}, 0 );

	animation( secondCloud, {
		translateX: '100%'
	}, 0 );

	animation( firstCloud, {
		translateX: '-100%'
	}, animationTime );

	animation( secondCloud, {
		translateX: '0%'
	}, animationTime )
	.then( () =>
	{
		aFirstCloud();

		animation( secondCloud, {
			translateX: '-100%'
		}, animationTime );
	} );
}

function startAnimation()
{
	animating = true;
	animateClouds();
}

export function initClouds( wrapperSelector )
{
	const cloudsWrapper = document.createElement( 'div' );
	cloudsWrapper.classList.add( 'page-header__clouds-wrapper' );

	firstCloud = document.createElement( 'div' );
	firstCloud.classList.add( 'page-header__clouds' );
	cloudsWrapper.appendChild( firstCloud );

	secondCloud = document.createElement( 'div' );
	secondCloud.classList.add( 'page-header__clouds' );
	cloudsWrapper.appendChild( secondCloud );

	document.querySelector( wrapperSelector ).appendChild( cloudsWrapper );

	startAnimation();
}