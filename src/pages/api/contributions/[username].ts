import type { APIRoute } from 'astro';

export const prerender = false;

// TODO: Implement the GET handler for fetching GitHub contribution data
// Endpoint: https://github.com/{username}.contribs
export const GET: APIRoute = async ({ params }) => {
	const username = params.username ?? 'unknown';

	return new Response(JSON.stringify({ error: 'Not implemented', username }), {
		status: 501,
		headers: { 'Content-Type': 'application/json' },
	});
};
