// навигация: тень/фон после скролла
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// плавное появление секций
const io = new IntersectionObserver((entries) => {
	for (const e of entries) {
		if (e.isIntersecting) {
			e.target.classList.add('shown');
			io.unobserve(e.target);
		}
	}
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
