import Header from "./Header";
import Section from "./Section"

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
}
