import 'babel-polyfill';

import { parallax } from './components/parallax.js';
import { revealer } from './components/revealer.js';
import { image3dRotator } from './components/image3dRotator.js';
import { initClouds } from './components/clouds.js';
import { initShapes } from './components/shapes.js';
import { initNavigation } from './components/navigation.js';

/*
@TODO
General:
- dynamically clear all event listeners, which are no longer in use
- extend revealer module, so that it will be possible to define revealing direction

Animation module:
- write tests
- extract to stand-alone module and publish on github and npm
- find out a better way to handle units such as px, %, etc.
- write error handling
- develop transform-animation module, so that it works directly on matrices
- allow to animate more CSS properties, such as colors
*/

if ( process.env.NODE_ENV === 'dev' ) // eslint-disable-line no-undef
{
	require( '../styles/main.scss' ); // eslint-disable-line no-undef

	const liveReload = document.createElement( 'script' );
	liveReload.type = 'text/javascript';
	liveReload.async = true;
	liveReload.src = 'http://localhost:35729/livereload.js';
	document.head.appendChild( liveReload );
}

initNavigation();

const browser = window.navigator.userAgent;
const IEOrEgde = Boolean( browser.indexOf( 'MSIE ' ) > 0 || browser.indexOf( 'Trident/' ) > 0 || browser.indexOf( 'Edge/' ) > 0 );

if ( window.innerWidth > 1000 && !IEOrEgde ) // disable certain features on mobile, IE and Edge
{
	// setup clouds animation in header
	initClouds( '.page-header' );

	// setup decorative shapes in header
	initShapes( '.page-header', 6 );

	// setup portfolio item's starting rotations in JS, so that they will be possible to animate later on
	Array.from( document.querySelectorAll( '.portfolio__list__item__image' ) ).forEach( ( item, index ) =>
	{
		let newTransform;

		if ( index % 2 === 0 )
		{
			newTransform = 'rotateX(-3.3deg) rotateY(4.5deg)';
		}
		else
		{
			newTransform = 'rotateX(-3.3deg) rotateY(-4.5deg)';
		}

		item.style.webkitTransform = newTransform;
		item.style.MozTransform = newTransform;
		item.style.msTransform = newTransform;
		item.style.OTransform = newTransform;
		item.style.transform = newTransform;
	} );

	// setup fancy mouseover-image-3d-rotator on portfolio item's images
	image3dRotator( '.portfolio__list__item__image' );

	// setup parallax effect
	parallax( '.about__wrapper', 0.2 );
	parallax( '.offert__wrapper', 0.8 );

	parallax( '.shape-wrapper--1', 3 );
	parallax( '.shape-wrapper--2', 4 );
	parallax( '.shape-wrapper--3', 8 );
	parallax( '.shape-wrapper--4', 6 );
	parallax( '.shape-wrapper--5', 4 );
	parallax( '.shape-wrapper--6', 2 );

	// setup revealer effect
	revealer( [
		{
			type: 'block',
			wrapper: '.page-header',
			element: '.page-header__logo-wrapper__logo__text--wiktormazur',
			overlayColor: '#fbfbfb',
			maskColor: '#222222',
			percentageVisibility: 100,
			speed: 300
		},
		{
			type: 'block',
			wrapper: '.page-header',
			element: '.page-header__logo-wrapper__logo__text--codingwithpassion',
			overlayColor: '#fbfbfb',
			maskColor: '#444444',
			percentageVisibility: 100,
			speed: 300
		}
	] );

	revealer( [
		{ type: 'fadeIn', wrapper: '.about__wrapper', element: '#about-header', percentageVisibility: 40, speed: 700 },
		{ type: 'fadeIn', wrapper: '.about__wrapper', element: '#about-text', percentageVisibility: 40, speed: 700 },
	] );

	revealer( [
		{ type: 'fadeIn', wrapper: '.offert__wrapper', element: '.offert__item:nth-child(1)', percentageVisibility: 40, speed: 700 },
		{ type: 'fadeIn', wrapper: '.offert__wrapper', element: '.offert__item:nth-child(2)', percentageVisibility: 40, speed: 700 },
		{ type: 'fadeIn', wrapper: '.offert__wrapper', element: '.offert__item:nth-child(3)', percentageVisibility: 40, speed: 700 },
		{ type: 'fadeIn', wrapper: '.offert__wrapper', element: '.offert__item:nth-child(4)', percentageVisibility: 40, speed: 700 },
		{ type: 'fadeIn', wrapper: '.offert__wrapper', element: '.offert__item:nth-child(5)', percentageVisibility: 40, speed: 700 },
		{ type: 'fadeIn', wrapper: '.offert__wrapper', element: '.offert__item:nth-child(6)', percentageVisibility: 40, speed: 700 },
	] );

	revealer( [
		{ type: 'fadeIn', wrapper: '.contact', element: '#contact-heading', percentageVisibility: 40, speed: 700 },
		{ type: 'fadeIn', wrapper: '.contact', element: '#contact-subheading', percentageVisibility: 40, speed: 700 },
		{ type: 'fadeIn', wrapper: '.contact', element: '.contact__item:nth-child(1)', percentageVisibility: 40, speed: 700 },
		{ type: 'fadeIn', wrapper: '.contact', element: '.contact__item:nth-child(2)', percentageVisibility: 40, speed: 700 },
		{ type: 'fadeIn', wrapper: '.contact', element: '.contact__item:nth-child(3)', percentageVisibility: 40, speed: 700 },
	] );

	Array.from( document.querySelectorAll( '.portfolio__list__item' ) ).forEach( ( item, index ) =>
	{
		revealer( [
			{
				type: 'block',
				wrapper: null,
				element: `.portfolio__list__item:nth-child(${index + 1}) .portfolio__list__item__image`,
				overlayColor: '#ffffff',
				maskColor: '#222222',
				percentageVisibility: 40,
				speed: 300
			},
			{
				type: 'fadeIn',
				wrapper: `.portfolio__list__item:nth-child(${index + 1}) .portfolio__list__item__image`,
				element: `.portfolio__list__item:nth-child(${index + 1}) .portfolio__list__item__description`,
				percentageVisibility: 40,
				speed: 400
			}
		] );
	} );

	// just to make sure that revealer is going to affect visible elements on page load
	window.scrollTo( window.scrollX, window.scrollY - 1 );
	window.scrollTo( window.scrollX, window.scrollY + 1 );
}