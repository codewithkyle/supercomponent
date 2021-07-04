# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2021-07-04

### Added

- `debounce: (callback: Function, wait: number) => void` function
- `update()` and `trigger()` are now debounced by 80ms ([#1](https://github.com/codewithkyle/supercomponent/issues/1))
- `this.data` alias for `this.model`

### Fixed

- `Model` type override wouldn't apply to the `update()` methods `Parital<Model>` type ([#2](https://github.com/codewithkyle/supercomponent/issues/2))

## [1.0.0] - 2021-03-03

### Added

- initial `SuperComponent` class
    - finite state machine
    - state machine management method `trigger()`
    - data model management method `update()`
    - `connectedCallback` alias method `connected()`
    - `disconnectedCallback` alias method `disconnected()`
    - render method `render()`
- changelog
- basic readme documentation

[Unreleased]: https://github.com/codewithkyle/pubsub/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/codewithkyle/pubsub/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/codewithkyle/pubsub/releases/tag/v1.0.0