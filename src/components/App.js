import Header from "./mainPage/Header";
import Section from "./mainPage/Section"
import Contents from "./mainPage/Contents"
import { initRouter, route } from "./router"

export default function App({ $target }) {
  this.state = {
    section: "",
    isLoading: false,
  }

  const header = new Header({ 
    $target,
  })

  const section = new Section({
    $target,
    initialState: {
      section: "",
    },
    onClick: (id) => {
      this.state.section = id;
      history.pushState("", "", `/${id}`);
      this.route();
    }
  })

  const contents = new Contents({
    $target,
    initialState: {
      section: this.state.section,
    },
  })

  this.route = () => {
    const { pathname } = window.location;
    if (pathname === "/") {
      contents.setState({
        section: "home",
      });
      section.setState({
        section: "home",
      });
    } else {
      contents.setState({
        section: pathname.slice(1),
      });
      section.setState({
        section: pathname.slice(1),
      });
    }
  };

  this.route();
  initRouter(() => this.route());
}
