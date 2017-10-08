import debounce from '../utilities/debounce.js';
import { animation, customAnimation } from '../utilities/animation.js';

let isMenuOpen = false;

const openMenuButton = document.querySelector( '#openMenu' );
const closeMenuButton = document.querySelector( '#closeMenu' );
const menuElement = document.querySelector( '.page-navigation__menu' );
const scrollLinks = document.querySelectorAll( '.scrollLink' );
const pageHeaderElement = document.querySelector( '.page-header' );

function openMenu()
{
	if ( isMenuOpen === true )
	{
		return;
	}

	menuElement.classList.add( 'page-navigation__menu--visible' );
	isMenuOpen = true;
}

function closeMenu()
{
	if ( isMenuOpen === false )
	{
		return;
	}

	menuElement.classList.remove( 'page-navigation__menu--visible' );
	isMenuOpen = false;
}

function toggleMenu() // eslint-disable-line no-unused-vars
{
	if ( isMenuOpen === true )
	{
		closeMenu();
	}
	else
	{
		openMenu();
	}
}

function enableStickyMenu()
{
	menuElement.classList.add( 'page-navigation__menu--sticky' );
	menuElement.style.top = '-100px';

	animation( menuElement, {
		top: '0px'
	}, 800, 'inOutQuintic' );

	openMenuButton.classList.add( 'openMenu--sticky' );
	openMenuButton.style.top = '-100px';

	animation( openMenuButton, {
		top: '0px'
	}, 800, 'inOutQuintic' );
}

function disableStickyMenu()
{
	animation( menuElement, {
		top: '-100px'
	}, 800, 'inOutQuintic' )

	.then( () =>
	{
		menuElement.classList.remove( 'page-navigation__menu--sticky' );
		menuElement.style.top = '0';
		menuElement.style.opacity = '0';

		animation( menuElement, {
			opacity: 1
		}, 800, 'inOutQuintic' );
	} );

	animation( openMenuButton, {
		top: '-100px'
	}, 300, 'inOutQuintic' )

	.then( () =>
	{
		openMenuButton.classList.remove( 'openMenu--sticky' );
		openMenuButton.style.top = 'auto';
		openMenuButton.style.opacity = '0';

		animation( openMenuButton, {
			opacity: 1
		}, 300, 'inOutQuintic' );
	} );
}

function updateStickyMenu()
{
	const isSticky = menuElement.classList.contains( 'page-navigation__menu--sticky' );

	if ( window.pageYOffset >= pageHeaderElement.offsetHeight && !isSticky )
	{
		enableStickyMenu();
	}

	if (  window.pageYOffset < pageHeaderElement.offsetHeight && isSticky )
	{
		disableStickyMenu();
	}
}

function scrollToSection( sectionId )
{
	if ( sectionId.substr( 0, 1 ) !== '#' )
	{
		sectionId = `#${sectionId}`;
	}

	const scrollToElement = document.querySelector( sectionId );

	closeMenu();

	if ( history.pushState )
	{
		history.pushState( null, scrollToElement.dataset.name, sectionId );
	}
	else
	{
		location.hash = sectionId;
	}

	return customAnimation( {
		element: document.documentElement,
		to: Number( scrollToElement.getBoundingClientRect().top + ( window.pageYOffset || document.documentElement.scrollTop ) - 85 ),
		getValue: () =>
		{
			return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
		},
		setValue: ( value ) =>
		{
			window.scrollTo( window.scrollX, value );
		},
		duration: 1000,
		easing: 'ease'
	} );
}

function menuSwipeEvent( evt )
{
	let startX = evt.touches[0].clientX;
	let moveX = startX;

	window.addEventListener( 'touchmove', ( e ) =>
	{
		if ( !startX )
		{
			return;
		}

		moveX = e.touches[0].clientX;
	}, false );

	window.addEventListener( 'touchend', () =>
	{
		if ( !startX )
		{
			return;
		}

		const diff = parseInt( startX - moveX );

		if ( diff < -100 )
		{
			closeMenu();

			startX = null;
		}
	}, false );
}

function attachEvents()
{
	Array.from( scrollLinks ).forEach( ( item ) =>
	{
		item.addEventListener( 'click', ( e ) =>
		{
			e.preventDefault();
			scrollToSection( e.target.hash );

		}, false );
	}, false );

	openMenuButton.addEventListener( 'click', openMenu, false );
	closeMenuButton.addEventListener( 'click', closeMenu, false );
	window.addEventListener( 'touchstart', menuSwipeEvent, false );
	window.addEventListener( 'scroll', debounce( updateStickyMenu, 25 ), false );
}

export function initNavigation()
{
	attachEvents();
}

