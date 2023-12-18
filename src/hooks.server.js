import { SECRET_SUPABASE_URL, SECRET_SUPABASE_ANON_KEY } from '$env/static/private';
import { createServerClient } from '@supabase/ssr';

export const handle = async ({ event, resolve }) => {
	event.locals.supabase = createServerClient(SECRET_SUPABASE_URL, SECRET_SUPABASE_ANON_KEY, {
		cookies: {
			get: (key) => event.cookies.get(key),
			set: (key, value, options) => {
				event.cookies.set(key, value, options);
			},
			remove: (key, options) => {
				event.cookies.delete(key, options);
			}
		}
	});

	event.locals.getSession = async () => {
		const {
			data: { session }
		} = await event.locals.supabase.auth.getSession();
		return session;
	};

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range';
		}
	});
};
