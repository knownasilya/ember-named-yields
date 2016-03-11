# ember-named-yields

A stop-gap for the [named yields RFC] and based off the experimentation [here].

[![NPM][npm-badge-img]][npm-badge-link]
[![Build Status][travis-badge]][travis-badge-url]
[![Ember Observer Score][ember-observer-badge]][ember-observer-url]
![Ember Version][ember-version]

## Install

```no-highlight
ember install ember-named-yields
```

## Usage

Setup the named yields in your component template:

```hbs
{{named-yield 'header'}}

{{yield (hash
  header=(component 'block-for' 'header')
  footer=(component 'block-for' 'footer')
)}}

{{named-yield 'footer'}}
```

The `{{yield}}` is the body yield in this example.

## Consume

Now to use this component:

```hbs
{{#custom-card as |yields|}}
  Body content anywhere in the main block

  {{#yields.header}}
    Header content here
  {{/yields.header}}

  {{#yields.footer}}
    Footer content here
  {{/yields.footer}}
{{/custom-card}}
```

## Contribute

See the [CONTRIBUTING.md].

[named yields RFC]: https://github.com/emberjs/rfcs/pull/72
[here]: https://github.com/knownasilya/ember-yielded-portals
[CONTRIBUTING.md]: CONTRIBUTING.md
[npm-badge-img]: https://badge.fury.io/js/ember-yielded-portals.svg
[npm-badge-link]: http://badge.fury.io/js/ember-yielded-portals
[travis-badge]: https://travis-ci.org/knownasilya/ember-yielded-portals.svg
[travis-badge-url]: https://travis-ci.org/knownasilya/ember-yielded-portals
[ember-observer-badge]: http://emberobserver.com/badges/ember-yielded-portals.svg
[ember-observer-url]: http://emberobserver.com/addons/ember-yielded-portals
[ember-version]: https://embadge.io/v1/badge.svg?start=2.3.0
