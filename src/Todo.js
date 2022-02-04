export default function Todo({ $target, initialState }) {
  let state = {
    items: ['item1', 'item2']
  }
  
  const render = () => {
    const { items } = state;
    $target.innerHTML = `
      <ul>
        ${items.map(item => `<li>${item}</li>`).join('')}
      </ul>
      <button id="append">추가</button>
      <button id="delete">삭제</button>
    `;
    document.querySelector('#append').addEventListener('click', () => {
      setState({items: [...items, `item${items.length +1}`] })
    })
    document.querySelector('#delete').addEventListener('click', () => {
      items.pop();
      setState({items: [...items] })
    })
  }

  const setState = (newState) => {
    state = { ...state, ...newState };
    render();
  }

  render(); 
}