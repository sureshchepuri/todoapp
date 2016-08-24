'use strict';

angular.module('todoapp.version', [
  'todoapp.version.interpolate-filter',
  'todoapp.version.version-directive'
])

.value('version', '0.1');
