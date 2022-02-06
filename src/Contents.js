import { ranking, life, food, travel, culture } from "./DUMMY"

export default function Contents({ $target, initialState }) {
  const $Contents = document.createElement('div')
  $Contents.className = 'contents'
  $target.appendChild($Contents)
  
  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  $Contents.innerHTML = `
  <div class="contents">
    <article class="article_container">
      <article class="article_main">
        <img src=${culture[0].imageUrl} />
        </article>
      <article class="article_sub_container">
        <article class="article_sub">
          <img src=${culture[1].imageUrl} />
        </article>
        <article class="article_sub">
          <img src=${culture[2].imageUrl} />
      </article>
    </article>
  </div>
  `
  
  // this.render()
}


/**
 {
    "idx": 75514,
    "title": "10억년 신비 품은 해변 따라 삼각산 돌아보니 황제의 氣 꿈틀",
    "mediaName": "동아일보",
    "url": "https://hub.zum.com/donga/75514"
  },
{
  "idx": 75588,
  "title": "한국 연예인도 따라 입는 레깅스 패션 선두주자들",
  "imageUrl": "https://thumb.zumst.com/270x200/https://static.hubzum.zumst.com/hubzum/2021/03/24/13/f9ea2c54c3264be795d6126be3e2b955.jpg",
  "mediaName": "OSEN",
  "url": "https://hub.zum.com/osen/75588",
  "summaryContent": "옷 잘 입기로 소문난 한국에서도 레깅스 패션 만큼은 길에서 마주하게 된지 얼마 되지 않았다. 몇 년 전 그룹 에이핑크 손나은이 한 안무 영상에서 독보적인 레깅스 핏으로 신드롬을 만들면서 점차 퍼지기 시작했다. 헐리우드에서 레깅스는 보는 사람도 입는 사람도 그 누구도 의식하지 않는 편안한 옷일 뿐이기에 더욱 다양한 스타일링이 눈에 띈다. 연예인들도 참고한다는"
}
*/