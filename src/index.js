import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";

import { i18n } from "services";
 



import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.min.css";

import "./assets/styles/main.css";
import "./assets/styles/ui.scss";
import "./assets/styles/header.scss";
import "./assets/styles/footer.scss";
import "./assets/styles/fonts.css";
import store from "reduxToolkit/store";
import App from "App";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

// const [ isActive, setIsActive ] = useState(false)
// const [ isAvialable, setIsAvialable ] = useState(false)
// const [ isPortfolio, setIsPortfolio ] = useState(false)
// const [ isAddPortfolio, setAddIsPortfolio ] = useState(false)
// const [ isAddLanguage, setAddIsLanguage ] = useState(false)
// const [ heartClick, setHeartClick ] = useState(false)
// const [ isAddEducation, setAddIsEducation ] = useState(false)

// const obj = {  isActive, setIsActive, isAvialable, setIsAvialable , isPortfolio, setIsPortfolio,
// 				isAddPortfolio, setAddIsPortfolio, heartClick, setHeartClick, isAddLanguage, setAddIsLanguage,
// 			isAddEducation, setAddIsEducation  }

root.render(

	<Provider store={store}>
		<I18nextProvider i18n={i18n()}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
		</I18nextProvider>
	</Provider>

);
