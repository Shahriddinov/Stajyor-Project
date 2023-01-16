import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { history } from "store";
import { Spinner, Layout } from "components";
import { getBaseName } from "./utils";

import App from "./App";
import ScrollTop from "./hoc/ScrollTop";

const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/404"));

const routes = [
	{ path: "/", element: Home },


];

const RoutesContainer = () => (
	<Router {...{ history }} basename={`/${getBaseName()}`}>
		<App>
			<Layout>
				<Suspense fallback={<Spinner position="full" />}>
					<Routes>
						{routes.map((route, key) => {
							const RouteComponent = ScrollTop(route.element);
							return <Route key={key} path={route.path} element={<RouteComponent />} />;
						})}
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Suspense>
			</Layout>
		</App>
	</Router>
);

export default RoutesContainer;
