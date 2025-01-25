const headerTemplate2 = document.createElement('template');

headerTemplate2.innerHTML = `
<style>
  nav ol {
    display: flex;
    flex-wrap: wrap; /* Allows wrapping to a new line if space is limited */
    justify-content: flex-start; /* Align items to the left */
    list-style: none;
    margin: 0;
    padding: 0;
}
  nav ol li {
    font-size: 1em;
    margin: 5px;
}
  nav ol li a {
    text-decoration: none;
    text-underline-offset: 3px;
    color: red;
    background-color: #f9f9f9;
    border: 1px solid purple;
    border-radius: 5px;
    padding: 5px 10px;
}
  .mainbullet li{
    padding: 10px 0;
}  
  @media screen and (max-width: 500px) {
    nav {
        margin: 0 auto;
    }
    nav ol {
        line-height: 0.2;
    }
    nav ol li {
        font-size: 12px;
    }
}
</style>
  <nav>
    <ol class="mainbullet">
      <li><a href="maths1-1.html">1</a></li>
      <li><a href="maths1-2.html">2</a></li>
      <li><a href="maths1-3.html">3</a></li>
    </ol>
  </nav>
`;

class Header2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(headerTemplate2.content);
  }
}

customElements.define('header2-component', Header2);
