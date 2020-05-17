# vega-lite workflow

to move a data visualisation from ObserableHQ to react:

add .toJSON() at the end of you visualisation and wrap it in stringify to get a vega-lite object.
remove .data() to reduce the size of the object.
data is added in later.

```javascript
JSON.stringify(vl.markPoint().toJSON());
```

fetch data then load it into the react component

```javascript
<VegaLite
  spec={spec}
  data={{
    table: cars,
  }}
/>
```

add the following to spec

```javascript
data: { name: "table" },
```
