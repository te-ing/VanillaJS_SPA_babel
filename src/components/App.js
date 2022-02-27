import Header from "./mainPage/Header";
import Section from "./mainPage/Section"
import Contents from "./mainPage/Contents"

export default function App({ $target }) {
  this.state = {
    section: "home",
    isLoading: false,
  }

  const header = new Header({ 
    $target,
  })
  
  const section = new Section({
    $target,
    initialState: {
      section: this.state.section,
    },
    onClick: (id) => {
      this.state.section = id;
      console.log(this.state.section);
    }
  })

  const contents = new Contents({
    $target,
    initialState: {
      section: this.state.section,
    },
  })
}
