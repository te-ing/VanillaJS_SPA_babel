export default function Section({ $target, initialState, onClick }) {
  const $Section = document.createElement('div')
  $Section.className = 'section'
  $target.appendChild($Section)
  
  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  $Section.innerHTML = `
    <ul class="menu">
      <li class="menu_home">홈</li>  
      <li class="menu_life">라이프</li>
      <li class="menu_food">푸드</li>
      <li class="menu_travel">여행</li>
      <li class="menu_culture">컬처</li>
    </ul>

    <ul class="user_menu">
      <li>최근 읽은 글</li>  
      <li>채널</li>
    </ul>
  `
  const $FocusMenu = document.querySelector(`.menu_${this.state.section}`);
  $FocusMenu.classList.add("menu_focus")

  $Section.addEventListener("click", (e) => {
    if(e.target.nodeName !== "LI") return
    onClick(e.target.className.substring(5));
  })
  
  // this.render()
}
