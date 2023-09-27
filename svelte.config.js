import adapter from '@sveltejs/adapter-static';
import { preview } from 'vite';

const dev = process.argv.includes('dev');

export default {
    kit: {
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: 'build',
            assets: 'build',
            fallback: undefined,
            precompress: false,
            strict: true
        }),
        paths: {
            base: dev | preview ? "" : "/ALPHA-CGA",
        }
    }
};
