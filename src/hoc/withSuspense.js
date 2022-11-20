import React from 'react';
import Loader from '../components/Loader/Loader';

export const withSuspense = (WrappedComponent, FallbackComponent = null) => {
	const UpdatedComponent = (props) => {
		if (!FallbackComponent) FallbackComponent = <Loader />;
		return (
			<React.Suspense fallback={FallbackComponent}>
				<WrappedComponent {...props} />
			</React.Suspense>
		)
	}

	return UpdatedComponent
};
