const headerTemplate3 = document.createElement('template');

headerTemplate3.innerHTML = `
<style>
	.header {
		display: flex;
		align-items: center;
		gap: 10px;
		margin: 0 auto;
		padding: 8px 8px;
		max-width: 600px;
		position: sticky;
		top: 0;
		z-index: 998;
		background: linear-gradient(90deg, #f3e8ff, #e0f0ff);
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
		border-bottom: 2px solid #d5c9ff;
		border-radius: 0 0 10px 10px;
		backdrop-filter: blur(6px);
		transition: background 0.3s ease;
	}
	
	.menu {
		max-width: 24px;
		border: 1px solid #ddd;
		background-color: #fff;
		border-radius: 6px;
		padding: 4px;
		cursor: pointer;
		display: block;
		object-fit: contain;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	h1 {
		font-family: monospace;
		font-size: 14px;
		text-align: left;
		display: flex;
		align-items: center;
		padding: 5px 0;
		margin: 0;
		max-width: 50rem;
	}	
	
	h1 a {
		text-decoration: none;
		color: white;
		background-color: #555;
		border-radius: 4px;
		padding: 8px 6px;
	}
	
	.scroll-box {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 250px;
		max-width: 90%;
		border-right: 3px solid black;
		padding: 10px;
		background-color: white;
		overflow-y: auto;
		box-shadow: 2px 0 6px rgba(0, 0, 0, 0.2);
		transition: transform 0.3s ease;
		transform: translateX(-100%);
		z-index: 1000;
	}

	.scroll-box.visible {
		transform: translateX(0);
	}

	.scroll-box .close-message {
		font-family: monospace;
		font-size: 8px;
		color: grey;
		margin-bottom: 10px;
		text-align: center;
		font-style: italic;
	}

	.scroll-box .search-box {
		width: 90%;
		padding: 5px;
		margin-bottom: 10px;
		font-family: monospace;
		font-size: 12px;
		border: 1px solid blue;
		border-radius: 4px;
	}

	.scroll-box ol {
		font-family: monospace;
		margin: 50px 0;
		padding: 0;
		list-style-position: outside;
		padding-left: 3em;
		color: red;
	}

	.scroll-box ol a {
		font-family: monospace;
		text-decoration: underline #ccc dotted;
		text-underline-offset: 3px;
		color: #555;
	}

	.scroll-box li {
		font-size: 0.9em;
		padding-bottom: 10px;
	}

	ol li {
		text-align: left;
	}

	.hrnone {
		border: 1px solid #f9f9f9;
	}

	#overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
		display: none;
		z-index: 999;
		transition: opacity 0.3s ease;
	}

	#overlay.visible {
		display: block;
		opacity: 1;
	}
	
	@media (max-width: 600px) {
		.scroll-box {
			width: 70%;
		}
	}
</style>

<div class="header">
  <img src="menu.svg" class="menu" alt="Menu Icon"></img>
  <h1><a href="index.html">Bazli's Playschool</a></h1>
  <a href="0003.html"><img src="b.gif" class="menu"></img></a>
</div>
<div id="overlay"></div>
<div class="scroll-box" id="scroll-box">
  <div class="close-message">Click outside this box to close it</div>
  <input
    type="text"
    class="search-box"
    id="search-box"
    placeholder="Search..."
    aria-label="Search list items"
  />
  <ol id="list">
    <li><a href="index.html">About</a></li>
	<hr><b>Agama</b><hr class="hrnone">
		<li><a href="agama.html">Baca alquran</a></li>
	<hr><b>Bahasa</b><hr class="hrnone">
		<li><a href="0001.html">Vocab</a></li>
	<hr><b>Teka Kata</b><hr class="hrnone">
		<li><a href="index3-1.html">Ayat</a></li>
		<li><a href="index2-1.html">Benda</a></li>
		<li><a href="indexb.html">Maths</a></li>
		<li><a href="random1.html">Random</a></li>
	<hr><b>Maths</b><hr class="hrnone">
		<li><a href="maths1-1.html">Tambah</a></li>
		<li><a href="maths2-1.html">Tolak</a></li>
		<li><a href="0002.html">Darab</a></li>
		<li><a href="jam.html">Teka Jam</a></li>
		<li><a href="abacus.html">Abacus</a></li>
		<li><a href="rounded.html">Rounding</a></li>
  </ol>
</div>
`;

class Header3 extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.appendChild(headerTemplate3.content.cloneNode(true));

		const menu = shadowRoot.querySelector('.menu');
		const scrollBox = shadowRoot.querySelector('#scroll-box');
		const overlay = shadowRoot.querySelector('#overlay');
		const searchBox = shadowRoot.querySelector('#search-box');
		const list = shadowRoot.querySelector('#list');

		let preventTouchScroll = (e) => e.preventDefault();

		menu.addEventListener('click', (event) => {
			event.stopPropagation();
			toggleScrollBox(scrollBox, overlay);
		});

		document.addEventListener('click', function (event) {
			if (
				scrollBox.classList.contains('visible') &&
				!scrollBox.contains(event.target) &&
				!event.target.matches('.menu')
			) {
				hideScrollBox(scrollBox, overlay);
			}
		});

		scrollBox.addEventListener('click', (event) => {
			event.stopPropagation();
		});

		overlay.addEventListener('click', () => hideScrollBox(scrollBox, overlay));

		function toggleScrollBox(scrollBox, overlay) {
			if (scrollBox.classList.contains('visible')) {
				hideScrollBox(scrollBox, overlay);
			} else {
				showScrollBox(scrollBox, overlay);
			}
		}

		function showScrollBox(scrollBox, overlay) {
			scrollBox.classList.add('visible');
			overlay.classList.add('visible');

			// Disable background scrolling
			const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
			document.body.style.overflow = 'hidden';
			document.body.style.paddingRight = `${scrollBarWidth}px`;

			document.addEventListener('touchmove', preventTouchScroll, { passive: false });
		}

		function hideScrollBox(scrollBox, overlay) {
			scrollBox.classList.remove('visible');
			overlay.classList.remove('visible');

			// Re-enable background scrolling
			document.body.style.overflow = '';
			document.body.style.paddingRight = '';

			document.removeEventListener('touchmove', preventTouchScroll);
		}

		// Simplified search functionality
		searchBox.addEventListener('input', () => {
			const filter = searchBox.value.toLowerCase();
			list.querySelectorAll('li').forEach(li => {
				li.style.display = li.textContent.toLowerCase().includes(filter) ? '' : 'none';
			});
			list.querySelectorAll('b, hr').forEach(el => {
				el.style.display = filter ? 'none' : '';
			});
		});
	}
}

customElements.define('header3-component', Header3);
