# ember-named-yields

A stop-gap for the [named yields RFC] and based off the experimentation [here].

![Ember Version][ember-version]
[![NPM][npm-badge-img]][npm-badge-link]
[![Build Status][travis-badge]][travis-badge-url]
[![Ember Observer Score][ember-observer-badge]][ember-observer-url]

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
[npm-badge-img]: https://badge.fury.io/js/ember-named-yields.svg
[npm-badge-link]: http://badge.fury.io/js/ember-named-yields
[travis-badge]: https://travis-ci.org/knownasilya/ember-named-yields.svg
[travis-badge-url]: https://travis-ci.org/knownasilya/ember-named-yields
[ember-observer-badge]: http://emberobserver.com/badges/ember-named-yields.svg
[ember-observer-url]: http://emberobserver.com/addons/ember-named-yields
[ember-version]: https://embadge.io/v1/badge.svg?start=2.3.0
