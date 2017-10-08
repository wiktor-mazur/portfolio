// easing functions http://goo.gl/5HLl8

const easings = {
	// @todo: function taking bezier-curve as parameter
	linear: ( t, b, c, d ) =>
	{
		return b + t / d * c;
	},

	ease: ( t, b, c, d ) =>
	{
		const ts = ( t /= d ) * t;
		const tc = ts * t;
		return b + c * ( 4.2025 * tc * ts + -9.85499999999999 * ts * ts + 5.45999999999999 * tc + 0.945000000000005 * ts + 0.247499999999999 * t );
	},

	easeInCubic: ( t, b, c, d ) =>
	{
		const tc = ( t /= d ) * t * t;
		return b + c * ( tc );
	},

	inOutQuintic: ( t, b, c, d ) =>
	{
		const ts = ( t /= d ) * t;
		const tc = ts * t;
		return b + c * ( 6 * tc * ts + -15 * ts * ts + 10 * tc );
	},

	easeInOutQuad: ( t, b, c, d ) =>
	{
		t /= d / 2;

		if ( t < 1 )
		{
			return c / 2 * t * t + b;
		}

		t--;

		return -c / 2 * ( t * ( t - 2 ) - 1 ) + b;
	}
};

const allTransformProperties = [
	'translateX',
	'translateY',
	'translateZ',
	'scaleX',
	'scaleY',
	'scale',
	'rotateX',
	'rotateY',
	'rotateZ',
	'skewX',
	'skewY'
];

function decomposeTransform( element )
{
	const transformPropertiesRegexp = /[a-zA-Z]+\([a-zA-Z0-9\,\.\-\%]+\s?[a-zA-Z0-9\,\.\-\%]*\)/gim; // eslint-disable-line no-useless-escape

	const transform = element.style.webkitTransform || element.style.MozTransform || element.style.msTransform || element.style.OTransform || element.style.transform;
	let transformProperties = transform.match( transformPropertiesRegexp );

	const decomposedTransform = {};

	if ( transformProperties == null )
	{
		transformProperties = [];
	}

	transformProperties.forEach( ( item ) =>
	{
		const attribute = item.substr( 0, item.indexOf( '(' ) );
		const value = item.substring( item.indexOf( '(' ) + 1, item.indexOf( ')' ) );
		const xyz = value.split( ',' );

		if ( xyz.length > 1 )
		{
			xyz.forEach( ( xyzItem, xyzIndex ) =>
			{
				let suffix = '';

				switch ( xyzIndex )
				{
					case 0: suffix = 'X'; break;
					case 1: suffix = 'Y'; break;
					case 2: suffix = 'Z'; break;
				}

				decomposedTransform[`${attribute}${suffix}`] = xyzItem.match( /\S+/ )[0];
			} );
		}
		else
		{
			decomposedTransform[attribute] = value;
		}
	} );

	return decomposedTransform;
}

function composeTransform( transformObj )
{
	let comoposedTransform = '';

	for ( const attr in transformObj )
	{
		comoposedTransform += `${attr}(${transformObj[attr]}) `;
	}

	return comoposedTransform;
}

function getCssValue( element, attribute )
{
	if ( allTransformProperties.includes( attribute ) )
	{
		return parseFloat( decomposeTransform( element )[attribute] || 0 );
	}
	else
	{
		switch ( attribute )
		{
			case 'width':
				if ( element.style.width )
				{
					return parseFloat( element.style.width );
				}
				else
				{
					return parseFloat( element.offsetWidth );
				}
			break; // eslint-disable-line no-unreachable
			case 'height':
				if ( element.style.height )
				{
					return parseFloat( element.style.height );
				}
				else
				{
					return parseFloat( element.offsetHeight );
				}
			break; // eslint-disable-line no-unreachable
			default: return parseFloat( element.style[attribute] ); break; // eslint-disable-line no-unreachable
		}
	}
}

function getCssUnit( value )
{
	if ( typeof value != 'string' )
	{
		return '';
	}

	return value.match( /[^0-9\s\-\.]+/ ); // eslint-disable-line no-useless-escape
}

function setCssValue( element, attribute, value, unit )
{
	let finalValue;

	if ( unit == null )
	{
		finalValue = value;
	}
	else
	{
		finalValue = `${value}${unit}`;
	}

	if ( allTransformProperties.includes( attribute ) )
	{
		const currentTransform = decomposeTransform( element );
		currentTransform[attribute] = finalValue;
		const newTransform = composeTransform( currentTransform );

		element.style.webkitTransform = newTransform;
		element.style.MozTransform = newTransform;
		element.style.msTransform = newTransform;
		element.style.OTransform = newTransform;
		element.style.transform = newTransform;

		return newTransform;
	}
	else
	{
		return element.style[attribute] = finalValue;
	}
}

function animationLogic( cfg )
{
	return new Promise( ( resolve ) =>
	{
		if ( ( cfg.to === undefined || typeof cfg.to != 'number' ) ||
			( cfg.getValue === undefined || typeof cfg.getValue != 'function' ) ||
			( cfg.setValue === undefined || typeof cfg.setValue != 'function' ) )
		{
			return false;
		}

		const start = Number( cfg.getValue() );

		let currentTime = 0;
		let timingFunction = easings.easeInCubic;

		const duration = Number( cfg.duration ) || 500;
		const change = cfg.to - start;
		const increment = 20;
		const animationSymbol = Symbol( 'animationSymbol' );

		let delay = 0;

		if ( cfg.easing && typeof easings[cfg.easing] == 'function' )
		{
			timingFunction = easings[cfg.easing];
		}

		if ( cfg.element.animation === undefined )
		{
			cfg.element.animation = {};
		}

		cfg.element.animation[cfg.attr] = animationSymbol;

		const frame = () =>
		{
			if ( cfg.element.animation[cfg.attr] !== animationSymbol && cfg.delay !== -1 )
			{
				return;
			}

			currentTime += increment;
			const value = timingFunction( currentTime, start, change, duration );

			cfg.setValue( value );

			if ( currentTime < duration )
			{
				window.requestAnimationFrame( frame.bind( this ) );
			}
			else
			{
				delete cfg.element.animation[cfg.attr];
				resolve();
			}
		};

		if ( cfg.delay !== undefined && typeof cfg.delay == 'number' && cfg.delay > 0 )
		{
			delay = cfg.delay;
		}

		window.setTimeout( () =>
		{
			window.requestAnimationFrame( frame.bind( this ) );
		}, delay );
	} );
}

export function animation( element, cfg, duration, easing = 'linear', delay = undefined )
{
	if ( typeof element != 'object' )
	{
		element = document.querySelector( element );

		if ( !element )
		{
			return false;
		}
	}

	if ( !Number.isInteger( duration ) )
	{
		return false;
	}

	/* */

	const promises = [];

	for ( const attr in cfg )
	{
		if ( duration === 0 && ( delay === undefined || delay === 0 ) )
		{
			setCssValue( element, attr, parseFloat( cfg[attr] ), getCssUnit( cfg[attr] ) );
		}
		else
		{
			promises.push( animationLogic( {
				to: parseFloat( cfg[attr] ),
				getValue: () => getCssValue( element, attr ), // eslint-disable-line arrow-body-style
				setValue: ( value ) => setCssValue( element, attr, value, getCssUnit( cfg[attr] ) ), // eslint-disable-line arrow-body-style
				duration,
				easing,
				delay,
				element,
				attr
			} ) );
		}
	}

	return Promise.all( promises );
}

export function customAnimation( cfg )
{
	return animationLogic( cfg );
}