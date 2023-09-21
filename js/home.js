'use strict';

function home_in_animations()
{
	let done = false;
	let elements = document.querySelectorAll('#home_section .in_animation');
	let section = document.querySelector('#home_section');

	async function in_animation_check()
	{
		if (!done && is_in_viewport(section))
		{
			for (let i of elements)
			{
				i.style.opacity = '1';
				i.style.transform = 'translateY(0)';
				await sleep(300);
			}

			done = true;
		}
	}

	window.addEventListener('scroll', (e) =>
	{
		in_animation_check();
	});

	window.addEventListener('resize', (e) =>
	{
		in_animation_check();
	});

	in_animation_check();
}

document.addEventListener('DOMContentLoaded', function () {
    const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript','React', 'Next.js', 'UI/UX', 'SVG', 'Animation', 'Webdev','Unity'];
    const DURATION = 15000;
    const ROWS = 5;
    const TAGS_PER_ROW = 4;

    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const shuffle = arr => [...arr].sort(() => .5 - Math.random());

    const createTags = () => {
        const tagList = document.getElementById('tagList');
        for (let i = 0; i < ROWS; i++) {
            const slider = document.createElement('div');
            slider.className = 'loop-slider';
            slider.style.setProperty('--duration', `${random(DURATION - 5000, DURATION + 5000)}ms`);
            slider.style.setProperty('--direction', i % 2 === 0 ? 'normal' : 'reverse');

            const tags = shuffle(TAGS).slice(0, TAGS_PER_ROW);
            tags.forEach(tagText => {
                const tag = document.createElement('div');
                tag.className = 'tag';
                const span = document.createElement('span');
                span.innerText = '#';
                tag.appendChild(span);
                tag.appendChild(document.createTextNode(tagText));
                slider.appendChild(tag);
            });

            tagList.appendChild(slider);
        }
    };

    createTags();
});
