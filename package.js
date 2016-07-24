Package.describe({
  name: 'laosb:pureadmin-mongo',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'View and Edit Data from MongoDB in Pure Admin',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/zodern/puareadmin-mongo.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.0.2');
  api.use('zodern:pure-admin@0.2.0');
  api.use(['ecmascript', 'check']);
  api.use('dburles:mongo-collection-instances@0.3.4');
  var serverFiles = [
    'lib.js',
    'detectCollections.js',
    'publish.js',
    'pureadmin-mongo.js',
    'save.js'
  ];
  var assets = [
    'client/menu_and_routing.js',
    'client/views/body_layout.html',
    'client/views/body_header.html',
    'client/views/views.js',
    'client/views/document.html',
    'client/views/editor.html',
    'style.css'
  ];

  api.addFiles(serverFiles, 'server');
  if(api.addAssets) {
    api.addAssets(assets, 'client');
  } else {
    api.addFiles(assets, 'client', {isAsset: true});
  }
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('zodern:pureadmin-mongo');
  api.addFiles('pureadmin-mongo-tests.js');
});
