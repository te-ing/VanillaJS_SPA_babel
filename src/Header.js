export default function Header({ $target }) {
  const $Header = document.createElement('div')
  $Header.className = 'Header'
  $target.appendChild($Header)

  $Header.innerHTML = `
  <div class="logo">
    <img src="https://hub.zum.com/resources/pc/images/logo_zum_2x_20210429-047bb40d62fc256b0d38d0359520856e.png" />
    <h3>허브</h3>
  </div>
  <div class="header_wrap">
    <input placeholder="허브글, 채널 검색"/>
    <div class="category">
      <a href="">뉴스</a>
      <a href="">투자</a>
      <a href="">TV</a>
      <a href="">허브</a>
      <a href="">쇼핑</a>
    </div>
    <a href="">로그인</a>
  </div>


      
  `
}
