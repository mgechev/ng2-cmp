# ng2-cmp

Exports a `@Component` decorator that allows you to consume templates and styles by using their relative URLs:


```ts
import {Component} from 'ng2-cmp';

@Component({
  templateUrl: 'foo.html',
  styleUrls: ['bar.css']
})
class Baz {}
```
The snippet above is equivalent to:

```ts
import {Component} from 'ng2-cmp';

@Component({
  moduleId: typeof __moduleName === 'undefined' ? module.id : __moduleName,
  templateUrl: 'foo.html',
  styleUrls: ['bar.css']
})
class Baz {}
```

# License

MIT

