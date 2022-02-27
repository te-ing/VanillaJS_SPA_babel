window.onload = () => {
  const main = document.querySelector("main");

  const handleLocationChange = (e) => {
      console.log("locationchanged");

      //* 주소변경
      window.history.pushState(undefined, "타이틀", "/some");
  };

  //* locationchange 이벤트리스너
  window.addEventListener("locationchange", handleLocationChange);

  main.innerHTML = "<div><button type='button'>move to /some</button></div>";

  const button = document.querySelector("button");
  button.addEventListener("click", () => {
      const locationChangeEvent = new CustomEvent("locationchange", {
          composed: true, //웹 컴포넌트라면 넣어주세요
      });
      //* 주소변경 이벤트 Dispatch
      window.dispatchEvent(locationChangeEvent);
  });
};