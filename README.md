# Design Pattern Practice

Focused TypeScript examples for the assigned creational and structural pattern exercises.

## Run

Install dependencies with `npm install`, then run:

```bash
npm run typecheck
npm run demo:all
```

Individual demos:

| Pattern | Command |
| --- | --- |
| Factory (abstract factory) | `npm run demo:factory` |
| Builder: website | `npm run demo:builder` |
| Builder: HTTP client | `npm run demo:builder-http` |
| Prototype: document | `npm run demo:prototype:doc` |
| Prototype: game character | `npm run demo:prototype:game` |
| Singleton | `npm run demo:singleton` |
| Adapter: SMS, Telegram, Email | `npm run demo:adapter:email` |
| Bridge: game and developer combinations | `npm run demo:bridge:game` |
| Composite: computer file system | `npm run demo:composite` |

The HTTP builder demo makes a request to an external service. It is intentionally
not part of `demo:all`, so the local pattern demonstrations do not depend on network access.

## What is demonstrated

- **Factory:** concrete payment factories create matching payment and refund processors.
- **Builder:** a director assembles websites; a fluent builder configures an HTTP client.
- **Prototype:** each clone is a new object; document tag arrays are copied independently.
- **Singleton:** repeated `DatabaseHelper.getInstance()` calls return the same instance.
- **Adapter:** `NotificationManager` depends only on `NotificationService`; adapters translate
  the Telegram and Email client APIs.
- **Bridge:** racing and football games work with either Java or C++ developers.
- **Composite:** files and nested folders share `FileSystem`, so the computer tree is printed
  with one `show()` call.

## Prototype concepts

The Prototype pattern creates objects by cloning a configured existing object. A shallow copy
reuses references to nested mutable values, while a deep copy creates independent nested values.
`DocumentFactory` stores a document prototype and returns a fresh deep-enough clone, including
an independent `tags` array.

## License

MIT
