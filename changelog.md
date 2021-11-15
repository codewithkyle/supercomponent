# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### [1.3.0] - 2021-11-15

### Added

- `set()` will be replacing `update()` ([#5](https://github.com/codewithkyle/supercomponent/issues/5))
- `get()` returns `{...this.model}` ([#5](https://github.com/codewithkyle/supercomponent/issues/5))

### Deprecated

- `update()` method (use `set()` instead) ([#5](https://github.com/codewithkyle/supercomponent/issues/5))

## [1.2.0] - 2021-11-06

### Added

- `this.snapshot()` method creates a snapshot of the current state and model ([#4](https://github.com/codewithkyle/supercomponent/issues/4))
- `skipRender` parameter (default `false`) to the `update()` method ([#3](https://github.com/codewithkyle/supercomponent/issues/3))

### Fixed

- fixed incorrect debounce logic

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

[Unreleased]: https://github.com/codewithkyle/supercomponent/compare/v1.3.0...HEAD
[1.3.0]: https://github.com/codewithkyle/supercomponent/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/codewithkyle/supercomponent/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/codewithkyle/supercomponent/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/codewithkyle/supercomponent/releases/tag/v1.0.0
