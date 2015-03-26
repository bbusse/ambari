/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var App = require('app');

App.Widget = DS.Model.extend({
  widgetName: DS.attr('string'),

  /**
   * types:
   *  - GAUGE (shown as a percentage dial)
   *  - HEATMAP
   *  - GRAPH (Line graph and stack graph)
   *  - NUMBER (e.g., “1 ms” for RPC latency)
   *  - x / y (e.g., “2 / 3” DataNodes live)
   *  - LINKS
   *  - TEMPLATE
   */
  widgetType: DS.attr('string'),
  displayName: DS.attr('string'),
  serviceName: DS.attr('string'),
  componentName: DS.attr('string'),
  timeCreated: DS.attr('number'),
  sectionName: DS.attr('string'),
  author: DS.attr('string'),
  properties: DS.attr('object'),
  expression: DS.attr('array'),
  metrics: DS.attr('array'),
  values: DS.attr('array'),

  /**
   * @type {number}
   * @default 0
   */
  defaultOrder: 0, // This field is not derived from API but needs to be filled in the mapper on the client side

  /**
   * @type Em.View
   * @class
   */
  viewClass: function () {
    switch (this.get('widgetType')) {
      case 'GRAPH':
        return App.GraphWidgetView;
      default:
        return Em.View;
    }
  }.property('widgetType')
});


App.Widget.FIXTURES = [];
