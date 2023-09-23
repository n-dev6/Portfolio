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

