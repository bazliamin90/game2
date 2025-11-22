const headerTemplate3 = document.createElement('template');

headerTemplate3.innerHTML = `
<style>
	/* === Header Styling === */
	.header {
		display: flex;
		align-items: center;
		gap: 10px;
		margin: 0 auto;
		padding: 4px 12px;
		max-width: 600px;
		position: sticky;
		top: 0;
		z-index: 998;
		background: linear-gradient(90deg, #e8dcff, #d6ecff);
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
		border-bottom: 2px solid #c5baff;
		border-radius: 0 0 14px 14px;
		backdrop-filter: blur(8px);
		transition: all 0.3s ease;
	}

	.header:hover {
		background: linear-gradient(90deg, #f2e7ff, #e8f3ff);
	}

	/* === Menu Buttons === */
	.menu {
		max-width: 28px;
		border: 1px solid #ccc;
		background-color: #fff;
		border-radius: 8px;
		padding: 2px;
		cursor: pointer;
		display: block;
		object-fit: contain;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.menu:hover {
		transform: scale(1.1);
		box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
	}

	/* === Title === */
	h1 {
		font-family: monospace;
		font-size: 15px;
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
		background: linear-gradient(135deg, #444, #666);
		border-radius: 6px;
		padding: 8px 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		transition: background 0.3s ease;
	}

	h1 a:hover {
		background: linear-gradient(135deg, #333, #555);
	}

	/* === Slide Menu Box === */
	.scroll-box {
		position: fixed;
		top: 0;
		left: 0;
		height: 96vh;
		width: 260px;
		max-width: 90%;
		border-right: 3px solid #b3aaff;
		padding: 14px 10px;
		background: linear-gradient(180deg, #ffffff, #f8f9ff);
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
		touch-action: pan-y;
		box-shadow: 4px 0 12px rgba(0, 0, 0, 0.25);
		transform: translateX(-110%);
		transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
		z-index: 1000;
		border-radius: 0 10px 10px 0;
	}

	.scroll-box.visible {
		transform: translateX(0);
	}

	/* === Scrollbox Header === */
	.scroll-box .close-message {
		font-family: monospace;
		font-size: 10px;
		color: grey;
		margin-bottom: 10px;
		text-align: center;
		font-style: italic;
	}

	/* === Search Box === */
	.scroll-box .search-box {
		width: 92%;
		padding: 6px;
		margin-bottom: 12px;
		font-family: monospace;
		font-size: 13px;
		border: 1px solid #8dafff;
		border-radius: 6px;
		outline: none;
		transition: box-shadow 0.2s ease;
	}

	.scroll-box .search-box:focus {
		box-shadow: 0 0 5px #9cbcff;
	}

	/* === List Section === */
	.scroll-box ol {
		font-family: monospace;
		margin: 40px 0;
		padding: 0;
		list-style-position: outside;
		padding-left: 2.5em;
		color: #555;
	}

	.scroll-box ol a {
		font-family: monospace;
		text-decoration: underline dotted #ccc;
		text-underline-offset: 3px;
		color: #333;
		transition: color 0.2s ease;
	}

	.scroll-box ol a:hover {
		color: #0073e6;
	}

	.scroll-box li {
		font-size: 0.95em;
		padding-bottom: 10px;
	}

	ol li {
		text-align: left;
	}

	/* === Section Divider === */
	.hrnone {
		border: 1px solid #f3f3f3;
	}

	/* === Overlay Background === */
	#overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.3s ease;
		z-index: 999;
	}

	#overlay.visible {
		opacity: 1;
		visibility: visible;
	}

	/* === Responsive Mobile Adjustment === */
	@media (max-width: 600px) {
		.scroll-box {
			width: 75%;
			border-right: 3px solid #a599ff;
			box-shadow: 3px 0 8px rgba(0, 0, 0, 0.2);
		}

		h1 {
			font-size: 13px;
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
		<li><a href="words.html">Cari Perkataan</a></li>
		<li><a href="0004.html">Crossmaths</a></li>
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

  // Allow scrolling inside the scroll box only
  document.addEventListener('touchmove', function allowScrollBox(e) {
    if (!scrollBox.contains(e.target)) {
      e.preventDefault();
    }
  }, { passive: false });
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
