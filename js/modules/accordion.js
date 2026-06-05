export function initAccordion() {

	const productTitles = document.querySelectorAll('.js-products-title');

	productTitles.forEach((productTitle) => {

		const panel = productTitle.nextElementSibling;

		if (!panel) return;

		/* 初期状態 */
		if (panel.classList.contains('is-open')) {

			panel.style.transition = 'none';
			panel.style.maxHeight = panel.scrollHeight + 'px';

			/* 次の描画タイミングで transition を戻す */
			requestAnimationFrame(() => {
				panel.style.transition = '';
			});

			productTitle.classList.add('is-open');

		}

		productTitle.addEventListener('click', () => {

			productTitle.classList.toggle('is-open');

			if (panel.classList.contains('is-open')) {

				panel.classList.remove('is-open');
				panel.style.maxHeight = '0';

			} else {

				panel.classList.add('is-open');
				panel.style.maxHeight = panel.scrollHeight + 'px';

			}
		});
	});
}