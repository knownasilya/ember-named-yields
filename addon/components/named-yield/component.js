import Ember from 'ember';
import layout from './template';
import PortalFor from 'ember-portal/components/portal-for';

const Component = PortalFor.extend({
  layout: layout,
  classNames: ['named-yield'],

  didReceiveAttrs() {
    var id = this.get('prettyId');
    var parent = this.get('parent') || this.parentView;

    this.set('name', `${id}-${parent.elementId}`);
  }
});

Component.reopenClass({
  positionalParams: ['prettyId', 'parent']
});

export default Component;
