(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.FlexPageRenderer = {}, global.React));
})(this, (function (exports, React) { 'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var jsxRuntime = {exports: {}};

	var reactJsxRuntime_production_min = {};

	/**
	 * @license React
	 * react-jsx-runtime.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactJsxRuntime_production_min;

	function requireReactJsxRuntime_production_min () {
		if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
		hasRequiredReactJsxRuntime_production_min = 1;
	var f=React,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:true,ref:true,__self:true,__source:true};
		function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
		return reactJsxRuntime_production_min;
	}

	var reactJsxRuntime_development = {};

	/**
	 * @license React
	 * react-jsx-runtime.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactJsxRuntime_development;

	function requireReactJsxRuntime_development () {
		if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
		hasRequiredReactJsxRuntime_development = 1;

		if (process.env.NODE_ENV !== "production") {
		  (function() {

		var React$1 = React;

		// ATTENTION
		// When adding new symbols to this file,
		// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
		// The Symbol used to tag the ReactElement-like types.
		var REACT_ELEMENT_TYPE = Symbol.for('react.element');
		var REACT_PORTAL_TYPE = Symbol.for('react.portal');
		var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
		var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
		var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
		var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
		var REACT_CONTEXT_TYPE = Symbol.for('react.context');
		var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
		var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
		var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
		var REACT_MEMO_TYPE = Symbol.for('react.memo');
		var REACT_LAZY_TYPE = Symbol.for('react.lazy');
		var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
		var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = '@@iterator';
		function getIteratorFn(maybeIterable) {
		  if (maybeIterable === null || typeof maybeIterable !== 'object') {
		    return null;
		  }

		  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

		  if (typeof maybeIterator === 'function') {
		    return maybeIterator;
		  }

		  return null;
		}

		var ReactSharedInternals = React$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

		function error(format) {
		  {
		    {
		      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		        args[_key2 - 1] = arguments[_key2];
		      }

		      printWarning('error', format, args);
		    }
		  }
		}

		function printWarning(level, format, args) {
		  // When changing this logic, you might want to also
		  // update consoleWithStackDev.www.js as well.
		  {
		    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
		    var stack = ReactDebugCurrentFrame.getStackAddendum();

		    if (stack !== '') {
		      format += '%s';
		      args = args.concat([stack]);
		    } // eslint-disable-next-line react-internal/safe-string-coercion


		    var argsWithFormat = args.map(function (item) {
		      return String(item);
		    }); // Careful: RN currently depends on this prefix

		    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
		    // breaks IE9: https://github.com/facebook/react/issues/13610
		    // eslint-disable-next-line react-internal/no-production-logging

		    Function.prototype.apply.call(console[level], console, argsWithFormat);
		  }
		}

		// -----------------------------------------------------------------------------

		var enableScopeAPI = false; // Experimental Create Event Handle API.
		var enableCacheElement = false;
		var enableTransitionTracing = false; // No known bugs, but needs performance testing

		var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
		// stuff. Intended to enable React core members to more easily debug scheduling
		// issues in DEV builds.

		var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

		var REACT_MODULE_REFERENCE;

		{
		  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
		}

		function isValidElementType(type) {
		  if (typeof type === 'string' || typeof type === 'function') {
		    return true;
		  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


		  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
		    return true;
		  }

		  if (typeof type === 'object' && type !== null) {
		    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
		    // types supported by any Flight configuration anywhere since
		    // we don't know which Flight build this will end up being used
		    // with.
		    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
		      return true;
		    }
		  }

		  return false;
		}

		function getWrappedName(outerType, innerType, wrapperName) {
		  var displayName = outerType.displayName;

		  if (displayName) {
		    return displayName;
		  }

		  var functionName = innerType.displayName || innerType.name || '';
		  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
		} // Keep in sync with react-reconciler/getComponentNameFromFiber


		function getContextName(type) {
		  return type.displayName || 'Context';
		} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


		function getComponentNameFromType(type) {
		  if (type == null) {
		    // Host root, text node or just invalid type.
		    return null;
		  }

		  {
		    if (typeof type.tag === 'number') {
		      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
		    }
		  }

		  if (typeof type === 'function') {
		    return type.displayName || type.name || null;
		  }

		  if (typeof type === 'string') {
		    return type;
		  }

		  switch (type) {
		    case REACT_FRAGMENT_TYPE:
		      return 'Fragment';

		    case REACT_PORTAL_TYPE:
		      return 'Portal';

		    case REACT_PROFILER_TYPE:
		      return 'Profiler';

		    case REACT_STRICT_MODE_TYPE:
		      return 'StrictMode';

		    case REACT_SUSPENSE_TYPE:
		      return 'Suspense';

		    case REACT_SUSPENSE_LIST_TYPE:
		      return 'SuspenseList';

		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_CONTEXT_TYPE:
		        var context = type;
		        return getContextName(context) + '.Consumer';

		      case REACT_PROVIDER_TYPE:
		        var provider = type;
		        return getContextName(provider._context) + '.Provider';

		      case REACT_FORWARD_REF_TYPE:
		        return getWrappedName(type, type.render, 'ForwardRef');

		      case REACT_MEMO_TYPE:
		        var outerName = type.displayName || null;

		        if (outerName !== null) {
		          return outerName;
		        }

		        return getComponentNameFromType(type.type) || 'Memo';

		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;

		          try {
		            return getComponentNameFromType(init(payload));
		          } catch (x) {
		            return null;
		          }
		        }

		      // eslint-disable-next-line no-fallthrough
		    }
		  }

		  return null;
		}

		var assign = Object.assign;

		// Helpers to patch console.logs to avoid logging during side-effect free
		// replaying on render function. This currently only patches the object
		// lazily which won't cover if the log function was extracted eagerly.
		// We could also eagerly patch the method.
		var disabledDepth = 0;
		var prevLog;
		var prevInfo;
		var prevWarn;
		var prevError;
		var prevGroup;
		var prevGroupCollapsed;
		var prevGroupEnd;

		function disabledLog() {}

		disabledLog.__reactDisabledLog = true;
		function disableLogs() {
		  {
		    if (disabledDepth === 0) {
		      /* eslint-disable react-internal/no-production-logging */
		      prevLog = console.log;
		      prevInfo = console.info;
		      prevWarn = console.warn;
		      prevError = console.error;
		      prevGroup = console.group;
		      prevGroupCollapsed = console.groupCollapsed;
		      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

		      var props = {
		        configurable: true,
		        enumerable: true,
		        value: disabledLog,
		        writable: true
		      }; // $FlowFixMe Flow thinks console is immutable.

		      Object.defineProperties(console, {
		        info: props,
		        log: props,
		        warn: props,
		        error: props,
		        group: props,
		        groupCollapsed: props,
		        groupEnd: props
		      });
		      /* eslint-enable react-internal/no-production-logging */
		    }

		    disabledDepth++;
		  }
		}
		function reenableLogs() {
		  {
		    disabledDepth--;

		    if (disabledDepth === 0) {
		      /* eslint-disable react-internal/no-production-logging */
		      var props = {
		        configurable: true,
		        enumerable: true,
		        writable: true
		      }; // $FlowFixMe Flow thinks console is immutable.

		      Object.defineProperties(console, {
		        log: assign({}, props, {
		          value: prevLog
		        }),
		        info: assign({}, props, {
		          value: prevInfo
		        }),
		        warn: assign({}, props, {
		          value: prevWarn
		        }),
		        error: assign({}, props, {
		          value: prevError
		        }),
		        group: assign({}, props, {
		          value: prevGroup
		        }),
		        groupCollapsed: assign({}, props, {
		          value: prevGroupCollapsed
		        }),
		        groupEnd: assign({}, props, {
		          value: prevGroupEnd
		        })
		      });
		      /* eslint-enable react-internal/no-production-logging */
		    }

		    if (disabledDepth < 0) {
		      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
		    }
		  }
		}

		var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
		var prefix;
		function describeBuiltInComponentFrame(name, source, ownerFn) {
		  {
		    if (prefix === undefined) {
		      // Extract the VM specific prefix used by each line.
		      try {
		        throw Error();
		      } catch (x) {
		        var match = x.stack.trim().match(/\n( *(at )?)/);
		        prefix = match && match[1] || '';
		      }
		    } // We use the prefix to ensure our stacks line up with native stack frames.


		    return '\n' + prefix + name;
		  }
		}
		var reentry = false;
		var componentFrameCache;

		{
		  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
		  componentFrameCache = new PossiblyWeakMap();
		}

		function describeNativeComponentFrame(fn, construct) {
		  // If something asked for a stack inside a fake render, it should get ignored.
		  if ( !fn || reentry) {
		    return '';
		  }

		  {
		    var frame = componentFrameCache.get(fn);

		    if (frame !== undefined) {
		      return frame;
		    }
		  }

		  var control;
		  reentry = true;
		  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

		  Error.prepareStackTrace = undefined;
		  var previousDispatcher;

		  {
		    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
		    // for warnings.

		    ReactCurrentDispatcher.current = null;
		    disableLogs();
		  }

		  try {
		    // This should throw.
		    if (construct) {
		      // Something should be setting the props in the constructor.
		      var Fake = function () {
		        throw Error();
		      }; // $FlowFixMe


		      Object.defineProperty(Fake.prototype, 'props', {
		        set: function () {
		          // We use a throwing setter instead of frozen or non-writable props
		          // because that won't throw in a non-strict mode function.
		          throw Error();
		        }
		      });

		      if (typeof Reflect === 'object' && Reflect.construct) {
		        // We construct a different control for this case to include any extra
		        // frames added by the construct call.
		        try {
		          Reflect.construct(Fake, []);
		        } catch (x) {
		          control = x;
		        }

		        Reflect.construct(fn, [], Fake);
		      } else {
		        try {
		          Fake.call();
		        } catch (x) {
		          control = x;
		        }

		        fn.call(Fake.prototype);
		      }
		    } else {
		      try {
		        throw Error();
		      } catch (x) {
		        control = x;
		      }

		      fn();
		    }
		  } catch (sample) {
		    // This is inlined manually because closure doesn't do it for us.
		    if (sample && control && typeof sample.stack === 'string') {
		      // This extracts the first frame from the sample that isn't also in the control.
		      // Skipping one frame that we assume is the frame that calls the two.
		      var sampleLines = sample.stack.split('\n');
		      var controlLines = control.stack.split('\n');
		      var s = sampleLines.length - 1;
		      var c = controlLines.length - 1;

		      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
		        // We expect at least one stack frame to be shared.
		        // Typically this will be the root most one. However, stack frames may be
		        // cut off due to maximum stack limits. In this case, one maybe cut off
		        // earlier than the other. We assume that the sample is longer or the same
		        // and there for cut off earlier. So we should find the root most frame in
		        // the sample somewhere in the control.
		        c--;
		      }

		      for (; s >= 1 && c >= 0; s--, c--) {
		        // Next we find the first one that isn't the same which should be the
		        // frame that called our sample function and the control.
		        if (sampleLines[s] !== controlLines[c]) {
		          // In V8, the first line is describing the message but other VMs don't.
		          // If we're about to return the first line, and the control is also on the same
		          // line, that's a pretty good indicator that our sample threw at same line as
		          // the control. I.e. before we entered the sample frame. So we ignore this result.
		          // This can happen if you passed a class to function component, or non-function.
		          if (s !== 1 || c !== 1) {
		            do {
		              s--;
		              c--; // We may still have similar intermediate frames from the construct call.
		              // The next one that isn't the same should be our match though.

		              if (c < 0 || sampleLines[s] !== controlLines[c]) {
		                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
		                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
		                // but we have a user-provided "displayName"
		                // splice it in to make the stack more readable.


		                if (fn.displayName && _frame.includes('<anonymous>')) {
		                  _frame = _frame.replace('<anonymous>', fn.displayName);
		                }

		                {
		                  if (typeof fn === 'function') {
		                    componentFrameCache.set(fn, _frame);
		                  }
		                } // Return the line we found.


		                return _frame;
		              }
		            } while (s >= 1 && c >= 0);
		          }

		          break;
		        }
		      }
		    }
		  } finally {
		    reentry = false;

		    {
		      ReactCurrentDispatcher.current = previousDispatcher;
		      reenableLogs();
		    }

		    Error.prepareStackTrace = previousPrepareStackTrace;
		  } // Fallback to just using the name if we couldn't make it throw.


		  var name = fn ? fn.displayName || fn.name : '';
		  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

		  {
		    if (typeof fn === 'function') {
		      componentFrameCache.set(fn, syntheticFrame);
		    }
		  }

		  return syntheticFrame;
		}
		function describeFunctionComponentFrame(fn, source, ownerFn) {
		  {
		    return describeNativeComponentFrame(fn, false);
		  }
		}

		function shouldConstruct(Component) {
		  var prototype = Component.prototype;
		  return !!(prototype && prototype.isReactComponent);
		}

		function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

		  if (type == null) {
		    return '';
		  }

		  if (typeof type === 'function') {
		    {
		      return describeNativeComponentFrame(type, shouldConstruct(type));
		    }
		  }

		  if (typeof type === 'string') {
		    return describeBuiltInComponentFrame(type);
		  }

		  switch (type) {
		    case REACT_SUSPENSE_TYPE:
		      return describeBuiltInComponentFrame('Suspense');

		    case REACT_SUSPENSE_LIST_TYPE:
		      return describeBuiltInComponentFrame('SuspenseList');
		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_FORWARD_REF_TYPE:
		        return describeFunctionComponentFrame(type.render);

		      case REACT_MEMO_TYPE:
		        // Memo may contain any component type so we recursively resolve it.
		        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;

		          try {
		            // Lazy may contain any component type so we recursively resolve it.
		            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
		          } catch (x) {}
		        }
		    }
		  }

		  return '';
		}

		var hasOwnProperty = Object.prototype.hasOwnProperty;

		var loggedTypeFailures = {};
		var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

		function setCurrentlyValidatingElement(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      ReactDebugCurrentFrame.setExtraStackFrame(stack);
		    } else {
		      ReactDebugCurrentFrame.setExtraStackFrame(null);
		    }
		  }
		}

		function checkPropTypes(typeSpecs, values, location, componentName, element) {
		  {
		    // $FlowFixMe This is okay but Flow doesn't know it.
		    var has = Function.call.bind(hasOwnProperty);

		    for (var typeSpecName in typeSpecs) {
		      if (has(typeSpecs, typeSpecName)) {
		        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
		        // fail the render phase where it didn't fail before. So we log it.
		        // After these have been cleaned up, we'll let them throw.

		        try {
		          // This is intentionally an invariant that gets caught. It's the same
		          // behavior as without this statement except with a better message.
		          if (typeof typeSpecs[typeSpecName] !== 'function') {
		            // eslint-disable-next-line react-internal/prod-error-codes
		            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
		            err.name = 'Invariant Violation';
		            throw err;
		          }

		          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
		        } catch (ex) {
		          error$1 = ex;
		        }

		        if (error$1 && !(error$1 instanceof Error)) {
		          setCurrentlyValidatingElement(element);

		          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

		          setCurrentlyValidatingElement(null);
		        }

		        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
		          // Only monitor this failure once because there tends to be a lot of the
		          // same error.
		          loggedTypeFailures[error$1.message] = true;
		          setCurrentlyValidatingElement(element);

		          error('Failed %s type: %s', location, error$1.message);

		          setCurrentlyValidatingElement(null);
		        }
		      }
		    }
		  }
		}

		var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

		function isArray(a) {
		  return isArrayImpl(a);
		}

		/*
		 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
		 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
		 *
		 * The functions in this module will throw an easier-to-understand,
		 * easier-to-debug exception with a clear errors message message explaining the
		 * problem. (Instead of a confusing exception thrown inside the implementation
		 * of the `value` object).
		 */
		// $FlowFixMe only called in DEV, so void return is not possible.
		function typeName(value) {
		  {
		    // toStringTag is needed for namespaced types like Temporal.Instant
		    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
		    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
		    return type;
		  }
		} // $FlowFixMe only called in DEV, so void return is not possible.


		function willCoercionThrow(value) {
		  {
		    try {
		      testStringCoercion(value);
		      return false;
		    } catch (e) {
		      return true;
		    }
		  }
		}

		function testStringCoercion(value) {
		  // If you ended up here by following an exception call stack, here's what's
		  // happened: you supplied an object or symbol value to React (as a prop, key,
		  // DOM attribute, CSS property, string ref, etc.) and when React tried to
		  // coerce it to a string using `'' + value`, an exception was thrown.
		  //
		  // The most common types that will cause this exception are `Symbol` instances
		  // and Temporal objects like `Temporal.Instant`. But any object that has a
		  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
		  // exception. (Library authors do this to prevent users from using built-in
		  // numeric operators like `+` or comparison operators like `>=` because custom
		  // methods are needed to perform accurate arithmetic or comparison.)
		  //
		  // To fix the problem, coerce this object or symbol value to a string before
		  // passing it to React. The most reliable way is usually `String(value)`.
		  //
		  // To find which value is throwing, check the browser or debugger console.
		  // Before this exception was thrown, there should be `console.error` output
		  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
		  // problem and how that type was used: key, atrribute, input value prop, etc.
		  // In most cases, this console output also shows the component and its
		  // ancestor components where the exception happened.
		  //
		  // eslint-disable-next-line react-internal/safe-string-coercion
		  return '' + value;
		}
		function checkKeyStringCoercion(value) {
		  {
		    if (willCoercionThrow(value)) {
		      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

		      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
		    }
		  }
		}

		var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
		var RESERVED_PROPS = {
		  key: true,
		  ref: true,
		  __self: true,
		  __source: true
		};
		var specialPropKeyWarningShown;
		var specialPropRefWarningShown;

		function hasValidRef(config) {
		  {
		    if (hasOwnProperty.call(config, 'ref')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.ref !== undefined;
		}

		function hasValidKey(config) {
		  {
		    if (hasOwnProperty.call(config, 'key')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.key !== undefined;
		}

		function warnIfStringRefCannotBeAutoConverted(config, self) {
		  {
		    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self) ;
		  }
		}

		function defineKeyPropWarningGetter(props, displayName) {
		  {
		    var warnAboutAccessingKey = function () {
		      if (!specialPropKeyWarningShown) {
		        specialPropKeyWarningShown = true;

		        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    };

		    warnAboutAccessingKey.isReactWarning = true;
		    Object.defineProperty(props, 'key', {
		      get: warnAboutAccessingKey,
		      configurable: true
		    });
		  }
		}

		function defineRefPropWarningGetter(props, displayName) {
		  {
		    var warnAboutAccessingRef = function () {
		      if (!specialPropRefWarningShown) {
		        specialPropRefWarningShown = true;

		        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    };

		    warnAboutAccessingRef.isReactWarning = true;
		    Object.defineProperty(props, 'ref', {
		      get: warnAboutAccessingRef,
		      configurable: true
		    });
		  }
		}
		/**
		 * Factory method to create a new React element. This no longer adheres to
		 * the class pattern, so do not use new to call it. Also, instanceof check
		 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
		 * if something is a React Element.
		 *
		 * @param {*} type
		 * @param {*} props
		 * @param {*} key
		 * @param {string|object} ref
		 * @param {*} owner
		 * @param {*} self A *temporary* helper to detect places where `this` is
		 * different from the `owner` when React.createElement is called, so that we
		 * can warn. We want to get rid of owner and replace string `ref`s with arrow
		 * functions, and as long as `this` and owner are the same, there will be no
		 * change in behavior.
		 * @param {*} source An annotation object (added by a transpiler or otherwise)
		 * indicating filename, line number, and/or other information.
		 * @internal
		 */


		var ReactElement = function (type, key, ref, self, source, owner, props) {
		  var element = {
		    // This tag allows us to uniquely identify this as a React Element
		    $$typeof: REACT_ELEMENT_TYPE,
		    // Built-in properties that belong on the element
		    type: type,
		    key: key,
		    ref: ref,
		    props: props,
		    // Record the component responsible for creating this element.
		    _owner: owner
		  };

		  {
		    // The validation flag is currently mutative. We put it on
		    // an external backing store so that we can freeze the whole object.
		    // This can be replaced with a WeakMap once they are implemented in
		    // commonly used development environments.
		    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
		    // the validation flag non-enumerable (where possible, which should
		    // include every environment we run tests in), so the test framework
		    // ignores it.

		    Object.defineProperty(element._store, 'validated', {
		      configurable: false,
		      enumerable: false,
		      writable: true,
		      value: false
		    }); // self and source are DEV only properties.

		    Object.defineProperty(element, '_self', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: self
		    }); // Two elements created in two different places should be considered
		    // equal for testing purposes and therefore we hide it from enumeration.

		    Object.defineProperty(element, '_source', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: source
		    });

		    if (Object.freeze) {
		      Object.freeze(element.props);
		      Object.freeze(element);
		    }
		  }

		  return element;
		};
		/**
		 * https://github.com/reactjs/rfcs/pull/107
		 * @param {*} type
		 * @param {object} props
		 * @param {string} key
		 */

		function jsxDEV(type, config, maybeKey, source, self) {
		  {
		    var propName; // Reserved names are extracted

		    var props = {};
		    var key = null;
		    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
		    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
		    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
		    // but as an intermediary step, we will use jsxDEV for everything except
		    // <div {...props} key="Hi" />, because we aren't currently able to tell if
		    // key is explicitly declared to be undefined or not.

		    if (maybeKey !== undefined) {
		      {
		        checkKeyStringCoercion(maybeKey);
		      }

		      key = '' + maybeKey;
		    }

		    if (hasValidKey(config)) {
		      {
		        checkKeyStringCoercion(config.key);
		      }

		      key = '' + config.key;
		    }

		    if (hasValidRef(config)) {
		      ref = config.ref;
		      warnIfStringRefCannotBeAutoConverted(config, self);
		    } // Remaining properties are added to a new props object


		    for (propName in config) {
		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		        props[propName] = config[propName];
		      }
		    } // Resolve default props


		    if (type && type.defaultProps) {
		      var defaultProps = type.defaultProps;

		      for (propName in defaultProps) {
		        if (props[propName] === undefined) {
		          props[propName] = defaultProps[propName];
		        }
		      }
		    }

		    if (key || ref) {
		      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

		      if (key) {
		        defineKeyPropWarningGetter(props, displayName);
		      }

		      if (ref) {
		        defineRefPropWarningGetter(props, displayName);
		      }
		    }

		    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
		  }
		}

		var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
		var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

		function setCurrentlyValidatingElement$1(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
		    } else {
		      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
		    }
		  }
		}

		var propTypesMisspellWarningShown;

		{
		  propTypesMisspellWarningShown = false;
		}
		/**
		 * Verifies the object is a ReactElement.
		 * See https://reactjs.org/docs/react-api.html#isvalidelement
		 * @param {?object} object
		 * @return {boolean} True if `object` is a ReactElement.
		 * @final
		 */


		function isValidElement(object) {
		  {
		    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		  }
		}

		function getDeclarationErrorAddendum() {
		  {
		    if (ReactCurrentOwner$1.current) {
		      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

		      if (name) {
		        return '\n\nCheck the render method of `' + name + '`.';
		      }
		    }

		    return '';
		  }
		}

		function getSourceInfoErrorAddendum(source) {
		  {

		    return '';
		  }
		}
		/**
		 * Warn if there's no key explicitly set on dynamic arrays of children or
		 * object keys are not valid. This allows us to keep track of children between
		 * updates.
		 */


		var ownerHasKeyUseWarning = {};

		function getCurrentComponentErrorInfo(parentType) {
		  {
		    var info = getDeclarationErrorAddendum();

		    if (!info) {
		      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

		      if (parentName) {
		        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
		      }
		    }

		    return info;
		  }
		}
		/**
		 * Warn if the element doesn't have an explicit key assigned to it.
		 * This element is in an array. The array could grow and shrink or be
		 * reordered. All children that haven't already been validated are required to
		 * have a "key" property assigned to it. Error statuses are cached so a warning
		 * will only be shown once.
		 *
		 * @internal
		 * @param {ReactElement} element Element that requires a key.
		 * @param {*} parentType element's parent's type.
		 */


		function validateExplicitKey(element, parentType) {
		  {
		    if (!element._store || element._store.validated || element.key != null) {
		      return;
		    }

		    element._store.validated = true;
		    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

		    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
		      return;
		    }

		    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
		    // property, it may be the creator of the child that's responsible for
		    // assigning it a key.

		    var childOwner = '';

		    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
		      // Give the component that originally created this child.
		      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
		    }

		    setCurrentlyValidatingElement$1(element);

		    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

		    setCurrentlyValidatingElement$1(null);
		  }
		}
		/**
		 * Ensure that every element either is passed in a static location, in an
		 * array with an explicit keys property defined, or in an object literal
		 * with valid key property.
		 *
		 * @internal
		 * @param {ReactNode} node Statically passed child of any type.
		 * @param {*} parentType node's parent's type.
		 */


		function validateChildKeys(node, parentType) {
		  {
		    if (typeof node !== 'object') {
		      return;
		    }

		    if (isArray(node)) {
		      for (var i = 0; i < node.length; i++) {
		        var child = node[i];

		        if (isValidElement(child)) {
		          validateExplicitKey(child, parentType);
		        }
		      }
		    } else if (isValidElement(node)) {
		      // This element was passed in a valid location.
		      if (node._store) {
		        node._store.validated = true;
		      }
		    } else if (node) {
		      var iteratorFn = getIteratorFn(node);

		      if (typeof iteratorFn === 'function') {
		        // Entry iterators used to provide implicit keys,
		        // but now we print a separate warning for them later.
		        if (iteratorFn !== node.entries) {
		          var iterator = iteratorFn.call(node);
		          var step;

		          while (!(step = iterator.next()).done) {
		            if (isValidElement(step.value)) {
		              validateExplicitKey(step.value, parentType);
		            }
		          }
		        }
		      }
		    }
		  }
		}
		/**
		 * Given an element, validate that its props follow the propTypes definition,
		 * provided by the type.
		 *
		 * @param {ReactElement} element
		 */


		function validatePropTypes(element) {
		  {
		    var type = element.type;

		    if (type === null || type === undefined || typeof type === 'string') {
		      return;
		    }

		    var propTypes;

		    if (typeof type === 'function') {
		      propTypes = type.propTypes;
		    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
		    // Inner props are checked in the reconciler.
		    type.$$typeof === REACT_MEMO_TYPE)) {
		      propTypes = type.propTypes;
		    } else {
		      return;
		    }

		    if (propTypes) {
		      // Intentionally inside to avoid triggering lazy initializers:
		      var name = getComponentNameFromType(type);
		      checkPropTypes(propTypes, element.props, 'prop', name, element);
		    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
		      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

		      var _name = getComponentNameFromType(type);

		      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
		    }

		    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
		      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
		    }
		  }
		}
		/**
		 * Given a fragment, validate that it can only be provided with fragment props
		 * @param {ReactElement} fragment
		 */


		function validateFragmentProps(fragment) {
		  {
		    var keys = Object.keys(fragment.props);

		    for (var i = 0; i < keys.length; i++) {
		      var key = keys[i];

		      if (key !== 'children' && key !== 'key') {
		        setCurrentlyValidatingElement$1(fragment);

		        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

		        setCurrentlyValidatingElement$1(null);
		        break;
		      }
		    }

		    if (fragment.ref !== null) {
		      setCurrentlyValidatingElement$1(fragment);

		      error('Invalid attribute `ref` supplied to `React.Fragment`.');

		      setCurrentlyValidatingElement$1(null);
		    }
		  }
		}

		var didWarnAboutKeySpread = {};
		function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
		  {
		    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
		    // succeed and there will likely be errors in render.

		    if (!validType) {
		      var info = '';

		      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
		        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
		      }

		      var sourceInfo = getSourceInfoErrorAddendum();

		      if (sourceInfo) {
		        info += sourceInfo;
		      } else {
		        info += getDeclarationErrorAddendum();
		      }

		      var typeString;

		      if (type === null) {
		        typeString = 'null';
		      } else if (isArray(type)) {
		        typeString = 'array';
		      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
		        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
		        info = ' Did you accidentally export a JSX literal instead of a component?';
		      } else {
		        typeString = typeof type;
		      }

		      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
		    }

		    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
		    // TODO: Drop this when these are no longer allowed as the type argument.

		    if (element == null) {
		      return element;
		    } // Skip key warning if the type isn't valid since our key validation logic
		    // doesn't expect a non-string/function type and can throw confusing errors.
		    // We don't want exception behavior to differ between dev and prod.
		    // (Rendering will throw with a helpful message and as soon as the type is
		    // fixed, the key warnings will appear.)


		    if (validType) {
		      var children = props.children;

		      if (children !== undefined) {
		        if (isStaticChildren) {
		          if (isArray(children)) {
		            for (var i = 0; i < children.length; i++) {
		              validateChildKeys(children[i], type);
		            }

		            if (Object.freeze) {
		              Object.freeze(children);
		            }
		          } else {
		            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
		          }
		        } else {
		          validateChildKeys(children, type);
		        }
		      }
		    }

		    {
		      if (hasOwnProperty.call(props, 'key')) {
		        var componentName = getComponentNameFromType(type);
		        var keys = Object.keys(props).filter(function (k) {
		          return k !== 'key';
		        });
		        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

		        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
		          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

		          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

		          didWarnAboutKeySpread[componentName + beforeExample] = true;
		        }
		      }
		    }

		    if (type === REACT_FRAGMENT_TYPE) {
		      validateFragmentProps(element);
		    } else {
		      validatePropTypes(element);
		    }

		    return element;
		  }
		} // These two functions exist to still get child warnings in dev
		// even with the prod transform. This means that jsxDEV is purely
		// opt-in behavior for better messages but that we won't stop
		// giving you warnings if you use production apis.

		function jsxWithValidationStatic(type, props, key) {
		  {
		    return jsxWithValidation(type, props, key, true);
		  }
		}
		function jsxWithValidationDynamic(type, props, key) {
		  {
		    return jsxWithValidation(type, props, key, false);
		  }
		}

		var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
		// for now we can ship identical prod functions

		var jsxs =  jsxWithValidationStatic ;

		reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
		reactJsxRuntime_development.jsx = jsx;
		reactJsxRuntime_development.jsxs = jsxs;
		  })();
		}
		return reactJsxRuntime_development;
	}

	if (process.env.NODE_ENV === 'production') {
	  jsxRuntime.exports = requireReactJsxRuntime_production_min();
	} else {
	  jsxRuntime.exports = requireReactJsxRuntime_development();
	}

	var jsxRuntimeExports = jsxRuntime.exports;

	/*
	 * A block's `fields` config tells us exactly where nested blocks live: a field
	 * of type 'blocks' holds a block array, and a 'list' field can hold items with
	 * 'blocks' sub-fields (e.g. tabbed content tabs). We drive child resolution off
	 * that config rather than sniffing the data shape — it's exact, and it works for
	 * every block including client ones, because `fields` lives in a directive-free
	 * module and stays readable on the server.
	 */
	function fieldDefs(def) {
	    if (!def)
	        return [];
	    if (def.fields.fields)
	        return def.fields.fields;
	    if (def.fields.field)
	        return [def.fields.field];
	    return [];
	}
	function resolveSlotProps(block, blocks, activeConditions) {
	    const slotProps = {};
	    const value = block.value;
	    for (const field of fieldDefs(blocks[block.type])) {
	        const fieldValue = value[field.name];
	        // a 'blocks' field is a nested block array -> resolve to React nodes
	        if (field.type === 'blocks' && Array.isArray(fieldValue)) {
	            slotProps[field.name] = resolveContentBlocks(fieldValue, blocks, activeConditions);
	            continue;
	        }
	        // a 'list' field whose items carry 'blocks' sub-fields (e.g. tabbed content)
	        if (field.type === 'list' && Array.isArray(field.fields) && Array.isArray(fieldValue)) {
	            const blockSubFields = field.fields.filter((sub) => sub.type === 'blocks');
	            if (blockSubFields.length === 0)
	                continue;
	            slotProps[field.name] = fieldValue.map((item) => {
	                const resolved = { ...item };
	                for (const sub of blockSubFields) {
	                    if (Array.isArray(item[sub.name])) {
	                        resolved[sub.name] = resolveContentBlocks(item[sub.name], blocks, activeConditions);
	                    }
	                }
	                return resolved;
	            });
	        }
	    }
	    return slotProps;
	}
	function resolveContentBlock(block, blocks, activeConditions) {
	    const def = blocks[block.type];
	    if (!def)
	        return jsxRuntimeExports.jsx("pre", { children: JSON.stringify(block, null, 2) }, block.id);
	    const slotProps = resolveSlotProps(block, blocks, activeConditions);
	    const Comp = def.Component;
	    return jsxRuntimeExports.jsx(Comp, { data: block, activeConditions: activeConditions, ...slotProps }, block.id);
	}
	function resolveContentBlocks(data, blocks, activeConditions) {
	    return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: data.map((block) => resolveContentBlock(block, blocks, activeConditions)) });
	}

	function ContentBlockRoot({ data, blocks, activeConditions }) {
	    return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: resolveContentBlocks(data, blocks, activeConditions) });
	}

	const ActionContext = React.createContext({});

	const RouteContext = React.createContext({});

	function FlexPageContextProvider({ children, actions, routes }) {
	    return jsxRuntimeExports.jsx(ActionContext.Provider, { value: actions !== null && actions !== void 0 ? actions : {}, children: jsxRuntimeExports.jsx(RouteContext.Provider, { value: routes !== null && routes !== void 0 ? routes : {}, children: children }) });
	}

	var classnames = {exports: {}};

	/*!
		Copyright (c) 2018 Jed Watson.
		Licensed under the MIT License (MIT), see
		http://jedwatson.github.io/classnames
	*/

	(function (module) {
		/* global define */

		(function () {

			var hasOwn = {}.hasOwnProperty;

			function classNames () {
				var classes = '';

				for (var i = 0; i < arguments.length; i++) {
					var arg = arguments[i];
					if (arg) {
						classes = appendClass(classes, parseValue(arg));
					}
				}

				return classes;
			}

			function parseValue (arg) {
				if (typeof arg === 'string' || typeof arg === 'number') {
					return arg;
				}

				if (typeof arg !== 'object') {
					return '';
				}

				if (Array.isArray(arg)) {
					return classNames.apply(null, arg);
				}

				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					return arg.toString();
				}

				var classes = '';

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes = appendClass(classes, key);
					}
				}

				return classes;
			}

			function appendClass (value, newClass) {
				if (!newClass) {
					return value;
				}
			
				if (value) {
					return value + ' ' + newClass;
				}
			
				return value + newClass;
			}

			if (module.exports) {
				classNames.default = classNames;
				module.exports = classNames;
			} else {
				window.classNames = classNames;
			}
		}()); 
	} (classnames));

	var classnamesExports = classnames.exports;
	var cn = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

	var cssKeywords = {
		aliceblue: [240, 248, 255],
		antiquewhite: [250, 235, 215],
		aqua: [0, 255, 255],
		aquamarine: [127, 255, 212],
		azure: [240, 255, 255],
		beige: [245, 245, 220],
		bisque: [255, 228, 196],
		black: [0, 0, 0],
		blanchedalmond: [255, 235, 205],
		blue: [0, 0, 255],
		blueviolet: [138, 43, 226],
		brown: [165, 42, 42],
		burlywood: [222, 184, 135],
		cadetblue: [95, 158, 160],
		chartreuse: [127, 255, 0],
		chocolate: [210, 105, 30],
		coral: [255, 127, 80],
		cornflowerblue: [100, 149, 237],
		cornsilk: [255, 248, 220],
		crimson: [220, 20, 60],
		cyan: [0, 255, 255],
		darkblue: [0, 0, 139],
		darkcyan: [0, 139, 139],
		darkgoldenrod: [184, 134, 11],
		darkgray: [169, 169, 169],
		darkgreen: [0, 100, 0],
		darkgrey: [169, 169, 169],
		darkkhaki: [189, 183, 107],
		darkmagenta: [139, 0, 139],
		darkolivegreen: [85, 107, 47],
		darkorange: [255, 140, 0],
		darkorchid: [153, 50, 204],
		darkred: [139, 0, 0],
		darksalmon: [233, 150, 122],
		darkseagreen: [143, 188, 143],
		darkslateblue: [72, 61, 139],
		darkslategray: [47, 79, 79],
		darkslategrey: [47, 79, 79],
		darkturquoise: [0, 206, 209],
		darkviolet: [148, 0, 211],
		deeppink: [255, 20, 147],
		deepskyblue: [0, 191, 255],
		dimgray: [105, 105, 105],
		dimgrey: [105, 105, 105],
		dodgerblue: [30, 144, 255],
		firebrick: [178, 34, 34],
		floralwhite: [255, 250, 240],
		forestgreen: [34, 139, 34],
		fuchsia: [255, 0, 255],
		gainsboro: [220, 220, 220],
		ghostwhite: [248, 248, 255],
		gold: [255, 215, 0],
		goldenrod: [218, 165, 32],
		gray: [128, 128, 128],
		green: [0, 128, 0],
		greenyellow: [173, 255, 47],
		grey: [128, 128, 128],
		honeydew: [240, 255, 240],
		hotpink: [255, 105, 180],
		indianred: [205, 92, 92],
		indigo: [75, 0, 130],
		ivory: [255, 255, 240],
		khaki: [240, 230, 140],
		lavender: [230, 230, 250],
		lavenderblush: [255, 240, 245],
		lawngreen: [124, 252, 0],
		lemonchiffon: [255, 250, 205],
		lightblue: [173, 216, 230],
		lightcoral: [240, 128, 128],
		lightcyan: [224, 255, 255],
		lightgoldenrodyellow: [250, 250, 210],
		lightgray: [211, 211, 211],
		lightgreen: [144, 238, 144],
		lightgrey: [211, 211, 211],
		lightpink: [255, 182, 193],
		lightsalmon: [255, 160, 122],
		lightseagreen: [32, 178, 170],
		lightskyblue: [135, 206, 250],
		lightslategray: [119, 136, 153],
		lightslategrey: [119, 136, 153],
		lightsteelblue: [176, 196, 222],
		lightyellow: [255, 255, 224],
		lime: [0, 255, 0],
		limegreen: [50, 205, 50],
		linen: [250, 240, 230],
		magenta: [255, 0, 255],
		maroon: [128, 0, 0],
		mediumaquamarine: [102, 205, 170],
		mediumblue: [0, 0, 205],
		mediumorchid: [186, 85, 211],
		mediumpurple: [147, 112, 219],
		mediumseagreen: [60, 179, 113],
		mediumslateblue: [123, 104, 238],
		mediumspringgreen: [0, 250, 154],
		mediumturquoise: [72, 209, 204],
		mediumvioletred: [199, 21, 133],
		midnightblue: [25, 25, 112],
		mintcream: [245, 255, 250],
		mistyrose: [255, 228, 225],
		moccasin: [255, 228, 181],
		navajowhite: [255, 222, 173],
		navy: [0, 0, 128],
		oldlace: [253, 245, 230],
		olive: [128, 128, 0],
		olivedrab: [107, 142, 35],
		orange: [255, 165, 0],
		orangered: [255, 69, 0],
		orchid: [218, 112, 214],
		palegoldenrod: [238, 232, 170],
		palegreen: [152, 251, 152],
		paleturquoise: [175, 238, 238],
		palevioletred: [219, 112, 147],
		papayawhip: [255, 239, 213],
		peachpuff: [255, 218, 185],
		peru: [205, 133, 63],
		pink: [255, 192, 203],
		plum: [221, 160, 221],
		powderblue: [176, 224, 230],
		purple: [128, 0, 128],
		rebeccapurple: [102, 51, 153],
		red: [255, 0, 0],
		rosybrown: [188, 143, 143],
		royalblue: [65, 105, 225],
		saddlebrown: [139, 69, 19],
		salmon: [250, 128, 114],
		sandybrown: [244, 164, 96],
		seagreen: [46, 139, 87],
		seashell: [255, 245, 238],
		sienna: [160, 82, 45],
		silver: [192, 192, 192],
		skyblue: [135, 206, 235],
		slateblue: [106, 90, 205],
		slategray: [112, 128, 144],
		slategrey: [112, 128, 144],
		snow: [255, 250, 250],
		springgreen: [0, 255, 127],
		steelblue: [70, 130, 180],
		tan: [210, 180, 140],
		teal: [0, 128, 128],
		thistle: [216, 191, 216],
		tomato: [255, 99, 71],
		turquoise: [64, 224, 208],
		violet: [238, 130, 238],
		wheat: [245, 222, 179],
		white: [255, 255, 255],
		whitesmoke: [245, 245, 245],
		yellow: [255, 255, 0],
		yellowgreen: [154, 205, 50]
	};

	const reverseNames = Object.create(null);

	// Create a list of reverse color names
	for (const name in cssKeywords) {
		if (Object.hasOwn(cssKeywords, name)) {
			reverseNames[cssKeywords[name]] = name;
		}
	}

	const cs = {
		to: {},
		get: {},
	};

	cs.get = function (string) {
		const prefix = string.slice(0, 3).toLowerCase();
		let value;
		let model;
		switch (prefix) {
			case 'hsl': {
				value = cs.get.hsl(string);
				model = 'hsl';
				break;
			}

			case 'hwb': {
				value = cs.get.hwb(string);
				model = 'hwb';
				break;
			}

			default: {
				value = cs.get.rgb(string);
				model = 'rgb';
				break;
			}
		}

		if (!value) {
			return null;
		}

		return {model, value};
	};

	cs.get.rgb = function (string) {
		if (!string) {
			return null;
		}

		const abbr = /^#([a-f\d]{3,4})$/i;
		const hex = /^#([a-f\d]{6})([a-f\d]{2})?$/i;
		const rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/;
		const per = /^rgba?\(\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/;
		const keyword = /^(\w+)$/;

		let rgb = [0, 0, 0, 1];
		let match;
		let i;
		let hexAlpha;

		if (match = string.match(hex)) {
			hexAlpha = match[2];
			match = match[1];

			for (i = 0; i < 3; i++) {
				// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
				const i2 = i * 2;
				rgb[i] = Number.parseInt(match.slice(i2, i2 + 2), 16);
			}

			if (hexAlpha) {
				rgb[3] = Number.parseInt(hexAlpha, 16) / 255;
			}
		} else if (match = string.match(abbr)) {
			match = match[1];
			hexAlpha = match[3];

			for (i = 0; i < 3; i++) {
				rgb[i] = Number.parseInt(match[i] + match[i], 16);
			}

			if (hexAlpha) {
				rgb[3] = Number.parseInt(hexAlpha + hexAlpha, 16) / 255;
			}
		} else if (match = string.match(rgba)) {
			for (i = 0; i < 3; i++) {
				rgb[i] = Number.parseInt(match[i + 1], 10);
			}

			if (match[4]) {
				rgb[3] = match[5] ? Number.parseFloat(match[4]) * 0.01 : Number.parseFloat(match[4]);
			}
		} else if (match = string.match(per)) {
			for (i = 0; i < 3; i++) {
				rgb[i] = Math.round(Number.parseFloat(match[i + 1]) * 2.55);
			}

			if (match[4]) {
				rgb[3] = match[5] ? Number.parseFloat(match[4]) * 0.01 : Number.parseFloat(match[4]);
			}
		} else if (match = string.match(keyword)) {
			if (match[1] === 'transparent') {
				return [0, 0, 0, 0];
			}

			if (!Object.hasOwn(cssKeywords, match[1])) {
				return null;
			}

			rgb = cssKeywords[match[1]];
			rgb[3] = 1;

			return rgb;
		} else {
			return null;
		}

		for (i = 0; i < 3; i++) {
			rgb[i] = clamp(rgb[i], 0, 255);
		}

		rgb[3] = clamp(rgb[3], 0, 1);

		return rgb;
	};

	cs.get.hsl = function (string) {
		if (!string) {
			return null;
		}

		const hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
		const match = string.match(hsl);

		if (match) {
			const alpha = Number.parseFloat(match[4]);
			const h = ((Number.parseFloat(match[1]) % 360) + 360) % 360;
			const s = clamp(Number.parseFloat(match[2]), 0, 100);
			const l = clamp(Number.parseFloat(match[3]), 0, 100);
			const a = clamp(Number.isNaN(alpha) ? 1 : alpha, 0, 1);

			return [h, s, l, a];
		}

		return null;
	};

	cs.get.hwb = function (string) {
		if (!string) {
			return null;
		}

		const hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
		const match = string.match(hwb);

		if (match) {
			const alpha = Number.parseFloat(match[4]);
			const h = ((Number.parseFloat(match[1]) % 360) + 360) % 360;
			const w = clamp(Number.parseFloat(match[2]), 0, 100);
			const b = clamp(Number.parseFloat(match[3]), 0, 100);
			const a = clamp(Number.isNaN(alpha) ? 1 : alpha, 0, 1);
			return [h, w, b, a];
		}

		return null;
	};

	cs.to.hex = function (...rgba) {
		return (
			'#' +
			hexDouble(rgba[0]) +
			hexDouble(rgba[1]) +
			hexDouble(rgba[2]) +
			(rgba[3] < 1
				? (hexDouble(Math.round(rgba[3] * 255)))
				: '')
		);
	};

	cs.to.rgb = function (...rgba) {
		return rgba.length < 4 || rgba[3] === 1
			? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
			: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
	};

	cs.to.rgb.percent = function (...rgba) {
		const r = Math.round(rgba[0] / 255 * 100);
		const g = Math.round(rgba[1] / 255 * 100);
		const b = Math.round(rgba[2] / 255 * 100);

		return rgba.length < 4 || rgba[3] === 1
			? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
			: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
	};

	cs.to.hsl = function (...hsla) {
		return hsla.length < 4 || hsla[3] === 1
			? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
			: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
	};

	// Hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
	// (hwb have alpha optional & 1 is default value)
	cs.to.hwb = function (...hwba) {
		let a = '';
		if (hwba.length >= 4 && hwba[3] !== 1) {
			a = ', ' + hwba[3];
		}

		return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
	};

	cs.to.keyword = function (...rgb) {
		return reverseNames[rgb.slice(0, 3)];
	};

	// Helpers
	function clamp(number_, min, max) {
		return Math.min(Math.max(min, number_), max);
	}

	function hexDouble(number_) {
		const string_ = Math.round(number_).toString(16).toUpperCase();
		return (string_.length < 2) ? '0' + string_ : string_;
	}

	/* MIT license */
	/* eslint-disable no-mixed-operators */

	// NOTE: conversions should only return primitive values (i.e. arrays, or
	//       values that give correct `typeof` results).
	//       do not use box values types (i.e. Number(), String(), etc.)

	const reverseKeywords = {};
	for (const key of Object.keys(cssKeywords)) {
		reverseKeywords[cssKeywords[key]] = key;
	}

	const convert$1 = {
		rgb: {channels: 3, labels: 'rgb'},
		hsl: {channels: 3, labels: 'hsl'},
		hsv: {channels: 3, labels: 'hsv'},
		hwb: {channels: 3, labels: 'hwb'},
		cmyk: {channels: 4, labels: 'cmyk'},
		xyz: {channels: 3, labels: 'xyz'},
		lab: {channels: 3, labels: 'lab'},
		lch: {channels: 3, labels: 'lch'},
		hex: {channels: 1, labels: ['hex']},
		keyword: {channels: 1, labels: ['keyword']},
		ansi16: {channels: 1, labels: ['ansi16']},
		ansi256: {channels: 1, labels: ['ansi256']},
		hcg: {channels: 3, labels: ['h', 'c', 'g']},
		apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
		gray: {channels: 1, labels: ['gray']},
	};

	// LAB f(t) constant
	const LAB_FT = (6 / 29) ** 3;

	// Hide .channels and .labels properties
	for (const model of Object.keys(convert$1)) {
		if (!('channels' in convert$1[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert$1[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert$1[model].labels.length !== convert$1[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		const {channels, labels} = convert$1[model];
		delete convert$1[model].channels;
		delete convert$1[model].labels;
		Object.defineProperty(convert$1[model], 'channels', {value: channels});
		Object.defineProperty(convert$1[model], 'labels', {value: labels});
	}

	convert$1.rgb.hsl = function (rgb) {
		const r = rgb[0] / 255;
		const g = rgb[1] / 255;
		const b = rgb[2] / 255;
		const min = Math.min(r, g, b);
		const max = Math.max(r, g, b);
		const delta = max - min;
		let h;
		let s;

		switch (max) {
			case min: {
				h = 0;

				break;
			}

			case r: {
				h = (g - b) / delta;

				break;
			}

			case g: {
				h = 2 + (b - r) / delta;

				break;
			}

			case b: {
				h = 4 + (r - g) / delta;

				break;
			}
		// No default
		}

		h = Math.min(h * 60, 360);

		if (h < 0) {
			h += 360;
		}

		const l = (min + max) / 2;

		if (max === min) {
			s = 0;
		} else if (l <= 0.5) {
			s = delta / (max + min);
		} else {
			s = delta / (2 - max - min);
		}

		return [h, s * 100, l * 100];
	};

	convert$1.rgb.hsv = function (rgb) {
		let rdif;
		let gdif;
		let bdif;
		let h;
		let s;

		const r = rgb[0] / 255;
		const g = rgb[1] / 255;
		const b = rgb[2] / 255;
		const v = Math.max(r, g, b);
		const diff = v - Math.min(r, g, b);
		const diffc = function (c) {
			return (v - c) / 6 / diff + 1 / 2;
		};

		if (diff === 0) {
			h = 0;
			s = 0;
		} else {
			s = diff / v;
			rdif = diffc(r);
			gdif = diffc(g);
			bdif = diffc(b);

			switch (v) {
				case r: {
					h = bdif - gdif;

					break;
				}

				case g: {
					h = (1 / 3) + rdif - bdif;

					break;
				}

				case b: {
					h = (2 / 3) + gdif - rdif;

					break;
				}
			// No default
			}

			if (h < 0) {
				h += 1;
			} else if (h > 1) {
				h -= 1;
			}
		}

		return [
			h * 360,
			s * 100,
			v * 100,
		];
	};

	convert$1.rgb.hwb = function (rgb) {
		const r = rgb[0];
		const g = rgb[1];
		let b = rgb[2];
		const h = convert$1.rgb.hsl(rgb)[0];
		const w = 1 / 255 * Math.min(r, Math.min(g, b));

		b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

		return [h, w * 100, b * 100];
	};

	convert$1.rgb.cmyk = function (rgb) {
		const r = rgb[0] / 255;
		const g = rgb[1] / 255;
		const b = rgb[2] / 255;

		const k = Math.min(1 - r, 1 - g, 1 - b);
		const c = (1 - r - k) / (1 - k) || 0;
		const m = (1 - g - k) / (1 - k) || 0;
		const y = (1 - b - k) / (1 - k) || 0;

		return [c * 100, m * 100, y * 100, k * 100];
	};

	function comparativeDistance(x, y) {
		/*
			See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
		*/
		return (
			((x[0] - y[0]) ** 2) +
			((x[1] - y[1]) ** 2) +
			((x[2] - y[2]) ** 2)
		);
	}

	convert$1.rgb.keyword = function (rgb) {
		const reversed = reverseKeywords[rgb];
		if (reversed) {
			return reversed;
		}

		let currentClosestDistance = Number.POSITIVE_INFINITY;
		let currentClosestKeyword;

		for (const keyword of Object.keys(cssKeywords)) {
			const value = cssKeywords[keyword];

			// Compute comparative distance
			const distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}

		return currentClosestKeyword;
	};

	convert$1.keyword.rgb = function (keyword) {
		return cssKeywords[keyword];
	};

	convert$1.rgb.xyz = function (rgb) {
		let r = rgb[0] / 255;
		let g = rgb[1] / 255;
		let b = rgb[2] / 255;

		// Assume sRGB
		r = r > 0.040_45 ? (((r + 0.055) / 1.055) ** 2.4) : (r / 12.92);
		g = g > 0.040_45 ? (((g + 0.055) / 1.055) ** 2.4) : (g / 12.92);
		b = b > 0.040_45 ? (((b + 0.055) / 1.055) ** 2.4) : (b / 12.92);

		const x = (r * 0.412_456_4) + (g * 0.357_576_1) + (b * 0.180_437_5);
		const y = (r * 0.212_672_9) + (g * 0.715_152_2) + (b * 0.072_175);
		const z = (r * 0.019_333_9) + (g * 0.119_192) + (b * 0.950_304_1);

		return [x * 100, y * 100, z * 100];
	};

	convert$1.rgb.lab = function (rgb) {
		const xyz = convert$1.rgb.xyz(rgb);
		let x = xyz[0];
		let y = xyz[1];
		let z = xyz[2];

		x /= 95.047;
		y /= 100;
		z /= 108.883;

		x = x > LAB_FT ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
		y = y > LAB_FT ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
		z = z > LAB_FT ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

		const l = (116 * y) - 16;
		const a = 500 * (x - y);
		const b = 200 * (y - z);

		return [l, a, b];
	};

	convert$1.hsl.rgb = function (hsl) {
		const h = hsl[0] / 360;
		const s = hsl[1] / 100;
		const l = hsl[2] / 100;
		let t3;
		let value;

		if (s === 0) {
			value = l * 255;
			return [value, value, value];
		}

		const t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;

		const t1 = 2 * l - t2;

		const rgb = [0, 0, 0];
		for (let i = 0; i < 3; i++) {
			t3 = h + 1 / 3 * -(i - 1);
			if (t3 < 0) {
				t3++;
			}

			if (t3 > 1) {
				t3--;
			}

			if (6 * t3 < 1) {
				value = t1 + (t2 - t1) * 6 * t3;
			} else if (2 * t3 < 1) {
				value = t2;
			} else if (3 * t3 < 2) {
				value = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
			} else {
				value = t1;
			}

			rgb[i] = value * 255;
		}

		return rgb;
	};

	convert$1.hsl.hsv = function (hsl) {
		const h = hsl[0];
		let s = hsl[1] / 100;
		let l = hsl[2] / 100;
		let smin = s;
		const lmin = Math.max(l, 0.01);

		l *= 2;
		s *= (l <= 1) ? l : 2 - l;
		smin *= lmin <= 1 ? lmin : 2 - lmin;
		const v = (l + s) / 2;
		const sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

		return [h, sv * 100, v * 100];
	};

	convert$1.hsv.rgb = function (hsv) {
		const h = hsv[0] / 60;
		const s = hsv[1] / 100;
		let v = hsv[2] / 100;
		const hi = Math.floor(h) % 6;

		const f = h - Math.floor(h);
		const p = 255 * v * (1 - s);
		const q = 255 * v * (1 - (s * f));
		const t = 255 * v * (1 - (s * (1 - f)));
		v *= 255;

		switch (hi) {
			case 0: {
				return [v, t, p];
			}

			case 1: {
				return [q, v, p];
			}

			case 2: {
				return [p, v, t];
			}

			case 3: {
				return [p, q, v];
			}

			case 4: {
				return [t, p, v];
			}

			case 5: {
				return [v, p, q];
			}
		}
	};

	convert$1.hsv.hsl = function (hsv) {
		const h = hsv[0];
		const s = hsv[1] / 100;
		const v = hsv[2] / 100;
		const vmin = Math.max(v, 0.01);
		let sl;
		let l;

		l = (2 - s) * v;
		const lmin = (2 - s) * vmin;
		sl = s * vmin;
		sl /= (lmin <= 1) ? lmin : 2 - lmin;
		sl = sl || 0;
		l /= 2;

		return [h, sl * 100, l * 100];
	};

	// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
	convert$1.hwb.rgb = function (hwb) {
		const h = hwb[0] / 360;
		let wh = hwb[1] / 100;
		let bl = hwb[2] / 100;
		const ratio = wh + bl;
		let f;

		// Wh + bl cant be > 1
		if (ratio > 1) {
			wh /= ratio;
			bl /= ratio;
		}

		const i = Math.floor(6 * h);
		const v = 1 - bl;
		f = 6 * h - i;

		// eslint-disable-next-line no-bitwise
		if ((i & 0x01) !== 0) {
			f = 1 - f;
		}

		const n = wh + f * (v - wh); // Linear interpolation

		let r;
		let g;
		let b;
		/* eslint-disable max-statements-per-line,no-multi-spaces, default-case-last */
		switch (i) {
			default:
			case 6:
			case 0: { r = v;  g = n;  b = wh; break;
			}

			case 1: { r = n;  g = v;  b = wh; break;
			}

			case 2: { r = wh; g = v;  b = n; break;
			}

			case 3: { r = wh; g = n;  b = v; break;
			}

			case 4: { r = n;  g = wh; b = v; break;
			}

			case 5: { r = v;  g = wh; b = n; break;
			}
		}
		/* eslint-enable max-statements-per-line,no-multi-spaces, default-case-last */

		return [r * 255, g * 255, b * 255];
	};

	convert$1.cmyk.rgb = function (cmyk) {
		const c = cmyk[0] / 100;
		const m = cmyk[1] / 100;
		const y = cmyk[2] / 100;
		const k = cmyk[3] / 100;

		const r = 1 - Math.min(1, c * (1 - k) + k);
		const g = 1 - Math.min(1, m * (1 - k) + k);
		const b = 1 - Math.min(1, y * (1 - k) + k);

		return [r * 255, g * 255, b * 255];
	};

	convert$1.xyz.rgb = function (xyz) {
		const x = xyz[0] / 100;
		const y = xyz[1] / 100;
		const z = xyz[2] / 100;
		let r;
		let g;
		let b;

		r = (x * 3.240_454_2) + (y * -1.5371385) + (z * -0.4985314);
		g = (x * -0.969266) + (y * 1.876_010_8) + (z * 0.041_556);
		b = (x * 0.055_643_4) + (y * -0.2040259) + (z * 1.057_225_2);

		// Assume sRGB
		r = r > 0.003_130_8
			? ((1.055 * (r ** (1 / 2.4))) - 0.055)
			: r * 12.92;

		g = g > 0.003_130_8
			? ((1.055 * (g ** (1 / 2.4))) - 0.055)
			: g * 12.92;

		b = b > 0.003_130_8
			? ((1.055 * (b ** (1 / 2.4))) - 0.055)
			: b * 12.92;

		r = Math.min(Math.max(0, r), 1);
		g = Math.min(Math.max(0, g), 1);
		b = Math.min(Math.max(0, b), 1);

		return [r * 255, g * 255, b * 255];
	};

	convert$1.xyz.lab = function (xyz) {
		let x = xyz[0];
		let y = xyz[1];
		let z = xyz[2];

		x /= 95.047;
		y /= 100;
		z /= 108.883;

		x = x > LAB_FT ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
		y = y > LAB_FT ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
		z = z > LAB_FT ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

		const l = (116 * y) - 16;
		const a = 500 * (x - y);
		const b = 200 * (y - z);

		return [l, a, b];
	};

	convert$1.lab.xyz = function (lab) {
		const l = lab[0];
		const a = lab[1];
		const b = lab[2];
		let x;
		let y;
		let z;

		y = (l + 16) / 116;
		x = a / 500 + y;
		z = y - b / 200;

		const y2 = y ** 3;
		const x2 = x ** 3;
		const z2 = z ** 3;
		y = y2 > LAB_FT ? y2 : (y - 16 / 116) / 7.787;
		x = x2 > LAB_FT ? x2 : (x - 16 / 116) / 7.787;
		z = z2 > LAB_FT ? z2 : (z - 16 / 116) / 7.787;

		// Illuminant D65 XYZ Tristrimulus Values
		// https://en.wikipedia.org/wiki/CIE_1931_color_space
		x *= 95.047;
		y *= 100;
		z *= 108.883;

		return [x, y, z];
	};

	convert$1.lab.lch = function (lab) {
		const l = lab[0];
		const a = lab[1];
		const b = lab[2];
		let h;

		const hr = Math.atan2(b, a);
		h = hr * 360 / 2 / Math.PI;

		if (h < 0) {
			h += 360;
		}

		const c = Math.sqrt(a * a + b * b);

		return [l, c, h];
	};

	convert$1.lch.lab = function (lch) {
		const l = lch[0];
		const c = lch[1];
		const h = lch[2];

		const hr = h / 360 * 2 * Math.PI;
		const a = c * Math.cos(hr);
		const b = c * Math.sin(hr);

		return [l, a, b];
	};

	convert$1.rgb.ansi16 = function (args, saturation = null) {
		const [r, g, b] = args;
		let value = saturation === null ? convert$1.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization

		value = Math.round(value / 50);

		if (value === 0) {
			return 30;
		}

		let ansi = 30
			/* eslint-disable no-bitwise */
			+ ((Math.round(b / 255) << 2)
			| (Math.round(g / 255) << 1)
			| Math.round(r / 255));
			/* eslint-enable no-bitwise */

		if (value === 2) {
			ansi += 60;
		}

		return ansi;
	};

	convert$1.hsv.ansi16 = function (args) {
		// Optimization here; we already know the value and don't need to get
		// it converted for us.
		return convert$1.rgb.ansi16(convert$1.hsv.rgb(args), args[2]);
	};

	convert$1.rgb.ansi256 = function (args) {
		const r = args[0];
		const g = args[1];
		const b = args[2];

		// We use the extended greyscale palette here, with the exception of
		// black and white. normal palette only has 4 greyscale shades.
		// eslint-disable-next-line no-bitwise
		if (r >> 4 === g >> 4 && g >> 4 === b >> 4) {
			if (r < 8) {
				return 16;
			}

			if (r > 248) {
				return 231;
			}

			return Math.round(((r - 8) / 247) * 24) + 232;
		}

		const ansi = 16
			+ (36 * Math.round(r / 255 * 5))
			+ (6 * Math.round(g / 255 * 5))
			+ Math.round(b / 255 * 5);

		return ansi;
	};

	convert$1.ansi16.rgb = function (args) {
		args = args[0];

		let color = args % 10;

		// Handle greyscale
		if (color === 0 || color === 7) {
			if (args > 50) {
				color += 3.5;
			}

			color = color / 10.5 * 255;

			return [color, color, color];
		}

		const mult = (Math.trunc(args > 50) + 1) * 0.5;
		/* eslint-disable no-bitwise */
		const r = ((color & 1) * mult) * 255;
		const g = (((color >> 1) & 1) * mult) * 255;
		const b = (((color >> 2) & 1) * mult) * 255;
		/* eslint-enable no-bitwise */

		return [r, g, b];
	};

	convert$1.ansi256.rgb = function (args) {
		args = args[0];

		// Handle greyscale
		if (args >= 232) {
			const c = (args - 232) * 10 + 8;
			return [c, c, c];
		}

		args -= 16;

		let rem;
		const r = Math.floor(args / 36) / 5 * 255;
		const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
		const b = (rem % 6) / 5 * 255;

		return [r, g, b];
	};

	convert$1.rgb.hex = function (args) {
		/* eslint-disable no-bitwise */
		const integer = ((Math.round(args[0]) & 0xFF) << 16)
			+ ((Math.round(args[1]) & 0xFF) << 8)
			+ (Math.round(args[2]) & 0xFF);
		/* eslint-enable no-bitwise */

		const string = integer.toString(16).toUpperCase();
		return '000000'.slice(string.length) + string;
	};

	convert$1.hex.rgb = function (args) {
		const match = args.toString(16).match(/[a-f\d]{6}|[a-f\d]{3}/i);
		if (!match) {
			return [0, 0, 0];
		}

		let colorString = match[0];

		if (match[0].length === 3) {
			colorString = [...colorString].map(char => char + char).join('');
		}

		const integer = Number.parseInt(colorString, 16);
		/* eslint-disable no-bitwise */
		const r = (integer >> 16) & 0xFF;
		const g = (integer >> 8) & 0xFF;
		const b = integer & 0xFF;
		/* eslint-enable no-bitwise */

		return [r, g, b];
	};

	convert$1.rgb.hcg = function (rgb) {
		const r = rgb[0] / 255;
		const g = rgb[1] / 255;
		const b = rgb[2] / 255;
		const max = Math.max(Math.max(r, g), b);
		const min = Math.min(Math.min(r, g), b);
		const chroma = (max - min);
		let hue;

		const grayscale = chroma < 1 ? min / (1 - chroma) : 0;

		if (chroma <= 0) {
			hue = 0;
		} else if (max === r) {
			hue = ((g - b) / chroma) % 6;
		} else if (max === g) {
			hue = 2 + (b - r) / chroma;
		} else {
			hue = 4 + (r - g) / chroma;
		}

		hue /= 6;
		hue %= 1;

		return [hue * 360, chroma * 100, grayscale * 100];
	};

	convert$1.hsl.hcg = function (hsl) {
		const s = hsl[1] / 100;
		const l = hsl[2] / 100;

		const c = l < 0.5 ? (2 * s * l) : (2 * s * (1 - l));

		let f = 0;
		if (c < 1) {
			f = (l - 0.5 * c) / (1 - c);
		}

		return [hsl[0], c * 100, f * 100];
	};

	convert$1.hsv.hcg = function (hsv) {
		const s = hsv[1] / 100;
		const v = hsv[2] / 100;

		const c = s * v;
		let f = 0;

		if (c < 1) {
			f = (v - c) / (1 - c);
		}

		return [hsv[0], c * 100, f * 100];
	};

	convert$1.hcg.rgb = function (hcg) {
		const h = hcg[0] / 360;
		const c = hcg[1] / 100;
		const g = hcg[2] / 100;

		if (c === 0) {
			return [g * 255, g * 255, g * 255];
		}

		const pure = [0, 0, 0];
		const hi = (h % 1) * 6;
		const v = hi % 1;
		const w = 1 - v;
		let mg = 0;

		/* eslint-disable max-statements-per-line */
		switch (Math.floor(hi)) {
			case 0: {
				pure[0] = 1; pure[1] = v; pure[2] = 0; break;
			}

			case 1: {
				pure[0] = w; pure[1] = 1; pure[2] = 0; break;
			}

			case 2: {
				pure[0] = 0; pure[1] = 1; pure[2] = v; break;
			}

			case 3: {
				pure[0] = 0; pure[1] = w; pure[2] = 1; break;
			}

			case 4: {
				pure[0] = v; pure[1] = 0; pure[2] = 1; break;
			}

			default: {
				pure[0] = 1; pure[1] = 0; pure[2] = w;
			}
		}
		/* eslint-enable max-statements-per-line */

		mg = (1 - c) * g;

		return [
			(c * pure[0] + mg) * 255,
			(c * pure[1] + mg) * 255,
			(c * pure[2] + mg) * 255,
		];
	};

	convert$1.hcg.hsv = function (hcg) {
		const c = hcg[1] / 100;
		const g = hcg[2] / 100;

		const v = c + g * (1 - c);
		let f = 0;

		if (v > 0) {
			f = c / v;
		}

		return [hcg[0], f * 100, v * 100];
	};

	convert$1.hcg.hsl = function (hcg) {
		const c = hcg[1] / 100;
		const g = hcg[2] / 100;

		const l = g * (1 - c) + 0.5 * c;
		let s = 0;

		if (l > 0 && l < 0.5) {
			s = c / (2 * l);
		} else if (l >= 0.5 && l < 1) {
			s = c / (2 * (1 - l));
		}

		return [hcg[0], s * 100, l * 100];
	};

	convert$1.hcg.hwb = function (hcg) {
		const c = hcg[1] / 100;
		const g = hcg[2] / 100;
		const v = c + g * (1 - c);
		return [hcg[0], (v - c) * 100, (1 - v) * 100];
	};

	convert$1.hwb.hcg = function (hwb) {
		const w = hwb[1] / 100;
		const b = hwb[2] / 100;
		const v = 1 - b;
		const c = v - w;
		let g = 0;

		if (c < 1) {
			g = (v - c) / (1 - c);
		}

		return [hwb[0], c * 100, g * 100];
	};

	convert$1.apple.rgb = function (apple) {
		return [(apple[0] / 65_535) * 255, (apple[1] / 65_535) * 255, (apple[2] / 65_535) * 255];
	};

	convert$1.rgb.apple = function (rgb) {
		return [(rgb[0] / 255) * 65_535, (rgb[1] / 255) * 65_535, (rgb[2] / 255) * 65_535];
	};

	convert$1.gray.rgb = function (args) {
		return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
	};

	convert$1.gray.hsl = function (args) {
		return [0, 0, args[0]];
	};

	convert$1.gray.hsv = convert$1.gray.hsl;

	convert$1.gray.hwb = function (gray) {
		return [0, 100, gray[0]];
	};

	convert$1.gray.cmyk = function (gray) {
		return [0, 0, 0, gray[0]];
	};

	convert$1.gray.lab = function (gray) {
		return [gray[0], 0, 0];
	};

	convert$1.gray.hex = function (gray) {
		/* eslint-disable no-bitwise */
		const value = Math.round(gray[0] / 100 * 255) & 0xFF;
		const integer = (value << 16) + (value << 8) + value;
		/* eslint-enable no-bitwise */

		const string = integer.toString(16).toUpperCase();
		return '000000'.slice(string.length) + string;
	};

	convert$1.rgb.gray = function (rgb) {
		const value = (rgb[0] + rgb[1] + rgb[2]) / 3;
		return [value / 255 * 100];
	};

	/*
		This function routes a model to all other models.

		all functions that are routed have a property `.conversion` attached
		to the returned synthetic function. This property is an array
		of strings, each with the steps in between the 'from' and 'to'
		color models (inclusive).

		conversions that are not possible simply are not included.
	*/

	function buildGraph() {
		const graph = {};
		// https://jsperf.com/object-keys-vs-for-in-with-closure/3
		const models = Object.keys(convert$1);

		for (let {length} = models, i = 0; i < length; i++) {
			graph[models[i]] = {
				// http://jsperf.com/1-vs-infinity
				// micro-opt, but this is simple.
				distance: -1,
				parent: null,
			};
		}

		return graph;
	}

	// https://en.wikipedia.org/wiki/Breadth-first_search
	function deriveBFS(fromModel) {
		const graph = buildGraph();
		const queue = [fromModel]; // Unshift -> queue -> pop

		graph[fromModel].distance = 0;

		while (queue.length > 0) {
			const current = queue.pop();
			const adjacents = Object.keys(convert$1[current]);

			for (let {length} = adjacents, i = 0; i < length; i++) {
				const adjacent = adjacents[i];
				const node = graph[adjacent];

				if (node.distance === -1) {
					node.distance = graph[current].distance + 1;
					node.parent = current;
					queue.unshift(adjacent);
				}
			}
		}

		return graph;
	}

	function link(from, to) {
		return function (args) {
			return to(from(args));
		};
	}

	function wrapConversion(toModel, graph) {
		const path = [graph[toModel].parent, toModel];
		let fn = convert$1[graph[toModel].parent][toModel];

		let cur = graph[toModel].parent;
		while (graph[cur].parent) {
			path.unshift(graph[cur].parent);
			fn = link(convert$1[graph[cur].parent][cur], fn);
			cur = graph[cur].parent;
		}

		fn.conversion = path;
		return fn;
	}

	function route(fromModel) {
		const graph = deriveBFS(fromModel);
		const conversion = {};

		const models = Object.keys(graph);
		for (let {length} = models, i = 0; i < length; i++) {
			const toModel = models[i];
			const node = graph[toModel];

			if (node.parent === null) {
				// No possible conversion, or this node is the source model.
				continue;
			}

			conversion[toModel] = wrapConversion(toModel, graph);
		}

		return conversion;
	}

	const convert = {};

	const models = Object.keys(convert$1);

	function wrapRaw(fn) {
		const wrappedFn = function (...args) {
			const arg0 = args[0];
			if (arg0 === undefined || arg0 === null) {
				return arg0;
			}

			if (arg0.length > 1) {
				args = arg0;
			}

			return fn(args);
		};

		// Preserve .conversion property if there is one
		if ('conversion' in fn) {
			wrappedFn.conversion = fn.conversion;
		}

		return wrappedFn;
	}

	function wrapRounded(fn) {
		const wrappedFn = function (...args) {
			const arg0 = args[0];

			if (arg0 === undefined || arg0 === null) {
				return arg0;
			}

			if (arg0.length > 1) {
				args = arg0;
			}

			const result = fn(args);

			// We're assuming the result is an array here.
			// see notice in conversions.js; don't use box types
			// in conversion functions.
			if (typeof result === 'object') {
				for (let {length} = result, i = 0; i < length; i++) {
					result[i] = Math.round(result[i]);
				}
			}

			return result;
		};

		// Preserve .conversion property if there is one
		if ('conversion' in fn) {
			wrappedFn.conversion = fn.conversion;
		}

		return wrappedFn;
	}

	for (const fromModel of models) {
		convert[fromModel] = {};

		Object.defineProperty(convert[fromModel], 'channels', {value: convert$1[fromModel].channels});
		Object.defineProperty(convert[fromModel], 'labels', {value: convert$1[fromModel].labels});

		const routes = route(fromModel);
		const routeModels = Object.keys(routes);

		for (const toModel of routeModels) {
			const fn = routes[toModel];

			convert[fromModel][toModel] = wrapRounded(fn);
			convert[fromModel][toModel].raw = wrapRaw(fn);
		}
	}

	const skippedModels = [
		// To be honest, I don't really feel like keyword belongs in color convert, but eh.
		'keyword',

		// Gray conflicts with some method names, and has its own method defined.
		'gray',

		// Shouldn't really be in color-convert either...
		'hex',
	];

	const hashedModelKeys = {};
	for (const model of Object.keys(convert)) {
		hashedModelKeys[[...convert[model].labels].sort().join('')] = model;
	}

	const limiters = {};

	function Color(object, model) {
		if (!(this instanceof Color)) {
			return new Color(object, model);
		}

		if (model && model in skippedModels) {
			model = null;
		}

		if (model && !(model in convert)) {
			throw new Error('Unknown model: ' + model);
		}

		let i;
		let channels;

		if (object == null) { // eslint-disable-line no-eq-null,eqeqeq
			this.model = 'rgb';
			this.color = [0, 0, 0];
			this.valpha = 1;
		} else if (object instanceof Color) {
			this.model = object.model;
			this.color = [...object.color];
			this.valpha = object.valpha;
		} else if (typeof object === 'string') {
			const result = cs.get(object);
			if (result === null) {
				throw new Error('Unable to parse color from string: ' + object);
			}

			this.model = result.model;
			channels = convert[this.model].channels;
			this.color = result.value.slice(0, channels);
			this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
		} else if (object.length > 0) {
			this.model = model || 'rgb';
			channels = convert[this.model].channels;
			const newArray = Array.prototype.slice.call(object, 0, channels);
			this.color = zeroArray(newArray, channels);
			this.valpha = typeof object[channels] === 'number' ? object[channels] : 1;
		} else if (typeof object === 'number') {
			// This is always RGB - can be converted later on.
			this.model = 'rgb';
			this.color = [
				(object >> 16) & 0xFF,
				(object >> 8) & 0xFF,
				object & 0xFF,
			];
			this.valpha = 1;
		} else {
			this.valpha = 1;

			const keys = Object.keys(object);
			if ('alpha' in object) {
				keys.splice(keys.indexOf('alpha'), 1);
				this.valpha = typeof object.alpha === 'number' ? object.alpha : 0;
			}

			const hashedKeys = keys.sort().join('');
			if (!(hashedKeys in hashedModelKeys)) {
				throw new Error('Unable to parse color from object: ' + JSON.stringify(object));
			}

			this.model = hashedModelKeys[hashedKeys];

			const {labels} = convert[this.model];
			const color = [];
			for (i = 0; i < labels.length; i++) {
				color.push(object[labels[i]]);
			}

			this.color = zeroArray(color);
		}

		// Perform limitations (clamping, etc.)
		if (limiters[this.model]) {
			channels = convert[this.model].channels;
			for (i = 0; i < channels; i++) {
				const limit = limiters[this.model][i];
				if (limit) {
					this.color[i] = limit(this.color[i]);
				}
			}
		}

		this.valpha = Math.max(0, Math.min(1, this.valpha));

		if (Object.freeze) {
			Object.freeze(this);
		}
	}

	Color.prototype = {
		toString() {
			return this.string();
		},

		toJSON() {
			return this[this.model]();
		},

		string(places) {
			let self = this.model in cs.to ? this : this.rgb();
			self = self.round(typeof places === 'number' ? places : 1);
			const arguments_ = self.valpha === 1 ? self.color : [...self.color, this.valpha];
			return cs.to[self.model](...arguments_);
		},

		percentString(places) {
			const self = this.rgb().round(typeof places === 'number' ? places : 1);
			const arguments_ = self.valpha === 1 ? self.color : [...self.color, this.valpha];
			return cs.to.rgb.percent(...arguments_);
		},

		array() {
			return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
		},

		object() {
			const result = {};
			const {channels} = convert[this.model];
			const {labels} = convert[this.model];

			for (let i = 0; i < channels; i++) {
				result[labels[i]] = this.color[i];
			}

			if (this.valpha !== 1) {
				result.alpha = this.valpha;
			}

			return result;
		},

		unitArray() {
			const rgb = this.rgb().color;
			rgb[0] /= 255;
			rgb[1] /= 255;
			rgb[2] /= 255;

			if (this.valpha !== 1) {
				rgb.push(this.valpha);
			}

			return rgb;
		},

		unitObject() {
			const rgb = this.rgb().object();
			rgb.r /= 255;
			rgb.g /= 255;
			rgb.b /= 255;

			if (this.valpha !== 1) {
				rgb.alpha = this.valpha;
			}

			return rgb;
		},

		round(places) {
			places = Math.max(places || 0, 0);
			return new Color([...this.color.map(roundToPlace(places)), this.valpha], this.model);
		},

		alpha(value) {
			if (value !== undefined) {
				return new Color([...this.color, Math.max(0, Math.min(1, value))], this.model);
			}

			return this.valpha;
		},

		// Rgb
		red: getset('rgb', 0, maxfn(255)),
		green: getset('rgb', 1, maxfn(255)),
		blue: getset('rgb', 2, maxfn(255)),

		hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, value => ((value % 360) + 360) % 360),

		saturationl: getset('hsl', 1, maxfn(100)),
		lightness: getset('hsl', 2, maxfn(100)),

		saturationv: getset('hsv', 1, maxfn(100)),
		value: getset('hsv', 2, maxfn(100)),

		chroma: getset('hcg', 1, maxfn(100)),
		gray: getset('hcg', 2, maxfn(100)),

		white: getset('hwb', 1, maxfn(100)),
		wblack: getset('hwb', 2, maxfn(100)),

		cyan: getset('cmyk', 0, maxfn(100)),
		magenta: getset('cmyk', 1, maxfn(100)),
		yellow: getset('cmyk', 2, maxfn(100)),
		black: getset('cmyk', 3, maxfn(100)),

		x: getset('xyz', 0, maxfn(95.047)),
		y: getset('xyz', 1, maxfn(100)),
		z: getset('xyz', 2, maxfn(108.833)),

		l: getset('lab', 0, maxfn(100)),
		a: getset('lab', 1),
		b: getset('lab', 2),

		keyword(value) {
			if (value !== undefined) {
				return new Color(value);
			}

			return convert[this.model].keyword(this.color);
		},

		hex(value) {
			if (value !== undefined) {
				return new Color(value);
			}

			return cs.to.hex(...this.rgb().round().color);
		},

		hexa(value) {
			if (value !== undefined) {
				return new Color(value);
			}

			const rgbArray = this.rgb().round().color;

			let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
			if (alphaHex.length === 1) {
				alphaHex = '0' + alphaHex;
			}

			return cs.to.hex(...rgbArray) + alphaHex;
		},

		rgbNumber() {
			const rgb = this.rgb().color;
			return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
		},

		luminosity() {
			// http://www.w3.org/TR/WCAG20/#relativeluminancedef
			const rgb = this.rgb().color;

			const lum = [];
			for (const [i, element] of rgb.entries()) {
				const chan = element / 255;
				lum[i] = (chan <= 0.04045) ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
			}

			return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
		},

		contrast(color2) {
			// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
			const lum1 = this.luminosity();
			const lum2 = color2.luminosity();

			if (lum1 > lum2) {
				return (lum1 + 0.05) / (lum2 + 0.05);
			}

			return (lum2 + 0.05) / (lum1 + 0.05);
		},

		level(color2) {
			// https://www.w3.org/TR/WCAG/#contrast-enhanced
			const contrastRatio = this.contrast(color2);
			if (contrastRatio >= 7) {
				return 'AAA';
			}

			return (contrastRatio >= 4.5) ? 'AA' : '';
		},

		isDark() {
			// YIQ equation from http://24ways.org/2010/calculating-color-contrast
			const rgb = this.rgb().color;
			const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 10000;
			return yiq < 128;
		},

		isLight() {
			return !this.isDark();
		},

		negate() {
			const rgb = this.rgb();
			for (let i = 0; i < 3; i++) {
				rgb.color[i] = 255 - rgb.color[i];
			}

			return rgb;
		},

		lighten(ratio) {
			const hsl = this.hsl();
			hsl.color[2] += hsl.color[2] * ratio;
			return hsl;
		},

		darken(ratio) {
			const hsl = this.hsl();
			hsl.color[2] -= hsl.color[2] * ratio;
			return hsl;
		},

		saturate(ratio) {
			const hsl = this.hsl();
			hsl.color[1] += hsl.color[1] * ratio;
			return hsl;
		},

		desaturate(ratio) {
			const hsl = this.hsl();
			hsl.color[1] -= hsl.color[1] * ratio;
			return hsl;
		},

		whiten(ratio) {
			const hwb = this.hwb();
			hwb.color[1] += hwb.color[1] * ratio;
			return hwb;
		},

		blacken(ratio) {
			const hwb = this.hwb();
			hwb.color[2] += hwb.color[2] * ratio;
			return hwb;
		},

		grayscale() {
			// http://en.wikipedia.org/wiki/Grayscale#Converting_colour_to_grayscale
			const rgb = this.rgb().color;
			const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
			return Color.rgb(value, value, value);
		},

		fade(ratio) {
			return this.alpha(this.valpha - (this.valpha * ratio));
		},

		opaquer(ratio) {
			return this.alpha(this.valpha + (this.valpha * ratio));
		},

		rotate(degrees) {
			const hsl = this.hsl();
			let hue = hsl.color[0];
			hue = (hue + degrees) % 360;
			hue = hue < 0 ? 360 + hue : hue;
			hsl.color[0] = hue;
			return hsl;
		},

		mix(mixinColor, weight) {
			// Ported from sass implementation in C
			// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
			if (!mixinColor || !mixinColor.rgb) {
				throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
			}

			const color1 = mixinColor.rgb();
			const color2 = this.rgb();
			const p = weight === undefined ? 0.5 : weight;

			const w = 2 * p - 1;
			const a = color1.alpha() - color2.alpha();

			const w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2;
			const w2 = 1 - w1;

			return Color.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue(),
				color1.alpha() * p + color2.alpha() * (1 - p));
		},
	};

	// Model conversion methods and static constructors
	for (const model of Object.keys(convert)) {
		if (skippedModels.includes(model)) {
			continue;
		}

		const {channels} = convert[model];

		// Conversion methods
		Color.prototype[model] = function (...arguments_) {
			if (this.model === model) {
				return new Color(this);
			}

			if (arguments_.length > 0) {
				return new Color(arguments_, model);
			}

			return new Color([...assertArray(convert[this.model][model].raw(this.color)), this.valpha], model);
		};

		// 'static' construction methods
		Color[model] = function (...arguments_) {
			let color = arguments_[0];
			if (typeof color === 'number') {
				color = zeroArray(arguments_, channels);
			}

			return new Color(color, model);
		};
	}

	function roundTo(number, places) {
		return Number(number.toFixed(places));
	}

	function roundToPlace(places) {
		return function (number) {
			return roundTo(number, places);
		};
	}

	function getset(model, channel, modifier) {
		model = Array.isArray(model) ? model : [model];

		for (const m of model) {
			(limiters[m] ||= [])[channel] = modifier;
		}

		model = model[0];

		return function (value) {
			let result;

			if (value !== undefined) {
				if (modifier) {
					value = modifier(value);
				}

				result = this[model]();
				result.color[channel] = value;
				return result;
			}

			result = this[model]().color[channel];
			if (modifier) {
				result = modifier(result);
			}

			return result;
		};
	}

	function maxfn(max) {
		return function (v) {
			return Math.max(0, Math.min(max, v));
		};
	}

	function assertArray(value) {
		return Array.isArray(value) ? value : [value];
	}

	function zeroArray(array, length) {
		for (let i = 0; i < length; i++) {
			if (typeof array[i] !== 'number') {
				array[i] = 0;
			}
		}

		return array;
	}

	function resolveBackground(backgroundColor, gradientColor, gradientDirection) {
	    if (!backgroundColor)
	        return { isDark: false };
	    if (gradientColor) {
	        const direction = gradientDirection || 'to bottom';
	        const background = `linear-gradient(${direction}, ${backgroundColor}, ${gradientColor})`;
	        const mixed = Color(backgroundColor).mix(Color(gradientColor), 0.5); // eslint-disable-line new-cap
	        return { background, backgroundColor, isDark: mixed.isDark() };
	    }
	    return { backgroundColor, isDark: Color(backgroundColor).isDark() }; // eslint-disable-line new-cap
	}
	function findByType(entries, type) {
	    return entries === null || entries === void 0 ? void 0 : entries.find((entry) => entry.type === type);
	}
	function scrollTo(el, offset = 0) {
	    const getOffsetTop = () => {
	        const rect = el.getBoundingClientRect();
	        return rect.top - offset;
	    };
	    window.scrollBy({
	        top: getOffsetTop(),
	        behavior: 'smooth'
	    });
	}

	function isClickWithModifierKeys(e) {
	    return Boolean(e.shiftKey || e.ctrlKey || e.metaKey || e.altKey);
	}
	/*
	 * Reads a dynamic-link descriptor from an anchor's data attributes, as written
	 * by the editor into rich-text HTML:
	 *   <a data-flex-link data-link-type=".." data-link-value=".." data-link-params="{..}">
	 */
	function readLinkTarget(el) {
	    const type = el.getAttribute('data-link-type');
	    const value = el.getAttribute('data-link-value');
	    if (!type || value === null)
	        return null;
	    const paramsRaw = el.getAttribute('data-link-params');
	    let params;
	    if (paramsRaw) {
	        try {
	            params = JSON.parse(paramsRaw);
	        }
	        catch {
	            params = undefined;
	        }
	    }
	    return { type, value, params };
	}
	/*
	 * `anchorEl` is the actual link element — for the standalone Link it is
	 * e.currentTarget; for the delegated rich-text handler it is the matched
	 * ancestor (e.currentTarget would be the wrapper, not the link).
	 */
	function handleLinkClick(e, anchorEl, target, { routes, actions }) {
	    var _a, _b;
	    const { type, value, params } = target;
	    if (type === 'anchor') {
	        e.preventDefault();
	        const el = document.getElementById(value.substring(1));
	        if (el)
	            scrollTo(el);
	        return;
	    }
	    if (type === 'route') {
	        const route = routes[value];
	        if (!route)
	            return;
	        if (isClickWithModifierKeys(e) || (anchorEl === null || anchorEl === void 0 ? void 0 : anchorEl.getAttribute('target')) === '_blank')
	            return;
	        e.preventDefault();
	        route.handler(params);
	        return;
	    }
	    if (type === 'action') {
	        (_b = (_a = actions[value]) === null || _a === void 0 ? void 0 : _a.handler) === null || _b === void 0 ? void 0 : _b.call(_a, params);
	    }
	}

	const linkFieldConfig = [
	    { name: 'text', label: 'Link Text', type: 'text', required: true },
	    { name: 'ariaLabel', label: 'Aria Label', type: 'text' },
	    { name: 'target', label: 'Link Target', type: 'link-target' },
	];

	function Link({ link, ...props }) {
	    var _a;
	    const type = link.target.type;
	    const actions = React.useContext(ActionContext);
	    const routes = React.useContext(RouteContext);
	    const route = type === 'route' ? routes[link.target.value] : undefined;
	    const onClick = React.useCallback((e) => {
	        handleLinkClick(e, e.currentTarget, link.target, { routes, actions });
	    }, [link, routes, actions]);
	    if (type === 'action') {
	        return jsxRuntimeExports.jsx("button", { "aria-label": link.ariaLabel || undefined, disabled: ((_a = actions[link.target.value]) === null || _a === void 0 ? void 0 : _a.handler) === undefined, ...props, onClick: onClick, children: link.text });
	    }
	    if (type === 'route') {
	        if (!route)
	            return null;
	        return jsxRuntimeExports.jsx("a", { "aria-label": link.ariaLabel || undefined, ...props, href: route.render(link.target.params), onClick: onClick, children: link.text });
	    }
	    return jsxRuntimeExports.jsx("a", { "aria-label": link.ariaLabel || undefined, ...props, href: link.target.value, onClick: onClick, children: link.text });
	}

	/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */

	var purify_cjs;
	var hasRequiredPurify_cjs;

	function requirePurify_cjs () {
		if (hasRequiredPurify_cjs) return purify_cjs;
		hasRequiredPurify_cjs = 1;

		const {
		  entries,
		  setPrototypeOf,
		  isFrozen,
		  getPrototypeOf,
		  getOwnPropertyDescriptor
		} = Object;
		let {
		  freeze,
		  seal,
		  create
		} = Object; // eslint-disable-line import/no-mutable-exports
		let {
		  apply,
		  construct
		} = typeof Reflect !== 'undefined' && Reflect;
		if (!freeze) {
		  freeze = function freeze(x) {
		    return x;
		  };
		}
		if (!seal) {
		  seal = function seal(x) {
		    return x;
		  };
		}
		if (!apply) {
		  apply = function apply(func, thisArg) {
		    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		      args[_key - 2] = arguments[_key];
		    }
		    return func.apply(thisArg, args);
		  };
		}
		if (!construct) {
		  construct = function construct(Func) {
		    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		      args[_key2 - 1] = arguments[_key2];
		    }
		    return new Func(...args);
		  };
		}
		const arrayForEach = unapply(Array.prototype.forEach);
		const arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
		const arrayPop = unapply(Array.prototype.pop);
		const arrayPush = unapply(Array.prototype.push);
		const arraySplice = unapply(Array.prototype.splice);
		const stringToLowerCase = unapply(String.prototype.toLowerCase);
		const stringToString = unapply(String.prototype.toString);
		const stringMatch = unapply(String.prototype.match);
		const stringReplace = unapply(String.prototype.replace);
		const stringIndexOf = unapply(String.prototype.indexOf);
		const stringTrim = unapply(String.prototype.trim);
		const objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
		const regExpTest = unapply(RegExp.prototype.test);
		const typeErrorCreate = unconstruct(TypeError);
		/**
		 * Creates a new function that calls the given function with a specified thisArg and arguments.
		 *
		 * @param func - The function to be wrapped and called.
		 * @returns A new function that calls the given function with a specified thisArg and arguments.
		 */
		function unapply(func) {
		  return function (thisArg) {
		    if (thisArg instanceof RegExp) {
		      thisArg.lastIndex = 0;
		    }
		    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
		      args[_key3 - 1] = arguments[_key3];
		    }
		    return apply(func, thisArg, args);
		  };
		}
		/**
		 * Creates a new function that constructs an instance of the given constructor function with the provided arguments.
		 *
		 * @param func - The constructor function to be wrapped and called.
		 * @returns A new function that constructs an instance of the given constructor function with the provided arguments.
		 */
		function unconstruct(Func) {
		  return function () {
		    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
		      args[_key4] = arguments[_key4];
		    }
		    return construct(Func, args);
		  };
		}
		/**
		 * Add properties to a lookup table
		 *
		 * @param set - The set to which elements will be added.
		 * @param array - The array containing elements to be added to the set.
		 * @param transformCaseFunc - An optional function to transform the case of each element before adding to the set.
		 * @returns The modified set with added elements.
		 */
		function addToSet(set, array) {
		  let transformCaseFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : stringToLowerCase;
		  if (setPrototypeOf) {
		    // Make 'in' and truthy checks like Boolean(set.constructor)
		    // independent of any properties defined on Object.prototype.
		    // Prevent prototype setters from intercepting set as a this value.
		    setPrototypeOf(set, null);
		  }
		  let l = array.length;
		  while (l--) {
		    let element = array[l];
		    if (typeof element === 'string') {
		      const lcElement = transformCaseFunc(element);
		      if (lcElement !== element) {
		        // Config presets (e.g. tags.js, attrs.js) are immutable.
		        if (!isFrozen(array)) {
		          array[l] = lcElement;
		        }
		        element = lcElement;
		      }
		    }
		    set[element] = true;
		  }
		  return set;
		}
		/**
		 * Clean up an array to harden against CSPP
		 *
		 * @param array - The array to be cleaned.
		 * @returns The cleaned version of the array
		 */
		function cleanArray(array) {
		  for (let index = 0; index < array.length; index++) {
		    const isPropertyExist = objectHasOwnProperty(array, index);
		    if (!isPropertyExist) {
		      array[index] = null;
		    }
		  }
		  return array;
		}
		/**
		 * Shallow clone an object
		 *
		 * @param object - The object to be cloned.
		 * @returns A new object that copies the original.
		 */
		function clone(object) {
		  const newObject = create(null);
		  for (const [property, value] of entries(object)) {
		    const isPropertyExist = objectHasOwnProperty(object, property);
		    if (isPropertyExist) {
		      if (Array.isArray(value)) {
		        newObject[property] = cleanArray(value);
		      } else if (value && typeof value === 'object' && value.constructor === Object) {
		        newObject[property] = clone(value);
		      } else {
		        newObject[property] = value;
		      }
		    }
		  }
		  return newObject;
		}
		/**
		 * This method automatically checks if the prop is function or getter and behaves accordingly.
		 *
		 * @param object - The object to look up the getter function in its prototype chain.
		 * @param prop - The property name for which to find the getter function.
		 * @returns The getter function found in the prototype chain or a fallback function.
		 */
		function lookupGetter(object, prop) {
		  while (object !== null) {
		    const desc = getOwnPropertyDescriptor(object, prop);
		    if (desc) {
		      if (desc.get) {
		        return unapply(desc.get);
		      }
		      if (typeof desc.value === 'function') {
		        return unapply(desc.value);
		      }
		    }
		    object = getPrototypeOf(object);
		  }
		  function fallbackValue() {
		    return null;
		  }
		  return fallbackValue;
		}

		const html$1 = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'search', 'section', 'select', 'shadow', 'slot', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']);
		const svg$1 = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'enterkeyhint', 'exportparts', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'inputmode', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'part', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);
		const svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feDropShadow', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);
		// List of SVG elements that are disallowed by default.
		// We still need to know them so that we can do namespace
		// checks properly in case one wants to add them to
		// allow-list.
		const svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);
		const mathMl$1 = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover', 'mprescripts']);
		// Similarly to SVG, we want to know all MathML elements,
		// even those that we disallow by default.
		const mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);
		const text = freeze(['#text']);

		const html = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'exportparts', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inert', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'nonce', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'part', 'pattern', 'placeholder', 'playsinline', 'popover', 'popovertarget', 'popovertargetaction', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'slot', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'wrap', 'xmlns', 'slot']);
		const svg = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'amplitude', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'exponent', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'intercept', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'mask-type', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'slope', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'tablevalues', 'targetx', 'targety', 'transform', 'transform-origin', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);
		const mathMl = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);
		const xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

		// eslint-disable-next-line unicorn/better-regex
		const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
		const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
		const TMPLIT_EXPR = seal(/\$\{[\w\W]*/gm); // eslint-disable-line unicorn/better-regex
		const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/); // eslint-disable-line no-useless-escape
		const ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
		const IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
		);
		const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
		const ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
		);
		const DOCTYPE_NAME = seal(/^html$/i);
		const CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);

		var EXPRESSIONS = /*#__PURE__*/Object.freeze({
		  __proto__: null,
		  ARIA_ATTR: ARIA_ATTR,
		  ATTR_WHITESPACE: ATTR_WHITESPACE,
		  CUSTOM_ELEMENT: CUSTOM_ELEMENT,
		  DATA_ATTR: DATA_ATTR,
		  DOCTYPE_NAME: DOCTYPE_NAME,
		  ERB_EXPR: ERB_EXPR,
		  IS_ALLOWED_URI: IS_ALLOWED_URI,
		  IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA,
		  MUSTACHE_EXPR: MUSTACHE_EXPR,
		  TMPLIT_EXPR: TMPLIT_EXPR
		});

		/* eslint-disable @typescript-eslint/indent */
		// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
		const NODE_TYPE = {
		  element: 1,
		  text: 3,
		  // Deprecated
		  progressingInstruction: 7,
		  comment: 8,
		  document: 9};
		const getGlobal = function getGlobal() {
		  return typeof window === 'undefined' ? null : window;
		};
		/**
		 * Creates a no-op policy for internal use only.
		 * Don't export this function outside this module!
		 * @param trustedTypes The policy factory.
		 * @param purifyHostElement The Script element used to load DOMPurify (to determine policy name suffix).
		 * @return The policy created (or null, if Trusted Types
		 * are not supported or creating the policy failed).
		 */
		const _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, purifyHostElement) {
		  if (typeof trustedTypes !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
		    return null;
		  }
		  // Allow the callers to control the unique policy name
		  // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
		  // Policy creation with duplicate names throws in Trusted Types.
		  let suffix = null;
		  const ATTR_NAME = 'data-tt-policy-suffix';
		  if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
		    suffix = purifyHostElement.getAttribute(ATTR_NAME);
		  }
		  const policyName = 'dompurify' + (suffix ? '#' + suffix : '');
		  try {
		    return trustedTypes.createPolicy(policyName, {
		      createHTML(html) {
		        return html;
		      },
		      createScriptURL(scriptUrl) {
		        return scriptUrl;
		      }
		    });
		  } catch (_) {
		    // Policy creation failed (most likely another DOMPurify script has
		    // already run). Skip creating the policy, as this will only cause errors
		    // if TT are enforced.
		    console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
		    return null;
		  }
		};
		const _createHooksMap = function _createHooksMap() {
		  return {
		    afterSanitizeAttributes: [],
		    afterSanitizeElements: [],
		    afterSanitizeShadowDOM: [],
		    beforeSanitizeAttributes: [],
		    beforeSanitizeElements: [],
		    beforeSanitizeShadowDOM: [],
		    uponSanitizeAttribute: [],
		    uponSanitizeElement: [],
		    uponSanitizeShadowNode: []
		  };
		};
		function createDOMPurify() {
		  let window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();
		  const DOMPurify = root => createDOMPurify(root);
		  DOMPurify.version = '3.3.1';
		  DOMPurify.removed = [];
		  if (!window || !window.document || window.document.nodeType !== NODE_TYPE.document || !window.Element) {
		    // Not running in a browser, provide a factory function
		    // so that you can pass your own Window
		    DOMPurify.isSupported = false;
		    return DOMPurify;
		  }
		  let {
		    document
		  } = window;
		  const originalDocument = document;
		  const currentScript = originalDocument.currentScript;
		  const {
		    DocumentFragment,
		    HTMLTemplateElement,
		    Node,
		    Element,
		    NodeFilter,
		    NamedNodeMap = window.NamedNodeMap || window.MozNamedAttrMap,
		    HTMLFormElement,
		    DOMParser,
		    trustedTypes
		  } = window;
		  const ElementPrototype = Element.prototype;
		  const cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
		  const remove = lookupGetter(ElementPrototype, 'remove');
		  const getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
		  const getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
		  const getParentNode = lookupGetter(ElementPrototype, 'parentNode');
		  // As per issue #47, the web-components registry is inherited by a
		  // new document created via createHTMLDocument. As per the spec
		  // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
		  // a new empty registry is used when creating a template contents owner
		  // document, so we use that as our parent document to ensure nothing
		  // is inherited.
		  if (typeof HTMLTemplateElement === 'function') {
		    const template = document.createElement('template');
		    if (template.content && template.content.ownerDocument) {
		      document = template.content.ownerDocument;
		    }
		  }
		  let trustedTypesPolicy;
		  let emptyHTML = '';
		  const {
		    implementation,
		    createNodeIterator,
		    createDocumentFragment,
		    getElementsByTagName
		  } = document;
		  const {
		    importNode
		  } = originalDocument;
		  let hooks = _createHooksMap();
		  /**
		   * Expose whether this browser supports running the full DOMPurify.
		   */
		  DOMPurify.isSupported = typeof entries === 'function' && typeof getParentNode === 'function' && implementation && implementation.createHTMLDocument !== undefined;
		  const {
		    MUSTACHE_EXPR,
		    ERB_EXPR,
		    TMPLIT_EXPR,
		    DATA_ATTR,
		    ARIA_ATTR,
		    IS_SCRIPT_OR_DATA,
		    ATTR_WHITESPACE,
		    CUSTOM_ELEMENT
		  } = EXPRESSIONS;
		  let {
		    IS_ALLOWED_URI: IS_ALLOWED_URI$1
		  } = EXPRESSIONS;
		  /**
		   * We consider the elements and attributes below to be safe. Ideally
		   * don't add any new ones but feel free to remove unwanted ones.
		   */
		  /* allowed element names */
		  let ALLOWED_TAGS = null;
		  const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
		  /* Allowed attribute names */
		  let ALLOWED_ATTR = null;
		  const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);
		  /*
		   * Configure how DOMPurify should handle custom elements and their attributes as well as customized built-in elements.
		   * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
		   * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
		   * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
		   */
		  let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
		    tagNameCheck: {
		      writable: true,
		      configurable: false,
		      enumerable: true,
		      value: null
		    },
		    attributeNameCheck: {
		      writable: true,
		      configurable: false,
		      enumerable: true,
		      value: null
		    },
		    allowCustomizedBuiltInElements: {
		      writable: true,
		      configurable: false,
		      enumerable: true,
		      value: false
		    }
		  }));
		  /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
		  let FORBID_TAGS = null;
		  /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
		  let FORBID_ATTR = null;
		  /* Config object to store ADD_TAGS/ADD_ATTR functions (when used as functions) */
		  const EXTRA_ELEMENT_HANDLING = Object.seal(create(null, {
		    tagCheck: {
		      writable: true,
		      configurable: false,
		      enumerable: true,
		      value: null
		    },
		    attributeCheck: {
		      writable: true,
		      configurable: false,
		      enumerable: true,
		      value: null
		    }
		  }));
		  /* Decide if ARIA attributes are okay */
		  let ALLOW_ARIA_ATTR = true;
		  /* Decide if custom data attributes are okay */
		  let ALLOW_DATA_ATTR = true;
		  /* Decide if unknown protocols are okay */
		  let ALLOW_UNKNOWN_PROTOCOLS = false;
		  /* Decide if self-closing tags in attributes are allowed.
		   * Usually removed due to a mXSS issue in jQuery 3.0 */
		  let ALLOW_SELF_CLOSE_IN_ATTR = true;
		  /* Output should be safe for common template engines.
		   * This means, DOMPurify removes data attributes, mustaches and ERB
		   */
		  let SAFE_FOR_TEMPLATES = false;
		  /* Output should be safe even for XML used within HTML and alike.
		   * This means, DOMPurify removes comments when containing risky content.
		   */
		  let SAFE_FOR_XML = true;
		  /* Decide if document with <html>... should be returned */
		  let WHOLE_DOCUMENT = false;
		  /* Track whether config is already set on this instance of DOMPurify. */
		  let SET_CONFIG = false;
		  /* Decide if all elements (e.g. style, script) must be children of
		   * document.body. By default, browsers might move them to document.head */
		  let FORCE_BODY = false;
		  /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
		   * string (or a TrustedHTML object if Trusted Types are supported).
		   * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
		   */
		  let RETURN_DOM = false;
		  /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
		   * string  (or a TrustedHTML object if Trusted Types are supported) */
		  let RETURN_DOM_FRAGMENT = false;
		  /* Try to return a Trusted Type object instead of a string, return a string in
		   * case Trusted Types are not supported  */
		  let RETURN_TRUSTED_TYPE = false;
		  /* Output should be free from DOM clobbering attacks?
		   * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
		   */
		  let SANITIZE_DOM = true;
		  /* Achieve full DOM Clobbering protection by isolating the namespace of named
		   * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
		   *
		   * HTML/DOM spec rules that enable DOM Clobbering:
		   *   - Named Access on Window (§7.3.3)
		   *   - DOM Tree Accessors (§3.1.5)
		   *   - Form Element Parent-Child Relations (§4.10.3)
		   *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
		   *   - HTMLCollection (§4.2.10.2)
		   *
		   * Namespace isolation is implemented by prefixing `id` and `name` attributes
		   * with a constant string, i.e., `user-content-`
		   */
		  let SANITIZE_NAMED_PROPS = false;
		  const SANITIZE_NAMED_PROPS_PREFIX = 'user-content-';
		  /* Keep element content when removing element? */
		  let KEEP_CONTENT = true;
		  /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
		   * of importing it into a new Document and returning a sanitized copy */
		  let IN_PLACE = false;
		  /* Allow usage of profiles like html, svg and mathMl */
		  let USE_PROFILES = {};
		  /* Tags to ignore content of when KEEP_CONTENT is true */
		  let FORBID_CONTENTS = null;
		  const DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);
		  /* Tags that are safe for data: URIs */
		  let DATA_URI_TAGS = null;
		  const DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);
		  /* Attributes safe for values like "javascript:" */
		  let URI_SAFE_ATTRIBUTES = null;
		  const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);
		  const MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
		  const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
		  const HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
		  /* Document namespace */
		  let NAMESPACE = HTML_NAMESPACE;
		  let IS_EMPTY_INPUT = false;
		  /* Allowed XHTML+XML namespaces */
		  let ALLOWED_NAMESPACES = null;
		  const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
		  let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);
		  let HTML_INTEGRATION_POINTS = addToSet({}, ['annotation-xml']);
		  // Certain elements are allowed in both SVG and HTML
		  // namespace. We need to specify them explicitly
		  // so that they don't get erroneously deleted from
		  // HTML namespace.
		  const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ['title', 'style', 'font', 'a', 'script']);
		  /* Parsing of strict XHTML documents */
		  let PARSER_MEDIA_TYPE = null;
		  const SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
		  const DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
		  let transformCaseFunc = null;
		  /* Keep a reference to config to pass to hooks */
		  let CONFIG = null;
		  /* Ideally, do not touch anything below this line */
		  /* ______________________________________________ */
		  const formElement = document.createElement('form');
		  const isRegexOrFunction = function isRegexOrFunction(testValue) {
		    return testValue instanceof RegExp || testValue instanceof Function;
		  };
		  /**
		   * _parseConfig
		   *
		   * @param cfg optional config literal
		   */
		  // eslint-disable-next-line complexity
		  const _parseConfig = function _parseConfig() {
		    let cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		    if (CONFIG && CONFIG === cfg) {
		      return;
		    }
		    /* Shield configuration object from tampering */
		    if (!cfg || typeof cfg !== 'object') {
		      cfg = {};
		    }
		    /* Shield configuration object from prototype pollution */
		    cfg = clone(cfg);
		    PARSER_MEDIA_TYPE =
		    // eslint-disable-next-line unicorn/prefer-includes
		    SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
		    // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.
		    transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? stringToString : stringToLowerCase;
		    /* Set configuration parameters */
		    ALLOWED_TAGS = objectHasOwnProperty(cfg, 'ALLOWED_TAGS') ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
		    ALLOWED_ATTR = objectHasOwnProperty(cfg, 'ALLOWED_ATTR') ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
		    ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, 'ALLOWED_NAMESPACES') ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
		    URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, 'ADD_URI_SAFE_ATTR') ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc) : DEFAULT_URI_SAFE_ATTRIBUTES;
		    DATA_URI_TAGS = objectHasOwnProperty(cfg, 'ADD_DATA_URI_TAGS') ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc) : DEFAULT_DATA_URI_TAGS;
		    FORBID_CONTENTS = objectHasOwnProperty(cfg, 'FORBID_CONTENTS') ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
		    FORBID_TAGS = objectHasOwnProperty(cfg, 'FORBID_TAGS') ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : clone({});
		    FORBID_ATTR = objectHasOwnProperty(cfg, 'FORBID_ATTR') ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : clone({});
		    USE_PROFILES = objectHasOwnProperty(cfg, 'USE_PROFILES') ? cfg.USE_PROFILES : false;
		    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
		    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
		    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
		    ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false; // Default true
		    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
		    SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false; // Default true
		    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
		    RETURN_DOM = cfg.RETURN_DOM || false; // Default false
		    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
		    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
		    FORCE_BODY = cfg.FORCE_BODY || false; // Default false
		    SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
		    SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false
		    KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
		    IN_PLACE = cfg.IN_PLACE || false; // Default false
		    IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
		    NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
		    MATHML_TEXT_INTEGRATION_POINTS = cfg.MATHML_TEXT_INTEGRATION_POINTS || MATHML_TEXT_INTEGRATION_POINTS;
		    HTML_INTEGRATION_POINTS = cfg.HTML_INTEGRATION_POINTS || HTML_INTEGRATION_POINTS;
		    CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
		    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
		      CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
		    }
		    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
		      CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
		    }
		    if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
		      CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
		    }
		    if (SAFE_FOR_TEMPLATES) {
		      ALLOW_DATA_ATTR = false;
		    }
		    if (RETURN_DOM_FRAGMENT) {
		      RETURN_DOM = true;
		    }
		    /* Parse profile info */
		    if (USE_PROFILES) {
		      ALLOWED_TAGS = addToSet({}, text);
		      ALLOWED_ATTR = [];
		      if (USE_PROFILES.html === true) {
		        addToSet(ALLOWED_TAGS, html$1);
		        addToSet(ALLOWED_ATTR, html);
		      }
		      if (USE_PROFILES.svg === true) {
		        addToSet(ALLOWED_TAGS, svg$1);
		        addToSet(ALLOWED_ATTR, svg);
		        addToSet(ALLOWED_ATTR, xml);
		      }
		      if (USE_PROFILES.svgFilters === true) {
		        addToSet(ALLOWED_TAGS, svgFilters);
		        addToSet(ALLOWED_ATTR, svg);
		        addToSet(ALLOWED_ATTR, xml);
		      }
		      if (USE_PROFILES.mathMl === true) {
		        addToSet(ALLOWED_TAGS, mathMl$1);
		        addToSet(ALLOWED_ATTR, mathMl);
		        addToSet(ALLOWED_ATTR, xml);
		      }
		    }
		    /* Merge configuration parameters */
		    if (cfg.ADD_TAGS) {
		      if (typeof cfg.ADD_TAGS === 'function') {
		        EXTRA_ELEMENT_HANDLING.tagCheck = cfg.ADD_TAGS;
		      } else {
		        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
		          ALLOWED_TAGS = clone(ALLOWED_TAGS);
		        }
		        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
		      }
		    }
		    if (cfg.ADD_ATTR) {
		      if (typeof cfg.ADD_ATTR === 'function') {
		        EXTRA_ELEMENT_HANDLING.attributeCheck = cfg.ADD_ATTR;
		      } else {
		        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
		          ALLOWED_ATTR = clone(ALLOWED_ATTR);
		        }
		        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
		      }
		    }
		    if (cfg.ADD_URI_SAFE_ATTR) {
		      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
		    }
		    if (cfg.FORBID_CONTENTS) {
		      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
		        FORBID_CONTENTS = clone(FORBID_CONTENTS);
		      }
		      addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
		    }
		    if (cfg.ADD_FORBID_CONTENTS) {
		      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
		        FORBID_CONTENTS = clone(FORBID_CONTENTS);
		      }
		      addToSet(FORBID_CONTENTS, cfg.ADD_FORBID_CONTENTS, transformCaseFunc);
		    }
		    /* Add #text in case KEEP_CONTENT is set to true */
		    if (KEEP_CONTENT) {
		      ALLOWED_TAGS['#text'] = true;
		    }
		    /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */
		    if (WHOLE_DOCUMENT) {
		      addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
		    }
		    /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */
		    if (ALLOWED_TAGS.table) {
		      addToSet(ALLOWED_TAGS, ['tbody']);
		      delete FORBID_TAGS.tbody;
		    }
		    if (cfg.TRUSTED_TYPES_POLICY) {
		      if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== 'function') {
		        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
		      }
		      if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== 'function') {
		        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
		      }
		      // Overwrite existing TrustedTypes policy.
		      trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
		      // Sign local variables required by `sanitize`.
		      emptyHTML = trustedTypesPolicy.createHTML('');
		    } else {
		      // Uninitialized policy, attempt to initialize the internal dompurify policy.
		      if (trustedTypesPolicy === undefined) {
		        trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
		      }
		      // If creating the internal policy succeeded sign internal variables.
		      if (trustedTypesPolicy !== null && typeof emptyHTML === 'string') {
		        emptyHTML = trustedTypesPolicy.createHTML('');
		      }
		    }
		    // Prevent further manipulation of configuration.
		    // Not available in IE8, Safari 5, etc.
		    if (freeze) {
		      freeze(cfg);
		    }
		    CONFIG = cfg;
		  };
		  /* Keep track of all possible SVG and MathML tags
		   * so that we can perform the namespace checks
		   * correctly. */
		  const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
		  const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
		  /**
		   * @param element a DOM element whose namespace is being checked
		   * @returns Return false if the element has a
		   *  namespace that a spec-compliant parser would never
		   *  return. Return true otherwise.
		   */
		  const _checkValidNamespace = function _checkValidNamespace(element) {
		    let parent = getParentNode(element);
		    // In JSDOM, if we're inside shadow DOM, then parentNode
		    // can be null. We just simulate parent in this case.
		    if (!parent || !parent.tagName) {
		      parent = {
		        namespaceURI: NAMESPACE,
		        tagName: 'template'
		      };
		    }
		    const tagName = stringToLowerCase(element.tagName);
		    const parentTagName = stringToLowerCase(parent.tagName);
		    if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
		      return false;
		    }
		    if (element.namespaceURI === SVG_NAMESPACE) {
		      // The only way to switch from HTML namespace to SVG
		      // is via <svg>. If it happens via any other tag, then
		      // it should be killed.
		      if (parent.namespaceURI === HTML_NAMESPACE) {
		        return tagName === 'svg';
		      }
		      // The only way to switch from MathML to SVG is via`
		      // svg if parent is either <annotation-xml> or MathML
		      // text integration points.
		      if (parent.namespaceURI === MATHML_NAMESPACE) {
		        return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
		      }
		      // We only allow elements that are defined in SVG
		      // spec. All others are disallowed in SVG namespace.
		      return Boolean(ALL_SVG_TAGS[tagName]);
		    }
		    if (element.namespaceURI === MATHML_NAMESPACE) {
		      // The only way to switch from HTML namespace to MathML
		      // is via <math>. If it happens via any other tag, then
		      // it should be killed.
		      if (parent.namespaceURI === HTML_NAMESPACE) {
		        return tagName === 'math';
		      }
		      // The only way to switch from SVG to MathML is via
		      // <math> and HTML integration points
		      if (parent.namespaceURI === SVG_NAMESPACE) {
		        return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
		      }
		      // We only allow elements that are defined in MathML
		      // spec. All others are disallowed in MathML namespace.
		      return Boolean(ALL_MATHML_TAGS[tagName]);
		    }
		    if (element.namespaceURI === HTML_NAMESPACE) {
		      // The only way to switch from SVG to HTML is via
		      // HTML integration points, and from MathML to HTML
		      // is via MathML text integration points
		      if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
		        return false;
		      }
		      if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
		        return false;
		      }
		      // We disallow tags that are specific for MathML
		      // or SVG and should never appear in HTML namespace
		      return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
		    }
		    // For XHTML and XML documents that support custom namespaces
		    if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && ALLOWED_NAMESPACES[element.namespaceURI]) {
		      return true;
		    }
		    // The code should never reach this place (this means
		    // that the element somehow got namespace that is not
		    // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
		    // Return false just in case.
		    return false;
		  };
		  /**
		   * _forceRemove
		   *
		   * @param node a DOM node
		   */
		  const _forceRemove = function _forceRemove(node) {
		    arrayPush(DOMPurify.removed, {
		      element: node
		    });
		    try {
		      // eslint-disable-next-line unicorn/prefer-dom-node-remove
		      getParentNode(node).removeChild(node);
		    } catch (_) {
		      remove(node);
		    }
		  };
		  /**
		   * _removeAttribute
		   *
		   * @param name an Attribute name
		   * @param element a DOM node
		   */
		  const _removeAttribute = function _removeAttribute(name, element) {
		    try {
		      arrayPush(DOMPurify.removed, {
		        attribute: element.getAttributeNode(name),
		        from: element
		      });
		    } catch (_) {
		      arrayPush(DOMPurify.removed, {
		        attribute: null,
		        from: element
		      });
		    }
		    element.removeAttribute(name);
		    // We void attribute values for unremovable "is" attributes
		    if (name === 'is') {
		      if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
		        try {
		          _forceRemove(element);
		        } catch (_) {}
		      } else {
		        try {
		          element.setAttribute(name, '');
		        } catch (_) {}
		      }
		    }
		  };
		  /**
		   * _initDocument
		   *
		   * @param dirty - a string of dirty markup
		   * @return a DOM, filled with the dirty markup
		   */
		  const _initDocument = function _initDocument(dirty) {
		    /* Create a HTML document */
		    let doc = null;
		    let leadingWhitespace = null;
		    if (FORCE_BODY) {
		      dirty = '<remove></remove>' + dirty;
		    } else {
		      /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
		      const matches = stringMatch(dirty, /^[\r\n\t ]+/);
		      leadingWhitespace = matches && matches[0];
		    }
		    if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && NAMESPACE === HTML_NAMESPACE) {
		      // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
		      dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
		    }
		    const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
		    /*
		     * Use the DOMParser API by default, fallback later if needs be
		     * DOMParser not work for svg when has multiple root element.
		     */
		    if (NAMESPACE === HTML_NAMESPACE) {
		      try {
		        doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
		      } catch (_) {}
		    }
		    /* Use createHTMLDocument in case DOMParser is not available */
		    if (!doc || !doc.documentElement) {
		      doc = implementation.createDocument(NAMESPACE, 'template', null);
		      try {
		        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
		      } catch (_) {
		        // Syntax error if dirtyPayload is invalid xml
		      }
		    }
		    const body = doc.body || doc.documentElement;
		    if (dirty && leadingWhitespace) {
		      body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
		    }
		    /* Work on whole document or just its body */
		    if (NAMESPACE === HTML_NAMESPACE) {
		      return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
		    }
		    return WHOLE_DOCUMENT ? doc.documentElement : body;
		  };
		  /**
		   * Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
		   *
		   * @param root The root element or node to start traversing on.
		   * @return The created NodeIterator
		   */
		  const _createNodeIterator = function _createNodeIterator(root) {
		    return createNodeIterator.call(root.ownerDocument || root, root,
		    // eslint-disable-next-line no-bitwise
		    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null);
		  };
		  /**
		   * _isClobbered
		   *
		   * @param element element to check for clobbering attacks
		   * @return true if clobbered, false if safe
		   */
		  const _isClobbered = function _isClobbered(element) {
		    return element instanceof HTMLFormElement && (typeof element.nodeName !== 'string' || typeof element.textContent !== 'string' || typeof element.removeChild !== 'function' || !(element.attributes instanceof NamedNodeMap) || typeof element.removeAttribute !== 'function' || typeof element.setAttribute !== 'function' || typeof element.namespaceURI !== 'string' || typeof element.insertBefore !== 'function' || typeof element.hasChildNodes !== 'function');
		  };
		  /**
		   * Checks whether the given object is a DOM node.
		   *
		   * @param value object to check whether it's a DOM node
		   * @return true is object is a DOM node
		   */
		  const _isNode = function _isNode(value) {
		    return typeof Node === 'function' && value instanceof Node;
		  };
		  function _executeHooks(hooks, currentNode, data) {
		    arrayForEach(hooks, hook => {
		      hook.call(DOMPurify, currentNode, data, CONFIG);
		    });
		  }
		  /**
		   * _sanitizeElements
		   *
		   * @protect nodeName
		   * @protect textContent
		   * @protect removeChild
		   * @param currentNode to check for permission to exist
		   * @return true if node was killed, false if left alive
		   */
		  const _sanitizeElements = function _sanitizeElements(currentNode) {
		    let content = null;
		    /* Execute a hook if present */
		    _executeHooks(hooks.beforeSanitizeElements, currentNode, null);
		    /* Check if element is clobbered or can clobber */
		    if (_isClobbered(currentNode)) {
		      _forceRemove(currentNode);
		      return true;
		    }
		    /* Now let's check the element's type and name */
		    const tagName = transformCaseFunc(currentNode.nodeName);
		    /* Execute a hook if present */
		    _executeHooks(hooks.uponSanitizeElement, currentNode, {
		      tagName,
		      allowedTags: ALLOWED_TAGS
		    });
		    /* Detect mXSS attempts abusing namespace confusion */
		    if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w!]/g, currentNode.innerHTML) && regExpTest(/<[/\w!]/g, currentNode.textContent)) {
		      _forceRemove(currentNode);
		      return true;
		    }
		    /* Remove any occurrence of processing instructions */
		    if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
		      _forceRemove(currentNode);
		      return true;
		    }
		    /* Remove any kind of possibly harmful comments */
		    if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
		      _forceRemove(currentNode);
		      return true;
		    }
		    /* Remove element if anything forbids its presence */
		    if (!(EXTRA_ELEMENT_HANDLING.tagCheck instanceof Function && EXTRA_ELEMENT_HANDLING.tagCheck(tagName)) && (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName])) {
		      /* Check if we have a custom element to handle */
		      if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
		        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
		          return false;
		        }
		        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
		          return false;
		        }
		      }
		      /* Keep content except for bad-listed elements */
		      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
		        const parentNode = getParentNode(currentNode) || currentNode.parentNode;
		        const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
		        if (childNodes && parentNode) {
		          const childCount = childNodes.length;
		          for (let i = childCount - 1; i >= 0; --i) {
		            const childClone = cloneNode(childNodes[i], true);
		            childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
		            parentNode.insertBefore(childClone, getNextSibling(currentNode));
		          }
		        }
		      }
		      _forceRemove(currentNode);
		      return true;
		    }
		    /* Check whether element has a valid namespace */
		    if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
		      _forceRemove(currentNode);
		      return true;
		    }
		    /* Make sure that older browsers don't get fallback-tag mXSS */
		    if ((tagName === 'noscript' || tagName === 'noembed' || tagName === 'noframes') && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
		      _forceRemove(currentNode);
		      return true;
		    }
		    /* Sanitize element content to be template-safe */
		    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
		      /* Get the element's text content */
		      content = currentNode.textContent;
		      arrayForEach([MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR], expr => {
		        content = stringReplace(content, expr, ' ');
		      });
		      if (currentNode.textContent !== content) {
		        arrayPush(DOMPurify.removed, {
		          element: currentNode.cloneNode()
		        });
		        currentNode.textContent = content;
		      }
		    }
		    /* Execute a hook if present */
		    _executeHooks(hooks.afterSanitizeElements, currentNode, null);
		    return false;
		  };
		  /**
		   * _isValidAttribute
		   *
		   * @param lcTag Lowercase tag name of containing element.
		   * @param lcName Lowercase attribute name.
		   * @param value Attribute value.
		   * @return Returns true if `value` is valid, otherwise false.
		   */
		  // eslint-disable-next-line complexity
		  const _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
		    /* Make sure attribute cannot clobber */
		    if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
		      return false;
		    }
		    /* Allow valid data-* attributes: At least one character after "-"
		        (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
		        XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
		        We don't need to check the value; it's always URI safe. */
		    if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR, lcName)) ; else if (EXTRA_ELEMENT_HANDLING.attributeCheck instanceof Function && EXTRA_ELEMENT_HANDLING.attributeCheck(lcName, lcTag)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
		      if (
		      // First condition does a very basic check if a) it's basically a valid custom element tagname AND
		      // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
		      // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
		      _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName, lcTag)) ||
		      // Alternative, second condition checks if it's an `is`-attribute, AND
		      // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
		      lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ; else {
		        return false;
		      }
		      /* Check value is safe. First, is attr inert? If so, is safe */
		    } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA, stringReplace(value, ATTR_WHITESPACE, ''))) ; else if (value) {
		      return false;
		    } else ;
		    return true;
		  };
		  /**
		   * _isBasicCustomElement
		   * checks if at least one dash is included in tagName, and it's not the first char
		   * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
		   *
		   * @param tagName name of the tag of the node to sanitize
		   * @returns Returns true if the tag name meets the basic criteria for a custom element, otherwise false.
		   */
		  const _isBasicCustomElement = function _isBasicCustomElement(tagName) {
		    return tagName !== 'annotation-xml' && stringMatch(tagName, CUSTOM_ELEMENT);
		  };
		  /**
		   * _sanitizeAttributes
		   *
		   * @protect attributes
		   * @protect nodeName
		   * @protect removeAttribute
		   * @protect setAttribute
		   *
		   * @param currentNode to sanitize
		   */
		  const _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
		    /* Execute a hook if present */
		    _executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
		    const {
		      attributes
		    } = currentNode;
		    /* Check if we have attributes; if not we might have a text node */
		    if (!attributes || _isClobbered(currentNode)) {
		      return;
		    }
		    const hookEvent = {
		      attrName: '',
		      attrValue: '',
		      keepAttr: true,
		      allowedAttributes: ALLOWED_ATTR,
		      forceKeepAttr: undefined
		    };
		    let l = attributes.length;
		    /* Go backwards over all attributes; safely remove bad ones */
		    while (l--) {
		      const attr = attributes[l];
		      const {
		        name,
		        namespaceURI,
		        value: attrValue
		      } = attr;
		      const lcName = transformCaseFunc(name);
		      const initValue = attrValue;
		      let value = name === 'value' ? initValue : stringTrim(initValue);
		      /* Execute a hook if present */
		      hookEvent.attrName = lcName;
		      hookEvent.attrValue = value;
		      hookEvent.keepAttr = true;
		      hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
		      _executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
		      value = hookEvent.attrValue;
		      /* Full DOM Clobbering protection via namespace isolation,
		       * Prefix id and name attributes with `user-content-`
		       */
		      if (SANITIZE_NAMED_PROPS && (lcName === 'id' || lcName === 'name')) {
		        // Remove the attribute with this value
		        _removeAttribute(name, currentNode);
		        // Prefix the value and later re-create the attribute with the sanitized value
		        value = SANITIZE_NAMED_PROPS_PREFIX + value;
		      }
		      /* Work around a security issue with comments inside attributes */
		      if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title|textarea)/i, value)) {
		        _removeAttribute(name, currentNode);
		        continue;
		      }
		      /* Make sure we cannot easily use animated hrefs, even if animations are allowed */
		      if (lcName === 'attributename' && stringMatch(value, 'href')) {
		        _removeAttribute(name, currentNode);
		        continue;
		      }
		      /* Did the hooks approve of the attribute? */
		      if (hookEvent.forceKeepAttr) {
		        continue;
		      }
		      /* Did the hooks approve of the attribute? */
		      if (!hookEvent.keepAttr) {
		        _removeAttribute(name, currentNode);
		        continue;
		      }
		      /* Work around a security issue in jQuery 3.0 */
		      if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
		        _removeAttribute(name, currentNode);
		        continue;
		      }
		      /* Sanitize attribute content to be template-safe */
		      if (SAFE_FOR_TEMPLATES) {
		        arrayForEach([MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR], expr => {
		          value = stringReplace(value, expr, ' ');
		        });
		      }
		      /* Is `value` valid for this attribute? */
		      const lcTag = transformCaseFunc(currentNode.nodeName);
		      if (!_isValidAttribute(lcTag, lcName, value)) {
		        _removeAttribute(name, currentNode);
		        continue;
		      }
		      /* Handle attributes that require Trusted Types */
		      if (trustedTypesPolicy && typeof trustedTypes === 'object' && typeof trustedTypes.getAttributeType === 'function') {
		        if (namespaceURI) ; else {
		          switch (trustedTypes.getAttributeType(lcTag, lcName)) {
		            case 'TrustedHTML':
		              {
		                value = trustedTypesPolicy.createHTML(value);
		                break;
		              }
		            case 'TrustedScriptURL':
		              {
		                value = trustedTypesPolicy.createScriptURL(value);
		                break;
		              }
		          }
		        }
		      }
		      /* Handle invalid data-* attribute set by try-catching it */
		      if (value !== initValue) {
		        try {
		          if (namespaceURI) {
		            currentNode.setAttributeNS(namespaceURI, name, value);
		          } else {
		            /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
		            currentNode.setAttribute(name, value);
		          }
		          if (_isClobbered(currentNode)) {
		            _forceRemove(currentNode);
		          } else {
		            arrayPop(DOMPurify.removed);
		          }
		        } catch (_) {
		          _removeAttribute(name, currentNode);
		        }
		      }
		    }
		    /* Execute a hook if present */
		    _executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
		  };
		  /**
		   * _sanitizeShadowDOM
		   *
		   * @param fragment to iterate over recursively
		   */
		  const _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
		    let shadowNode = null;
		    const shadowIterator = _createNodeIterator(fragment);
		    /* Execute a hook if present */
		    _executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
		    while (shadowNode = shadowIterator.nextNode()) {
		      /* Execute a hook if present */
		      _executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
		      /* Sanitize tags and elements */
		      _sanitizeElements(shadowNode);
		      /* Check attributes next */
		      _sanitizeAttributes(shadowNode);
		      /* Deep shadow DOM detected */
		      if (shadowNode.content instanceof DocumentFragment) {
		        _sanitizeShadowDOM(shadowNode.content);
		      }
		    }
		    /* Execute a hook if present */
		    _executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
		  };
		  // eslint-disable-next-line complexity
		  DOMPurify.sanitize = function (dirty) {
		    let cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		    let body = null;
		    let importedNode = null;
		    let currentNode = null;
		    let returnNode = null;
		    /* Make sure we have a string to sanitize.
		      DO NOT return early, as this will return the wrong type if
		      the user has requested a DOM object rather than a string */
		    IS_EMPTY_INPUT = !dirty;
		    if (IS_EMPTY_INPUT) {
		      dirty = '<!-->';
		    }
		    /* Stringify, in case dirty is an object */
		    if (typeof dirty !== 'string' && !_isNode(dirty)) {
		      if (typeof dirty.toString === 'function') {
		        dirty = dirty.toString();
		        if (typeof dirty !== 'string') {
		          throw typeErrorCreate('dirty is not a string, aborting');
		        }
		      } else {
		        throw typeErrorCreate('toString is not a function');
		      }
		    }
		    /* Return dirty HTML if DOMPurify cannot run */
		    if (!DOMPurify.isSupported) {
		      return dirty;
		    }
		    /* Assign config vars */
		    if (!SET_CONFIG) {
		      _parseConfig(cfg);
		    }
		    /* Clean up removed elements */
		    DOMPurify.removed = [];
		    /* Check if dirty is correctly typed for IN_PLACE */
		    if (typeof dirty === 'string') {
		      IN_PLACE = false;
		    }
		    if (IN_PLACE) {
		      /* Do some early pre-sanitization to avoid unsafe root nodes */
		      if (dirty.nodeName) {
		        const tagName = transformCaseFunc(dirty.nodeName);
		        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
		          throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
		        }
		      }
		    } else if (dirty instanceof Node) {
		      /* If dirty is a DOM element, append to an empty document to avoid
		         elements being stripped by the parser */
		      body = _initDocument('<!---->');
		      importedNode = body.ownerDocument.importNode(dirty, true);
		      if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === 'BODY') {
		        /* Node is already a body, use as is */
		        body = importedNode;
		      } else if (importedNode.nodeName === 'HTML') {
		        body = importedNode;
		      } else {
		        // eslint-disable-next-line unicorn/prefer-dom-node-append
		        body.appendChild(importedNode);
		      }
		    } else {
		      /* Exit directly if we have nothing to do */
		      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT &&
		      // eslint-disable-next-line unicorn/prefer-includes
		      dirty.indexOf('<') === -1) {
		        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
		      }
		      /* Initialize the document to work on */
		      body = _initDocument(dirty);
		      /* Check we have a DOM node from the data */
		      if (!body) {
		        return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
		      }
		    }
		    /* Remove first element node (ours) if FORCE_BODY is set */
		    if (body && FORCE_BODY) {
		      _forceRemove(body.firstChild);
		    }
		    /* Get node iterator */
		    const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
		    /* Now start iterating over the created document */
		    while (currentNode = nodeIterator.nextNode()) {
		      /* Sanitize tags and elements */
		      _sanitizeElements(currentNode);
		      /* Check attributes next */
		      _sanitizeAttributes(currentNode);
		      /* Shadow DOM detected, sanitize it */
		      if (currentNode.content instanceof DocumentFragment) {
		        _sanitizeShadowDOM(currentNode.content);
		      }
		    }
		    /* If we sanitized `dirty` in-place, return it. */
		    if (IN_PLACE) {
		      return dirty;
		    }
		    /* Return sanitized string or DOM */
		    if (RETURN_DOM) {
		      if (RETURN_DOM_FRAGMENT) {
		        returnNode = createDocumentFragment.call(body.ownerDocument);
		        while (body.firstChild) {
		          // eslint-disable-next-line unicorn/prefer-dom-node-append
		          returnNode.appendChild(body.firstChild);
		        }
		      } else {
		        returnNode = body;
		      }
		      if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
		        /*
		          AdoptNode() is not used because internal state is not reset
		          (e.g. the past names map of a HTMLFormElement), this is safe
		          in theory but we would rather not risk another attack vector.
		          The state that is cloned by importNode() is explicitly defined
		          by the specs.
		        */
		        returnNode = importNode.call(originalDocument, returnNode, true);
		      }
		      return returnNode;
		    }
		    let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
		    /* Serialize doctype if allowed */
		    if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
		      serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
		    }
		    /* Sanitize final string template-safe */
		    if (SAFE_FOR_TEMPLATES) {
		      arrayForEach([MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR], expr => {
		        serializedHTML = stringReplace(serializedHTML, expr, ' ');
		      });
		    }
		    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
		  };
		  DOMPurify.setConfig = function () {
		    let cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		    _parseConfig(cfg);
		    SET_CONFIG = true;
		  };
		  DOMPurify.clearConfig = function () {
		    CONFIG = null;
		    SET_CONFIG = false;
		  };
		  DOMPurify.isValidAttribute = function (tag, attr, value) {
		    /* Initialize shared config vars if necessary. */
		    if (!CONFIG) {
		      _parseConfig({});
		    }
		    const lcTag = transformCaseFunc(tag);
		    const lcName = transformCaseFunc(attr);
		    return _isValidAttribute(lcTag, lcName, value);
		  };
		  DOMPurify.addHook = function (entryPoint, hookFunction) {
		    if (typeof hookFunction !== 'function') {
		      return;
		    }
		    arrayPush(hooks[entryPoint], hookFunction);
		  };
		  DOMPurify.removeHook = function (entryPoint, hookFunction) {
		    if (hookFunction !== undefined) {
		      const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
		      return index === -1 ? undefined : arraySplice(hooks[entryPoint], index, 1)[0];
		    }
		    return arrayPop(hooks[entryPoint]);
		  };
		  DOMPurify.removeHooks = function (entryPoint) {
		    hooks[entryPoint] = [];
		  };
		  DOMPurify.removeAllHooks = function () {
		    hooks = _createHooksMap();
		  };
		  return DOMPurify;
		}
		var purify = createDOMPurify();

		purify_cjs = purify;
		
		return purify_cjs;
	}

	var browser = self.DOMPurify || (self.DOMPurify = requirePurify_cjs().default || requirePurify_cjs());

	var DOMPurify = /*@__PURE__*/getDefaultExportFromCjs(browser);

	const Html = (props) => {
	    const html = props.sanitize === false
	        ? props.html
	        : DOMPurify.sanitize(props.html, { ADD_ATTR: ['target'] });
	    return props.block
	        ? jsxRuntimeExports.jsx("div", { dangerouslySetInnerHTML: { __html: html }, className: props.className })
	        : jsxRuntimeExports.jsx("span", { dangerouslySetInnerHTML: { __html: html }, className: props.className });
	};

	function RawHtmlWithLinks({ html, className, block }) {
	    const routes = React.useContext(RouteContext);
	    const actions = React.useContext(ActionContext);
	    const resolvedHtml = React.useMemo(() => {
	        // RETURN_DOM yields the sanitized content wrapped in a <body>; the types
	        // surface it as Node, so narrow to HTMLElement for querySelectorAll/innerHTML.
	        const dom = DOMPurify.sanitize(html, {
	            ADD_ATTR: ['target'],
	            RETURN_DOM: true,
	        });
	        dom.querySelectorAll('a[data-flex-link]').forEach((a) => {
	            const target = readLinkTarget(a);
	            if (!target)
	                return;
	            if (target.type === 'route') {
	                const route = routes[target.value];
	                if (route)
	                    a.setAttribute('href', route.render(target.params));
	            }
	            else if (target.type === 'action') {
	                // actions have no URL; expose them as buttons for assistive tech
	                a.setAttribute('role', 'button');
	            }
	            else if (!a.getAttribute('href')) {
	                // anchor / external / internal: fall back to the stored value
	                a.setAttribute('href', target.value);
	            }
	        });
	        return dom.innerHTML;
	    }, [html, routes]);
	    const onClick = React.useCallback((e) => {
	        const anchor = e.target.closest('a[data-flex-link]');
	        if (!anchor)
	            return;
	        const target = readLinkTarget(anchor);
	        if (target)
	            handleLinkClick(e, anchor, target, { routes, actions });
	    }, [routes, actions]);
	    const Tag = block ? 'div' : 'span';
	    return (jsxRuntimeExports.jsx(Tag, { className: className, onClick: onClick, suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: resolvedHtml } }));
	}

	function RichTextContent({ html }) {
	    // Cheap server-side discriminator: only escalate to the client renderer when
	    // the markup actually contains a dynamic link. Link-free prose stays a
	    // zero-JS server render. (No false negatives — the editor always writes the
	    // literal `data-flex-link` attribute; a false positive merely ships unused JS.)
	    if (html.includes('data-flex-link')) {
	        return jsxRuntimeExports.jsx(RawHtmlWithLinks, { block: true, className: 'content-block-rich-text', html: html });
	    }
	    return jsxRuntimeExports.jsx(Html, { block: true, className: 'content-block-rich-text', html: html });
	}
	function RichTextBlock$1({ data }) {
	    return jsxRuntimeExports.jsx(RichTextContent, { html: data.value });
	}

	function CTALink({ link }) {
	    var _a, _b;
	    const stylePreset = (_a = findByType(link.config, 'style')) === null || _a === void 0 ? void 0 : _a.value;
	    const customColor = (_b = findByType(link.config, 'custom_color')) === null || _b === void 0 ? void 0 : _b.value;
	    const useCustom = Boolean(customColor);
	    const customColorClass = useCustom
	        ? Color(customColor).isDark() ? 'style-custom-dark' : 'style-custom-light' // eslint-disable-line new-cap
	        : undefined;
	    const styleClass = !useCustom && stylePreset ? `style-${stylePreset}` : undefined;
	    const style = useCustom
	        ? { '--cta-custom-color': customColor }
	        : undefined;
	    return jsxRuntimeExports.jsx(Link, { link: link, className: cn('cta-link', styleClass, customColorClass, (styleClass || customColorClass) ? 'styled-button' : undefined), style: style });
	}
	function CTABlock$1({ data, activeConditions }) {
	    var _a, _b, _c;
	    const condition = (_a = findByType(data.value.config, 'rendering_condition')) === null || _a === void 0 ? void 0 : _a.value;
	    if (condition && !condition.split(',').some(c => activeConditions === null || activeConditions === void 0 ? void 0 : activeConditions.includes(c.trim())))
	        return null;
	    const analytics = (_b = findByType(data.value.config, 'analytics_label')) === null || _b === void 0 ? void 0 : _b.value;
	    const layout = (_c = findByType(data.value.config, 'layout')) === null || _c === void 0 ? void 0 : _c.value;
	    return jsxRuntimeExports.jsxs("div", { className: cn('content-block-cta-block', layout === 'inline' ? 'layout-inline' : undefined), "data-analytics-nav": analytics, children: [data.value.description ? jsxRuntimeExports.jsx("div", { className: "cta-description", children: jsxRuntimeExports.jsx(RichTextContent, { html: data.value.description }) }) : null, jsxRuntimeExports.jsx("div", { className: "cta-actions", children: data.value.actions.map((action, i) => jsxRuntimeExports.jsx(CTALink, { link: action }, i)) })] });
	}

	const ctaLinkFieldConfig = [
	    ...linkFieldConfig,
	    { name: 'config', label: 'Config', type: 'configs', configs: [
	            { name: 'style', label: 'Style', type: 'select', options: [
	                    { label: 'Orange', value: 'orange' },
	                    { label: 'White', value: 'white' },
	                    { label: 'Blue Outline', value: 'blue_outline' },
	                    { label: 'Deep Green Outline', value: 'deep_green_outline' },
	                ] },
	            { name: 'custom_color', label: 'Custom Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex color override. Overrides Style preset.' },
	        ] },
	];
	const fields$c = {
	    type: 'cta_block',
	    categories: ['content'],
	    label: 'Call to Action',
	    fields: [
	        { name: 'description', label: 'Description', type: 'rich-text' },
	        { name: 'actions', label: 'Actions', type: 'list', fields: ctaLinkFieldConfig },
	        { name: 'config', label: 'Config', type: 'configs', configs: [
	                { name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this section will include this label', type: 'text' },
	                { name: 'layout', label: 'Layout', type: 'select', options: [
	                        { label: 'Inline', value: 'inline' },
	                    ] },
	                { name: 'rendering_condition', label: 'Rendering Condition', type: 'text',
	                    help: 'Comma-separated condition slugs. Block renders only when at least one is active.' },
	            ] },
	    ],
	};

	var CTABlock = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Component: CTABlock$1,
		fields: fields$c
	});

	function CardsBlock$1({ data }) {
	    var _a, _b, _c, _d, _e, _f, _g;
	    const cardStyle = (_a = findByType(data.value.config, 'card_style')) === null || _a === void 0 ? void 0 : _a.value;
	    const styleClass = cardStyle ? `card_style_${cardStyle}` : undefined;
	    const cardSize = (_b = findByType(data.value.config, 'card_size')) === null || _b === void 0 ? void 0 : _b.value;
	    const cardColumns = (_c = findByType(data.value.config, 'card_columns')) === null || _c === void 0 ? void 0 : _c.value;
	    const accentColorsRaw = (_d = findByType(data.value.config, 'accent_colors')) === null || _d === void 0 ? void 0 : _d.value;
	    const accentColors = accentColorsRaw
	        ? accentColorsRaw.split(',').map((c) => c.trim()).filter(Boolean)
	        : undefined;
	    const dividerColorsRaw = (_e = findByType(data.value.config, 'divider_colors')) === null || _e === void 0 ? void 0 : _e.value;
	    const dividerColors = dividerColorsRaw
	        ? dividerColorsRaw.split(',').map((c) => c.trim()).filter(Boolean)
	        : undefined;
	    const backgroundColor = (_f = findByType(data.value.config, 'background_color')) === null || _f === void 0 ? void 0 : _f.value;
	    const isDarkBg = backgroundColor ? Color(backgroundColor).isDark() : false; // eslint-disable-line new-cap
	    const borderSize = (_g = findByType(data.value.config, 'border_size')) === null || _g === void 0 ? void 0 : _g.value;
	    return (jsxRuntimeExports.jsx("div", { className: cn('content-block-cards', styleClass, cardColumns && 'has-columns', accentColors && 'has-custom-accent', dividerColors && 'has-custom-divider', isDarkBg && 'dark-card-background'), style: {
	            '--card-size': cardSize,
	            '--card-columns': cardColumns,
	            ...(backgroundColor ? { '--card-bg-color': backgroundColor } : {}),
	            ...(borderSize ? { '--card-border-size': `${borderSize}px` } : {}),
	        }, children: data.value.cards.map((card, i) => jsxRuntimeExports.jsx(CardBlock, { data: card, accentColor: accentColors ? accentColors[i % accentColors.length] : undefined, dividerColor: dividerColors ? dividerColors[i % dividerColors.length] : undefined }, i)) }));
	}
	function CardBlock({ data, accentColor, dividerColor }) {
	    var _a;
	    const [cta] = (_a = data.ctaBlock) !== null && _a !== void 0 ? _a : [];
	    const style = (accentColor || dividerColor)
	        ? {
	            ...(accentColor ? { '--card-accent': accentColor } : {}),
	            ...(dividerColor ? { '--card-divider': dividerColor } : {}),
	        }
	        : undefined;
	    return jsxRuntimeExports.jsxs("div", { className: "content-block-card", style: style, children: [jsxRuntimeExports.jsx(RichTextContent, { html: data.text }), cta ? jsxRuntimeExports.jsx(CTALink, { link: cta }) : null] });
	}

	const fields$b = {
	    type: 'cards_block',
	    label: 'Cards Block',
	    categories: ['content'],
	    fields: [
	        { name: 'cards', label: 'Cards', type: 'list', fields: [
	                { name: 'text', label: 'Card Text', type: 'rich-text', required: true },
	                { name: 'ctaBlock', label: 'Call To Action', type: 'list', fields: ctaLinkFieldConfig, max: 1 },
	            ] },
	        { name: 'config', label: 'Config', type: 'configs', configs: [
	                { name: 'card_style', label: 'Style', type: 'select', options: [
	                        { label: 'Rounded', value: 'rounded' },
	                        { label: 'Square', value: 'square' },
	                    ] },
	                { name: 'card_size', label: 'Size', help: 'A single number representing 10px increments', type: 'number' },
	                { name: 'card_columns', label: 'Columns', help: 'Number of columns (works with Size)', type: 'number' },
	                { name: 'accent_colors', label: 'Accent Colors', type: 'text', help: 'Comma-separated hex colors for card borders/shadows, e.g. #ff0000,#00ff00,#0000ff' },
	                { name: 'divider_colors', label: 'Divider Colors', type: 'text', help: 'Comma-separated hex colors for card divider lines, e.g. #ff0000,#00ff00' },
	                { name: 'background_color', label: 'Background Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex background color for cards' },
	                { name: 'border_size', label: 'Border Size', type: 'number', help: 'Border thickness in pixels. Rounded: border width (default: 1px). Square: top accent height (default: 10px).' },
	            ] },
	    ],
	};

	var CardsBlock = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Component: CardsBlock$1,
		fields: fields$b
	});

	const imageFieldsConfig = [
	    { name: 'file', label: 'File Path', help: 'URL to the image file.', type: 'text' },
	    { name: 'height', label: 'Height', help: 'The raw pixel height of the image.', type: 'number' },
	    { name: 'width', label: 'Width', help: 'The raw pixel width of the image.', type: 'number' },
	];
	function Image({ image, ...props }) {
	    return jsxRuntimeExports.jsx("img", { ...props, src: image.file, width: image.width, height: image.height });
	}

	function getTransform(config) {
	    var _a, _b, _c, _d;
	    const offsetVertical = (_b = (_a = findByType(config, 'offset_vertical')) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '-50%';
	    const offsetHorizontal = (_d = (_c = findByType(config, 'offset_horizontal')) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : '0px';
	    return `translateY(${offsetVertical}) translateX(${offsetHorizontal})`;
	}
	function DividerBlock$1({ data }) {
	    var _a, _b, _c;
	    const width = (_a = findByType(data.value.config, 'width')) === null || _a === void 0 ? void 0 : _a.value;
	    const height = (_b = findByType(data.value.config, 'height')) === null || _b === void 0 ? void 0 : _b.value;
	    const alignment = (_c = findByType(data.value.config, 'alignment')) === null || _c === void 0 ? void 0 : _c.value;
	    const alignmentClass = alignment ? `align_${alignment}` : null;
	    const transform = getTransform(data.value.config);
	    return jsxRuntimeExports.jsx("div", { className: cn('content-block-divider', alignmentClass), children: jsxRuntimeExports.jsx(Image, { style: { width, height, transform }, className: "divider-image", image: data.value.image, alt: "" }) });
	}

	const fields$a = {
	    type: 'divider',
	    categories: ['structure'],
	    label: 'Divider',
	    fields: [
	        { name: 'image', label: 'Image', type: 'namespace', fields: imageFieldsConfig },
	        { name: 'config', label: 'Config', type: 'configs', configs: [
	                { name: 'width', label: 'Image Display Width', help: 'CSS text for the width to display the image', type: 'text' },
	                { name: 'height', label: 'Image Display Height', help: 'CSS text for the height to display the image', type: 'text' },
	                { name: 'alignment', label: 'Image Alignment', type: 'select', options: [
	                        { label: 'Left side of Content', value: 'content_left' },
	                        { label: 'Right side of Content', value: 'content_right' },
	                        { label: 'Left side of Page', value: 'body_left' },
	                        { label: 'Right side of Page', value: 'body_right' },
	                        { label: 'Center', value: 'center' },
	                    ] },
	                { name: 'offset_vertical', label: 'Offset Vertical', help: 'CSS text for vertical offset eg `-50%` to center the image vertically', type: 'text' },
	                { name: 'offset_horizontal', label: 'Offset Horizontal', help: 'CSS text for horizontal offset eg `-50%` to center the image horizontally', type: 'text' },
	            ] },
	    ],
	};

	var DividerBlock = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Component: DividerBlock$1,
		fields: fields$a
	});

	function HTMLBlock$1({ data }) {
	    return jsxRuntimeExports.jsx(Html, { sanitize: false, block: true, html: data.value });
	}

	const fields$9 = {
	    type: 'html',
	    categories: ['structure', 'content'],
	    label: 'HTML',
	    field: { name: 'html', label: 'HTML', help: 'Raw html to be embedded in the page', type: 'long-text' },
	};

	var HTMLBlock = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Component: HTMLBlock$1,
		fields: fields$9
	});

	const parseAlignment = (alignment) => {
	    if (alignment.includes('top')) {
	        return 'flex-start';
	    }
	    if (alignment.includes('bottom')) {
	        return 'flex-end';
	    }
	    return 'center';
	};
	// eslint-disable-next-line complexity
	function HeroBlock$1({ data, content, activeConditions }) {
	    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
	    const condition = (_a = findByType(data.value.config, 'rendering_condition')) === null || _a === void 0 ? void 0 : _a.value;
	    if (condition && !condition.split(',').some(c => activeConditions === null || activeConditions === void 0 ? void 0 : activeConditions.includes(c.trim())))
	        return null;
	    const id = (_b = findByType(data.value.config, 'id')) === null || _b === void 0 ? void 0 : _b.value;
	    const textAlign = (_c = findByType(data.value.config, 'text_alignment')) === null || _c === void 0 ? void 0 : _c.value;
	    const backgroundColor = (_d = findByType(data.value.config, 'background_color')) === null || _d === void 0 ? void 0 : _d.value;
	    const gradientColor = (_e = findByType(data.value.config, 'gradient_color')) === null || _e === void 0 ? void 0 : _e.value;
	    const gradientDirection = (_f = findByType(data.value.config, 'gradient_direction')) === null || _f === void 0 ? void 0 : _f.value;
	    const padding = (_h = (_g = findByType(data.value.config, 'padding')) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : 0;
	    const paddingTop = (_j = findByType(data.value.config, 'padding_top')) === null || _j === void 0 ? void 0 : _j.value;
	    const paddingBottom = (_k = findByType(data.value.config, 'padding_bottom')) === null || _k === void 0 ? void 0 : _k.value;
	    const imageBorderRadius = (_l = findByType(data.value.config, 'image_border_radius')) === null || _l === void 0 ? void 0 : _l.value;
	    const imageBorderColor = (_m = findByType(data.value.config, 'image_border_color')) === null || _m === void 0 ? void 0 : _m.value;
	    const imageBorderSize = (_o = findByType(data.value.config, 'image_border_size')) === null || _o === void 0 ? void 0 : _o.value;
	    const imageOverhang = (_p = findByType(data.value.config, 'image_overhang')) === null || _p === void 0 ? void 0 : _p.value;
	    const analytics = (_q = findByType(data.value.config, 'analytics_label')) === null || _q === void 0 ? void 0 : _q.value;
	    const bg = resolveBackground(backgroundColor, gradientColor, gradientDirection);
	    const alignment = (_s = (_r = findByType(data.value.config, 'image_alignment')) === null || _r === void 0 ? void 0 : _r.value.toLowerCase()) !== null && _s !== void 0 ? _s : 'right';
	    const imageRight = alignment.includes('right');
	    const imageVerticalAlign = parseAlignment(alignment);
	    return jsxRuntimeExports.jsx("section", { id: id, className: cn('content-block-hero', { 'dark-background': bg.isDark }), "data-analytics-nav": analytics, style: { background: bg.background, backgroundColor: bg.backgroundColor,
	            '--padding-multiplier': padding,
	            '--padding-top-multiplier': paddingTop,
	            '--padding-bottom-multiplier': paddingBottom,
	            '--image-vertical-align': imageVerticalAlign,
	            '--image-border-radius': imageBorderRadius ? `${imageBorderRadius}px` : undefined,
	            '--image-border-color': imageBorderColor,
	            '--image-border-size': imageBorderSize ? `${imageBorderSize}px` : undefined,
	            '--image-overhang': imageOverhang || undefined
	        }, children: jsxRuntimeExports.jsx("div", { className: cn('hero-inner-wrapper', { 'image-left': !imageRight }), children: imageRight ? jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("div", { className: "hero-content", style: { textAlign }, children: content }), jsxRuntimeExports.jsx("div", { className: "hero-image-container", children: jsxRuntimeExports.jsx(Image, { className: "hero-image", image: data.value.image, alt: data.value.imageAlt }) })] }) : jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("div", { className: "hero-image-container", children: jsxRuntimeExports.jsx(Image, { className: "hero-image", image: data.value.image, alt: data.value.imageAlt }) }), jsxRuntimeExports.jsx("div", { className: "hero-content", style: { textAlign }, children: content })] }) }) });
	}

	const fields$8 = {
	    type: 'hero',
	    categories: ['structure'],
	    label: 'Hero',
	    fields: [
	        { name: 'content', label: 'Content', type: 'blocks', categories: ['content'] },
	        { name: 'imageAlt', label: 'Image Alt', type: 'text' },
	        { name: 'image', label: 'Hero Image', type: 'namespace', fields: imageFieldsConfig },
	        { name: 'config', label: 'Config', type: 'configs', configs: [
	                { name: 'image_alignment', label: 'Image Alignment', type: 'select', options: [
	                        { label: 'Left', value: 'left' },
	                        { label: 'Top Left', value: 'top_left' },
	                        { label: 'Bottom Left', value: 'bottom_left' },
	                        { label: 'Right', value: 'right' },
	                        { label: 'Top Right', value: 'top_right' },
	                        { label: 'Bottom Right', value: 'bottom_right' },
	                    ] },
	                { name: 'text_alignment', label: 'Text Alignment', type: 'select', options: [
	                        { label: 'Left', value: 'left' },
	                        { label: 'Right', value: 'right' },
	                        { label: 'Center', value: 'center' },
	                    ] },
	                { name: 'background_color', label: 'Background Color', type: 'text', pattern: '#[a-fA-Z0-9]{6}' },
	                { name: 'gradient_color', label: 'Gradient To Color', type: 'text', pattern: '#[a-fA-Z0-9]{6}',
	                    help: 'Second color for gradient effect. Background Color is the starting color.' },
	                { name: 'gradient_direction', label: 'Gradient Direction', type: 'select', options: [
	                        { label: 'Top to Bottom', value: 'to bottom' },
	                        { label: 'Bottom to Top', value: 'to top' },
	                        { label: 'Left to Right', value: 'to right' },
	                        { label: 'Right to Left', value: 'to left' },
	                        { label: 'Top-Left to Bottom-Right', value: 'to bottom right' },
	                        { label: 'Top-Right to Bottom-Left', value: 'to bottom left' },
	                        { label: 'Bottom-Left to Top-Right', value: 'to top right' },
	                        { label: 'Bottom-Right to Top-Left', value: 'to top left' },
	                    ] },
	                { name: 'padding', label: 'Padding', help: 'Top and Bottom padding, in 10px increments', type: 'number' },
	                { name: 'padding_top', label: 'Padding Top', help: 'Top padding, in 10px increments', type: 'number' },
	                { name: 'padding_bottom', label: 'Padding Bottom', help: 'Bottom padding, in 10px increments', type: 'number' },
	                { name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this section will include this label', type: 'text' },
	                { name: 'id', label: 'ID', help: 'The HTML id of the section (can be referenced by anchor links).', type: 'text' },
	                { name: 'image_border_radius', label: 'Image Border Radius', type: 'number',
	                    help: 'Border radius for the hero image in pixels' },
	                { name: 'image_border_color', label: 'Image Border Color', type: 'text', pattern: '#[a-fA-F0-9]{6}',
	                    help: 'Hex color for the hero image border' },
	                { name: 'image_border_size', label: 'Image Border Size', type: 'number',
	                    help: 'Border width for the hero image in pixels' },
	                { name: 'image_overhang', label: 'Image Overhang', type: 'text',
	                    help: 'Extends the image beyond the content area by this amount (e.g. 5rem, 10%)' },
	                { name: 'rendering_condition', label: 'Rendering Condition', type: 'text',
	                    help: 'Comma-separated condition slugs. Block renders only when at least one is active.' },
	            ] },
	    ],
	};

	var HeroBlock = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Component: HeroBlock$1,
		fields: fields$8
	});

	function LinksBlock$1({ data }) {
	    var _a, _b, _c, _d, _e, _f, _g, _h;
	    const analytics = (_a = findByType(data.value.config, 'analytics_label')) === null || _a === void 0 ? void 0 : _a.value;
	    const color = (_c = (_b = findByType(data.value.config, 'color')) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : 'white';
	    const customColor = (_d = findByType(data.value.config, 'custom_color')) === null || _d === void 0 ? void 0 : _d.value;
	    const size = (_f = (_e = findByType(data.value.config, 'size')) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : 'large';
	    const layout = (_h = (_g = findByType(data.value.config, 'layout')) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : 'grid';
	    const useCustom = Boolean(customColor);
	    const customColorClass = useCustom
	        ? Color(customColor).isDark() ? 'custom-color-dark' : 'custom-color-light' // eslint-disable-line new-cap
	        : undefined;
	    const style = useCustom
	        ? { '--link-bg-color': customColor }
	        : undefined;
	    return jsxRuntimeExports.jsx("div", { className: cn('content-block-links', !useCustom && `color-${color}`, customColorClass, `size-${size}`, `layout-${layout}`), style: style, "data-analytics-nav": analytics, children: data.value.links.map((action, i) => jsxRuntimeExports.jsx(Link, { link: action }, i)) });
	}

	const fields$7 = {
	    type: 'cta_block',
	    categories: ['content'],
	    label: 'Links',
	    fields: [
	        { name: 'links', label: 'Links', type: 'list', fields: linkFieldConfig },
	        { name: 'config', label: 'Config', type: 'configs', configs: [
	                { name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this section will include this label', type: 'text' },
	                { name: 'color', label: 'Color', type: 'select', options: [
	                        { value: 'white', label: 'White' },
	                        { value: 'blue', label: 'Blue' },
	                        { value: 'deep-green', label: 'Deep Green' },
	                    ] },
	                { name: 'custom_color', label: 'Custom Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex color override. Overrides Color preset.' },
	                { name: 'size', label: 'Size', type: 'select', options: [
	                        { value: 'small', label: 'Small' },
	                        { value: 'large', label: 'Large' },
	                    ] },
	                { name: 'layout', label: 'Layout', type: 'select', options: [
	                        { value: 'grid', label: 'Grid' },
	                        { value: 'inline', label: 'Inline' },
	                    ] },
	            ] },
	    ],
	};

	var LinksBlock = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Component: LinksBlock$1,
		fields: fields$7
	});

	function QuoteBlock$1({ data }) {
	    var _a;
	    const accentColor = (_a = findByType(data.value.config, 'accent_color')) === null || _a === void 0 ? void 0 : _a.value;
	    const style = accentColor
	        ? { '--quote-accent-color': accentColor }
	        : undefined;
	    return jsxRuntimeExports.jsxs("div", { className: "content-block-quote", style: style, children: [jsxRuntimeExports.jsx(Image, { alt: "", image: data.value.image }), jsxRuntimeExports.jsx(RichTextContent, { html: data.value.content }), jsxRuntimeExports.jsxs("div", { className: "quotee", children: [jsxRuntimeExports.jsx("span", { className: "name", children: data.value.name }), data.value.title ? jsxRuntimeExports.jsx("span", { className: "title", children: data.value.title }) : null] })] });
	}

	const fields$6 = {
	    type: 'quote',
	    categories: ['content'],
	    label: 'Quote',
	    fields: [
	        { name: 'content', label: 'Quote Text', type: 'long-text', required: true },
	        { name: 'title', label: 'Quotee\'s title', type: 'text' },
	        { name: 'name', label: 'Quotee\'s name', type: 'text', required: true },
	        { name: 'image', label: 'Image', type: 'namespace', fields: imageFieldsConfig },
	        { name: 'config', label: 'Config', type: 'configs', configs: [
	                { name: 'accent_color', label: 'Accent Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex color for the quote mark' },
	            ] },
	    ],
	};

	var QuoteBlock = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Component: QuoteBlock$1,
		fields: fields$6
	});

	const fields$5 = {
	    type: 'text',
	    categories: ['content'],
	    label: 'Text',
	    field: { name: 'text', label: 'Text', type: 'rich-text' },
	};

	var RichTextBlock = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Component: RichTextBlock$1,
		fields: fields$5
	});

	// eslint-disable-next-line complexity
	function SectionBlock$1({ data, content, activeConditions }) {
	    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
	    const condition = (_a = findByType(data.value.config, 'rendering_condition')) === null || _a === void 0 ? void 0 : _a.value;
	    if (condition && !condition.split(',').some(c => activeConditions === null || activeConditions === void 0 ? void 0 : activeConditions.includes(c.trim())))
	        return null;
	    const id = (_b = findByType(data.value.config, 'id')) === null || _b === void 0 ? void 0 : _b.value;
	    const textAlign = (_c = findByType(data.value.config, 'text_alignment')) === null || _c === void 0 ? void 0 : _c.value;
	    const flex = (_d = findByType(data.value.config, 'flex')) === null || _d === void 0 ? void 0 : _d.value;
	    const backgroundColor = (_e = findByType(data.value.config, 'background_color')) === null || _e === void 0 ? void 0 : _e.value;
	    const gradientColor = (_f = findByType(data.value.config, 'gradient_color')) === null || _f === void 0 ? void 0 : _f.value;
	    const gradientDirection = (_g = findByType(data.value.config, 'gradient_direction')) === null || _g === void 0 ? void 0 : _g.value;
	    const padding = (_j = (_h = findByType(data.value.config, 'padding')) === null || _h === void 0 ? void 0 : _h.value) !== null && _j !== void 0 ? _j : 0;
	    const paddingTop = (_k = findByType(data.value.config, 'padding_top')) === null || _k === void 0 ? void 0 : _k.value;
	    const paddingBottom = (_l = findByType(data.value.config, 'padding_bottom')) === null || _l === void 0 ? void 0 : _l.value;
	    const analytics = (_m = findByType(data.value.config, 'analytics_label')) === null || _m === void 0 ? void 0 : _m.value;
	    const bg = resolveBackground(backgroundColor, gradientColor, gradientDirection);
	    const display = data.value.content.some(d => findByType(d.value.config, 'flex'))
	        ? 'flex' : 'block';
	    return jsxRuntimeExports.jsx("section", { id: id, className: cn('content-block-section', { 'dark-background': bg.isDark, [`content-block-${flex}`]: flex }), "data-analytics-nav": analytics, style: { background: bg.background, backgroundColor: bg.backgroundColor,
	            '--padding-multiplier': padding,
	            '--padding-top-multiplier': paddingTop,
	            '--padding-bottom-multiplier': paddingBottom
	        }, children: jsxRuntimeExports.jsx("div", { className: "section-content", style: { textAlign, display, flexDirection: 'column' }, children: content }) });
	}

	const fields$4 = {
	    type: 'section',
	    categories: ['structure'],
	    label: 'Section',
	    fields: [
	        { name: 'content', label: 'Section Content', type: 'blocks', categories: ['content'] },
	        { name: 'config', label: 'Config', type: 'configs', configs: [
	                { name: 'text_alignment', label: 'Text Alignment', type: 'select', options: [
	                        { label: 'Left', value: 'left' },
	                        { label: 'Right', value: 'right' },
	                        { label: 'Center', value: 'center' },
	                    ] },
	                { name: 'flex', label: 'Height', type: 'select', options: [
	                        { label: 'Grow to fill available page space', value: 'flex-grow' },
	                        { label: 'Shrink to fit available page space', value: 'flex-shrink' },
	                        { label: 'Fit to available page space', value: 'flex' },
	                    ] },
	                { name: 'background_color', label: 'Background Color', type: 'text', pattern: '#[a-fA-Z0-9]{6}' },
	                { name: 'gradient_color', label: 'Gradient To Color', type: 'text', pattern: '#[a-fA-Z0-9]{6}',
	                    help: 'Second color for gradient effect. Background Color is the starting color.' },
	                { name: 'gradient_direction', label: 'Gradient Direction', type: 'select', options: [
	                        { label: 'Top to Bottom', value: 'to bottom' },
	                        { label: 'Bottom to Top', value: 'to top' },
	                        { label: 'Left to Right', value: 'to right' },
	                        { label: 'Right to Left', value: 'to left' },
	                        { label: 'Top-Left to Bottom-Right', value: 'to bottom right' },
	                        { label: 'Top-Right to Bottom-Left', value: 'to bottom left' },
	                        { label: 'Bottom-Left to Top-Right', value: 'to top right' },
	                        { label: 'Bottom-Right to Top-Left', value: 'to top left' },
	                    ] },
	                { name: 'padding', label: 'Padding', help: 'Top and Bottom padding, in 10px increments', type: 'number' },
	                { name: 'padding_top', label: 'Padding Top', help: 'Top padding, in 10px increments', type: 'number' },
	                { name: 'padding_bottom', label: 'Padding Bottom', help: 'Bottom padding, in 10px increments', type: 'number' },
	                { name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this section will include this label', type: 'text' },
	                { name: 'id', label: 'ID', help: 'The HTML id of the section (can be referenced by anchor links).', type: 'text' },
	                { name: 'rendering_condition', label: 'Rendering Condition', type: 'text',
	                    help: 'Comma-separated condition slugs. Block renders only when at least one is active.' },
	            ] },
	    ],
	};

	var SectionBlock = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Component: SectionBlock$1,
		fields: fields$4
	});

	function WellBlock$1({ data, content }) {
	    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
	    const id = (_a = findByType(data.value.config, 'id')) === null || _a === void 0 ? void 0 : _a.value;
	    const backgroundColor = (_b = findByType(data.value.config, 'background_color')) === null || _b === void 0 ? void 0 : _b.value;
	    const gradientColor = (_c = findByType(data.value.config, 'gradient_color')) === null || _c === void 0 ? void 0 : _c.value;
	    const gradientDirection = (_d = findByType(data.value.config, 'gradient_direction')) === null || _d === void 0 ? void 0 : _d.value;
	    const borderRadius = (_f = (_e = findByType(data.value.config, 'border_radius')) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : 8;
	    const padding = (_h = (_g = findByType(data.value.config, 'padding')) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : 2;
	    const margin = (_k = (_j = findByType(data.value.config, 'margin')) === null || _j === void 0 ? void 0 : _j.value) !== null && _k !== void 0 ? _k : 0;
	    const width = (_l = findByType(data.value.config, 'width')) === null || _l === void 0 ? void 0 : _l.value;
	    const textAlign = (_m = findByType(data.value.config, 'text_alignment')) === null || _m === void 0 ? void 0 : _m.value;
	    const pullUp = (_o = findByType(data.value.config, 'pull_up')) === null || _o === void 0 ? void 0 : _o.value;
	    const borderColor = (_p = findByType(data.value.config, 'border_color')) === null || _p === void 0 ? void 0 : _p.value;
	    const borderSize = (_q = findByType(data.value.config, 'border_size')) === null || _q === void 0 ? void 0 : _q.value;
	    const analytics = (_r = findByType(data.value.config, 'analytics_label')) === null || _r === void 0 ? void 0 : _r.value;
	    const bg = resolveBackground(backgroundColor, gradientColor, gradientDirection);
	    const isLight = (backgroundColor || gradientColor) && !bg.isDark;
	    return jsxRuntimeExports.jsx("div", { id: id, className: cn('content-block-well', { 'dark-background': bg.isDark, 'light-background': isLight }), "data-analytics-nav": analytics, style: {
	            '--padding-multiplier': padding,
	            '--margin-multiplier': margin,
	            ...(pullUp ? { marginTop: `-${pullUp}rem` } : {})
	        }, children: jsxRuntimeExports.jsx("div", { className: "well-content", style: {
	                background: bg.background,
	                backgroundColor: bg.backgroundColor,
	                borderRadius: `${borderRadius}px`,
	                textAlign,
	                maxWidth: width,
	                ...(borderColor ? { border: `${borderSize !== null && borderSize !== void 0 ? borderSize : 1}px solid ${borderColor}` } : {})
	            }, children: content }) });
	}

	const fields$3 = {
	    type: 'well',
	    categories: ['content'],
	    label: 'Well',
	    fields: [
	        { name: 'content', label: 'Well Content', type: 'blocks', categories: ['content'] },
	        { name: 'config', label: 'Config', type: 'configs', configs: [
	                { name: 'background_color', label: 'Background Color', type: 'text', pattern: '#[a-fA-Z0-9]{6}' },
	                { name: 'gradient_color', label: 'Gradient To Color', type: 'text', pattern: '#[a-fA-Z0-9]{6}',
	                    help: 'Second color for gradient effect. Background Color is the starting color.' },
	                { name: 'gradient_direction', label: 'Gradient Direction', type: 'select', options: [
	                        { label: 'Top to Bottom', value: 'to bottom' },
	                        { label: 'Bottom to Top', value: 'to top' },
	                        { label: 'Left to Right', value: 'to right' },
	                        { label: 'Right to Left', value: 'to left' },
	                        { label: 'Top-Left to Bottom-Right', value: 'to bottom right' },
	                        { label: 'Top-Right to Bottom-Left', value: 'to bottom left' },
	                        { label: 'Bottom-Left to Top-Right', value: 'to top right' },
	                        { label: 'Bottom-Right to Top-Left', value: 'to top left' },
	                    ] },
	                { name: 'border_radius', label: 'Border Radius', help: 'Border radius in pixels', type: 'number' },
	                { name: 'border_color', label: 'Border Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex border color' },
	                { name: 'border_size', label: 'Border Size', type: 'number', help: 'Border width in pixels. Only applies when border color is set.' },
	                { name: 'padding', label: 'Padding', help: 'Inner padding, in 10px increments', type: 'number' },
	                { name: 'margin', label: 'Margin', help: 'Outer margin, in 10px increments', type: 'number' },
	                { name: 'pull_up', label: 'Pull Up', type: 'number', help: 'Pulls the well upward by this amount in rem units. Use with extra padding on the section above to create an overlap effect.' },
	                { name: 'width', label: 'Width', help: 'Maximum width of the well content (e.g., 600px, 50%, auto)', type: 'text' },
	                { name: 'text_alignment', label: 'Text Alignment', type: 'select', options: [
	                        { label: 'Left', value: 'left' },
	                        { label: 'Right', value: 'right' },
	                        { label: 'Center', value: 'center' },
	                    ] },
	                { name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this well will include this label', type: 'text' },
	                { name: 'id', label: 'ID', help: 'The HTML id of the well (can be referenced by anchor links).', type: 'text' },
	            ] },
	    ],
	};

	var WellBlock = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Component: WellBlock$1,
		fields: fields$3
	});

	const STACK_AT_DEFAULT = '60em';
	// cspell:ignore cqmin cqmax -- CSS container query length units
	const STACK_AT_PATTERN = /^\d+(\.\d+)?(px|em|rem|%|vw|vh|cqw|cqi|cqmin|cqmax|ch|ex)$/;
	// eslint-disable-next-line complexity
	function ColumnsBlock$1({ data, leftContent, rightContent }) {
	    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
	    const id = (_a = findByType(data.value.config, 'id')) === null || _a === void 0 ? void 0 : _a.value;
	    const gap = (_c = (_b = findByType(data.value.config, 'gap')) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : 0;
	    const flex = (_d = findByType(data.value.config, 'flex')) === null || _d === void 0 ? void 0 : _d.value;
	    const leftSize = (_e = findByType(data.value.config, 'left_size')) === null || _e === void 0 ? void 0 : _e.value;
	    const rightSize = leftSize ? undefined : (_f = findByType(data.value.config, 'right_size')) === null || _f === void 0 ? void 0 : _f.value;
	    const backgroundColor = (_g = findByType(data.value.config, 'background_color')) === null || _g === void 0 ? void 0 : _g.value;
	    const gradientColor = (_h = findByType(data.value.config, 'gradient_color')) === null || _h === void 0 ? void 0 : _h.value;
	    const gradientDirection = (_j = findByType(data.value.config, 'gradient_direction')) === null || _j === void 0 ? void 0 : _j.value;
	    const padding = (_l = (_k = findByType(data.value.config, 'padding')) === null || _k === void 0 ? void 0 : _k.value) !== null && _l !== void 0 ? _l : 0;
	    const paddingTop = (_m = findByType(data.value.config, 'padding_top')) === null || _m === void 0 ? void 0 : _m.value;
	    const paddingBottom = (_o = findByType(data.value.config, 'padding_bottom')) === null || _o === void 0 ? void 0 : _o.value;
	    const analytics = (_p = findByType(data.value.config, 'analytics_label')) === null || _p === void 0 ? void 0 : _p.value;
	    const stackAtRaw = (_q = findByType(data.value.config, 'stack_at')) === null || _q === void 0 ? void 0 : _q.value;
	    const stackAt = stackAtRaw && STACK_AT_PATTERN.test(stackAtRaw.trim()) ? stackAtRaw.trim() : STACK_AT_DEFAULT;
	    const bg = resolveBackground(backgroundColor, gradientColor, gradientDirection);
	    const scope = React.useId();
	    const leftDisplay = data.value.leftContent.some(d => findByType(d.value.config, 'flex'))
	        ? 'flex' : 'block';
	    const rightDisplay = data.value.rightContent.some(d => findByType(d.value.config, 'flex'))
	        ? 'flex' : 'block';
	    const leftStyle = {
	        display: leftDisplay,
	        flexDirection: 'column',
	        ...(leftSize ? { '--col-width': leftSize } : { '--col-flex': 1 }),
	    };
	    const rightStyle = {
	        display: rightDisplay,
	        flexDirection: 'column',
	        ...(rightSize ? { '--col-width': rightSize } : { '--col-flex': 1 }),
	    };
	    const sel = `.flex-structure-container > section.content-block-columns[data-cols="${scope}"]`;
	    const stackCSS = `@container flex-structure (max-width: ${stackAt}) {
    ${sel} { flex-shrink: 0; display: block }
    ${sel}.content-block-flex > div.columns-content,
    ${sel}.content-block-flex-shrink > div.columns-content { overflow-y: auto; height: unset; max-height: unset }
    ${sel} > div.columns-content { display: block; overflow: auto }
    ${sel} > div.columns-content .content-block-columns-left { margin-right: unset }
    ${sel} > div.columns-content .content-block-columns-left,
    ${sel} > div.columns-content .content-block-columns-right { flex: unset; max-width: unset }
  }`;
	    return jsxRuntimeExports.jsxs("section", { id: id, "data-cols": scope, className: cn('content-block-columns', { 'dark-background': bg.isDark, [`content-block-${flex}`]: flex }), "data-analytics-nav": analytics, style: { background: bg.background, backgroundColor: bg.backgroundColor,
	            '--col-gap': gap,
	            '--padding-multiplier': padding,
	            '--padding-top-multiplier': paddingTop,
	            '--padding-bottom-multiplier': paddingBottom
	        }, children: [jsxRuntimeExports.jsx("style", { dangerouslySetInnerHTML: { __html: stackCSS } }), jsxRuntimeExports.jsxs("div", { className: "columns-content", children: [jsxRuntimeExports.jsx("div", { className: "content-block-columns-left", style: leftStyle, children: leftContent }), jsxRuntimeExports.jsx("div", { className: "content-block-columns-right", style: rightStyle, children: rightContent })] })] });
	}

	const fields$2 = {
	    type: 'columns',
	    label: 'Columns',
	    categories: ['structure'],
	    fields: [
	        { name: 'leftContent', label: 'Left Column Content', type: 'blocks', categories: ['content'] },
	        { name: 'rightContent', label: 'Right Column Content', type: 'blocks', categories: ['content'] },
	        { name: 'config', label: 'Config', type: 'configs', configs: [
	                { name: 'background_color', label: 'Background Color', type: 'text', pattern: '#[a-fA-Z0-9]{6}' },
	                { name: 'gradient_color', label: 'Gradient To Color', type: 'text', pattern: '#[a-fA-Z0-9]{6}',
	                    help: 'Second color for gradient effect. Background Color is the starting color.' },
	                { name: 'gradient_direction', label: 'Gradient Direction', type: 'select', options: [
	                        { label: 'Top to Bottom', value: 'to bottom' },
	                        { label: 'Bottom to Top', value: 'to top' },
	                        { label: 'Left to Right', value: 'to right' },
	                        { label: 'Right to Left', value: 'to left' },
	                        { label: 'Top-Left to Bottom-Right', value: 'to bottom right' },
	                        { label: 'Top-Right to Bottom-Left', value: 'to bottom left' },
	                        { label: 'Bottom-Left to Top-Right', value: 'to top right' },
	                        { label: 'Bottom-Right to Top-Left', value: 'to top left' },
	                    ] },
	                { name: 'padding', label: 'Padding', help: 'Top and Bottom padding, in 10px increments', type: 'number' },
	                { name: 'padding_top', label: 'Padding Top', help: 'Top padding, in 10px increments', type: 'number' },
	                { name: 'padding_bottom', label: 'Padding Bottom', help: 'Bottom padding, in 10px increments', type: 'number' },
	                { name: 'flex', label: 'Height', type: 'select', options: [
	                        { label: 'Grow to fill available page space', value: 'flex-grow' },
	                        { label: 'Shrink to fit available page space', value: 'flex-shrink' },
	                        { label: 'Fit to available page space', value: 'flex' },
	                    ] },
	                { name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this section will include this label', type: 'text' },
	                { name: 'id', label: 'ID', help: 'The HTML id of the section (can be referenced by anchor links).', type: 'text' },
	                { name: 'gap', label: 'Column Gap', help: 'The space between the columns, in 10px increments', type: 'number' },
	                { name: 'stack_at', label: 'Stack Below Width', help: 'Column width at which the two columns stack vertically (CSS length, e.g. 60em, 400px). Defaults to 60em.', type: 'text' },
	                { name: 'right_size', label: 'Right Column Size', help: 'CSS text for the right column eg (20rem, 30%)', type: 'text',
	                    disabledWhen: (data) => { var _a; return !!((_a = data === null || data === void 0 ? void 0 : data.config) === null || _a === void 0 ? void 0 : _a.find((c) => c.name === 'left_size')); }
	                },
	                { name: 'left_size', label: 'Left Column Size', help: 'CSS text for the left column eg (20rem, 30%)', type: 'text',
	                    disabledWhen: (data) => { var _a; return !!((_a = data === null || data === void 0 ? void 0 : data.config) === null || _a === void 0 ? void 0 : _a.find((c) => c.name === 'right_size')); }
	                },
	            ] },
	    ],
	};

	var ColumnsBlock = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Component: ColumnsBlock$1,
		fields: fields$2
	});

	function TabbedContentBlock$1({ data, tabs: resolvedTabs }) {
	    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
	    const tabs = resolvedTabs !== null && resolvedTabs !== void 0 ? resolvedTabs : data.value.tabs;
	    const id = (_a = findByType(data.value.config, 'id')) === null || _a === void 0 ? void 0 : _a.value;
	    const alignment = (_b = findByType(data.value.config, 'tab_alignment')) === null || _b === void 0 ? void 0 : _b.value;
	    const activeColor = (_c = findByType(data.value.config, 'active_color')) === null || _c === void 0 ? void 0 : _c.value;
	    const backgroundColor = (_d = findByType(data.value.config, 'background_color')) === null || _d === void 0 ? void 0 : _d.value;
	    const gradientColor = (_e = findByType(data.value.config, 'gradient_color')) === null || _e === void 0 ? void 0 : _e.value;
	    const gradientDirection = (_f = findByType(data.value.config, 'gradient_direction')) === null || _f === void 0 ? void 0 : _f.value;
	    const analytics = (_g = findByType(data.value.config, 'analytics_label')) === null || _g === void 0 ? void 0 : _g.value;
	    const borderWidth = (_h = findByType(data.value.config, 'border_width')) === null || _h === void 0 ? void 0 : _h.value;
	    const bg = resolveBackground(backgroundColor, gradientColor, gradientDirection);
	    const defaultTabRaw = (_j = findByType(data.value.config, 'default_tab')) === null || _j === void 0 ? void 0 : _j.value;
	    const defaultTab = defaultTabRaw
	        ? Math.max(0, Math.min(Number(defaultTabRaw), tabs.length - 1))
	        : 0;
	    const [activeIndex, setActiveIndex] = React.useState(defaultTab);
	    const tabRefs = React.useRef([]);
	    const baseId = `tabbed-${data.id}`;
	    if (!tabs.length)
	        return null;
	    const handleKeyDown = (e) => {
	        var _a;
	        let nextIndex;
	        switch (e.key) {
	            case 'ArrowRight':
	                nextIndex = (activeIndex + 1) % tabs.length;
	                break;
	            case 'ArrowLeft':
	                nextIndex = (activeIndex - 1 + tabs.length) % tabs.length;
	                break;
	            case 'Home':
	                nextIndex = 0;
	                break;
	            case 'End':
	                nextIndex = tabs.length - 1;
	                break;
	            default:
	                return;
	        }
	        e.preventDefault();
	        setActiveIndex(nextIndex);
	        (_a = tabRefs.current[nextIndex]) === null || _a === void 0 ? void 0 : _a.focus();
	    };
	    return jsxRuntimeExports.jsxs("div", { id: id, className: cn('content-block-tabbed-content', alignment && `tab-align-${alignment}`, borderWidth === 'full' && 'border-full-width', { 'dark-background': bg.isDark }), "data-analytics-nav": analytics, style: {
	            background: bg.background, backgroundColor: bg.backgroundColor,
	            ...(activeColor ? { '--tab-active-color': activeColor } : {}),
	        }, children: [jsxRuntimeExports.jsx("div", { className: "tab-list-container", children: jsxRuntimeExports.jsx("div", { className: "tab-list", role: "tablist", onKeyDown: handleKeyDown, children: tabs.map((tab, i) => jsxRuntimeExports.jsx("button", { ref: (el) => { tabRefs.current[i] = el; }, role: "tab", id: `${baseId}-tab-${i}`, "aria-selected": i === activeIndex, "aria-controls": `${baseId}-panel-${i}`, tabIndex: i === activeIndex ? 0 : -1, className: cn('tab-button', { active: i === activeIndex }), "data-label": tab.label, onClick: () => setActiveIndex(i), children: tab.label }, i)) }) }), jsxRuntimeExports.jsx("div", { className: "tab-panels", children: tabs.map((tab, i) => jsxRuntimeExports.jsx("div", { role: "tabpanel", id: `${baseId}-panel-${i}`, "aria-labelledby": `${baseId}-tab-${i}`, "aria-hidden": i !== activeIndex, tabIndex: i === activeIndex ? 0 : -1, className: cn('tab-panel', 'flex-structure-container', { active: i === activeIndex }), children: tab.content }, i)) })] });
	}

	const fields$1 = {
	    type: 'tabbed_content',
	    label: 'Tabbed Content',
	    categories: ['structure'],
	    fields: [
	        { name: 'tabs', label: 'Tabs', type: 'list', fields: [
	                { name: 'label', label: 'Tab Label', type: 'text', required: true },
	                { name: 'content', label: 'Tab Content', type: 'blocks', categories: ['structure'] },
	            ] },
	        { name: 'config', label: 'Config', type: 'configs', configs: [
	                { name: 'tab_alignment', label: 'Tab Alignment', type: 'select', options: [
	                        { label: 'Left', value: 'left' },
	                        { label: 'Center', value: 'center' },
	                        { label: 'Right', value: 'right' },
	                    ] },
	                { name: 'active_color', label: 'Active Tab Color', type: 'text', pattern: '#[a-fA-F0-9]{6}',
	                    help: 'Hex color for the active tab underline' },
	                { name: 'background_color', label: 'Background Color', type: 'text', pattern: '#[a-fA-Z0-9]{6}' },
	                { name: 'gradient_color', label: 'Gradient To Color', type: 'text', pattern: '#[a-fA-Z0-9]{6}',
	                    help: 'Second color for gradient effect. Background Color is the starting color.' },
	                { name: 'gradient_direction', label: 'Gradient Direction', type: 'select', options: [
	                        { label: 'Top to Bottom', value: 'to bottom' },
	                        { label: 'Bottom to Top', value: 'to top' },
	                        { label: 'Left to Right', value: 'to right' },
	                        { label: 'Right to Left', value: 'to left' },
	                        { label: 'Top-Left to Bottom-Right', value: 'to bottom right' },
	                        { label: 'Top-Right to Bottom-Left', value: 'to bottom left' },
	                        { label: 'Bottom-Left to Top-Right', value: 'to top right' },
	                        { label: 'Bottom-Right to Top-Left', value: 'to top left' },
	                    ] },
	                { name: 'default_tab', label: 'Default Tab', type: 'number',
	                    help: 'Zero-based index of the tab to show by default' },
	                { name: 'analytics_label', label: 'Analytics Label',
	                    help: 'Analytics events from within this block will include this label', type: 'text' },
	                { name: 'border_width', label: 'Border Width', type: 'select', options: [
	                        { label: 'Content Width', value: 'content' },
	                        { label: 'Full Width', value: 'full' },
	                    ] },
	                { name: 'id', label: 'ID',
	                    help: 'The HTML id of the tabbed content block (can be referenced by anchor links).', type: 'text' },
	            ] },
	    ],
	};

	var TabbedContentBlock = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Component: TabbedContentBlock$1,
		fields: fields$1
	});

	const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
	function FlexPage$1({ data, content }) {
	    var _a, _b, _c;
	    const height = (_a = findByType(data.value.config, 'height')) === null || _a === void 0 ? void 0 : _a.value;
	    const width = (_c = (_b = findByType(data.value.config, 'width')) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : 'fixed';
	    const ref = React.useRef(null);
	    /*
	     * the parent styles need to be different for flex-shrink
	     * and flex-grow to both work correctly, and we don't want
	     * to be modifying those, so we do the resize in JS. this
	     * has the advantage of being able to have a site footer
	     * that gets pushed down by the page content (like rex)
	     */
	    useIsomorphicLayoutEffect(() => {
	        const doResize = () => {
	            const element = ref.current;
	            if (!element)
	                return;
	            const rect = element.getBoundingClientRect();
	            const top = rect.top + window.scrollY;
	            const availableHeight = (document.documentElement.clientHeight - top) + 'px';
	            if (height === 'fill-to-screen') {
	                element.style.minHeight = availableHeight;
	            }
	            if (height === 'contain-to-screen') {
	                element.style.maxHeight = availableHeight;
	            }
	            if (height === 'fit-to-screen') {
	                element.style.height = availableHeight;
	            }
	        };
	        doResize();
	        window.addEventListener('resize', doResize);
	        return () => window.removeEventListener('resize', doResize);
	    }, [height]);
	    return jsxRuntimeExports.jsx("div", { ref: ref, className: cn('flex-page', 'page', 'flex-structure-container', `width-${width}`), children: content });
	}

	const fields = {
	    type: 'flex_page',
	    categories: ['page'],
	    label: 'Page',
	    fields: [
	        { name: 'content', label: 'Page Content', type: 'blocks', categories: ['structure'] },
	        { name: 'config', label: 'Config', type: 'configs', configs: [
	                { name: 'width', label: 'Width', type: 'select', options: [
	                        { label: 'Fixed', value: 'fixed' },
	                        { label: 'Full Width', value: 'full' },
	                    ] },
	                { name: 'height', label: 'Height', type: 'select', options: [
	                        /*
	                         * may want to add additional options here that allow to reserve space on screen for following content
	                         */
	                        { label: 'Expand to fill screen (short content expands to screen, longer content scrolls page normally)', value: 'fill-to-screen' },
	                        { label: 'Shrink to contain to screen (short content appears normally, longer content shrinks to fit page)', value: 'contain-to-screen' },
	                        { label: 'Expand & Shrink (bottom of content always aligns to screen edge)', value: 'fit-to-screen' },
	                    ] },
	            ] },
	    ],
	};

	var FlexPage = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Component: FlexPage$1,
		fields: fields
	});

	var index = /*#__PURE__*/Object.freeze({
		__proto__: null,
		cards_block: CardsBlock,
		columns: ColumnsBlock,
		cta_block: CTABlock,
		divider: DividerBlock,
		flex_page: FlexPage,
		hero: HeroBlock,
		html: HTMLBlock,
		links_group: LinksBlock,
		quote: QuoteBlock,
		section: SectionBlock,
		tabbed_content: TabbedContentBlock,
		text: RichTextBlock,
		well: WellBlock
	});

	exports.ActionContext = ActionContext;
	exports.ContentBlockRoot = ContentBlockRoot;
	exports.FlexPageContextProvider = FlexPageContextProvider;
	exports.RouteContext = RouteContext;
	exports.blocks = index;
	exports.resolveContentBlocks = resolveContentBlocks;

}));
//# sourceMappingURL=flex-page-renderer.js.map
