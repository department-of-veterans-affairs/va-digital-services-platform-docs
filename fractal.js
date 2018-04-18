const { ncp } = require('ncp');
// const path = require('path');
const pkg = require('./package.json');
const fractal = require('@frctl/fractal').create();
const generatePropDocs = require('./lib/helpers/generatePropDocs');
const createWebpackBundle = require('./createWebpackBundle');

const context = {
  'package': {
    name: pkg.name.replace('@', ''), // fractal interprets @ as component references when its injected into their contexts
    version: pkg.version,
  },
  assetPath: process.env.NODE_ENV === 'production' ? '/va-digital-services-platform-docs/' : '/dist/',
  isProduction: process.env.NODE_ENV === 'production'
};

fractal.set('project.title', 'Veteran-facing Tools Playbook');

const { components, docs, web } = fractal;

components.set('ext', '.njk');
components.set('path', 'src/components');
components.set('default.preview', '@vets');
components.set('default.context', context);
components.set('statuses', {
  prototype: {
    label: 'Prototype',
    description: 'Do not implement.',
    color: '#FF3333'
  },
  wip: {
    label: 'WIP',
    description: 'Work in progress. Implement with caution.',
    color: '#f9c642'
  },
  ready: {
    label: 'Ready',
    description: 'Ready to implement.',
    color: '#29CC29'
  },
  deprecated: {
    label: 'Deprecated',
    description: 'We\'re removing this component from Vets.gov.',
    color: '#323a45'
  }
});

const vetsAdapter = require('./lib/vets-adapter')({
  filters: {
    jsonify: d => JSON.stringify(d, null, '  '),
  },
  paths: [
    'src/components',
  ]
});

fractal.components.engine(vetsAdapter);

docs.set('path', 'content');

const theme = require('@frctl/mandelbrot')({
  lang: 'en-US',
  skin: 'navy',
  // reorder navigation
  nav: ['docs', 'components'],
  // display context data in YAML
  format: 'yaml',
  // which panels to show
  panels: [
    'notes',
    'props',
    'html',
    'view',
    'context',
    'resources',
    'info'
  ],
  styles: [
    'default',
    '/fractal-styles.css'
  ],
});

theme.addLoadPath(`${__dirname}/theme-overrides`);
theme.addStatic(`${__dirname}/dist`);

theme.on('init', (env) => {
  env.engine.addFilter('generateProps', generatePropDocs);
});

fractal.cli.command('watch', () => {
  const logger = fractal.cli.console;
  const server = fractal.web.server({
    sync: true,
    port: 3002
  });
  server.on('error', err => logger.error(err.message));

  ncp('./src/img', './dist/img', (err) => {
    if (err) {
      logger.error(`Failed to copy images: ${err}`);
    }

  });

  return server.start().then(() => {
    logger.success(`Fractal server is now running at ${server.url}`);
    createWebpackBundle(logger, fractal.components);
  });
});

fractal.cli.command('build-site', (args, done) => {
  const logger = fractal.cli.console;
  const builder = fractal.web.builder();

  builder.on('progress', (completed, total) =>
    logger.update(`Exported ${completed} of ${total} items`, 'info'));

  builder.on('error', err =>
    logger.error(err.message));

  return builder.build().then(() => {
    logger.success('Fractal build completed!');
    logger.update('Building React components');
    createWebpackBundle(logger, fractal.components, false);

    ncp('./src/img', './dist/img', (err) => {
      if (err) {
        logger.error(`Failed to copy images: ${err}`);
        throw new Error(err);
      }

      done();
    });
  });
});

web.theme(theme);
// web.set('static.path', path.join(__dirname, '/dist'));
web.set('static.path', __dirname, +'/dist');
// output files to /build
web.set('builder.dest', 'build');

module.exports = fractal;
