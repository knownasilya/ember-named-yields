import Ember from 'ember';
import layout from './template';
import PortalContent from 'ember-portal/components/portal-content';

const { computed } = Ember;

const Component = PortalContent.extend({
  layout: layout,
  tagName: '',
  append: computed.alias('showingPortalItem'),

  didReceiveAttrs() {
    var id = this.get('prettyId');
    var parent = this.get('parent') || this.parentView;

    this.set('for', `${id}-${parent.elementId}`);
  }
});

Component.reopenClass({
  positionalParams: ['prettyId', 'parent']
});

export default Component;
