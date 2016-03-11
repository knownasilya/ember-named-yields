# ember-named-yields

A stop-gap for the [named yields RFC] and based off the experimentation [here].

## Install

```no-highlight
ember install ember-named-yields
```

## Usage

Import and use the mixin in your component:

```js
import Ember from 'ember';
import NamedYieldMixin from 'ember-named-yields/mixins/named-yield';

export default Ember.Component.extend(NamedYieldMixin, {
  // your component code..
});
```

Setup the named yields in your component template:

```hbs
{{named-yield 'header'}}

{{yield (hash
  header=(component 'yield-for' 'header')
  footer=(component 'yield-for' 'footer')
)}}

{{named-yield 'footer'}}
```

The `{{yield}}` is the body yield in this example.

## Consume

Now to use this component:

```hbs
{{#custom-card as |yields|}}
  Body content anywhere
  {{#yields.header}}
    Header content here
  {{/yields.header}}

  {{#yields.footer}}
    Footer content here
  {{/yields.footer}}
{{/custom-card}}
```


[named yields RFC]: https://github.com/emberjs/rfcs/pull/72
[here]: https://github.com/knownasilya/ember-yielded-portals