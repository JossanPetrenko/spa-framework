import { css } from 'docz-plugin-css';
import doczPluginGithubPage from 'docz-plugin-github-page';

export default {
	plugins: [ css({ preprocessor: 'sass' }) ],
	title: 'Nimbus',
	description: 'Nimbus - SPA Framework',
	indexHtml: '.docz/index_template.html'
};
