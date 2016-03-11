# ember-named-yields

A stop-gap for the [named yields RFC] and based off the experimentation [here].

## Install

```no-highlight
ember install ember-named-yields
```

## Usage

Setup the named yields in your component template:

```hbs
{{named-yield this 'header'}}

{{yield (hash
  header=(component 'block-for' this 'header')
  footer=(component 'block-for' this 'footer')
)}}

{{named-yield this 'footer'}}
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


[named yields RFC]: https://github.com/emberjs/rfcs/pull/72
[here]: https://github.com/knownasilya/ember-yielded-portals